import {
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const MainGridIcon = () => {
  const icons = [
    { title: "무료 수강", label: "100%" },
    { title: "온라인 특강", label: "특강" },
    { title: "취업 특강", label: "특강" },
    { title: "교육 박람회", label: "정보" },
    { title: "포트폴리오", label: "정보" },
    { title: "단체 문의", label: "정보" },
  ];
  const iconBgColor = useColorModeValue("orange.100", "orange.800");

  return (
    <Flex justify="center" p={4}>
      <SimpleGrid columns={[2, 3, 6]} spacing="2.5rem">
        {icons.map((icon, index) => (
          <MotionBox
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            position="relative"
            p={4}
            borderRadius="xl"
            textAlign="center"
          >
            {icon.label && (
              <Box
                position="absolute"
                top="1"
                right="0"
                bg="orange.500"
                color="white"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="xs"
              >
                {icon.label}
              </Box>
            )}
            <Box
              width="84px"
              height="84px"
              bg={iconBgColor}
              borderRadius="lg"
              margin="0 auto"
              mb={3}
              cursor="pointer"
            />
            <Text fontSize="1rem" fontFamily="esamanru-B" color="#333">
              {icon.title}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default MainGridIcon;
