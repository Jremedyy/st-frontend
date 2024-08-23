import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: inherit;
  padding: 10px 10px;
  border-radius: 3px 3px 0 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimePeriodWrapper = styled.div`
  width: 150px;
`;

export const Title = styled.h2`
  color: var(--font-color-primary);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

interface FilterGroupWrapperInterface {
  $numoffilters: number;
}

export const FilterGroupWrapper = styled.div<FilterGroupWrapperInterface>`
  display: ${(props) => (props.$numoffilters === 0 ? "none" : "grid")};
  gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  padding: 8px 0;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

interface DetailGroupWrapperInterface {
  $numofdetails: number;
}

export const DetailGroupWrapper = styled.div<DetailGroupWrapperInterface>`
  display: grid;
  padding: 0;
  border-radius: 3px;
  gap: 0;
  border: 1px solid var(--border-color);
  :first-child {
    border-left: none;
  }
  grid-template-columns: repeat(${(props) => props.$numofdetails || 5}, 1fr);
  @media only screen and (min-width: 768px) {
    display: grid;
    column-gap: 14px;
    border: none;
    background-color: inherit;
    padding: 8px 0px;
  }
`;

interface GridWrapper {
  $column: number;
}
export const DetailWrapper = styled.div<GridWrapper>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0;
  box-shadow: none;
  font-size: 12px;
  border-left: 1px solid var(--border-color);
  background-color: var(--on-primary);
  justify-content: center;
  align-items: center;
  height: 46px;
  @media only screen and (min-width: 768px) {
    padding: 8px 14px;
    border-left: unset;
    border-radius: 3px;
    display: grid;
    grid-auto-flow: column;
    height: unset;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const DetailIconWrapper = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: none;
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    display: flex;
    background-color: var(--background-color-secondary);
    padding: 4px;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.loading {
    width: 50px;
    @media only screen and (min-width: 768px) {
      width: 100px;
    }
  }
`;
export const DetailValue = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--font-color-primary);
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const DetailName = styled.div`
  font-size: 9px;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--font-color-secondary);
  white-space: nowrap;
  @media only screen and (min-width: 768px) {
    font-size: 11px;
  }
`;

export const FilterWrapper = styled.div`
  width: 100%;
`;

export const NameFilter = styled(FilterWrapper)`
  width: 100%;
`;
export const IssuerFilter = styled(FilterWrapper)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
export const PartyFilter = styled(FilterWrapper)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
export const StateFilter = styled(FilterWrapper)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;
export const CommitteeFilter = styled(FilterWrapper)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

export const GridWrapper = styled.div<GridWrapper>`
  display: ${(props) => props.$column >= 2 && "none"};
  grid-column-start: ${(props) => (2 - (props.$column % 2)).toString()};
  @media only screen and (min-width: 768px) {
    display: unset;
    grid-column-start: ${(props) => (4 - (props.$column % 4)).toString()};
  }
  @media only screen and (min-width: 1024px) {
    grid-column-start: ${(props) => (5 - (props.$column % 5)).toString()};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  justify-content: right;
  padding-bottom: 8px;
  gap: 7px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: unset;
  }
`;

export const ApplyButton = styled.button`
  width: 100%;
  height: 36px;
  background-color: var(--positive);
  border-radius: 3px;
  border-style: none;
  color: var(--font-color-primary);
  cursor: pointer;
  font-weight: 500;
  @media only screen and (min-width: 768px) {
    width: unset;
    padding: 0 10px;
  }
`;
export interface FilterItemProps {
  $isselected: string;
}
export const FilterItem = styled.button<FilterItemProps>`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid var(--Component---Detail, #3a3b3c);
  background-color: ${(props) =>
    props.$isselected === "true" ? "#E0E2E8" : "var(--on-primary)"};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) =>
    props.$isselected === "true" ? "black" : "var(--font-color-primary)"};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const HeaderFilterWrapper = styled.div`
  display: flex;
  gap: 12px;
  &.hidden {
    display: none;
  }
`;

export const ShowFilterButton = styled.button`
  color: var(--font-color-primary);
  height: 36px;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  background-color: inherit;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: var(--on-primary);
  }
`;

export const ClearFilterButton = styled(ApplyButton)`
  background-color: var(--negative);
`;

export const SummaryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export interface AccordionContentInterface {
  isOpen: boolean;
}
