/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    walkers: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
//        city: "Chicago"
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
//        city: "White Plains"
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
//        city: "Sarasota"
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
//        city: "San Diego"
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
//        city: "Boise"
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
//        city: "Denver"
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
//        city: "Tucson"
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
//        city: "Phoenix"
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
//        city: "Minneapolis"
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
//        city: "Pittsburgh"
    }],
    pets: [{
        id: 1,
        name: "Dianemarie Hartness",
        walkerId: 3
    }, {
        id: 2,
        name: "Christoph Fosdyke",
        walkerId: 10
    }, {
        id: 3,
        name: "Rocket",
        walkerId: 7
    }, {
        id: 4,
        name: "Ebony",
        walkerId: 3
    }, {
        id: 5,
        name: "Scotty",
        walkerId: 8
    }, {
        id: 6,
        name: "Mac",
        walkerId: 2
    }, {
        id: 7,
        name: "Oreo",
        walkerId: 5
    }, {
        id: 8,
        name: "Sassy",
        walkerId: 1
    }, {
        id: 9,
        name: "Salem",
        walkerId: 9
    }, {
        id: 10,
        name: "Panda",
        walkerId: 7
    }],
    walkerCities: [
        { id: 1, walkerId: 10, cityId: 1 },
        { id: 2, walkerId: 8, cityId: 6 },
        { id: 3, walkerId: 5, cityId: 4 },
        { id: 4, walkerId: 9, cityId: 10 },
        { id: 5, walkerId: 2, cityId: 3 },
        { id: 6, walkerId: 4, cityId: 7 },
        { id: 7, walkerId: 1, cityId: 5 },
        { id: 8, walkerId: 7, cityId: 9 },
        { id: 9, walkerId: 3, cityId: 2 },
        { id: 10, walkerId: 6, cityId: 8 },
        { id: 11, walkerId: 6, cityId: 9 },
        { id: 12, walkerId: 9, cityId: 7 },
        { id: 13, walkerId: 5, cityId: 7 },
        { id: 14, walkerId: 10, cityId: 2 },
    ],
    cities: [
        { id: 1, name: "Pittsburgh"},
        { id: 2, name: "Minneapolis"},
        { id: 3, name: "Phoenix"},
        { id: 4, name: "Tucson"},
        { id: 5, name: "Denver"},
        { id: 6, name: "Boise"},
        { id: 7, name: "San Diego"},
        { id: 8, name: "Sarasota"},
        { id: 9, name: "White Plains"},
        { id: 10, name: "Chicago"}
    ],
}

export const getWalkers = () => {
    return database.walkers.map(walker => ({...walker}))
}

export const getPets = () => {
    return database.pets.map(pet => ({...pet}))
}

export const getCities = () => {
    return database.cities.map(city => ({...city}))
}

export const getWalkerCities = () => {
    return database.walkerCities.map(assignment =>({...assignment}))
}
