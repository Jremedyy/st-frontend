import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--background-color-secondary);
  color: var(--font-color-primary);
  position: relative;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  background-color: var(--on-primary);
  border-radius: 3px;
  padding: 10px;
  color: var(--font-color-primary);
  width: 100%;
  border: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
interface DropDownInterface {
  $isopen: string;
}
export const DropDownWrapper = styled.div<DropDownInterface>`
  display: ${(props) => (props.$isopen === "true" ? "flex" : "none")};
  max-height: 488px;
  width: 100%;
  flex-direction: column;
  border-radius: 3px;
  position: absolute;
  background-color: var(--on-primary);
  z-index: 10;
  overflow-y: auto;
  top: 40px;
`;
interface DropDownItemWrapperInterface {
  $islastselecteditem: string;
}
export const DropDownItemWrapper = styled.label<DropDownItemWrapperInterface>`
  display: flex;
  padding: 8px 14px;
  gap: 8px;
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
  cursor: pointer;
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  position: absolute;
  right: 5px;
  padding: 4px;
  top: 3px;
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
