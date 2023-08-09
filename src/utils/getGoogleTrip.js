/**
 * Async function to get infos from Google Distance Matrix
 * Takes form event object as param
 * @param {FormDataEvent} e
 * @returns Promise<formInfos>
 */
export default function getGoogleTrip(e) {
  const departureAddressCb = document.getElementById(
    "select-trip__address-departure-cb"
  );
  const arrivalAddressCb = document.getElementById(
    "select-trip__address-arrival-cb"
  );
  const departureInput = departureAddressCb.checked
    ? document.getElementById("select-trip__address-departure-input")
    : document.getElementById("select-trip__departure-input");
  const arrivalInput = arrivalAddressCb.checked
    ? document.getElementById("select-trip__address-arrival-input")
    : document.getElementById("select-trip__arrival-input");
  const distanceService = new google.maps.DistanceMatrixService();

  return new Promise((resolve, reject) => {
    distanceService.getDistanceMatrix(
      {
        origins: [departureInput.value],
        destinations: [arrivalInput.value],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      function (response, status) {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          reject("Erreur reponse distance matrix: " + status);
        } else {
          const origin = response.originAddresses[0];
          const destination = response.destinationAddresses[0];
          const distance = response.rows[0].elements[0].distance.text;
          const distanceNumber = response.rows[0].elements[0].distance.value;
          const duration = response.rows[0].elements[0].duration.text;

          console.log("adresse depart: ", origin);
          console.log("adresse arrivee: ", destination);
          console.log("distance: ", distance);

          const formInfos = {
            origin,
            destination,
            distance,
            distanceNumber,
            duration,
            date: e.target.inputDate.value,
            time: e.target.inputTime.value,
            vehicule: document.getElementById("select-trip__type-berline-input").checked
              ? "berline"
              : "van",
          };

          resolve(formInfos);
          console.log("form infos: ", formInfos);
        }
      }
    );
  });
}
