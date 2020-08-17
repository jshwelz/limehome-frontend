import http from "../http-common";

class BookingDataService {
  get(id) {
    return http.get(`/properties/${id}/bookings`);
  }

  create(data) {
    return http.post("/bookings/", data);
  }

  findByArea(lat, long) {
    return http.get(`/properties?at=${lat},${long}`);
  }
}

export default new BookingDataService();
