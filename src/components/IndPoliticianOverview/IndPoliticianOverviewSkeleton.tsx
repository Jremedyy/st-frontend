import styled from "styled-components";
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
import {
  SkeletonImage,
  SkeletonText,
  SkeletonTextLine,
} from "../../styled-components/global-styles";

const IndPoliticianOverviewSkeleton = () => {
  return (
    <Wrapper>
      <PoliticianWrapper>
        <AvatarWrapper>
          <SkeletonImageWrapper>
            <SkeletonImage />
          </SkeletonImageWrapper>
        </AvatarWrapper>
        <PoliticianDetailGroup>
          <SkeletonText>
            <SkeletonTextLine />
            <SkeletonTextLine />
          </SkeletonText>
        </PoliticianDetailGroup>
      </PoliticianWrapper>
      <TradeDetailGroup>
        <TradeDetail>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
          <Title>{"No. Trades"}</Title>
        </TradeDetail>
        <TradeDetail>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
          <Title>{"Volume"}</Title>
        </TradeDetail>
        <TradeDetail>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
          <Title>{"Last Trade (Date)"}</Title>
        </TradeDetail>
      </TradeDetailGroup>
      <TradeDetailGroup>
        <TradeDetail>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
          <Title>{"Distict"}</Title>
        </TradeDetail>
        <TradeDetail>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
          <Title>{"Age"}</Title>
        </TradeDetail>
        <TradeDetail>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
          <Title>{"Committees"}</Title>
        </TradeDetail>
      </TradeDetailGroup>
      <SocialAccountGroup>
        <SocialAccount style={{ pointerEvents: "none" }}>
          <GlobeSvg />
        </SocialAccount>
      </SocialAccountGroup>
    </Wrapper>
  );
};

export default IndPoliticianOverviewSkeleton;

const SkeletonImageWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
