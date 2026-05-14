import exp from 'express'
import{ connect } from 'mongoose'
import cors from "cors"
import {employeeApp} from './EmployeeAPI.js'
import dotenv from "dotenv";
dotenv.config();
// create express app
const app=exp()
// add cors middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://week6-blush.vercel.app"
    ]
  })
);
// body parser middleware
app.use(exp.json())
app.use("/employee-api",employeeApp)


const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL);
        console.log("DB server connected")
        const PORT = process.env.PORT || 3000;
        // assign port
        app.listen(PORT,()=>console.log(`Server listening on ${PORT}...`))
    }catch(err){
        console.log("error in db connection",err.message)
    }
}
connectDB()




//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});

