const RegisterModal = () => {
	return (
		<div>
			<label className="input-label">
				Name:
				<input type="text" />
			</label>
			<label className="input-label">
				Phone Number:
				<input type="number" />
			</label>
			<label className="input-label">
				Email:
				<input type="text" />
			</label>
			<label className="input-label">
				Course:
				<select>
					<option value="Course 1">Course 1</option>
					<option value="Course 2">Course 2</option>
					<option value="Course 3">Course 3</option>
				</select>
			</label>
			<label className="input-label">
				Study Period:
				<select>
					<option value="Day">Day</option>
					<option value="Night">Night</option>
					<option value="Distance Learning">Distance Learning</option>
				</select>
			</label>
			<label className="input-label">
				Previous field of study:
				<input type="text" />
			</label>
			<label className="input-label">
				Password:
				<input type="password" />
			</label>
		</div>
	);
};

export default RegisterModal;
