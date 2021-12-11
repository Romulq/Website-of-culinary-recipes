import Vue from 'vue';
import Home from './apps/home.vue';

//Отрисовка главной страницы
function listMain(response) {
    var vm = new Vue({
        data: {
            recipeOfDay: response.recipeOfDay,
            stage: response.stage
        },  
        render: h => h(Home)            
    });
    vm.$mount('#main');
}

