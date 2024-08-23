import styled from "styled-components";

export const Wrapper = styled.tr`
  width: 100%;
  height: 72px;
  justify-content: center;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #4a4a4a;
  justify-content: space-between;
  &.no-border {
    border-bottom: none;
  }
  @media only screen and (min-width: 1024px) {
    &.no-border {
      border-bottom: 1px solid #4a4a4a;
    }
  }
`;
export const CompanyGroupWrapper = styled.td`
  padding-left: 16px;
`;

export const CompanyAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 42px;
  object-fit: cover;
`;

export const CompanyDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyName = styled.div`
  color: var(--font-color-primary);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-size: var(--primary-text-mobile);

  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const CompanyTicker = styled.div`
  color: rgb(136, 136, 136);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  font-size: var(--secondary-text-mobile);

  @media only screen and (min-width: 1024px) {
    font-size: var(--secondary-text-desktop);
  }
`;

interface TransactionTypeInterface {
  $transactiontype: string;
}
export const TransactionType = styled.td<TransactionTypeInterface>`
  color: ${(props) =>
    props.$transactiontype === "buy"
      ? "var(--positive)"
      : props.$transactiontype === "sell"
      ? "var(--lemon)"
      : props.$transactiontype === "exchange" && "var(--negative)"};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 16px;
`;

interface TransactionDetailInterface {
  loading?: boolean;
}

export const TransactionDetail = styled.td<TransactionDetailInterface>`
  color: #fff;
  font-size: var(--primary-text-mobile);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ${(props) => !props.loading && " padding-left: 16px;"}
  @media only screen and (min-width: 1024px) {
    font-size: var(--primary-text-desktop);
  }
`;

export const TransactionDate = styled(TransactionDetail)``;

export const CompanyGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: left;
  align-items: center;
`;

export const DetailGroupWrapper = styled.div`
  display: none;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  padding: 0;
  gap: 0;
  border: 1px solid var(--border-color);
  :first-child {
    border-left: none;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    column-gap: 14px;
    border: none;
    background-color: var(--background-color-secondary);
    padding: 10px 16px 10px 16px;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0;
  box-shadow: none;
  padding: 8px 14px;
  font-size: 12px;
  border-left: 1px solid var(--border-color);
  background-color: #3a3b3c;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    border-left: unset;
    border-radius: 3px;
  }
  @media only screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const DetailIconWrapper = styled.div`
  display: none;
  width: 30px;
  height: 30px;
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
`;
export const DetailValue = styled.div`
  color: var(--Font---Main, #e0e2e8);
  font-family: var(--font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

export const ComponentFooter = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  background-color: var(--background-color-secondary);
  border-radius: 0 0 3px 3px;
  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const MoreTradesButton = styled.a`
  display: flex;
  padding: 10px 23px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: var(--font-color-primary) !important;
  background-color: #383839;
  border-style: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const HeaderFilterWrapper = styled.div`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: flex;
    gap: 12px;
  }
`;

interface FilterItemProps {
  $isselected: string;
}
export const FilterItem = styled.button<FilterItemProps>`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 3px;
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
