import style from 'citycard.css';

class CityCard {
    constructor(data){
        this.imgUrl=data.data.current.condition.icon;
        this.temperature=data.data.current.temp_c;
        this.city=data.data.location.name;
    }
    render() {
        const template = `
            <div class='city-card'>
                <img class = 'city-card__img' src='${this.imgUrl}'>
                <span class='city-card__condition'>
                    Overcast
                </span>
                <span class='city-card__temperature'>
                    ${this.temperature}
                </span>
                <span class='city-card__city'>
                    ${this.city}
                </span>
            </div>
        `;
        document.getElementById('weather-container').innerHTML += template;
    }
}
export default CityCard;