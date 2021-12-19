import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from './image/logo.png'

import './App.css';
import './main.css';



class Header extends Component {
	render() {
		return (
			<div>
				<header>
					<nav className="container navbar navbar-expand-lg navbar-light ">
						<h1 className="navbar-brand title" href="#">
							<img src={logo} alt="logo" />
							RecipeForAll
						</h1>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
							<div className="navbar-nav header-link">
								<Link className="nav-item nav-link" to="/">Главная</Link>
								<Link className="nav-item nav-link" to="/kitchen/all">Кухни</Link>
								<Link className="nav-item nav-link" to="/recipe/all">Рецепты</Link>
							</div>
						</div>
					</nav>
				</header>
			</div>
		)
	}
}

export default Header;