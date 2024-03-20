// PetDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
 const { id } = useParams();
 const [pet, setPet] = useState(null);
 const [error, setError] = useState(null);

 useEffect(() => {
   fetch('http://localhost:3000/db.json')
     .then(response => response.json())
     .then(data => {
       const selectedPet = data.pets.find(pet => pet.id === parseInt(id));
       if (!selectedPet) {
         setError('Pet not found');
       } else {
         setPet(selectedPet);
       }
     })
     .catch(error => {
       console.error('Error fetching pet details:', error);
       setError('Failed to fetch pet details');
     });
 }, [id]);

 if (error) {
   return <div>{error}</div>;
 }

 if (!pet) {
   return <div>Loading...</div>;
 }

 return (
   <div>
     <h2>{pet.name}</h2>
     <img src={pet.image} alt={pet.name} />
     <p>Breed: {pet.breed}</p>
     <p>Shelter: {pet.shelter}</p>
     <p>Price: ${pet.price}</p>
     <p>Contact: {pet.contact}</p>
   </div>
 );
}

export default PetDetails;
