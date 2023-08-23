import express from "express";

const app = express();
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import likeRoutes from "./routes/likes.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"


//middlewares
app.use(express.json())

app.use("/api/users", userRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/auths/", authRoutes)

app.listen(8080, ()=>{
    console.log("API working!")
})