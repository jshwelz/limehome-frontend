import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddBooking from "./components/add-booking.component";
import Bookings from "./components/bookings.component";
import HotelsList from "./components/hotels-list.component";


class App extends Component {
  render() {
    return (      
        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              {/* <a href="/tutorials" className="navbar-brand">
              bezKoder
            </a> */}
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/hotels"} className="nav-link">
                    Hotel's Nearby
                </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/bookings"} className="nav-link">
                    Bookings
                </Link>
                </li>
                <li className="nav-item">
                  <Link to={{
                    pathname: '/book/',
                    state: {
                      id: null,
                      title: ""
                    }
                  }} className="nav-link">
                    Add Booking
                </Link>
                </li>
              </div>
            </nav>

            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/hotels"]} component={HotelsList} />
                <Route exact path="/book/" component={AddBooking} />
                <Route path="/bookings/" component={Bookings} />
              </Switch>
            </div>
          </div>
        </Router>      
    );

  }
}

export default App;
