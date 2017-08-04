//.get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${cityName}`)
import {apiKey} from './../config.json';
import axios from 'axios';
import CityCard from 'city.js';

const cityName='Perm';
 axios.get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${cityName}`)
    .then((res)=>{
        const City = new CityCard(res);
        console.log(city);
        City.render();
    }).catch(() => console.log('err'));

