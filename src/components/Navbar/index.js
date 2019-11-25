import React from "react";

let navStyles = {
	logo: {
		paddingLeft: 15,
		fontFamily: "Berkshire Swash, cursive",
		fontSize: 40,
		fontWeight: "bold",
	},
};

function Navbar() {
	return (
		<nav>
			<div className="nav-wrapper blue darken-1">
				<a href="/" className="brand-logo" style={navStyles.logo}>
					Sports-WIKI
				</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<a href="/addressBook">My Address Book</a>
					</li>
					<li>
						<a href="/newContact">Add Contact +</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
