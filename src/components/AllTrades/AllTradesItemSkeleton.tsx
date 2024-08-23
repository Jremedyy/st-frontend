import styled from "styled-components";
import {
  SkeletonImage,
  SkeletonText,
  SkeletonTextLine,
} from "../../styled-components/global-styles";
import {
  FiledWrapper,
  IssuerDetailWrapper,
  IssuerGroup,
  IssuerTd,
  PoliticianGroup,
  PoliticianTd,
  PublishedWrapper,
  PublishedTd,
  TradedWrapper,
  TypeTd,
  TypeWrapper,
  Wrapper,
  TradedTd,
  FiledTd,
  OwnerTd,
  SizeTd,
  PriceTd,
  OwnerWrapper,
  SizeWrapper,
  PriceWrapper,
} from "./styles";

const AllTradesItemSkeleton = () => {
  return (
    <Wrapper>
      <PoliticianTd>
        <PoliticianGroup>
          <SkeletonImageWrapper>
            <SkeletonImage />
          </SkeletonImageWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </PoliticianGroup>
      </PoliticianTd>
      <IssuerTd>
        <IssuerGroup>
          <SkeletonImageWrapper>
            <SkeletonImage />
          </SkeletonImageWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </IssuerGroup>
      </IssuerTd>
      <TypeTd>
        <TypeWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TypeWrapper>
      </TypeTd>
      <PublishedTd>
        <PublishedWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </PublishedWrapper>
      </PublishedTd>
      <TradedTd>
        <TradedWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </TradedWrapper>
      </TradedTd>
      <FiledTd>
        <FiledWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </FiledWrapper>
      </FiledTd>
      <OwnerTd>
        <OwnerWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </OwnerWrapper>
      </OwnerTd>
      <SizeTd>
        <SizeWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </SizeWrapper>
      </SizeTd>
      <PriceTd>
        <PriceWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </PriceWrapper>
      </PriceTd>
    </Wrapper>
  );
};

export default AllTradesItemSkeleton;

const SkeletonImageWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
