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
				name={props.name}
				placeholder={props.placeholder}
				onChange={(e) => InputChange(e)}
			/>
		</>
	);
}

export default InputField;
