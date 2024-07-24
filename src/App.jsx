import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx

const App = () => {


  const [zombieFighters, setzombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0)

  const calculateTotalStrength = (team) => {
    return team.reduce((total, member) => total + member.strength, 0);
  };




  const handleAddFighter = (zombie) => {
    if (money >= zombie.price) {
      setTeam((prevTeam) => [...prevTeam, zombie]);
      setMoney((prevMoney) => prevMoney - zombie.price);
      // checks if there is enough money, if it does it adds team then deducts. 
      setTotalStrength(calculateTotalStrength(newTeam));
    } else {
      console.log('Not enough money');
    }
  };

// Recalculates totalStrength whenever the team state changes to ensure strength is always up to date.
  useEffect(() => {
    setTotalStrength(calculateTotalStrength(team));
  }, [team]);





  return (
    <div>
      <h1>Zombie Fighters</h1>
      <p>Available Money: ${money}</p>
      <ul className="zombie-list">
        {zombieFighters.map((zombie) => (
          <li key={zombie.name} className="zombie-item">
            <img src={zombie.img} alt={zombie.name} className="zombie-image" />
            <h2 className="zombie-name">{zombie.name}</h2>
            <p className="zombie-price">Price: ${zombie.price}</p>
            <p className="zombie-strength">Strength: {zombie.strength}</p>
            <p className="zombie-agility">Agility: {zombie.agility}</p>
            <button className="add-button" onClick={() => handleAddFighter(zombie)} > Add to Team
            </button>
          </li>
        ))}
      </ul>



  // team display here
      // If the team array is empty, a message "Pick some team members!" is displayed.
      // If the team array has members, each member’s details are displayed similarly to the list of all characters.
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul className="team-list">
          {team.map((member, index) => (
            <li key={index} className="team-member">
              <img src={member.img} alt={member.name} className="zombie-image" />
              <h2 className="zombie-name">{member.name}</h2>
              <p className="zombie-price">Price: ${member.price}</p>
              <p className="zombie-strength">Strength: {member.strength}</p>
              <p className="zombie-agility">Agility: {member.agility}</p>
              </li>
            ))}
          </ul>
          <p>Total Team Strength: {totalStrength}</p>
        </div>
      )}
    </div>
  );
};


export default App;
