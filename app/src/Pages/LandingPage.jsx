import React from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const LandingPage = () => {
	return (
		<>
			<div className="landing-page">
				<div className="landing-content">
					<h1 className="title" style={{overflow:"visible"}}>Welcome to Horizon Infotech</h1>
					<div className="land">
						<div className="content">
							<p className="subtitle">
								Your trusted partner in Electronic Appliances & Services
							</p>
							<p className="description">
								At Horizon Infotech, we offer a wide range of high-quality
								electronics, gadgets, and expert services to make your life more
								convenient. From home appliances to personalized services, we
								bring technology to your doorstep.
							</p>
							<Link to="/home">
								<button className="btn btn-primary explore-button">Explore</button>
							</Link>
						</div>
						<div className="logo-container">
							<img src="logo.png" alt="Logo" width={"300px"} title="Horizon InfoTech"/>
						</div>
					</div>
				</div>
			</div>
			<style jsx="">{`
				.landing-page {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
					background-image: radial-gradient(circle,#0c0f16,#1a1f2b,#2a3644,#3c4d5c,#506873) !important;
					background-size: cover;
					background-position: center;
					color: white;
					font-family: "Arial", sans-serif;
				}
				.land{
					display:flex;
					flex-direction:row;
					justify-content:center;
					align-items:center; 
					padding:2rem;
					
				}
				.land::-webkit-scrollbar {
					width: 0;
				}
				.landing-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					text-align: center;
					background-color: rgba(0,0,0,0.5);
					padding: 40px;
					border-radius: 10px;
					width: 90%;
					height:80vh;
					max-width: 1200px;
				}

				.title {
					font-size: 3rem;
					margin-bottom: 20px;
					font-weight: bold;
				}

				.content {
					margin-bottom: 30px;
					width:50vw;
				}

				.subtitle {
					font-size: 1.5rem;
					margin-bottom: 20px;
				}

				.description {
					font-size: 1.2rem;
					margin-bottom: 30px;
					line-height: 1.5;
					color: #ddd;
				}

				.explore-button {
					padding: 15px 30px;
					font-size: 1.2rem;
					border: none;
					border-radius: 5px;
					cursor: pointer;
					transition: all 0.3s ease;
				}

				.explore-button:hover {
					background-image: radial-gradient(gray, white) !important;
					color:cyan !important;
					transform: scale(1.05);
				}

				.logo-container {
					padding-bottom: 1rem;
					margin-bottom: 1rem;
				}
			`}</style>
		</>
	);
};

export default LandingPage;
