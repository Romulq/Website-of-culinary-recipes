import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from './image/logo.png'
import vk from './image/vk.png'
import yt from './image/yt.png'
import up from './image/up.png'
import inst from './image/inst.png'

import './App.css';
import './main.css';



class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="bg-dark">
					<div className="container footer">
						<div className="row justify-content-md-center">
							<div className="col-md-3 text-light align-self-center">
								<h1 className="navbar-brand title">
									<img src={logo} alt="logo" />
									RecipeForAll
								</h1>
							</div>
							<div className="col-md-2 nav flex-column">
								<a className="nav-item nav-link text-light" href="/">Главная</a>
								<a className="nav-item nav-link text-light" href="/kitchen/all">Кухни</a>
								<a className="nav-item nav-link text-light" href="/recipe/all">Рецепты</a>

							</div>
							<div className="col align-self-center text-center">
								<Link to="#">
									<img src={up} alt="up" />
								</Link>
							</div>
							<div className="col-md-3 align-self-center text-light text-center">
								<div className="row justify-content-md-center">
									<Link className="mx-1" to="#">
										<img src={vk} alt="vk" />
									</Link>
									<Link className="mx-1" to="#">
										<img src={yt} alt="yt" />
									</Link>
									<Link className="mx-1" to="#">
										<img src={inst} alt="inst" />
									</Link>
								</div>
								<h4 className="mt-1">email@email.com</h4>
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
	}
}

export default Footer;