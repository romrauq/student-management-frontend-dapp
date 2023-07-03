import React from "react";

const Navbar = ({ openModal }) => {
	return (
		<div>
			<nav className="navbar">
				<div className="logo">Logo</div>
				<div className="nav-items">
					<button className="register-button" onClick={() => openModal("register")}>
						Register
					</button>
					<button className="sign-in-button" onClick={() => openModal("signin")}>
						Sign In
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
