import axios from "axios";

function getData(ip="") {

   return axios.get(`http://ip-api.com/json/${ip}`)
      .then(function (response) {

         return response;
      });
}

export default getData;