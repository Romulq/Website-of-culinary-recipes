import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../main.css'

function Header() {

    const [recipes, setRecipes] = useState([]);
    var recipeOfDay = [];

    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/api/recipe/")
        .then(response => {
            setRecipes(response.data)
            if (recipes != []) {
                recipeOfDay = recipes[0];
                console.log(recipes, recipeOfDay, " work?");
            }
            else {
                console.log("ВЫ НЕ ГОТОВЫ");
                return
            }
        })
        .catch(function(err) {
            console.log(err)
        })
    }, []);

    

    console.log(recipeOfDay, " work suka?");
   

    return (
        <header>
            <nav className="container navbar navbar-expand-lg navbar-light ">
                <h1 className="navbar-brand title">
                    <img src="../image/logo.png" alt="logo" />
                    RecipeForAll
                </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav header-link">
                        <Link to="/" className="nav-item nav-link">Главная</Link>
                        <Link to="/kitchen/all/" className="nav-item nav-link">Кухни</Link>
                        <Link to="/recipe/all/" className="nav-item nav-link">Рецепты</Link>
                        {/* <Link to={`/recipe/${recipes[0]}/`} className="nav-item nav-link">Рецепт дня</Link> */}
                    </div>
                </div>
                <div className="sign">
                    {/* {% if request.user.is_authenticated %} */}
                    {/* <a id="navbarDropdown" role="button" data-toggle="dropdown">
                        <img src="{% static 'image/sign2.png' %}" alt="sign" />
                    </a>
                    <div className="dropdown-menu" style={{ position: 'static' }} aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="{% url 'profile' %}">Профиль</a>
                        <a className="dropdown-item" href="{% url 'sign_out' %}">Выход</a>
                    </div> */}
                    {/* {% else %} */}
                    <Link to="/sign_in">
                        <img src="../image/sign.png" alt="sign" />
                    </Link>
                    {/* {% endif %} */}
                </div>
            </nav>
        </header>
    );
}

export default Header;