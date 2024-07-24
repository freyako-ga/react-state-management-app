import "./zombieFighters.css"

const zombieFighters = ({zombies}) => {
    return (
        <div className="zombies">
            <h2>{zombies.name}</h2>
            <img src={zombies.img} />
            <p><span>price: </span>{zombies.price}</p>
            <p><span>strength: </span>{zombies.strength}</p>
            <p><span>agility: </span>{zombies.agility}</p>
        </div>
    )
}

export default zombieFighters