import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--on-primary);
  color: var(--font-color-primary);
  position: relative;
  border-radius: 3px;
  font-size: 14px;
`;

export const DropDownSelector = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px 14px;
  width: 100%;
  height: 36px;
  cursor: pointer;
  &:hover {
    color: var(--font-color-primary);
  }
  z-index: 5;
`;

export const SvgWrapper = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
interface DropDownInterface {
  $isopen: string;
}
export const DropDownWrapper = styled.div<DropDownInterface>`
  display: ${(props) => (props.$isopen === "true" ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
  border-radius: 3px;
  position: absolute;
  background-color: var(--on-primary);
  top: 40px;
  max-height: 488px;
  overflow-y: auto;
  z-index: 10;
`;

interface DropDownItemWrapperInterface {
  $islastselecteditem: "true" | "false";
}

export const DropDownItemWrapper = styled.label<DropDownItemWrapperInterface>`
  display: flex;
  align-items: center;
  padding: 8px 14px;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  border-bottom: ${(props) =>
    props.$islastselecteditem === "true"
      ? "1px solid var(--border-color)"
      : "none"};
`;
export const DropDownItem = styled.input`
  align-items: center;
  display: flex;
  gap: 8px;
  position: relative;
  background-color: var(--background-color-secondary);
  accent-color: var(--font-color-secondary);
`;
