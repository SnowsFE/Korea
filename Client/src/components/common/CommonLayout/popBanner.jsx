import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Image,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const PopBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideFor24Hours, setHideFor24Hours] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const hideUntil = localStorage.getItem("hidePopBannerUntil");
    if (!hideUntil || new Date().getTime() > parseInt(hideUntil, 10)) {
      setIsOpen(true);
    }
  }, []);

  const closeBanner = () => {
    setIsOpen(false);
  };

  const handleRadioChange = () => {
    const hideUntil = new Date().getTime() + 24 * 60 * 60 * 1000; // 24시간 후
    localStorage.setItem("hidePopBannerUntil", hideUntil.toString());
    setHideFor24Hours(true);
    setIsOpen(false);
  };

  const goHref = () => {
    nav("/free-course");
  };

  return (
    <Modal isOpen={isOpen} onClose={closeBanner} isCentered>
      <ModalOverlay />
      <ModalContent
        maxW="700px"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        p={4}
      >
        {/* 제목 섹션 */}
        <Box bg="white" p={4} borderBottom="1px solid var(--line)">
          <Flex justify="space-between" align="center">
            <Text
              fontFamily="esamanru-B"
              fontWeight="bold"
              fontSize="1.4rem"
              textAlign="left"
            >
              🔥 100% 무료 수강 기회! 클릭하고 시작하기
            </Text>
            <ModalCloseButton
              onClick={closeBanner}
              color="var(--textdark)"
              tabIndex={-1}
            />
          </Flex>
        </Box>

        {/* <link rel="preload" href="/images/popBanner.png" as="image" /> */}
        {/* 이미지 섹션 */}
        <Box
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="/images/popBanner.png"
            decoding="async"
            alt="팝업 배너"
            borderRadius="lg"
            cursor="pointer"
            onClick={goHref}
            width="auto" // 100%를 사용하지 않고 자동으로 너비 설정
            maxWidth="600px" // 최대 너비를 설정하여 크기를 제한
            style={{ objectFit: "contain" }}
          />
          {/* 클릭 유도 애니메이션 */}
          <MotionBox
            position="absolute"
            top="10%"
            left="73%"
            transform="translate(-50%, -50%)"
            fontFamily="Money-Graphy"
            color="var(--textDark)"
            px={4}
            py={2}
            borderRadius="md"
            fontSize="2rem"
            fontWeight="bold"
            cursor="pointer"
            onClick={goHref}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Image src="/images/go.png" alt="firework" boxSize="40px" />
          </MotionBox>
        </Box>

        {/* 하단 버튼 섹션 */}
        <Box p={4} borderTop="1px solid var(--line)">
          <Flex
            justify="space-between"
            gap={3}
            align="center"
            position="relative"
          >
            <Box cursor="pointer" display="flex" alignItems="center">
              {/* 24시간 보지 않기 라디오 버튼 */}
              <label style={{ fontFamily: "esamanru-M", cursor: "pointer" }}>
                <input
                  type="radio"
                  checked={hideFor24Hours}
                  onChange={handleRadioChange}
                  style={{
                    marginRight: "10px",
                    cursor: "pointer",
                    transform: "translateY(1px)",
                  }}
                  tabIndex={-1}
                />
                24시간 보지 않기
              </label>
            </Box>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default PopBanner;
