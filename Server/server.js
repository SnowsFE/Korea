const express = require("express");
const cors = require("cors");

const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());

// 이미지를 public/images 폴더에서 제공
app.use("/images", express.static("public/images"));

// API 경로 정의
app.get("/c/67ab0a03-cf80-8000-bddf-71eac1cb8588", async (req, res) => {
  try {
    // 실제 데이터를 처리하는 로직
    const jobInfo = [
      { job: "Web Developer", location: "Seoul" },
      { job: "Data Scientist", location: "Busan" },
    ];
    res.json(jobInfo); // 클라이언트에 데이터 반환
  } catch (error) {
    console.error(error); // 에러 로그 출력
    res.status(500).json({ message: "API 요청 실패" });
  }
});

// Routes
const apiRoutes = require("./routes/apiRoutes");

// 경로 설정
app.use("/api", apiRoutes);

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`서버 실행 : ${PORT}`));
