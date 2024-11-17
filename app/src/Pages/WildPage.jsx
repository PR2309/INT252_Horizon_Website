import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const WildPage = () => {
	return (
		<>
			<Layout title={"Unknown - Horizon InfoTech"}>
				<div className="pnf">
					<img src="pnf.png" alt="" height={"300vh"}/>
					<h1 className="pnf-title">Error : 404</h1>
					<br />
					<h2 className="pnf-heading">Oops! Page Not Found</h2>
					<Link to="/" className="pnf-btn btn btn-outline-light mt-2">
						<nobr>Go Back</nobr>
					</Link>
				</div>
			</Layout>
			<style jsx="">{`
				.pnf {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					min-height: 65vh;
				}
				.pnf-title {
					font-size: 100px;
					font-weight: 700;
				}
				.pnf-heading {
					font-weight: normal;
				}
				
			`}</style>
		</>
	);
};

export default WildPage;
