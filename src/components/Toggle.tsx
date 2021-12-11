import React, { useState } from "react";

interface Props {
	children: any;
}

const Toggle = ({ children }: Props) => {
	const [toggle, setToggle] = useState(true);
	return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
};

export default Toggle;
