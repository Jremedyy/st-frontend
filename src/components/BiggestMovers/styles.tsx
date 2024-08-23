import styled from "styled-components";

interface WrapperInterface {
  $index: number;
}
export const Wrapper = styled.div<WrapperInterface>`
  display: ${(props) => (props.$index > 4 ? "none" : "flex")};
  padding: 10px 20px;
  align-items: center;
  gap: 100px;
  align-self: stretch;
  border-bottom: 1px solid #4a4a4a;
  background: var(--background-color-secondary);
  justify-content: space-between;
  @media only screen and (min-width: 1025px) {
    display: flex;
    padding: 10px 20px;
    &:hover {
      background: var(--on-primary);
    }
  }
`;

export const Rank = styled.div`
  display: none;
  @media only screen and (min-width: 1440px) {
    display: flex;
    width: 20px;
    color: #fff;
    text-align: center;
    font-family: var(--font-family);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    flex-shrink: 0;
  }
`;
export const PoliticanGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    max-width: 160px;
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
    max-width: unset;
    width: unset;
  }
`;

export const PoliticianAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  object-fit: cover;
`;

export const PoliticianName = styled.div`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const PoliticianDetails = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    color: #fff;
    text-align: center;
    font-size: var(--secondary-text-deskotp);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 160px;
    width: 100%;
  }
  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 38px;
  flex-shrink: 0;
`;

export const PercentageDetail = styled.div`
  color: var(--positive);
  text-align: center;
  font-size: var(--secondary-text-deskotp);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &.negative {
    color: var(--negative);
  }
`;

export const YearToDate = styled.div`
  color: #e0e2e8;
  font-size: var(--secondary-text-deskotp);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &.loading {
    width: 100px;
  }
`;

export const LinkWrapper = styled.a``;
