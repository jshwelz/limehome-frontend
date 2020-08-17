import React, { Component } from "react";
import BookingDataService from "../services/bookings.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeProperty = this.onChangeProperty.bind(this);
    this.searchBooking = this.searchBooking.bind(this);

    this.state = {
      bookings: [],
      property_id: "",
    };
  }
  onChangeProperty(e) {
    const id = e.target.value;
    this.setState({
      property_id: id
    });
  }

  searchBooking() {
    BookingDataService.get(this.state.property_id)
      .then(response => {
        this.setState({
          bookings: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { property_id, bookings } = this.state;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Property ID"
              value={property_id}
              onChange={this.onChangeProperty}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchBooking}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Bookings List</h4>
          <ul className="list-group">
            {bookings.map((book, index) => (
              <li key={index}>
                {book.guest_id}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
