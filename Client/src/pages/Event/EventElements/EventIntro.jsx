import React from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  VStack,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const EventIntro = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="center">
        {/* 제목 부분 */}
        <Heading as="h1" size="xl" textAlign="center" color="teal.600">
          식생활교육전문가 등 137개 자격증 과정 신규 컨텐츠 개발 및 LMS 플랫폼을
          반영한 과정 신설
        </Heading>

        {/* 설명 부분 */}
        <Text fontSize="lg" color="gray.600" textAlign="center" px={6}>
          본 과정은 최신 LMS 플랫폼을 반영하여 실시간 온라인 교육과 실습을 통해
          식생활교육전문가 등 다양한 자격증을 취득할 수 있는 기회를 제공합니다.
          신규 과정으로 향상된 학습 환경을 제공하며, 효과적인 학습을 위한 다양한
          기능을 포함하고 있습니다.
        </Text>

        {/* 이미지와 관련된 콘텐츠 */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "auto",
            margin: "30px 0",
          }}
          initial={{ opacity: 0 }} // 처음에는 보이지 않음
          whileInView={{ opacity: 1 }} // 뷰포트에 들어오면 서서히 나타남
          transition={{ duration: 1.5 }} // 1.5초 동안 서서히 나타나는 효과
        >
          <img
            src="/images/logo.gif"
            alt="intro"
            style={{ maxWidth: "100%" }}
          />
        </motion.div>

        {/* 버튼 부분 */}
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => alert("신규 과정에 대해 더 알아보기")}
        >
          더 알아보기
        </Button>
      </VStack>
    </Container>
  );
};

export default EventIntro;
