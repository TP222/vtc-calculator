/**
 * Function that let checkboxes be the only one clicked plus gives correspondant content to input
 */
export default function checkboxSelectors() {
  // CheckBox inputs
  const departureAirportCb = document.getElementById("select-trip__airport-departure-cb");
  const departureTrainCb = document.getElementById("select-trip__train-departure-cb");
  const departureAddressCb = document.getElementById("select-trip__address-departure-cb");

  const arrivalAirportCb = document.getElementById("select-trip__airport-arrival-cb");
  const arrivalTrainCb = document.getElementById("select-trip__train-arrival-cb");
  const arrivalAddressCb = document.getElementById("select-trip__address-arrival-cb");

  const berlineCb = document.getElementById("select-trip__type-berline-input");
  const vanCb = document.getElementById("select-trip__type-van-input");

  const departInputContainer = document.getElementById(
    "select-trip__input-departure-container"
  );
  const arrivalInputContainer = document.getElementById(
    "select-trip__input-arrival-container"
  );

  // Default boxes checkes
  departureAddressCb.checked = true;
  arrivalAddressCb.checked = true;
  berlineCb.checked = true;

  // Departure unique
  departureAirportCb.addEventListener("change", function () {
    if (this.checked) {
      departureTrainCb.checked = false;
      departureAddressCb.checked = false;
      departInputContainer.innerHTML = `
        <input list="aeroports" name="from" id="select-trip__departure-input"  class="main-input"/>
        <datalist id="aeroports">
          <option value="Aéroport de Nice"></option>
          <option value="Aéroport de Cannes"></option>
          <option value="Aéroport de Hyères"></option>
        </datalist>
      `;
    } else {
      this.checked = true;
    }
  });

  departureTrainCb.addEventListener("change", function () {
    if (this.checked) {
      departureAirportCb.checked = false;
      departureAddressCb.checked = false;
      departInputContainer.innerHTML = `
        <input list="train-stations" name="from" id="select-trip__departure-input"  class="main-input"/>
        <datalist id="train-stations">
          <option value="Gare de Nice"></option>
          <option value="Gare de Cannes"></option>
          <option value="Gare de Saint-Raphaël"></option>
        </datalist>
      `;
    } else {
      this.checked = true;
    }
  });

  departureAddressCb.addEventListener("change", function () {
    if (this.checked) {
      departureAirportCb.checked = false;
      departureTrainCb.checked = false;
      departInputContainer.innerHTML = `
        <input type="text" name="from" id="select-trip__address-departure-input"  class="main-input"/>
      `;
      initAutocomplete();
    } else {
      this.checked = true;
    }
  });

  // Arrival unique
  arrivalAirportCb.addEventListener("change", function () {
    if (this.checked) {
      arrivalTrainCb.checked = false;
      arrivalAddressCb.checked = false;
      arrivalInputContainer.innerHTML = `
        <input list="aeroports" name="from" id="select-trip__arrival-input"  class="main-input"/>
        <datalist id="aeroports">
          <option value="Aéroport de Nice"></option>
          <option value="Aéroport de Cannes"></option>
          <option value="Aéroport de Hyères"></option>
        </datalist>
      `;
    } else {
      this.checked = true;
    }
  });

  arrivalTrainCb.addEventListener("change", function () {
    if (this.checked) {
      arrivalAirportCb.checked = false;
      arrivalAddressCb.checked = false;
      arrivalInputContainer.innerHTML = `
        <input list="train-stations" name="from" id="select-trip__arrival-input"  class="main-input"/>
        <datalist id="train-stations">
          <option value="Gare de Nice"></option>
          <option value="Gare de Cannes"></option>
          <option value="Gare de Saint-Raphaël"></option>
        </datalist>
      `;
    } else {
      this.checked = true;
    }
  });

  arrivalAddressCb.addEventListener("change", function () {
    if (this.checked) {
      arrivalAirportCb.checked = false;
      arrivalTrainCb.checked = false;
      arrivalInputContainer.innerHTML = `
        <input type="text" name="from" id="select-trip__address-arrival-input"  class="main-input"/>
      `;
      initAutocomplete();
    } else {
      this.checked = true;
    }
  });

  //Vehicule unique
  berlineCb.addEventListener("change", function () {
    if (this.checked) {
      vanCb.checked = false;
    } else {
      this.checked = true;
    }
  });
  vanCb.addEventListener("change", function () {
    if (this.checked) {
      berlineCb.checked = false;
    } else {
      this.checked = true;
    }
  });
}
