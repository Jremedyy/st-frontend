import styled from "styled-components";

interface WrapperProps {
  $politicalparty: "Democratic" | "Republican" | string;
}
export const LinkWrapper = styled.a``;
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-start;
  height: 170px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border-right: 8px solid var(--background-color-secondary);
  background-color: var(--background-color-secondary);
  border-left: solid 8px
    ${(props) =>
      props.$politicalparty === "Democratic"
        ? "rgba(22, 105, 149, 0.40)"
        : props.$politicalparty === "Republican"
        ? "rgba(226, 0, 0, 0.4)"
        : "grey"};
`;

export const PoliticianAvatar = styled.img`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  justify-content: center;
  gap: 8px;
`;

export const TradingDetails = styled.div`
  color: var(--font-color-primary);
  font-family: var(--font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: space-between;
`;

export const PoliticianName = styled.div`
  color: var(--font-color-primary);
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const PoliticianDetails = styled.div`
  color: var(--font-color-primary);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-secondary);
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;

export const Detail = styled.div`
  color: var(--font-color-secondary);
  text-align: center;
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;
