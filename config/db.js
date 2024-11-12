import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
        });
        console.log(`Connected to MongoDB Database:\nHost: ${conn.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`Error connecting to MongoDB:\n${error}`.bgRed.white);
    }
};
export default connectDB;