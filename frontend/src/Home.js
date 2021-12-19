import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RecipesService from './RecipesService';

import offer_image from './image/offer-image2.png';
import time from './image/time.png'
import talk from './image/talk.png'
import help from './image/help.png'

const recipesService = new RecipesService();

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kitchens: []
        };
    }


    async componentDidMount() {
        await recipesService.getKitchensHome()
            .then(response => {
                this.setState({ kitchens: response });
                console.log(response);
            })
    }

    render() {
        return (
            <div>


                <div className="container offer">
                    <div className="row offer">
                        <div className="col-md-6 offer-text align-self-center">
                            <h1 className="mb-0">Кулинарные рецепты</h1>
                            <h1 className="subtitle mb-0">на любой вкус и цвет</h1>
                            <div className="col-md-6 px-0 text-left">
                                <Link className="btn btn-warning button-text px-5 py-3 mt-3" to="/recipe/all">Список рецептов</Link>
                            </div>
                        </div>
                        <div className="col-md-6 offer-image">
                            <img className="img-fluid rounded" src={offer_image} alt="offer-image" />
                        </div>
                    </div>
                </div>


                <div className="razdel py-6 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-6">Подборки</h2>
                        <div className="row">
                            {this.state.kitchens.map((kitchen) =>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <img className="card-img-top" src={kitchen.imageKitchen} alt={kitchen.slugKitchen} height="261" />
                                        <div className="card-body text-center">
                                            <div className="card-title">
                                                <h4>{kitchen.nameKitchen}</h4>
                                            </div>
                                            <Link to={'./kitchen/' + kitchen.id} className="btn btn-outline-primary">Посмотреть</Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="razdel-2">
                    <div className="container">
                        <h2 className="text-center mb-6">О нас</h2>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="mt-5"><img src={time} alt="time" /></div>
                                    <h4 className="mb-5 mt-5 mx-4">Список рецептов пополняется каждый день</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="mt-5"><img src={talk} alt="talk" /></div>
                                    <h4 className="mb-5 mt-5 mx-4">Множество отзывов о каждом рецепте</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="mt-5"><img src={help} alt="help" /></div>
                                    <h4 className="mb-5 mt-5 mx-4">Пошаговые инструкции для каждого рецепта</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home;