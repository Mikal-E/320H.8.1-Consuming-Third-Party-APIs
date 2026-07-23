/* Requirements: 2. Research the documentation of SWAPI to find the endpoint for the starships resource: From the documentation - Base URL  The Base URL is the root URL for all of the API,
if you ever make a request to swapi and you get back a 404 NOT FOUND response then check the Base URL first. The Base URL for swapi is: https://swapi.dev/api/
The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.

Requirements: 3. Create a services/sw-api.js service module and ensure that all API/fetch calls are made from this module. */

const BASE_URL = "https://swapi.dev/api/";

/* Requirements: 4. Use named exports to expose AJAX functionality as needed, e.g. export function getAllStarships() {...} to obtain all starships. */

export async function getAllStarships() {

    // const response = await fetch("${BASE_URL}starships/");

    let starships = [];
    let nextUrl = "${BASE_URL}starships/";

    while (nextUrl) {

        const response = await fetch(nextUrl);

        if (!response.ok) {

            throw new Error("Failed to fetch starships: ${response.status}");

        }

        const data = await response.json();
        starships = starships.concat(data.results);
        nextUrl = data.next;

    }

    return starships;

}