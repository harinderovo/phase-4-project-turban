import React, { useState, useContext } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorContext';
import { UserContext } from '../context/UserContext';

function BookingsForm({bookings, setBookings, API}) {

    const history = useHistory();
    const [formErrors, setFormErrors] = useState({})
    const {user} = useContext(UserContext)
    const {setError} = useContext(ErrorContext)
    // const [formData, setFormData] =useState(() => {
    //     const storedData = localStorage.getItem("formData")
    //     return storedData ? JSON.parse(storedData) : {};
    // });

    const [newForm, setNewForm] = useState({
        firstname: "",
        lastname: "",
        price: "",
        time: "",
        location: "",
        user_id: 1,
        event_id: 1
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newF = {...newForm, event_id: newForm.event_id*1}
        fetch("/bookings/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newF)
        })
        .then(res => res.json())
        .then(newFormData => setBookings([...bookings, newFormData]))
        history.push("/");
    }

    // const checkUserLoggedIn = () => {
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const isLoggedIn = checkUserLoggedIn()
    //     if (!isLoggedIn) {
    //         // Redirect to log in page 
    //     }

    //     const response = await
    //     fetch("/bookings/new", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     });

    //     if (response.ok) {
    //         localStorage.removeItem("formData");
    //     }
        // .then(res => res.json())
        // .then(newFormData => setBookings([...bookings, newFormData]))
        // history.push("/");
    // }

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => {
    //         const newData = {...prevData, [name]: value};
    //         localStorage.setItem("formData", JSON.stringify(newData));
    //         return newData;
    //     })
    // }

    // const eventList = () => {
    //     const array = [1,2,3,4,5,6,7,8,9,10]
    //     const map = array.map(event => {
    //         return <label onClick={() => {setNewForm(current => {return {...current, event_id: event}})}}>{event}</label>
    //     })
    //     return map
    // }

  return (
    <div className='ui segment'>
        <form onSubmit={handleSubmit} className='ui form'>
            <div className='inline fields'>
                <input value={newForm.firstname} onChange={handleChange} type="text" name="firstname" placeholder="First Name" /> <br />
                <input value={newForm.lastname} onChange={handleChange} type="text" name="lastname" placeholder="Last Name" /> <br />
                <input value={newForm.price} onChange={handleChange} type="number" name="price" placeholder="Price" /> <br />
                <input value={newForm.time} onChange={handleChange} type="number" name="time" placeholder="Time" /> <br />
                <input value={newForm.location} onChange={handleChange} type="text" name="location" placeholder="Location" /> <br />
                <input value={newForm.event} onChange={handleChange} type="text" name="event" placeholder="Event" /> <br />
                {/* {eventList()} */}
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