import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, autor }) => {
	return (
		<>
			{/* Helmet for setting metadata and title */}
			<Helmet>
				<meta charset="UTF-8" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content={autor} />
				<title>{title}</title>
			</Helmet>
			<Navbar />
			<main style={{ minHeight: "80vh" }}>{children}</main>
			<Footer />
		</>
	);
};

// Default props for metadata
Layout.defaultProps = {
	title: "Horizon Infotech - Welcome",
	description: "MERN Stack project",
	keywords: ["horizon", "Horizon Infotech", "mern", "react", "node", "mongodb", "expressjs", "seo"],
	autor: "Piyush Anand",
};

export default Layout;
