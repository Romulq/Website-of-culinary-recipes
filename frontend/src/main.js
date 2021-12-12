import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// //Отрисовка главной страницы
// function listMain(response) {
//     var vm = new Vue({
//         data: {
//             recipeOfDay: response.recipeOfDay,
//             stage: response.stage
//         },  
//         render: h => h(Home)            
//     });
//     vm.$mount('#main');
// }

