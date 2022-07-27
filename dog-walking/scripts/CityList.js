import { getCities, getWalkers } from "./database.js"

const cities = getCities()
const walkers = getWalkers()

export const CityList = () => {

    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

