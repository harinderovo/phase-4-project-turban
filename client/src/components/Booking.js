import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function Booking({API, setBookings, booking}) {
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

    const finalBooking = !newBookings ? booking : newBookings

    if (!finalBooking) {
        return <h3>Loading...</h3>
    }

    const conditionalClass = location.pathname === "/" ? "Booking list" : "Booking individual"
  return (
    <div className={conditionalClass} id={finalBooking.id}>
        <li>
            {location.pathname === "/" ? (<>
                <Link to ={`/bookings/${finalBooking,id}`}><h4>{finalBooking.booking}</h4></Link>
                <img src = {finalBooking.image} alt = {finalBooking.booking} /> <br />
            </>) : ( <>

            <h4>{finalBooking.booking}</h4>
            <img src={finalBooking.image} alt={finalBooking.booking} /> <br />
            <span className='card-detail'>FirstName: {finalBooking.firstName} </span> <br />
            <span className='card-detail'>LastName: {finalBooking.lastName} </span> <br />
            <span className='card-detail'>PhoneNumber: {finalBooking.phoneNumber} </span> <br />
            <span className='card-detail'>Email: {finalBooking.email} </span> <br />
            <span className='card-detail'>Password: {finalBooking.password} </span> <br />
            </>)}
        </li>
    </div>
  )
}

export default Booking;
