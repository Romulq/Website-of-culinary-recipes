import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RecipesService from './RecipesService';

const recipesService = new RecipesService();

class Kitchen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kitchen: [],
            recipes: [],
            categorys: []
        };
    }


    async componentDidMount() {
        await recipesService.getKitchen(1)
            .then(response => {
                this.setState({ kitchen: response });
                console.log(response);
            })
        await recipesService.getRecipes()
            .then(response => {
                this.setState({ recipes: response });
                console.log(response);
            })
        await recipesService.getCategorys()
            .then(response => {
                this.setState({ categorys: response });
                console.log(response);
            })
    }

    render() {

        const kitchen = this.state.kitchen

        const razdel = this.state.categorys.map((category) =>

            <li className="nav-item" key={category.id}>
                <h3 className="nav-link my-0" data-toggle="tab" href={'#' + category.nameCategory}>{category.nameCategory}</h3>
            </li>
        )

        const recipes = this.state.categorys.map((category) =>
            <div className="tab-pane fade" key={category.id} id={category.nameCategory}>
                <div className="row">
                    {this.state.recipes.map((recipe) => {
                        return (
                            recipe.category.id === category.id &&
                            <div key={recipe.id} className="col-md-3 py-4">
                                <div className="card mb-4">
                                    <img className="card-img-top" src={recipe.imageRecipe} alt={recipe.nameRecipe} height="220" />
                                    <div className="card-body text-center">
                                        <div className="card-title">
                                            <h4>{recipe.nameRecipe}</h4>
                                        </div>
                                        <Link to={'recipe/' + recipe.id} className="btn btn-outline-primary">О рецепте</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )

        return (
            <div>


                <div class="container">
                    <div class="py-4 text-center">
                        <h2>{kitchen.nameKitchen}</h2>
                    </div>
                </div>


                <div className="razdel-2">
                    <div className="container">
                        <ul className="nav nav-tabs col-md-12 justify-content-center">
                            {razdel}
                        </ul>
                        <div className="tab-content">
                            {recipes}
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Kitchen;