import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<>
			<Navbar />
            <main style={{minHeight:"80vh"}}>
    			{props.children} {/* To display child components */}
            </main>
            <Footer/>
		</>
	);
};

export default Layout;
