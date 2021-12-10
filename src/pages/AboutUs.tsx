import React from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import CompSection from "../components/CompSection";
import FaqSection from "../components/FaqSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
	return (
		<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<AboutSection />
			<CompSection />
			<FaqSection />
		</motion.div>
	);
};

export default AboutUs;
