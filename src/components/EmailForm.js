// EmailForm.js
import React, { useState } from 'react';

const EmailForm = () => {
 const [email, setEmail] = useState('');
 const [error, setError] = useState(null);

 const handleSubmit = (e) => {
   e.preventDefault();
   if (!email) {
     setError('Please enter your email');
     return;
   }
   // Add logic to handle form submission (e.g., send email to server)
   console.log('Email submitted:', email);
   setEmail('');
 }

 return (
   <div>
     <h2>Subscribe to Pet Alerts</h2>
     <form onSubmit={handleSubmit}>
       <input
         type="email"
         placeholder="Enter your email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
       />
       <button type="submit">Subscribe</button>
     </form>
     {error && <p>{error}</p>}
   </div>
 );
}

export default EmailForm;
