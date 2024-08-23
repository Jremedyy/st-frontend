import { Certificate } from "crypto";
import { GlobeSvg } from "../../common/icons";
import {
  Avatar,
  AvatarWrapper,
  PoliticianDetail,
  PoliticianDetailGroup,
  PoliticianName,
  PoliticianWrapper,
  SocialAccount,
  SocialAccountGroup,
  Title,
  TradeDetail,
  TradeDetailGroup,
  Value,
  Wrapper,
} from "./styles";

export interface IndPoliticianOverviewProps {
  politicianName: string;
  politicianImage: string;
  chamber: string;
  politicalParty: string;
  state: string;
  district: string | null;
  age: string;
  tradeVolume: string;
  dateOfLastTrade: string;
  committees: string[];
  numOfTrades: string;
  politicianWebUrl: string;
}

const IndPoliticianOverview = (props: IndPoliticianOverviewProps) => {
  const handleSocialClick = () => {
    window.open(props.politicianWebUrl, "_blank");
  };
  return (
    <Wrapper>
      <PoliticianWrapper>
        <AvatarWrapper>
          <Avatar src={props.politicianImage} />
        </AvatarWrapper>
        <PoliticianDetailGroup>
          <PoliticianName>{props.politicianName}</PoliticianName>
          <PoliticianDetail>{`${props.chamber} / ${props.politicalParty} / ${props.state}`}</PoliticianDetail>
        </PoliticianDetailGroup>
      </PoliticianWrapper>
      <TradeDetailGroup>
        <TradeDetail>
          <Value>{props.numOfTrades}</Value>
          <Title>{"No. Trades"}</Title>
        </TradeDetail>
        <TradeDetail>
          <Value>{props.tradeVolume}</Value>
          <Title>{"Volume"}</Title>
        </TradeDetail>
        <TradeDetail>
          <Value>{props.dateOfLastTrade}</Value>
          <Title>{"Last Trade (Date)"}</Title>
        </TradeDetail>
      </TradeDetailGroup>
      {props.district !== null && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      )}
      <SocialAccountGroup>
        <SocialAccount href="" onClick={() => handleSocialClick()}>
          <GlobeSvg />
        </SocialAccount>
      </SocialAccountGroup>
    </Wrapper>
  );
};

export default IndPoliticianOverview;
