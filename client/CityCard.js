import styles from 'style.css';

class City {
    constructor(data) {
        this.imgUrl = data.data.current.condition.icon;
        this.city = data.data.location.name;
        this.temp = data.data.current.temp_c;
    }

    render() {
        const template = `
        <div class=${styles.city_card}>
           <img class="city-card__img" src="${this.imgUrl}">
           <span class="city-card__condition">
             Overcast
           </span>
           <span class="city-card__temperature">
             ${this.temp}
           </span>
           <span class="city-card__city">
             ${this.city}
           </span>
         </div>`;

        document.
            getElementById('weather_container')
            .innerHTML += template;
    }
}

export default City;