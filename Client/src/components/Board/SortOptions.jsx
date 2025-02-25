import styled from "styled-components";

const SortOptions = ({ currentSort, onSortChange }) => {
  return (
    <SortContainer>
      <SortButton
        $active={currentSort === "latest"}
        onClick={() => onSortChange("latest")}
      >
        🌱 최신
      </SortButton>
      <SortButton
        $active={currentSort === "popular"}
        onClick={() => onSortChange("popular")}
      >
        🔥 인기
      </SortButton>
      <SortButton
        $active={currentSort === "top"}
        onClick={() => onSortChange("top")}
      >
        🌌 TOP 10
      </SortButton>
    </SortContainer>
  );
};

const SortContainer = styled.div`
  font-size: 16px;
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const SortButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.$active ? "#16be78" : "#f1f3f5")};
  color: ${(props) => (props.$active ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$active ? "#16be78" : "#dee2e6")};
  }
`;

export default SortOptions;
