import dateTimeInputs from "./layout/dateTimeInputs";
import tabs from "./layout/tabs";
import checkboxSelectors from "./layout/checkboxSelectors";
import getGoogleTrip from "./utils/getGoogleTrip";
import calculatePrice from "./utils/calculatePrice";
import switchToSummary from "./layout/switchToSummary";

tabs();
checkboxSelectors();
dateTimeInputs();

let formInfos;

// Add a listener on trip selector form submit and call Google Distance Matrix
const transferForm = document.getElementById("select-trip__transfer-form");
transferForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    formInfos = await getGoogleTrip(e);
    console.log(formInfos);
  } catch (e) {
    console.log("Error getting Google Distance Matrix infos: ", e);
  }

  if (formInfos) {
    switchToSummary();

    // Set formInfo values to divs
    const fromDiv = document.getElementById("summary__trip__from");
    const toDiv = document.getElementById("summary__trip__to");
    const durationDiv = document.getElementById(
      "summary__estimated-time__value"
    );
    const vehiculePictureDiv = document.getElementById(
      "summary__vehicule-picture"
    );
    const priceDiv = document.getElementById("summary__price");

    fromDiv.innerHTML = formInfos.origin;
    toDiv.innerHTML = formInfos.destination;
    durationDiv.innerHTML = formInfos.duration;
    vehiculePictureDiv.innerHTML =
      formInfos.vehicule === "berline" ? "Berline picture" : "Van picture";
    priceDiv.innerHTML = calculatePrice(
      formInfos.distanceNumber,
      formInfos.time,
      formInfos.vehicule
    );
  }
});

// Add listener on whatsapp message form submit et send whatsapp message
const whatsappForm = document.getElementById("summary__form");
whatsappForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = e.target.phone.value;
  const name = e.target.name.value;
  const price = calculatePrice(
    formInfos.distanceNumber,
    formInfos.time,
    formInfos.vehicule
  );
  const whatsappMessage = `
    [NOUVEAU MESSAGE CLIENT]

    TRAJET
    Départ: ${formInfos.origin}
    Arrivée: ${formInfos.destination} 
    Véhicule: ${formInfos.vehicule}
    Date: ${formInfos.date}
    Heure: ${formInfos.time}
    Prix: ${price}

    COORDONNEES CLIENT
    Nom et prénom: ${name}
    Téléphone: ${phone}
  `;

  // SEND TO API
  console.log(whatsappMessage);
});
