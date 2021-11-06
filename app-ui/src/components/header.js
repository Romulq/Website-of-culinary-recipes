import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../main.css'

function Header() {

  return (
    <header>
        <nav className="container navbar navbar-expand-lg navbar-light ">
            <h1 className="navbar-brand title">
                <img src="{% static 'image/logo.png' %}" alt="logo"/>
                RecipeForAll
            </h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
                <div className="navbar-nav header-link">
                    <a className="nav-item nav-link" href="{% url 'home' %}">Главная</a>
                    <a className="nav-item nav-link" href="{% url 'kitchen' slug='all' %}">Кухни</a>
                    <a className="nav-item nav-link" href="{% url 'recipe' slug='all' %}">Рецепты</a>
                    <a className="nav-item nav-link" href="{% url 'recipe' recipeOfDay.id %}">Рецепт дня</a>
                </div>
            </div>
            <div className="sign">
                {/* {% if request.user.is_authenticated %} */}
                    <a id="navbarDropdown" role="button" data-toggle="dropdown">
                        <img src="{% static 'image/sign2.png' %}" alt="sign"/>
                    </a>
                    <div className="dropdown-menu" style={{ position: 'static' }} aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="{% url 'profile' %}">Профиль</a>
                        <a className="dropdown-item" href="{% url 'sign_out' %}">Выход</a>
                    </div>
                {/* {% else %} */}
                    {/* <a href="{% url 'sign_in' %}">
                        <img src="{% static 'image/sign.png' %}" alt="sign"/> */}
                    {/* </a> */}
                {/* {% endif %} */}
            </div>
        </nav>  
    </header>
  );
}

export default Header;