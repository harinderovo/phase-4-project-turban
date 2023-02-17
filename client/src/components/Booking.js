import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function Booking({API, booking, setBookings, firstname, lastname, phone_number, email, password, image}) {
    const location = useLocation();
    const {id} = useParams();
    const [newBookings, setNewBookings] = useState(booking)
    const [showImage, setShowImage] = useState(true)

    useEffect(() => {
        if (!booking) {
            fetch(`http://localhost:3000/bookings/${id}`)
            .then(res => res.json())
            .then(bookingObj => setNewBookings(bookingObj))
            .catch(err => alert(err))
        }
    }, [booking, id])

    // const = !newBookings ? booking : newBookings

    // if (! {
    //     return <h3>Loading...</h3>
    // }

    const conditionalClass = location.pathname === "/" ? "Booking list" : "Booking individual"
  return (
    <div className={conditionalClass} id={id}>
        <li>
            {location.pathname === "/" ? (<>
                <Link to ={`/bookings/${id}`}></Link>
                <img src = {image} alt = "booking" /> <br />
            </>) : ( <>

            {/* <h4>{booking}</h4> */}
            <img src={image} alt="Turban image" /> <br />
            <span className='card-detail'>FirstName: {firstname} </span> <br />
            <span className='card-detail'>LastName: {lastname} </span> <br />
            <span className='card-detail'>PhoneNumber: {phone_number} </span> <br />
            <span className='card-detail'>Email: {email} </span> <br />
            <span className='card-detail'>Password: {password} </span> <br />
            </>)}
        </li>
    </div>
  )
}

export default Booking;
