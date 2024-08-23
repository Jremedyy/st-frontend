import {
  CompanyAvatar,
  CompanyDetailsWrapper,
  CompanyGroup,
  CompanyGroupWrapper,
  CompanyName,
  CompanyTicker,
  TransactionDate,
  TransactionDetail,
  TransactionType,
  Wrapper,
} from "./styles";

export interface IndPoliticianTradeItemProps {
  companyName: string;
  companyTicker: string;
  transactionType: "Buy" | "Sell" | "Exchange";
  transactionAmount: string;
  transactionDate: string;
  companyImage: string;
  lastTradeItem?: boolean;
}

const IndPoliticianTradeItem = (props: IndPoliticianTradeItemProps) => {
  return (
    <Wrapper className={props.lastTradeItem ? "no-border" : ""}>
      <CompanyGroupWrapper>
        <CompanyGroup>
          <CompanyAvatar src={props.companyImage} />
          <CompanyDetailsWrapper>
            <CompanyName>{props.companyName}</CompanyName>
            <CompanyTicker>{props.companyTicker}</CompanyTicker>
          </CompanyDetailsWrapper>
        </CompanyGroup>
      </CompanyGroupWrapper>
      <TransactionType
        $transactiontype={props.transactionType.toLocaleLowerCase()}
      >
        {props.transactionType}
      </TransactionType>
      <TransactionDetail>{props.transactionAmount}</TransactionDetail>
      <TransactionDate>{props.transactionDate}</TransactionDate>
    </Wrapper>
  );
};

export default IndPoliticianTradeItem;
