import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function Booking({API, booking, setBookings, firstname, lastname, phone_number, email, password, image, bookingId, user, setUser}) {
    const location = useLocation();
    const {id} = useParams();
    const [newBookings, setNewBookings] = useState([])
    const [showImage, setShowImage] = useState(true)
    const [updatedBooking, setUpdatedBooking] = useState("")

    // useEffect(() => {
    //     if (!booking) {
    //         fetch(`http://localhost:3000/bookings/${id}`)
    //         .then(res => res.json())
    //         .then(bookingObj => setNewBookings(bookingObj))
    //         .catch(err => alert(err))
    //     }
    // }, [booking, id])

    // const = !newBookings ? booking : newBookings

    // if (! {
    //     return <h3>Loading...</h3>
    // }

    // const handleSubmit = async (event) => {

    //     event.preventDefault();
    //     try {
    //       const response = await fetch(`/bookings/${booking.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           location: updatedBooking.location,
    //         }),
    //     })
    //       .then(response => {
    //         if (response.ok) {
    //           setUser(user => {
    //             return {...user, bookings: user.bookings.filter(b => b.id !== booking.id)}
    //           });
    //       }
    //       })
    //     }

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch(`/bookings/${booking.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              location: updatedBooking.location,
            }),
        })
        .then(response => {
          if (response.status === 200) {
            setUpdatedBooking(updatedBooking => {
              return {...updatedBooking, updatedBooking: updatedBooking.location}
            });
        }
        })
        }
    

    // const editBooking = (newBookings) => {
    //     fetch(`bookings/${booking.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             booking: newBookings
    //         }),
    //     })
    //         .then((r) => r.json())
    //         .then((updatedBooking) => setBookings(updatedBooking));
    // };


    // const handleFormSubmit = (e) => {
    //     handleSubmit(location)
    // }

    const handleDelete = () => {
        fetch(`/bookings/${booking.id}`, {
        method: 'DELETE',
        })
        .then(response => {
          if (response.ok) {
            setUser(user => {
              return {...user, bookings: user.bookings.filter(b => b.id !== booking.id)}
            });
        }
        })
        }

    const conditionalClass = location.pathname === "/" ? "Booking list" : "Booking individual"
  return (
    <div id={id}>
        <div>
            
                <Link to ={`/bookings/${id}`}></Link>
                <img src = {image} alt = "booking" /> <br />
           

            {/* <h4>{booking}</h4> */}
            <img src={image} alt="Turban image" /> <br />
            <span className='card-detail'>FirstName: {user.firstname} </span> <br />
            <span className='card-detail'>LastName: {user.lastname} </span> <br />
            <span className='card-detail'>Price: {booking.price} </span> <br />
            <span className='card-detail'>Location: {booking.location} </span> <br />
            <span className='card-detail'>Date/Time: {booking.datetime} </span> <br />
                <form onSubmit={handleSubmit} >
                <input className="edit-bookings-form" autocomplete="off" value={newBookings} onChange={(e) => setNewBookings(e.target.value)} type="text" name="new booking" placeholder="Enter New Booking" /> <br />
                <button className="edit-booking-button">Edit Booking</button>
                </form>
                <button onClick={handleDelete} className="delete-booking-button">Delete 🗑</button>
            
        </div>
    </div>
  )
}

export default Booking;
