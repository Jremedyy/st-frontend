import {
  FiledWrapper,
  IssuerAvatar,
  IssuerDetail,
  IssuerDetailWrapper,
  IssuerGroup,
  IssuerName,
  IssuerTd,
  Subtitle,
  PoliticianAvatar,
  PoliticianDetail,
  PoliticianDetailWrapper,
  PoliticianGroup,
  PoliticianName,
  PoliticianTd,
  PublishedWrapper,
  PublishedTd,
  TradedWrapper,
  Type,
  TypeTd,
  TypeWrapper,
  Wrapper,
  Title,
  TradedTd,
  FiledTd,
  OwnerTd,
  SizeTd,
  PriceTd,
  OwnerWrapper,
  SizeWrapper,
  PriceWrapper,
} from "./styles";

export interface AllTradesItemProps {
  politicianName: string;
  chamber: string;
  politicalParty: string;
  stateAbv: string;
  issuerName: string;
  issuerDetail?: string;
  transactionType: string;
  buyDayMonth: string;
  buyYear: string;
  timeTookToReport: string;
  owner: string;
  size: string;
  price?: string;
  reportedDayMonth: string;
  reportedYear: string;
}

const AllTradesItem = ({
  politicianName,
  chamber,
  politicalParty,
  stateAbv,
  issuerName,
  issuerDetail,
  transactionType,
  buyDayMonth,
  buyYear,
  reportedDayMonth,
  reportedYear,
  timeTookToReport,
  owner,
  size,
  price,
}: AllTradesItemProps) => {
  return (
    <Wrapper>
      <PoliticianTd>
        <PoliticianGroup>
          <PoliticianAvatar src="https://www.congress.gov/img/member/p000197_200.jpg" />
          <PoliticianDetailWrapper>
            <PoliticianName $politicalparty="democrat">
              {politicianName}
            </PoliticianName>
            <PoliticianDetail>{`${politicalParty} | ${chamber} | ${stateAbv}`}</PoliticianDetail>
          </PoliticianDetailWrapper>
        </PoliticianGroup>
      </PoliticianTd>
      <IssuerTd>
        <IssuerGroup>
          <IssuerAvatar>{issuerName[0]}</IssuerAvatar>
          <IssuerDetailWrapper>
            <IssuerName $politicalparty={politicalParty.toLowerCase()}>
              {issuerName}
            </IssuerName>
            <IssuerDetail>{issuerDetail || "N/A"}</IssuerDetail>
          </IssuerDetailWrapper>
        </IssuerGroup>
      </IssuerTd>
      <TypeTd>
        <TypeWrapper>
          <Type $transactiontype={transactionType.toLowerCase()}>
            {transactionType}
          </Type>
        </TypeWrapper>
      </TypeTd>
      <PublishedTd>
        <PublishedWrapper>
          <Title>{reportedDayMonth}</Title>
          <Subtitle>{reportedYear}</Subtitle>
        </PublishedWrapper>
      </PublishedTd>
      <TradedTd>
        <TradedWrapper>
          <Title>{buyDayMonth}</Title>
          <Subtitle>{buyYear}</Subtitle>
        </TradedWrapper>
      </TradedTd>
      <FiledTd>
        <FiledWrapper>
          <Title>{timeTookToReport}</Title>
          <Subtitle>{"Days"}</Subtitle>
        </FiledWrapper>
      </FiledTd>
      <OwnerTd>
        <OwnerWrapper>
          <Title>{owner}</Title>
        </OwnerWrapper>
      </OwnerTd>
      <SizeTd>
        <SizeWrapper>
          <Title>{size}</Title>
        </SizeWrapper>
      </SizeTd>
      <PriceTd>
        <PriceWrapper>
          <Title>{price || <Subtitle>{"N/A"}</Subtitle>}</Title>
        </PriceWrapper>
      </PriceTd>
    </Wrapper>
  );
};

export default AllTradesItem;
