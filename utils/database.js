import mongoose from "mongoose";

let isConnected = false; // Track the Connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected');

        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
        })

        isConnected = true;

        console.log('MongoDB connected');

    } catch (error) {
        console.log(error);
    }
}