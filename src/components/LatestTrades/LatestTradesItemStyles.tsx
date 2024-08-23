import styled from "styled-components";
interface WrapperInterface {
  $isloading: string;
}
export const Wrapper = styled.div<WrapperInterface>`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 8px 20px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #4a4a4a;
  background: var(--background-color-secondary);
  justify-content: space-between;
  height: 119px;
  @media only screen and (min-width: 768px) {
    height: ${(props) => (props.$isloading === "true" ? "64px" : "unset")};
  }
  @media only screen and (min-width: 1024px) {
    height: ${(props) => (props.$isloading === "true" ? "94px" : "unset")};
  }
  @media only screen and (min-width: 1240px) {
    height: ${(props) => (props.$isloading === "true" ? "119px" : "unset")};
  }
`;

export const CompanyPoliticanWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
  }
  @media only screen and (min-width: 1025px) {
    flex-direction: column;
    gap: 10px;
    width: unset;
    max-width: unset;
    justify-content: unset;
  }
`;

export const CompanyGroupWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const CompanyAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: var(--background-color-primary);
  object-fit: cover;
  aspect-ratio: 1;
  font-weight: 700;
  flex-shrink: 0;
  flex-shrink: 0;
`;
interface CompanyDetailsWrapperInterface {
  $isloading: string;
}
export const CompanyDetailsWrapper = styled.div<CompanyDetailsWrapperInterface>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.$isloading === "true" ? "100px" : "100%")};
`;

export const CompanyName = styled.div`
  color: var(--font-color-primary);
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const CompanyTicker = styled.div`
  color: rgb(136, 136, 136);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;

export const PoliticanGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PoliticianName = styled.div`
  color: #fff;
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const PoliticianDetails = styled.div`
  color: rgb(136, 136, 136);
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
  @media only screen and (min-width: 1240px) {
    display: flex;
    font-size: var(--secondary-text-desktop);
  }
`;

export const TransactionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: end;
  align-items: center;
  gap: 19px;
  color: #fff;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    padding-left: 16px;
  }
  @media only screen and (min-width: 1025px) {
    flex-direction: column;
    justify-content: unset;
    width: unset;
    padding-left: unset;
    max-width: unset;
  }
`;

interface TransactionTypeInterface {
  $transactiontype: "Buy" | "Sell";
}
export const TransactionType = styled.div<TransactionTypeInterface>`
  color: ${(props) =>
    props.$transactiontype === "Sell" ? "var(--negative)" : "var(--positive)"};
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 700;
  width: 100px;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const TransactionDetail = styled.div`
  display: unset;
  color: #fff;
  font-size: var(--secondary-text-mobile);
  font-style: normal;
  font-weight: 400;
  width: 100px;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
  @media only screen and (min-width: 1240px) {
    display: unset;
    font-size: var(--secondary-text-desktop);
  }
`;

export const TransactionDate = styled(TransactionDetail)`
  display: unset;
  width: 100px;
  font-size: var(--secondary-text-mobile);
  @media only screen and (min-width: 1240px) {
    font-size: var(--secondary-text-desktop);
  }
`;
