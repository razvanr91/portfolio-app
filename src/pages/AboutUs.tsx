import React, { Fragment } from "react";
// Page Components
import AboutSection from "../components/AboutSection";
import CompSection from "../components/CompSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
	return (
		<Fragment>
			<AboutSection />
			<CompSection />
			<FaqSection />
		</Fragment>
	);
};

export default AboutUs;
