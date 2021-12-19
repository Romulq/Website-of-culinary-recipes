import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Home from './Home'
import Kitchens from './Kitchens'
import Kitchen from './Kitchen'
import Recipes from './Recipes'
import Recipe from './Recipe'

import './App.css';
import './main.css';


class App extends Component {
	render() {
		return (
			<div>

				<div className="content">
					<BrowserRouter>
						<Header />

						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route path="/kitchen/all" element={<Kitchens />} />
							<Route path="/recipe/all" element={<Recipes />} />
							<Route path="/kitchen/:slug" element={<Kitchen />} />
							<Route path="/recipe/:slug" element={<Recipe />} />
						</Routes>

						<Footer />
					</BrowserRouter>
				</div>

			</div>
		);
	}
}

export default App;