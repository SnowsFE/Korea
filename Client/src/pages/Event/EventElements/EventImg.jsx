import React from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion"; // 이미 Chakra에 포함된 framer-motion을 사용합니다.

const EventImg = () => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center", // 수평 중앙 정렬
        alignItems: "center",
        width: "45%",
        height: "auto",
        borderRadius: "md",
        overflow: "hidden",
        boxShadow: "lg",
        margin: "0 auto", // 부모 요소 내에서 중앙 정렬
      }}
      whileHover={{ scale: 1.05 }} // Hover 시 이미지 확대
      transition="transform 0.3s ease"
    >
      <Image
        src="/images/event.png"
        alt="Event Image"
        objectFit="contain" // 이미지 비율을 유지하며 크기 자동 조정
        width="100%" // 부모 요소의 너비에 맞춰서 크기 조정
        height="100%" // 높이는 부모 요소에 맞춰 설정
      />
    </motion.div>
  );
};

export default EventImg;
