import express from "express";
import router from "./routes/router.js"
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
router(app);
app.listen(8000, ()=>{
    console.log("Server listening to 8000");
})