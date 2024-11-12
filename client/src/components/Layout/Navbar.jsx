import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiShoppingBasketFill } from "react-icons/ri";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link
						to="/"
						className="navbar-brand"
						onClick={() => window.location.reload()}
					>
						<img src="/logo.png" alt="Logo" width={"50px"} />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink to="/" className="nav-link" aria-current="page">
									Home
								</NavLink>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Categories
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<NavLink to="/categories/laptops" className="dropdown-item">
											Laptops
										</NavLink>
									</li>
									<li>
										<NavLink to="/categories/phones" className="dropdown-item">
											Phones
										</NavLink>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<NavLink to="/categories" className="dropdown-item">
											None
										</NavLink>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/policy" className="nav-link">
									Policy
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/services" className="nav-link">
									Services
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/cart" className="nav-link" style={{fontSize:"1.8em"}}>
									<RiShoppingBasketFill />
								</NavLink>
							</li>
							{/* <li className="nav-item">
								<NavLink to="/register" className="nav-link" href="#">SignUp</NavLink>
							</li> */}
							<li className="nav-item dropdown">
								<NavLink
									className="nav-link dropdown-toggle"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Login / Sigin Up
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<NavLink to="/register" className="dropdown-item">
											Sign Up
										</NavLink>
									</li>
									<li>
										<NavLink to="/login" className="dropdown-item">
											Login
										</NavLink>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<NavLink className="dropdown-item">
											Continue For Now
										</NavLink>
									</li>
								</ul>
							</li>
							{/* <li className="nav-item">
								<NavLink to="/" className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
							</li> */}
						</ul>
						{/* <form className="d-flex" role="search">
							<input className="form-control me-2" type="search" placeholder="Search"aria-label="Search"/>
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form> */}
					</div>
				</div>
			</nav>
			<style jsx>
				{`
					.navbar {
						font-family: "Poppins", sans-serif;
						font-size: 17px;
						line-height: 26px;
						text-transform: uppercase;
						box-shadow: 0 8px 6px -6px gray;
						--webkit-box-shadow: 0 8px 6px gray;
						border-bottom: 0.3px solid gray !important;
					}
					nav-link {
						font-weight: 300 !important;
						
					}
					ul>li{
						margin: auto 10px auto 10px;
					}
					.active{border-bottom: 2px solid gray !important;}

					/*
					div.borderXwidth a:before,
					div.borderXwidth a:after {
						position: absolute;
						opacity: 10;
						width: 0%;
						height: 1.8px;
						content: "";
						/* background: #ffffff75;*/
						background: #black;
						transition: all 0.3s;
					}

					div.borderXwidth a:before {
						left: 0px;
						top: 0px;
						height: 3px;
					}

					div.borderXwidth a:after {
						right: 0px;
						bottom: 0px;
						height: 3px;
					}

					div.borderXwidth a:hover:before,
					div.borderXwidth a:hover:after {
						opacity: 1;
						width: 98.5%;
					}*/
				`}
			</style>
		</>
	);
};

export default Navbar;
