import mongoose from "mongoose";
import dotenv from 'dotenv';

 dotenv.config();

 const USERNAME=process.env.DB_USERNAME;
 const PASSWORD=process.env.DB_PASSWORD;

 

 const Connection=()=>{


    mongoose.set('strictQuery', false);  

  const MONGODB_URI=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.85byzcz.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });

    mongoose.connection.on("connected",()=>{
        console.log('Database is connected successfully');
    });

    mongoose.connection.on("disconnected",()=>{
        console.log("Database is disconnected");
    });

    mongoose.connection.on("error",()=>{
        console.log("Error while connecting the database ",error.message);
    });


}

export default Connection;