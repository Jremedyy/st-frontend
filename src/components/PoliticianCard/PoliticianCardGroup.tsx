import styled from "styled-components";
import PoliticianCard, { PoliticianCardProps } from "./PoliticianCard";

export interface PoliticianCardGroupProps {
  politicians: PoliticianCardProps[];
  isLoading: boolean;
}

const PoliticianCardGroup = (props: PoliticianCardGroupProps) => {
  return (
    <Wrapper>
      {props.politicians.map(
        (politician: PoliticianCardProps, index: number) => (
          <PoliticianCard
            politicianImage={politician.politicianImage}
            politicianName={politician.politicianName}
            chamber={politician.chamber}
            politicalParty={politician.politicalParty}
            state={politician.state}
            numOfTrades={politician.numOfTrades}
            tradeVolume={politician.tradeVolume}
            lastTradeDate={politician.lastTradeDate}
            key={index}
            politicianId={politician.politicianId}
            href={politician.href}
          />
        )
      )}
    </Wrapper>
  );
};

export default PoliticianCardGroup;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 14px;
  grid-template-rows: repeat(5, 1fr);

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    grid-template-rows: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
