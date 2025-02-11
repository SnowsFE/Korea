const Work = require("../models/Work_Seoul.json");

const getJobInfo = async (req, res) => {
  try {
    const jsonResponse = {
      DESCRIPTION: {
        SITE_NM: "기관명",
        SITE_IMG: "이미지",
        SITE_ADDR: "사이트주소",
        SITE_GUBUN: "사이트구분",
      },
      DATA: Work.DATA,
    };

    // 클라이언트에게 JSON 형식으로 응답
    res.json(jsonResponse);
  } catch (error) {
    console.error("API 요청 실패:", error);
    res.status(500).send("서버 오류");
  }
};

module.exports = { getJobInfo };
