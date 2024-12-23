import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req,res) => {
    try{
        const {name, email, password, phone, address} = req.body;
        // validations
        if(!name){return res.send({message:'Name is required'});}
        if(!email){return res.send({message:'Email is required'});}
        if(!password){return res.send({message:'Password is required'});}
        if(!phone){return res.send({message:'Phone Number is required'});}
        if(!address){return res.send({message:'Address is required'});}

        // Checking User
        // existing users
        const existiningUser = await userModel.findOne({email})
        if(existiningUser){
            return res.status(200).send({
                success:false,
                message:'Already registered, please login'
            });
        }
        // register users
        const hashedPassword = await hashPassword(password);
        // save
        const user = await new userModel({name, email, phone, address, password: hashedPassword}).save();
        res.status(201).send({
            success:true,
            message:"User register successfully",
            user,
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            error
        });
    }
};

// POST LOGIN
export const loginController = async (req,res) => {
    try{
        const {email,password} = req.body;
        // validation
        if(!email || !password){
            return res.status(404).send({
            // for security reasons (to prevent users from using brute force) we need to return an error message here instead of actually wrong parameter
                success: false,
                error:'Invalid Email or Password'
            });
        }
        // checking user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: 'User not found: Email not Registered'
            });
        }
        //decrypting password
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            });
        }
        // token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn: "7d"});
        res.status(200).send({
            success:true,
            message: "Logged In successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            }, token
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login",
            error
        });
    }
};

export const testController = (req,res) => {
    console.log("protected Route");
    return res.send("Protected Route");
    // return router.post('/login', loginController);
};