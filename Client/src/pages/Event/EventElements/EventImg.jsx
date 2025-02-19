import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const EventImg = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "32%",
        height: "auto",
        borderRadius: "md",
        overflow: "hidden",
        boxShadow: "lg",
        margin: "0 auto",
        padding: "60px 0px 43px",
        position: "relative", // 배경과 겹치게 설정
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* 배경 이미지 (motion.div 사용하여 부모와 동일한 애니메이션 적용) */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          right: "70px",
          width: "105%",
          height: "100%",
          backgroundImage: "url('/images/particle.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // 배경이 뒤로 가도록 설정
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5 }} // 부모와 동일한 시간 적용
      />

      {/* 기존 이미지 */}
      <Image
        src="/images/event.png"
        alt="Event Image"
        objectFit="contain"
        width="100%"
        height="100%"
      />
    </motion.div>
  );
};

export default EventImg;
