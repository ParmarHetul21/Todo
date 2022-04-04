import React from "react";

function InputField({ ...props }) {
	const InputChange = (e) => {
		props.data(e.target.value);
	};

	return (
		<>
			<input
				type={props.type}
				className={props.className}
				value={props.value}
				name={props.name}
				onChange={(e) => InputChange(e)}
				placeholder={props.placeholder}
			/>
		</>
	);
}

export default InputField;
