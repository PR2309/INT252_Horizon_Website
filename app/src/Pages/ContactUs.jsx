import React, {useState} from "react";
import Layout from "../components/Layout/Layout";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaPhoneVolume, FaMapLocationDot } from "react-icons/fa6";
// import { PiInstagramLogoFill } from "react-icons/pi";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

const ContactUs = () => {
	const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 2000); // Reset after the animation
  };
	return (
		<>
			<Layout title={"Contact Us - Horizon InfoTech"}>
				<div className="contact-page container-fluid d-flex p-5">
					<img src="logo.png" alt="Logo" width={"300px"} title="Horizen InfoTech" className={`coin ${isFlipping ? "flip" : ""}`}
        onClick={handleFlip}/>
					<div className="contact-para text-light rounded-5">
						<h2 className="contact-title bg-dark p-2">Contact Us</h2>
						<div className="contact-info container 60vw">
														
							<p>
								<span title="Tollfree"><TfiHeadphoneAlt/>&nbsp;:&nbsp;</span>
								1800 123 593
							</p>
							{/* <p>
								<span title="Instagram"><PiInstagramLogoFill/>&nbsp;:&nbsp;</span>
								horizon_Infotech
							</p> */}
							<p>
								<span title="What'sApp"><SiWhatsapp />&nbsp;:&nbsp;</span>
							</p>
							<p>
								<span title="GMail"><BiLogoGmail />&nbsp;:&nbsp;</span>
								horizoninfotech22@gmail.com
							</p>
							<p>
								<span title="Address"><FaMapLocationDot />&nbsp;:&nbsp;</span>
								Panditalaya Building, Chunnam Lane, Krishna Kunj, Grant Road East, Shapur Baug, Grant Road, Mumbai, Maharashtra 400007, India
							</p>
						</div>
					</div>
				</div>
			</Layout>
			<style jsx="">{`
				.coin-flip-container {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
					background-color: #f5f5f5;
				}
				.coin {
					padding-top:5rem;
					width: 250px;
					height: 300px;
					cursor: pointer;
					transition: transform 0.5s ease;
				}
				.coin.flip {
					animation: flipAnimation 1s infinite;
				}
				@keyframes flipAnimation {
					0% {transform: rotateY(0);}
					25% {transform: rotateY(90deg);}
					50% {transform: rotateY(180deg);}
					75% {transform: rotateY(270deg);}
					100% {transform: rotateY(360deg);}
				}
				.contact-page {
					flex-direction: row;
					justify-content: center;
					height:60vh;
					padding:auto;
				}
				.contact-details{
					width: 70vw!important;
					min-width: 70vw;
					
				}
				.contact-para>h2{
					border-radius: 20px 0;
				}
				.contact-para{
					background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.679), rgba(82, 82, 82, 0.343))!important;
				}
				.contact-info{
					color: black !important;
				}
			`}</style>
		</>
	);
};

export default ContactUs;
