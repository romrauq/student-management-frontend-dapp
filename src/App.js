import React, { useState } from "react";
import "./styles.css";

function Modal({ closeModal, title, mode }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = () => {
		// Perform validation and submission logic here
	};

	const handleClose = () => {
		closeModal();
	};

	return (
		<div className="modal-overlay">
			<div className="modal">
				<div className="modal-header">
					<h2>{title}</h2>
					<button className="close-button" onClick={handleClose}>
						<span>&times;</span>
					</button>
				</div>
				<div className="modal-body">
					{mode === "signin" && (
						<>
							<label className="input-label">
								Email Address:
								<input type="text" value={email} onChange={handleEmailChange} />
							</label>
							<label className="input-label">
								Password:
								<input type="password" value={password} onChange={handlePasswordChange} />
							</label>
						</>
					)}
					{mode === "register" && (
						<>
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
						</>
					)}
				</div>
				<div className="modal-footer">
					<button onClick={handleSubmit}>Submit</button>
				</div>
			</div>
		</div>
	);
}

function LandingPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMode, setModalMode] = useState("");

	const openModal = (modalType) => {
		if (modalType === "signin") {
			setModalMode("signin");
			setIsModalOpen(true);
		} else if (modalType === "register") {
			setModalMode("register");
			setIsModalOpen(true);
		}
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

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
			<div className="content">
				<div className="centered-text">
					<h1>Welcome to Student Information Portal</h1>
				</div>
			</div>
			<footer className="footer">
				<div className="centered-text">
					<p>Developed by John Quarmor</p>
				</div>
			</footer>
			{isModalOpen && (
				<Modal
					closeModal={closeModal}
					title={modalMode === "signin" ? "Sign In" : "Student Registration"}
					mode={modalMode}
				/>
			)}
		</div>
	);
}

export default LandingPage;
