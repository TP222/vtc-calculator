// Switch to summary layout
export default function switchToSummary() {
  const selectTripDiv = document.getElementById("select-trip");
  const summaryDiv = document.getElementById("summary");

  selectTripDiv.classList.remove("active");
  summaryDiv.classList.add("active");
}
