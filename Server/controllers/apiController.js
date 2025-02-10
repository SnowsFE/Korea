const axios = require("axios");
const xml2js = require("xml2js");

const API_URL =
  "http://openapi.seoul.go.kr:8088/567366637662646232347a6d567a6a/xml/TnNetworkLstOpen/1/5/";

const getJobInfo = async (req, res) => {
  try {
    // API 요청 보내기
    const response = await axios.get(API_URL);

    // 응답 데이터가 XML 형식이므로 JSON으로 파싱
    const jsonResponse = await xml2js.parseStringPromise(response.data);

    // 클라이언트에게 JSON 형식으로 응답
    res.json(jsonResponse);
  } catch (error) {
    console.error("API 요청 실패:", error);
    res.status(500).send("서버 오류");
  }
};

module.exports = { getJobInfo };
