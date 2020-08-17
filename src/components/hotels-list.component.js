import React, { Component } from "react";
import BookingDataService from "../services/bookings.service";
import { Link } from "react-router-dom";
import Hours from "./hoursComponent.js";

export default class HotelsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeLat = this.onChangeLat.bind(this);
    this.onChangeLong = this.onChangeLong.bind(this);
    this.setActiveHotel = this.setActiveHotel.bind(this);
    this.searchArea = this.searchArea.bind(this);

    this.state = {
      hotels: [],
      currentHotel: null,
      openingHours: [],
      currentIndex: -1,
      searchTitle: "",
      lat: "",
      long: ""
    };
  }

  onChangeLat(e) {
    const lat = e.target.value;
    this.setState({
      lat: lat
    });
  }

  onChangeLong(e) {
    const long = e.target.value;
    this.setState({
      long: long
    });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveHotel(hotel, index) {
    this.setState({
      currentHotel: hotel,
      currentIndex: index
    });    
  }

  searchArea() {
    BookingDataService.findByArea(this.state.lat, this.state.long)
      .then(response => {
        this.setState({
          hotels: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { lat, long, hotels, currentHotel, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Latitude"
              value={lat}
              onChange={this.onChangeLat}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Longitud"
              value={long}
              onChange={this.onChangeLong}
            />

            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchArea}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Hotels List</h4>
          <ul className="list-group">
            {hotels &&
              hotels.map((hotel, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveHotel(hotel, index)}
                  key={index}
                >
                  {hotel.title}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentHotel ? (
            <div>
              <h4>Hotel</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentHotel.title}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentHotel.vicinity}
              </div>
              <Hours data={currentHotel.openingHours} />                              
                <Link to={{
                  pathname: '/book/',
                  state: {
                    id: currentHotel.id,
                    title: currentHotel.title
                  }
                }}
                   className="badge badge-warning">
                  Book
                </Link>              
            </div>
          ) : (
              <div>
                <br />
                <p>Click on Hotel to Book...</p>
              </div>
            )}
        </div>
      </div>      
    );
  }
}
