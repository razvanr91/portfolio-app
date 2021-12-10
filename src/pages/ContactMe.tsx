import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactMe = () => {
	return (
		<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<motion.h1>Contact me</motion.h1>
		</motion.div>
	);
};

export default ContactMe;
