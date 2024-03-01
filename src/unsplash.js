import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _cj9hPRG58rTw65MMgNGDy75jeAusD59Z85owBzKy-U",
  },
});
