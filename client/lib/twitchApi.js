import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "ly0hit865n5veil5cwc72kzfrbu04s",
    Accept: "application/vnd.twitchtv.v5+json",
    Authorization: "Bearer " + "6gk5m2okarxzlfblm62t9vbnjmn72c",
  },
});

export default api;
