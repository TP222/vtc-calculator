export default function dateTimeInputs() {
  const dateInput = document.getElementById("select-trip__date-input");
  const timeInput = document.getElementById("select-trip__time-input");

  // Default date is today
  const datePlaceholder = document.getElementById("select-trip__date-placeholder");
  const today = new Date();
  const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
  const frenchDate = today.toLocaleDateString("fr-FR", dateOptions);
  datePlaceholder.innerHTML = frenchDate;
  dateInput.value = today.toISOString().split("T")[0];

  // Default time is now
  const timePlaceholder = document.getElementById("select-trip__time-placeholder");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let formattedTime =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes);

  timePlaceholder.innerHTML = formattedTime;
  timeInput.value = formattedTime;

  // Event listeners to update custom placeholders
  dateInput.addEventListener("change", function () {
    const date = new Date(dateInput.value);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const frenchDate = date.toLocaleDateString("fr-FR", options);

    datePlaceholder.innerHTML = frenchDate;
  });

  timeInput.addEventListener("change", function () {
    timePlaceholder.innerHTML = timeInput.value;
  });
}
