const express = require("express");
const cors = require("cors");

const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());

// Routes
const apiRoutes = require("./routes/apiRoutes");

// 경로
app.use("/api", apiRoutes);

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`서버 실행 : ${PORT}`));
