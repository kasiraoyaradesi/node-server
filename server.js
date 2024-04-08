import express from 'express'
import userRouter from "./routes/userRoute.js"
// import todoRouter from "./routes/todoRoutes.js"
// import postRouter from "./routes/postRoutes.js"
// import commentRouter from "./routes/commentRoutes.js"
// import likeRouter from "./routes/likeRoutes.js"
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());  // config here express
app.use(cors()) // config here cors
// app.use("/images", express.static("images"));

app.use("/users", userRouter);  // these are api
// app.use("/todos", todoRouter);
// app.use("/posts", postRouter);
// app.use("/comments", commentRouter);
// app.use("/likes", likeRouter);

// app.use("/products", postRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/merndb")
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });
