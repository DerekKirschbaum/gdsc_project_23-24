import React, {useState} from 'react';
import { database }  from './firebase';
import {ref, get, push} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './styles.css';

const AddListing = () =>{

    return (
        <div className='AddListing'>
            <h3>Add Listing Page</h3>
            <p>This is where users can add a home listing to the database</p>

            <form className='AddListingForm'>
                <input type="text" name="name" placeholder="College"/>
                <input type="email" name="email" placeholder="Location"/>
                <input type="text" name="name" placeholder="Maximum Cost"/>
                <input type="text" name="name" placeholder="# Beds"/>
                <input type="text" name="name" placeholder="# Baths"/>
                {/* Add more form fields as needed */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//     AddListing();
//   } else {
//     // User is signed out
//     // ...
//     alert('You must sign in to access this utility.');
//     return (
//         <SignIn />
//     );
//   }
// });

export default AddListing;
