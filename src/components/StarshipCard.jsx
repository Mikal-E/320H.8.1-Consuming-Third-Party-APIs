/* Requirements/Hints: Create a StarShipCard component (that App.jsx will import).

Requirements: 6. Cards should contain the text of the starship's name. */

function StarshipCard({ starship }) {

    return (

        <div className="starship-card">

            <p>{starship.name}</p>

        </div>

    )

}

export default StarshipCard;