import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorContext';

function BookingsForm({bookings, setBookings, API}) {

    const history = useHistory();
    const [formErrors, setFormErrors] = useState({})
    const {setError} = useContext(ErrorContext)

    const [newForm, setNewForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: ""
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/bookings/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newForm)
        })
        .then(res => res.json())
        .then(newFormData => setBookings([...bookings, newFormData]))
        history.push("/");
    }

  return (
    <div className='ui segment'>
        <form onSubmit={handleSubmit} className='ui form'>
            <div className='inline fields'>
                <input value={newForm.firstname} onChange={handleChange} type="text" name="firstname" placeholder="First Name" /> <br />
                <input value={newForm.lastname} onChange={handleChange} type="text" name="lastname" placeholder="Last Name" /> <br />
                <input value={newForm.phonenumber} onChange={handleChange} type="number" name="phonenumber" placeholder="Phone Number" /> <br />
                <input value={newForm.email} onChange={handleChange} type="text" name="email" placeholder="Email" /> <br />
                <input value={newForm.password} onChange={handleChange} type="text" name="password" placeholder="Password" /> <br />
                <input type="submit" value="Add Booking"/> <br />
                {/* <form>
                <label for="phone">Enter your phone number:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </form> */}
            </div>
        </form>
    </div>
  )
}

export default BookingsForm;