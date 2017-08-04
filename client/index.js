import { apiKey } from './../config.json';
import axios from 'axios';
import CityCard from './CityCard';

const cityName = 'Perm';

console.log('CityCard', CityCard);

document.getElementById('add_weather').onclick = () =>
{
    axios
        .get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${cityName}`)
        .then((res) => {
            const City = new CityCard(res);
            City.render();
        });
};
