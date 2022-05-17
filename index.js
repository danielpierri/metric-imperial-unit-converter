const body = document.body
const resultSection = document.getElementById("result-section")
const toggleThemeBtn = document.getElementById("toggle-theme-btn")
const inputEl = document.getElementById("input-el")

toggleThemeBtn.innerHTML = `<img class="moon" src="img/moon-empty.png"/>`

/* Toggle Theme */

let darkTheme = false

function toggleTheme() {
  if (darkTheme === false) {
    body.classList.add("dark-theme")
    resultSection.classList.add("dark-theme__text")
    toggleThemeBtn.classList.add("btn--dark")
    toggleThemeBtn.style.color = "#1F2937"
    toggleThemeBtn.innerHTML = `<img class="moon--dark" src="img/moon-filled.png"/>`
    darkTheme = true
  } else if (darkTheme === true) {
    body.classList.remove("dark-theme")
    resultSection.classList.remove("dark-theme__text")
    toggleThemeBtn.classList.remove("btn--dark")
    toggleThemeBtn.style.color = "white"
    toggleThemeBtn.innerHTML = `<img class="moon" src="img/moon-empty.png"/>`
    darkTheme = false
  }
}

toggleThemeBtn.addEventListener("click", () => {
  toggleTheme()
})

/* Metric/Imperial Conversion */

function metersToFeet(number) {
  const metersInFeet = number * 3.2808
  return document.getElementById("meters-to-feet").textContent = `${number} ${number > 1 ? "meters" : "meter"} = ${metersInFeet.toFixed(3)} ${metersInFeet > 1 ? "feet" : "foot"}`
}

function feetToMeters(number) {
  const feetInMeters = number * 0.3048
  return document.getElementById("feet-to-meters").textContent = `${number} ${number > 1 ? "feet" : "foot"} = ${feetInMeters.toFixed(3)} ${feetInMeters > 1 ? "meters" : "meter"}`
}

function litersToGallons(number) {
  const litersInGallons = number * 0.2642
  return document.getElementById("liters-to-gallons").textContent = `${number} ${number > 1 ? "liters" : "liter"} = ${litersInGallons.toFixed(3)} ${litersInGallons > 1 ? "gallons" : "gallon"}`
}

function gallonsToLiters(number) {
  const gallonsInLiters = number * 3.7854
  return document.getElementById("gallons-to-liters").textContent = `${number} ${number > 1 ? "gallons" : "gallon"} = ${gallonsInLiters.toFixed(3)} ${gallonsInLiters > 1 ? "liters" : "liter"}`
}

function kilosToPounds(number) {
  const kilosInPounds = number * 2.2046
  return document.getElementById("kilos-to-pounds").textContent = `${number} ${number > 1 ? "kilos" : "kilo"} = ${kilosInPounds.toFixed(3)} ${kilosInPounds > 1 ? "pounds" : "pound"}`
}

function poundsToKilos(number) {
  const poundsToKilos = number * 0.4536
  return document.getElementById("pounds-to-kilos").textContent = `${number} ${number > 1 ? "pounds" : "pound"} = ${poundsToKilos.toFixed(3)} ${poundsToKilos > 1 ? "kilos" : "kilo"}`
}

inputEl.addEventListener("keyup", (event) => {
  const { value } = event.target
  metersToFeet(value)
  feetToMeters(value)
  litersToGallons(value)
  gallonsToLiters(value)
  kilosToPounds(value)
  poundsToKilos(value)
})
