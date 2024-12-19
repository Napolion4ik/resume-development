import React, { useEffect } from "react";
import Header from "./Header/Header";
import AboutSection from "../pages/AboutSection/AboutSection.jsx";
import AboutMe from "../pages/AboutMe/AboutMe.jsx";
import Project from "../pages/Project/Project.jsx";
import Contacts from "../pages/Contacts/Contacts.jsx";
import Footer from "./Footer/Footer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
	useEffect(() => {
		localStorage.setItem("theme", "light");
	}, []);

	return (
		<BrowserRouter>
			<div className="main-wrapper">
				<Header />
				<Routes>
					<Route index element={<AboutSection />} />
					<Route path="/aboutme" element={<AboutMe />} />
					<Route path="/projects" element={<Project />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
