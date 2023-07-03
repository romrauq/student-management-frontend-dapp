const SignInModal = () => {
	return (
		<div>
			<label className="input-label">
				Email Address:
				<input type="text" value={email} onChange={handleEmailChange} />
			</label>
			<label className="input-label">
				Password:
				<input type="password" value={password} onChange={handlePasswordChange} />
			</label>
		</div>
	);
};

export default SignInModal;
