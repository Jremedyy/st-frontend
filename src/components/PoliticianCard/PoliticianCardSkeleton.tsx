import styled from "styled-components";
import { DetailsWrapper, TradingDetails } from "./styles";
import {
  SkeletonImage,
  SkeletonText,
  SkeletonTextLine,
} from "../../styled-components/global-styles";

const PoliticianCardSkeleton = () => {
  return (
    <Wrapper>
      <SkeletonImageWrapper>
        <SkeletonImage />
      </SkeletonImageWrapper>
      <DetailsWrapper>
        <SkeletonText>
          <SkeletonTextLine />
          <SkeletonTextLine />
        </SkeletonText>
        <TradingDetails>
          {"No. Trades"}
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TradingDetails>
        <TradingDetails>
          {"Volume"}
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TradingDetails>
        <TradingDetails>
          {"Last Trade"}
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TradingDetails>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default PoliticianCardSkeleton;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 170px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--background-color-secondary);
`;
const SkeletonImageWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
