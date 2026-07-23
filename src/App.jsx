import { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarshipCard from "./components.StarshipCard.jsx";

/* Requirements/Hints: Hold the starship objects in state with the useState hook. Use the useEffect hook. Be sure to update state with the setter function.
.map() over each starship object in state to transform them into a <StarshipCard /> component. 

Requirements: 5. Obtain all of the starships from the API and render a card for each starship within <App>.*/

function App() {

    const [starships, setStarships] = useState([]);

    useEffect (() => {

        async function fetchStarships() {

            try {

                const data = await getAllStarships();
                setStarships(dtat);
                
            } catch (error) {

                console.error(error);
                
            }

        }

        fetchStarships();

    }, []);

    return (

        <div>

            <h1>Star Wars Starships API</h1>
            <div className="card-container">

                {starships.map((starship) => (

                    <StarshipCard key={starships.url} starship={starship} />

                ))}

            </div>

        </div>

    );

}

export default App;