import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Booking from './components/Booking';
import BookingsForm from './components/BookingsForm';
import BookingsList from './components/BookingsList';
import Users from './components/Users';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Search from './components/Search';

function App() {

  const API = "localhost:3000/bookings"

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch("/bookings")
    .then(res => res.json())
    .then(data => setBookings(data))
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/bookings/new">
          <BookingsForm bookings={bookings} setBookings={setBookings} API={API} />
        </Route>
        <Route exact path="/bookings/:id">
          <Booking API={API} setBookings={setBookings} />
        </Route>
        <Route exact path="/error">
          <ErrorPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/">
          <BookingsList bookings={bookings} API={API} />
        </Route>
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
