import React from "react";
// Global Styles
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Import pages
import AboutUs from "./pages/AboutUs";
import ContactMe from "./pages/ContactMe";
import Experience from "./pages/Experience";
import MovieDetails from "./pages/MovieDetails";
// Router
import { Routes, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/work/:id" element={<MovieDetails />} />
					<Route path="/" element={<AboutUs />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/contact" element={<ContactMe />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
