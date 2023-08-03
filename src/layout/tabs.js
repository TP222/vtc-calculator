export default function tabs() {
  const transferTab = document.getElementById("select-trip__transfer-tab");
  const transferContent = document.getElementById("select-trip__transfer-form");
  const hourlyTab = document.getElementById("select-trip__hourly-tab");
  const hourlyContent = document.getElementById("select-trip__hourly-form");
  transferTab.addEventListener("click", function () {
    this.classList.add("active");
    hourlyTab.classList.remove("active");

    transferContent.classList.add("active");
    hourlyContent.classList.remove("active");
  });
  hourlyTab.addEventListener("click", function () {
    this.classList.add("active");
    transferTab.classList.remove("active");

    transferContent.classList.remove("active");
    hourlyContent.classList.add("active");
  });
}
