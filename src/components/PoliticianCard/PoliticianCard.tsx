import {
  DetailsWrapper,
  PoliticianDetails,
  PoliticianName,
  TradingDetails,
  Wrapper,
  PoliticianAvatar,
  Detail,
  LinkWrapper,
} from "./styles";

export interface PoliticianCardProps {
  politicianImage: string;
  politicianName: string;
  chamber: "House" | "Senate";
  politicalParty: "Democratic" | "Republican";
  state: string;
  numOfTrades: string;
  tradeVolume: string;
  lastTradeDate: string;
  politicianId: string;
  href: string;
}
const PoliticianCard = (props: PoliticianCardProps) => {
  return (
    <LinkWrapper href={props.href}>
      <Wrapper $politicalparty={props.politicalParty}>
        <PoliticianAvatar src={props.politicianImage} />
        <DetailsWrapper>
          <PoliticianName>{props.politicianName}</PoliticianName>
          <PoliticianDetails>{`${props.chamber} / ${props.politicalParty} / ${props.state} `}</PoliticianDetails>
          <TradingDetails>
            {"No. Trades"}
            <Detail>{props.numOfTrades}</Detail>
          </TradingDetails>
          <TradingDetails>
            {"Volume"}
            <Detail>{props.tradeVolume}</Detail>
          </TradingDetails>
          <TradingDetails>
            {"Last Trade"} <Detail>{props.lastTradeDate}</Detail>
          </TradingDetails>
        </DetailsWrapper>
      </Wrapper>
    </LinkWrapper>
  );
};

export default PoliticianCard;
