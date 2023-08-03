export default function calculateDistance() {
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
        console.log("Erreur reponse distance matrix: ", status);
      } else {
        origins = response.originAddresses;
        destinations = response.destinationAddresses;
        distance = response.rows[0].elements[0].distance.text;
      }
    }
  );

  return distance;
}
