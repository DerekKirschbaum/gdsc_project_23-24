import React, {useState} from 'react';
import { database }  from './firebase';
import {ref, get, push} from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './styles.css';

const auth = getAuth();

const SignIn = () => {

  return (
    <div className='SignIn'>
      <h3><b>Sign In</b></h3>
      <p>Please enter your email and password.</p>

      <form className='AddListingForm'>
          <input type="text" name="name" placeholder="Email"/>
          <input type="text" name="password" placeholder="Password"/>
          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignIn;