import React, { Component } from "react";
import BookingDataService from "../services/bookings.service";

export default class AddBooking extends Component {
  state = {
    id: null,
    title: null
  }
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePropertyID = this.onChangePropertyID.bind(this);
    this.onChangeGuestID = this.onChangeGuestID.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEnDate = this.onChangeEnDate.bind(this);
    this.onChangeRoomID = this.onChangeRoomID.bind(this);
    this.saveBooking = this.saveBooking.bind(this);    
    this.newBooking = this.newBooking.bind(this);

    this.state = {
      property_id: "",
      title: "",
      startdate: "",
      enddate: "",
      room_id: "",
      guest_id: ""
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  componentDidMount() {
    const fromNotifications = this.props.location.state
    this.setState({
      title: fromNotifications.title,
      property_id: fromNotifications.id,
    });
  }

  onChangePropertyID(e) {
    this.setState({
      property_id: e.target.value
    });
  }

  onChangeGuestID(e) {
    this.setState({
      guest_id: e.target.value
    });
  }

  onChangeStartDate(e) {
    this.setState({
      startdate: e.target.value
    });
  }

  onChangeEnDate(e) {
    this.setState({
      enddate: e.target.value
    });
  }
  newBooking() {
    this.setState({
      property_id: "",
      title: "",
      startdate: "",
      enddate: "",
      room_id: "",
      guest_id: "",
      submitted: false
    });
  }


  onChangeRoomID(e) {
    this.setState({
      room_id: e.target.value
    });
  }

  saveBooking() {
    var data = {
      guest_id: this.state.guest_id,
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      room_id: this.state.room_id,
      property_id: this.state.property_id,
      property_name: this.state.title
    };
    console.log(data)
    BookingDataService.create(data)
      .then(response => {
        this.setState({
          startdate: response.data.startdate,
          enddate: response.data.enddate,
          room_id: response.data.room_id,
          property_id: response.data.property_id,
          property_name: response.data.title,    
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBooking}>
              Add
            </button>
          </div>
        ) : (
            <div>

              <div className="form-group">
                <label htmlFor="description">Guest ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="guest_id"
                  required
                  value={this.guest_id}
                  onChange={this.onChangeGuestID}
                  name="description"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Start Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="startdate"
                  required
                  value={this.state.description}
                  onChange={this.onChangeStartDate}
                  name="Startdate"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">End Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="enddate"
                  required
                  value={this.state.description}
                  onChange={this.onChangeEnDate}
                  name="enddate"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Room ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="room_id"
                  required
                  value={this.state.room_id}
                  onChange={this.onChangeRoomID}
                  name="room_id"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Property ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="property_id"
                  required
                  value={this.state.property_id}
                  onChange={this.onChangePropertyID}
                  name="property_id"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Property Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="property_title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="property_title"
                />
              </div>
              <button onClick={this.saveBooking} className="btn btn-success">
                Submit
            </button>
            </div>
          )}
      </div>
    );
  }
}
