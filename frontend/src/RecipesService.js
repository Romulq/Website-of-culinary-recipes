import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class RecipesService {

    getKitchensHome() {
        const url = `${API_URL}/api/kitchen-home/`;
        return axios.get(url).then(response => response.data);
    }
    getKitchens() {
        const url = `${API_URL}/api/kitchen/`;
        return axios.get(url).then(response => response.data);
    }
    getKitchen(key) {
        const url = `${API_URL}/api/kitchen/${key}`;
        return axios.get(url).then(response => response.data);
    }

    getRecipes() {
        const url = `${API_URL}/api/recipe/`;
        return axios.get(url).then(response => response.data);
    }
    getRecipe(key) {
        const url = `${API_URL}/api/recipe/${key}`;
        return axios.get(url).then(response => response.data);
    }
    
    getCategorys() {
        const url = `${API_URL}/api/category/`;
        return axios.get(url).then(response => response.data);
    }
}