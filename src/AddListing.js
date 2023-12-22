import React, {useState} from 'react';
import { database }  from './firebase';
import {ref, get, push} from 'firebase/database';
import './styles.css';

const AddListing = () =>{

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
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
    };
    
    
    

    return (
        <div className='AddListing'>
            <h3>Add Listing Page</h3>
            <p>This is where users can add a home listing to the database</p>

            <form onSubmit={handleSubmit} className='AddListingForm'>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                {/* Add more form fields as needed */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AddListing;
