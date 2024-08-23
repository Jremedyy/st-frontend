import {
  SkeletonImage,
  SkeletonText,
  SkeletonTextLine,
} from "../../styled-components/global-styles";
import {
  DetailsWrapper,
  PercentageDetail,
  PoliticanGroupWrapper,
  PoliticianDetails,
  Wrapper,
  YearToDate,
  Rank,
} from "./styles";
import styled from "styled-components";

const BiggestMoversItemSkeleton = (props: { index: number }) => {
  return (
    <Wrapper className="grid-item" $index={props.index}>
      <PoliticanGroupWrapper>
        <Rank>{props.index + 1}</Rank>
        <SkeletonImageWrapper>
          <SkeletonImage />
        </SkeletonImageWrapper>
        <Width>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </Width>
      </PoliticanGroupWrapper>
      <PoliticianDetails>
        <SkeletonText>
          <SkeletonTextLine />
        </SkeletonText>
      </PoliticianDetails>
      <DetailsWrapper>
        <YearToDate className="loading">
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </YearToDate>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default BiggestMoversItemSkeleton;
const SkeletonImageWrapper = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const Width = styled.div`
  width: 150px;
`;
