import Vue from 'vue';
import List from './components/list/list';
import store from './store/store'
const app = new Vue({
        components: {
                List
                },
        render(h) {
                return (
                        <div class="container" >
                        <h1 class="page__title">Weather</h1>
                        <list></list>
                        </div>
                );
        },
        store
});
export { app }
