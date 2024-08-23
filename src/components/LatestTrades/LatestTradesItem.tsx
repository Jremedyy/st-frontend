import {
  CompanyAvatar,
  CompanyDetailsWrapper,
  CompanyGroupWrapper,
  CompanyName,
  CompanyPoliticanWrapper,
  CompanyTicker,
  PoliticanGroupWrapper,
  PoliticianDetails,
  PoliticianName,
  TransactionDate,
  TransactionDetail,
  TransactionInfoWrapper,
  TransactionType,
  Wrapper,
} from "./LatestTradesItemStyles";

export interface LatestTradesItemInterface {
  companyName: string;
  companyTicker: string;
  politicianName: string;
  politicalParty: string;
  politicalRole: "Senate" | "House";
  state: string;
  transactionType: "Buy" | "Sell";
  transactionAmount: string;
  transactionDate: string;
  image: string;
}

const LatestTradesItem = (props: LatestTradesItemInterface) => {
  return (
    <Wrapper $isloading="false">
      <CompanyPoliticanWrapper>
        <CompanyGroupWrapper>
          <CompanyAvatar>{props.companyName[0]}</CompanyAvatar>
          <CompanyDetailsWrapper $isloading="false">
            <CompanyName>{props.companyName}</CompanyName>
            <CompanyTicker>{props.companyTicker}</CompanyTicker>
          </CompanyDetailsWrapper>
        </CompanyGroupWrapper>
        <PoliticanGroupWrapper>
          <PoliticianName>{props.politicianName}</PoliticianName>
          <PoliticianDetails>{`${props.politicalParty} / ${props.politicalRole} / ${props.state}`}</PoliticianDetails>
        </PoliticanGroupWrapper>
      </CompanyPoliticanWrapper>
      <TransactionInfoWrapper>
        <TransactionType $transactiontype={props.transactionType}>
          {props.transactionType}
        </TransactionType>
        <TransactionDetail>{props.transactionAmount}</TransactionDetail>
        <TransactionDate>{props.transactionDate}</TransactionDate>
      </TransactionInfoWrapper>
    </Wrapper>
  );
};

export default LatestTradesItem;
