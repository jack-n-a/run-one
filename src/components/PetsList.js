// PetsList.js
import React, { useState, useEffect } from 'react';

const PetsList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then(response => response.json())
      .then(data => setPets(data.pets))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div>
      <h2>All Pets</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>
            <img src={pet.image} alt={pet.name} />
            <p>{pet.name}</p>
            <p>{pet.breed}</p>
            <p>${pet.price}</p>
            {/* Add more pet details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetsList;
