import React, { Component } from 'react';
import RecipesService from './RecipesService';

import portion from './image/portion.png'
import timetocreate from './image/timetocreate.png'

const recipesService = new RecipesService();

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipe: [],
            ingredients: [],
            stages: [],
        };
    }

    async componentDidMount() {

        await recipesService.getRecipe(1)
            .then(response => {
                this.setState({
                    recipe: response,
                    ingredients: response.ingredients,
                    stages: response.stages
                });
                console.log(response);
            })
        await recipesService.getCategorys()
            .then(response => {
                this.setState({ categorys: response });
                console.log(response);
            })
    }

    render() {

        const recipe = this.state.recipe;

        return (
            <div>

                <div className="container offer recipe">
                    <div className="row offer recipe justify-content-center" style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${recipe.imageRecipe}) no-repeat center center`,
                        backgroundSize: "cover",
                        borderRadius: "9px",
                        color: "#fff"
                    }}>

                        <div className="col-md-12 text-center align-self-center">
                            <h2 className="recipe-title">{recipe.nameRecipe}</h2>
                        </div>

                        <div className="col-md-12 px-5 py-4">

                            <div className="row ml-auto col-md-2 justify-content-end">
                                <img src={timetocreate} alt="create" height="24" width="24" />
                                <p className="mx-3">{recipe.timeofCreation} ч</p>
                            </div>
                            <div className="row ml-auto col-md-2 justify-content-end">
                                <img src={portion} alt="portions" height="24" width="24" />
                                <p className="mx-3">{recipe.count} пор.</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="razdel-2">
                    <div className="container">
                        <h4 className="description">{recipe.description}</h4>
                    </div>
                </div>


                <div className="razdel bg-light">
                    <div className="container">
                        <h2 className="text-center mb-6">Что потребуется</h2>
                        <div className="row">
                            {this.state.ingredients.map((ingredient) =>
                                <div className="col-md-6">
                                    <div className="row justify-content-around">
                                        <h3 className="mb-4">{ingredient.nameIngredient}</h3>
                                        <h4 className="mb-4">{ingredient.count}</h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="razdel-2">
                    <div className="container">
                        <h2 className="text-center mb-6">Приступаем к готовке!</h2>
                        {this.state.stages.map((stage) =>
                            <div className="col-md-12 stage my-5">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img className="w-100" src={stage.imageStage} alt="image stage" style={{borderRadius: '6px'}} height="280" />
                                    </div>
                                    <div className="col-md-7 text-center">
                                        <h3 className="mb-4">{stage.titleStage}</h3>
                                        <p>{stage.discription}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div >
        );
    }
}

export default Recipe;