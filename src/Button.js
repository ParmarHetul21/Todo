import React from "react";
import "./style.css";

const Button = ({ title = "Submit" }) => (
	<div>
		<input type="submit" name={title} value={title} className="button" />
	</div>
);

export default Button;
