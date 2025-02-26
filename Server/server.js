const express = require("express");
const cors = require("cors");

const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());

// 이미지를 public/images 폴더에서 제공
app.use("/images", express.static("public/images"));

// Routes
const apiRoutes = require("./routes/apiRoutes");
const boardsRoutes = require("./routes/boardsRoutes");

// 경로 설정
app.use("/api", apiRoutes);
app.use("/boards", boardsRoutes);

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`서버 실행 : ${PORT}`));
