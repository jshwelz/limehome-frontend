import axios from "axios";


const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Impvc2giLCJhZG1pbiI6dHJ1ZSwiaWQiOiJqb3NoIiwiaWF0IjoxNTk3NjQyNDk1LCJleHAiOjE2MjkwOTIwOTUsIm5iZiI6MTU5NzY0MjQ5NX0.BhXPfZTxK8P40UFfH8nBLAbPsuvrhD6pMXh41EMtzwU"


export default axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}`,
    withCredentials: true,
    crossorigin: true
  }
});