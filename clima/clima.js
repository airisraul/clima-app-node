const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=067f6089ea49f5f5895f86451c9cca91`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}