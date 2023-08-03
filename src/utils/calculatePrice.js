/**
 * Calculates the price according to distance, hour and vehicule chosen
 * @param {number} distance Distance in meters
 * @param {string} time Time like "13:45"
 * @param {"berline" | "van"} vehicule Vehicule type chosen
 * @returns Price string eg "149,99€"
 */
export default function calculatePrice(distance, time, vehicule) {
  const hours = parseInt(time.substring(0, 2));
  const nightShift = hours < 7 || 21 <= hours;

  const shortDistance = distance <= 10_000;
  const mediumDistance = 10_000 < distance && distance < 40_000;
  const longDistance = 40_000 <= distance;
  const distanceInKm = distance / 1000;

  let price;

  if (shortDistance) {
    price = nightShift ? 40 : 30;
  }

  if (vehicule === "berline") {
    if (mediumDistance) {
      price = distanceInKm * (nightShift ? 4.5 : 3);
    }
    if (longDistance) {
      price = distanceInKm * (nightShift ? 3.75 : 2.5);
    }
  }

  if (vehicule === "van") {
    if (mediumDistance) {
      price = distanceInKm * (nightShift ? 6 : 4);
    }
    if (longDistance) {
      price = distanceInKm * (nightShift ? 5.25 : 3.5);
    }
  }

  return `${price.toFixed(2)}€`;
}
