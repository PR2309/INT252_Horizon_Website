import React from "react";
import { Link } from "react-router-dom";
// import './Footer.css'; // Import the CSS file for custom styles

const Footer = () => {
	return (
		<>
			<div className="joint-container"></div>
			<footer className="bg-body-tertiary text-center">
				<div className="container p-4 pb-0">
					<section className="mb-4">
						<a className="btn text-white btn-floating m-1 social-icon facebook" href="#!" role="button">
							<i className="fab fa-facebook-f m-2" />
						</a> 
                        <a className="btn text-white btn-floating m-1 social-icon call" href="tel:+1234567890" role="button">
                            <i className="fas fa-phone-alt m-2" />
                        </a>
                        <a className="btn text-white btn-floating m-1 social-icon whatsapp" href="#!" role="button">
                            <i className="fab fa-whatsapp m-2" />
                        </a>
						<a className="btn text-white btn-floating m-1 social-icon twitter" href="#!" role="button">
							<i className="fab fa-twitter m-2" />
						</a>
                        <a className="btn text-white btn-floating m-1 social-icon gmail" href="mailto:example@gmail.com" role="button">
                            <i className="fab fa-google m-2" />
                        </a>
						<a className="btn text-white btn-floating m-1 social-icon instagram" href="#!" role="button">
							<i className="fab fa-instagram m-2" />
						</a>
						<a className="btn text-white btn-floating m-1 social-icon linkedin" href="#!" role="button">
							<i className="fab fa-linkedin-in m-2" />
						</a>
						<a className="btn text-white btn-floating m-1 social-icon github" href="#!" role="button">
							<i className="fab fa-github m-2" />
						</a>
					</section>
				</div>
				<div className="line-gap text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "lightgrey" }}></div>
                <div className="copyright text-light bg-dark">
                    <p>Welcome to Horizon InfoTech</p>
                    <hr />
                    All rights Reserved &copy; 2020 Copyright:
					<a className="text-body" href="/">
						<span style={{color:"lightgrey"}}>Piyush Anand</span>
					</a>
					<p className="details text-center mt-3">
						<Link to="/about" className="footer-links"><nobr>About Us</nobr></Link>&nbsp;|&nbsp; 
						<Link to="/contact" className="footer-links"><nobr>Contact Us</nobr></Link>&nbsp;|&nbsp; 
						<Link to="/policy" className="footer-links">Policies</Link>&nbsp;|&nbsp;
						<Link to="services" className="footer-links">Services</Link> 
					</p>
                </div>

			</footer>
			<style jsx="">
				{`
					footer{
						background-image: linear-gradient(to bottom, #3c4d5c, #506873);
					}
					.joint-container{
						padding:25px;
						background-image: linear-gradient(to bottom,transparent, #3c4d5c);
						height:5vh;
						overflow: hidden;
					}
                    .line-gap {
                        background: linear-gradient(to top, #000000, rgba(25, 25, 26, 0));/*
                        background: linear-gradient(to top, #19191a, rgba(25, 25, 26, 0));*/
                    }
					.copyright>p{margin:0;}
					.copyright{
						background-color:#000 !important;
						positon: relative !important;
						margin: 0;
					}
					.footer {
						bottom: 0;
						width: 100vw;
                        max-width: 100vw;
					}
					.social-icon {
                        background: radial-gradient(circle, rgba(25, 25, 26, 0.8) 0%, rgba(25, 25, 26, 0.2) 100%);
						/*background-color: rgba( 0, 0, 0, 0.5);*/ 
						/*background-color: rgba( 0, 0, 0, 0.5);*/ /* Translucent dark background */
						border-radius: 50%;
						transition: background 0.3s ease, border 0.3s ease,
							box-shadow 0.3s ease;
						padding: 8px 9px 7px 9px;
					}
                    .social-icon>i{
                        background-color:transparent;
                    }
					/* Gradient backgrounds on hover for each platform */
					.social-icon.facebook{padding:9px 12px 6px 12px;}
					.social-icon.facebook:hover {
						background: linear-gradient(45deg, #3b5998, #4a69ad, #8b9dc3, #3b5998);
					}
                    .social-icon.call:hover {
                        background: linear-gradient(45deg, #1e3a8a, #2563eb, #1d4ed8);
                    }
                    .social-icon.whatsapp:hover {
                        background: linear-gradient(45deg, #25d366, #128c7e, #075e54);
                    }
					.social-icon.twitter:hover {
                        background: linear-gradient(45deg, #1da1f2, #0e71c8, #00acee, #007bb5, #1da1f2);
					}
					.social-icon.gmail:hover {
                        background: linear-gradient(45deg, #db4437, #ea4335, #fbbc05);
                    }
					.social-icon.instagram:hover {
						background: linear-gradient(45deg, #833ab4, #c13584, #fd1d1d, #fcb045, #833ab4);
					}
					.social-icon.linkedin:hover {
						background: linear-gradient(45deg, #0077b5, #005983, #00a0dc, #0077b5);
					}
					.social-icon.github:hover {
						background: linear-gradient(45deg, #333333, #484848, #6e5494, #333333);
					}

					/* White border and glow effect on focus/active */
					.social-icon:active {
                        outline: none; /* Remove default outline */
                        box-shadow: 
                            0 0 10px 5px rgba(169, 169, 169, 0.1), /* Outer transparent grey */
                            0 0 8px 4px rgba(169, 169, 169, 0.3),  /* Mid-fade grey */
                            0 0 5px 2px rgba(169, 169, 169, 0.6),  /* Inner brighter grey */
                            inset 0 0 3px 1px rgba(169, 169, 169, 0.9); /* Inner solid grey */
                        background-color: rgba(0, 0, 0, 0.5) !important; /* Ensure the background remains translucent */    
                    }
					.details{
						color:white;
						padding: 25px;
						gap:0.5rem!important;
					}
					.footer-links{
						text-decoration:none;
						color:inherit;
					}
					.footer-links:hover{
						color:#ffefba;
						font-style: italic;
						border-bottom:1px solid #ffefba;
					}
				`}
			</style>
		</>
	);
};

export default Footer;
