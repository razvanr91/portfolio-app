import { motion } from "framer-motion";
import React, { useState } from "react";

interface Props {
	children: any;
	title: string;
}

const Toggle = ({ children, title }: Props) => {
	const [toggle, setToggle] = useState(false);
	return (
		<motion.div layout className="question" onClick={() => setToggle(!toggle)}>
			<motion.h4 layout>{title}</motion.h4>
			{toggle ? children : ""}
			<motion.div layout className="faq-line"></motion.div>
		</motion.div>
	);
};

export default Toggle;
