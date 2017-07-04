import Card from 'components/Card';
import './style.scss';

export default {
    render(h) {
        return (
            <div class="cities">
                <h2 class="cities_header">Погода</h2>
                <div class="cities_list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <a class="cities_add-city">Добавить город</a>
            </div>
        )
    }
}