import styled from "styled-components";

import { useState } from "react";
import BiggestMoversItem, {
  BiggestMoversItemInterface,
} from "./BiggestMoversItem";
import BiggestMoversItemSkeleton from "./BiggestMoversItemSkeleton";

export interface BiggestMoversGroupInterface {
  viewAllLink: string;
  topGainers: BiggestMoversItemInterface[];
  worstPerformers: BiggestMoversItemInterface[];
}

const BiggestMoversGroup = (props: BiggestMoversGroupInterface) => {
  const [selectedToggle, setSelectedToggle] = useState<"Top" | "Worst">("Top");
  const skeletons = Array.from({ length: 10 });
  const isLoading = false;
  return (
    <Wrapper>
      <Header>
        <TitleLinkWrapper>
          <Title>{"Biggest Movers"}</Title>
          <ViewAll href={props.viewAllLink}>{"View All"}</ViewAll>
        </TitleLinkWrapper>
        <ToggleWrapper>
          <TopToggleButton
            onClick={() => setSelectedToggle("Top")}
            $selectedtoggle={selectedToggle}
          >
            {"Top Gainers"}
          </TopToggleButton>
          <WorstToggleButton
            onClick={() => setSelectedToggle("Worst")}
            $selectedtoggle={selectedToggle}
          >
            {"Worst Performers"}
          </WorstToggleButton>
        </ToggleWrapper>
      </Header>
      <Grid>
        {isLoading
          ? skeletons.map((key, index) => (
              <BiggestMoversItemSkeleton key={index} index={index} />
            ))
          : selectedToggle === "Top"
          ? props.topGainers.map((mover, index) => (
              <BiggestMoversItem
                key={index}
                avatarImage={mover.avatarImage}
                politicianName={mover.politicianName}
                politicianRole={mover.politicianRole}
                politicianParty={mover.politicianParty}
                politicianState={mover.politicianState}
                selectedToggle={selectedToggle.toLowerCase()}
                percentageDetails={mover.percentageDetails}
                index={index}
                politicianId={mover.politicianId}
              />
            ))
          : props.worstPerformers.map((mover, index) => (
              <BiggestMoversItem
                key={index}
                avatarImage={mover.avatarImage}
                politicianName={mover.politicianName}
                politicianRole={mover.politicianRole}
                politicianParty={mover.politicianParty}
                politicianState={mover.politicianState}
                percentageDetails={mover.percentageDetails}
                index={index}
                politicianId={mover.politicianId}
                selectedToggle={selectedToggle.toLowerCase()}
              />
            ))}
      </Grid>
    </Wrapper>
  );
};

export default BiggestMoversGroup;

const Wrapper = styled.div`
  width: 100%;
  padding: 28px 0;
  background-color: var(--background-color-primary);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 1025px) {
    padding: 0;
  }
`;

const Title = styled.h2`
  color: var(--primary-font-color);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 10px 0px;
`;

const ViewAll = styled.a`
  color: var(--link-color);

  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  line-height: normal;
`;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 8px;
`;

interface ToggleButtonProps {
  $selectedtoggle: "Worst" | "Top";
}
const WorstToggleButton = styled.button<ToggleButtonProps>`
  background-color: ${({ $selectedtoggle }) =>
    $selectedtoggle === "Worst" ? "#3A3B3C" : "#212122"};
  color: #fff;
  padding: 8px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  width: 100%;
  cursor: pointer;
  border-radius: 0px 3px 3px 0px;
  white-space: nowrap;
  flex: 1;
  flex-shrink: 0;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const TopToggleButton = styled(WorstToggleButton)`
  background-color: ${({ $selectedtoggle }) =>
    $selectedtoggle === "Top" ? "#3A3B3C" : "#212122"};
  border-radius: 3px 0px 0px 3px;
`;

const TitleLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);

  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
    border-radius: 3px;
    overflow: hidden;
    grid-auto-flow: column;
    .grid-item:nth-child(5),
    .grid-item:nth-child(10) {
      border-bottom: 0;
    }
  }
`;
