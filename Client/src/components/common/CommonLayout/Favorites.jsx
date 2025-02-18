import React from "react";
import { useToast, Image, Text } from "@chakra-ui/react";

const Favorites = () => {
  const toast = useToast(); // Toast 훅 사용

  // 화면 크기에 따른 toast 메시지
  const handleClick = () => {
    const isMobile = window.innerWidth <= 768; // 768px 이하를 모바일로 간주

    // 모바일용 메시지
    if (isMobile) {
      toast({
        title: (
          <Text
            fontFamily="'esamanru-M', sans-serif"
            fontSize="18px"
            fontWeight="100"
            color="var(--textColor)"
            marginTop="1px"
          >
            홈 화면에 추가하기
          </Text>
        ),
        description: (
          <Text
            fontFamily="'esamanru-L', sans-serif"
            fontSize="14px"
            color="var(--textColor)"
            marginTop="2px"
          >
            빠른 접속을 원하시면 화면 하단의 공유 버튼을 눌러 '홈 화면에 추가'를
            선택하세요!
          </Text>
        ),
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "top",
        variant: "solid",
      });
    } else {
      // 데스크탑용 메시지
      toast({
        title: (
          <Text
            fontFamily="'esamanru-M', sans-serif"
            fontSize="20px"
            fontWeight="100"
            color="var(--textColor)"
            marginTop="1px"
          >
            즐겨찾기 방법 안내
          </Text>
        ),
        description: (
          <Text
            fontFamily="'esamanru-L', sans-serif"
            fontSize="14px"
            color="var(--textColor)"
            marginTop="2px"
          >
            Ctrl + D를 눌러 즐겨찾기 꾸욱 ~ 🎉
          </Text>
        ),
        status: "info",
        duration: 4000,
        isClosable: true,
        position: "top",
        variant: "solid",
      });
    }
  };

  return (
    <div>
      {/* 스타 이미지 버튼 클릭 시 Toast 띄우기 */}
      <Image
        src="/images/star.png"
        alt="Star"
        boxSize="24px"
        cursor="pointer"
        onClick={handleClick} // 클릭 시 Toast 이벤트
      />
    </div>
  );
};

export default Favorites;
