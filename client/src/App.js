import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Booking from './components/Booking';
import BookingsForm from './components/BookingsForm';
import BookingsList from './components/BookingsList';
import Users from './components/Users';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Account from './components/Account';
import { UserContext } from './context/UserContext';

function App() {

  const API = "localhost:3000/bookings"

  const [bookings, setBookings] = useState([])
  const {user, setUser} = useContext(UserContext)
  console.log(user)

  // useEffect(() => {
  //   if (user) {
  //     fetch("/bookings")
  //     .then(res => res.json())
  //     .then(data => setBookings(data))
  //   }
  // }, []);

  const bookingsList = user?.bookings.map(booking => 
    <Booking key={booking.id} user={user} booking={booking} bookingId={booking.id} API={API} setBookings={setBookings} setUser={setUser} />)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        { user ? (
          <>

        <Route exact path="/bookings/new">
          <BookingsForm bookings={bookings} setBookings={setBookings} API={API} setUser={setUser} />
        </Route>
        <Route exact path="/">
          {bookingsList}
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route path="/*">
          <ErrorPage />
        </Route> </>
        ) : (
          <>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/*">
          <ErrorPage />
        </Route> </>
        )}
        {/* <Route exact path="/bookings">
          <BookingsList bookings={bookings} API={API} />
        </Route> */}
      </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
