const noticeData = Array.from({ length: 70 }, (_, index) => {
  const id = index + 1;
  const baseData = [
    {
      title: "새로운 업데이트가 진행됩니다!",
      image: "/images/cover.jpg",
      content:
        "이번 업데이트는 시스템 성능을 크게 향상시킬 예정입니다. 많은 기대 부탁드립니다.",
    },
    {
      title: "서비스 점검 안내",
      image: "/images/cover.jpg",
      content:
        "2025년 2월 5일, 오후 2시부터 4시까지 시스템 점검이 진행됩니다. 점검 시간 동안 서비스 이용이 불가합니다.",
    },
    {
      title: "새로운 기능 출시!",
      image: "/images/sub2_3_pic.jpg",
      content:
        "사용자 요청에 의해 새로운 기능이 추가되었습니다. 이 기능을 통해 더 편리한 서비스를 경험하세요.",
    },
    {
      title: "보안 패치 안내",
      image: "/images/cover.jpg",
      content:
        "최근 발견된 보안 취약점에 대한 패치가 진행되었습니다. 모든 사용자에게 즉시 업데이트를 권장합니다.",
    },
    {
      title: "서비스 이용약관 변경",
      image: "/images/s_mov_23.gif",
      content:
        "서비스 이용약관이 변경되었습니다. 변경된 내용을 확인하시고 동의해 주세요.",
    },
    {
      title: "설문조사 참여 요청",
      image: "/images/quick_ma.gif",
      content:
        "사용자 경험 향상을 위한 설문조사에 참여해주세요. 설문에 참여하면 소정의 보상을 드립니다.",
    },
    {
      title: "긴급 서버 점검 안내",
      image: "/images/plan_img4.gif",
      content:
        "예기치 않은 서버 장애로 인해 긴급 점검이 진행됩니다. 점검 완료 후 정상 서비스를 제공할 예정입니다.",
    },
    {
      title: "2025년 새해 복 많이 받으세요!",
      image: "/images/cover.jpg",
      content:
        "2025년이 밝았습니다. 새해 복 많이 받으시고, 올 한 해도 잘 부탁드립니다.",
    },
  ];

  const randomIndex = index % baseData.length;
  const selectedData = baseData[randomIndex];

  return {
    id,
    title: `${selectedData.title} (${id})`,
    image: selectedData.image,
    content: selectedData.content,
    date: `2025.${String(2 - Math.floor(id / 30)).padStart(2, "0")}.${String(
      (id % 28) + 1
    ).padStart(2, "0")}`,
    views: Math.floor(Math.random() * 200) + 1,
  };
});

export default noticeData;
