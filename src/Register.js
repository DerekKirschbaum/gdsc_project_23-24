import React, {useState} from 'react';
import { database }  from './firebase';
import {ref, get, push} from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import './styles.css';


const Register = () => {

  const [formData, setFormData] = useState({});

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
        alert('Please fill in all fields.');
        console.error('Name or email is missing.');
        return;
    }

    const nameRef = ref(database, 'submissions/' + formData.name);
    const snapshot = await get(nameRef);

    if (snapshot.exists()) {
        const emailsRef = ref(database, 'submissions/' + formData.name + '/emails');
        const emailSnapshot = await get(emailsRef);

        if (emailSnapshot.exists()) {
            // Check if the entered email already exists under this name
            const emailExists = Object.values(emailSnapshot.val()).some(item => item.email === formData.email);

            if (!emailExists) {
                push(emailsRef, {
                    email: formData.email
                }).then(() => {
                    console.log('New email added for existing name.');
                }).catch((error) => {
                    console.error('Error adding email:', error);
                });
            } else {
                console.log('Email already exists under this name.');
            }
        }
    } else {
        const dataRef = ref(database, 'submissions/' + formData.name + '/emails');
        push(dataRef, {
            email: formData.email
        }).then(() => {
            console.log('New name and email added.');
        }).catch((error) => {
            console.error('Error adding data:', error);
        });
    }

    setFormData({}); // Clear form after submission
    document.getElementsByName('name')[0].value = ''; // Clear name input field
    document.getElementsByName('email')[0].value = ''; // Clear email input field
}

  return (
    <div className='Register'>
        <h3><b>Register</b></h3>
        <p>Please fill in your information.</p>
    
        <form onSubmit={handleSubmit} className='AddListingForm'>
        <input type="email" id="email" name="email" onChange={handleChange} placeholder='Email'/>
        <input type="text" id="password" name="password" onChange={handleChange} placeholder='Password'/>
        <input type="text" id="school" name="school" onChange={handleChange} placeholder='School'/>
        <input type="text" id="name" name="name" onChange={handleChange} placeholder='Full Name'/>
        <button type="Submit">Submit</button>
        </form>
    </div>
  )
}

const createUser = () => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth)
  .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  export default Register;