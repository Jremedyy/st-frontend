import {
  DetailsWrapper,
  LinkWrapper,
  PercentageDetail,
  PoliticanGroupWrapper,
  PoliticianAvatar,
  PoliticianDetails,
  PoliticianName,
  Rank,
  Wrapper,
  YearToDate,
} from "./styles";

export interface BiggestMoversItemInterface {
  avatarImage: string;
  politicianName: string;
  politicianRole: string;
  politicianParty: string;
  politicianState: string;
  percentageDetails: string;
  index: number;
  selectedToggle: string;
  politicianId: string;
}

const BiggestMoversItem = (props: BiggestMoversItemInterface) => {
  return (
    <LinkWrapper href={`/politicians/${props.politicianId}`}>
      <Wrapper className="grid-item" $index={props.index}>
        <PoliticanGroupWrapper>
          <Rank>{props.index + 1}</Rank>
          <PoliticianAvatar src={props.avatarImage} />
          <PoliticianName>{props.politicianName}</PoliticianName>
        </PoliticanGroupWrapper>
        <PoliticianDetails>{`${props.politicianParty} / ${props.politicianRole} / ${props.politicianState}`}</PoliticianDetails>
        <DetailsWrapper>
          <PercentageDetail
            className={props.selectedToggle === "worst" ? "negative" : ""}
          >
            {props.percentageDetails}
          </PercentageDetail>
          <YearToDate>{"YTD"}</YearToDate>
        </DetailsWrapper>
      </Wrapper>
    </LinkWrapper>
  );
};

export default BiggestMoversItem;
