import React, {useState} from 'react';
import { database }  from './firebase';
import {ref, get, push} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './styles.css';

const auth = getAuth();

const SignIn = () => {

  return (
    <div className='SignIn'>
      <p>Please enter your username and password.</p>

      <form className='AddListingForm'>
          <input type="text" name="name" placeholder="Name"/>
          <input type="email" name="email" placeholder="Email"/>
          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignIn;