import React from "react";
// Global Styles
import GlobalStyle from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Import pages
import AboutUs from "./pages/AboutUs";
import ContactMe from "./pages/ContactMe";
import Experience from "./pages/Experience";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Routes>
				<Route path="/" element={<AboutUs />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/contact" element={<ContactMe />} />
			</Routes>
		</div>
	);
}

export default App;
