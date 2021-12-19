import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RecipesService from './RecipesService';

const recipesService = new RecipesService();

class Kitchens extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kitchens: []
        };
    }


    async componentDidMount() {
        await recipesService.getKitchens()
            .then(response => {
                this.setState({ kitchens: response });
                console.log(response);
            })
    }

    render() {
        return (
            <div>


                <div class="container">
                    <div class="py-4 text-center">
                        <h2>Кухни на любой вкус</h2>
                    </div>
                </div>


                <div class="razdel-2">
                    <div class="container">
                        <div class="row">
                            {this.state.kitchens.map((kitchen) =>
                                <div class="col-md-6 px-4 py-4 kitchens">
                                    <Link to={'/kitchen/' + kitchen.id}>
                                        <div class="row flex-md-nowrap align-items-center">
                                            <div class="col-md-7 left text-left kitchen-card">
                                                <h3 class="mt-5">{kitchen.nameKitchen}</h3>
                                            </div>
                                            <div class="col-md-7 right">
                                                <img src={kitchen.imageKitchen} alt="kitchenimage" class="w-100" style={{ borderRadius: '6px' }} height="220" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Kitchens;