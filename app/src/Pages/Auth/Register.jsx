import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import dotenv from 'dotenv';

// configure environment variables
dotenv.config("../../../"); // relative path of .env file

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrim_password, setCPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate=useNavigate();
    // submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name, email, password, confrim_password, phone, address});   // connection and parameters passing to server
            // const res = await axios.post("/api/v1/auth/register",{name, email, password, confrim_password, phone, address});   // connection and parameters passing to server
            if(res.data.success){
                toast.success(res.data.message); // success message toasted from server   
                navigate('/login');
            }else{
                toast.error(res.data.message);  // error message toasted from server
            }
            console.log(name,email,phone,address);
        }catch(error){
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    console.log(process.env.REACT_APP_API);
	return (
		<>
			<Layout title={"Register - Horizon InfoTech"}>
				<div className="register">
					<form onSubmit={handleSubmit} className="register-card">
                        <h1 className="register-title">Register</h1>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name:
							</label>
							<input
								type="text"
								name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
								className="form-control"
								id="name"
								aria-describedby="emailHelp"
								placeholder="Name"
                                required
							/>
							<label htmlFor="email" className="form-label">
								Email address:
							</label>
							<input
								type="email"
								name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
								className="form-control"
								id="email"
								aria-describedby="emailHelp"
								placeholder="Email"
                                required
							/>
							{/* <div id="emailHelp" className="form-text">
								We'll never share your email with anyone else.
							</div> */}
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password:
							</label>
							<input
								type="password"
								name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
								className="form-control"
								id="password"
								placeholder="Password"
                                required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="confrim_password" className="form-label">
								Confrim Password:
							</label>
							<input
								type="password"
								name="confrim_password"
								value={confrim_password}
                                onChange={(e) => setCPassword(e.target.value)}
                                className="form-control"
								id="confrim_password"
								placeholder="Confrim Password"
                                required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="phone" className="form-label">
								Phone No.:
							</label>
							<input
								type="text"
								name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
								className="form-control"
								id="phone"
								placeholder="Phone Number"
                                required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="address" className="form-label">
								Address:
							</label>
							<textarea
								type="tel"
								name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
								className="form-control"
								id="address"
								placeholder="Address"
                                required
							/>
						</div>
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								name="check"
								className="form-check-input"
								id="check"
							/>
							<label className="form-check-label" htmlFor="check">
								Check me out
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</Layout>
			<style jsx="">{`
				.register {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100vh;
					width: 100vw;
				}
				.register-card {
					width: 90vw;
					max-width: 500px;
					height: 100vh;
					padding: 20px;
					background: rgba(72, 73, 73, 0.296);
					border-radius: 10px;
					box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
					overflow-y: auto;
					overflow-x: hidden;
				}
				.register-card::-webkit-scrollbar {
					width: 0;
				}
				.register-title {
					text-align: center;
					margin-bottom: 20px;
					color: white;
				}
				.form-control {
					margin-bottom: 15px;
				}
				.btn-primary {
					width: 100%;
				}
			`}</style>
		</>
	);
};

export default Register;
