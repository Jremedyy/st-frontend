import { styled } from "styled-components";
import LatestTradesItem, {
  LatestTradesItemInterface,
} from "./LatestTradesItem";

import LatestTradesItemSkeleton from "./LatestTradesItemSkeleton";

export interface LatestTradesGroupInterface {
  viewAllLink: string;
  latestTrades: LatestTradesItemInterface[];
}

const LatestTradesGroup = (props: LatestTradesGroupInterface) => {
  const isLoading = false;
  const skeletons = Array.from({ length: 5 });
  return (
    <Wrapper>
      <Header>
        <Title>{"Latest Trades"}</Title>
        <ViewAll href={props.viewAllLink}>{"View All"}</ViewAll>
      </Header>
      <TradeGroupWrapper>
        {isLoading
          ? skeletons.map((key, index) => (
              <LatestTradesItemSkeleton key={index} />
            ))
          : props.latestTrades.map((trade, index) => (
              <LatestTradesItem
                companyName={trade.companyName}
                companyTicker={trade.companyTicker}
                politicianName={trade.politicianName}
                politicalParty={trade.politicalParty}
                politicalRole={trade.politicalRole}
                state={trade.state}
                transactionType={trade.transactionType}
                transactionAmount={trade.transactionAmount}
                transactionDate={trade.transactionDate}
                image={trade.image}
                key={index}
              />
            ))}
      </TradeGroupWrapper>
    </Wrapper>
  );
};

export default LatestTradesGroup;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 8px 10px;
  @media only screen and (min-width: 768px) {
    padding: 20px 20px 8px 20px;
  }
  @media only screen and (min-width: 1025px) {
    padding: 20px 0px 8px 0px;
  }
`;

const Title = styled.h2`
  color: var(--font-color-primary);
  font-size: var(--header-mobile);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin: 0;
  @media only screen and (min-width: 1024px) {
    font-size: var(--header-desktop);
  }
`;

const ViewAll = styled.a`
  color: var(--link-color);
  text-align: right;
  font-size: var(--priamry-text-mobile);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    font-size: var(--priamry-text-desktop);
  }
`;

const TradeGroupWrapper = styled.div`
  :last-child {
    border-bottom: none;
  }

  @media only screen and (min-width: 1025px) {
    border-radius: 3px;
    overflow: hidden;
  }
`;
