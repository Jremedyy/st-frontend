import {
  CompanyGroup,
  CompanyGroupWrapper,
  TransactionDate,
  TransactionDetail,
  TransactionType,
  Wrapper,
} from "./styles";
import {
  SkeletonImage,
  SkeletonText,
  SkeletonTextLine,
} from "../../styled-components/global-styles";
import styled from "styled-components";

const IndPoliticianTradeItemSkeleton = () => {
  return (
    <Wrapper>
      <CompanyGroupWrapper>
        <CompanyGroup>
          <SkeletonImageWrapper>
            <SkeletonImage />
          </SkeletonImageWrapper>
          <SkeletonText>
            <SkeletonTextLine />
          </SkeletonText>
        </CompanyGroup>
      </CompanyGroupWrapper>
      <TransactionType $transactiontype={"Loading"}>
        <SkeletonText>
          <SkeletonTextLine />
        </SkeletonText>
      </TransactionType>
      <TransactionDetail loading={true}>
        <SkeletonText>
          <SkeletonTextLine />
        </SkeletonText>
      </TransactionDetail>
      <TransactionDate loading={true}>
        <SkeletonText>
          <SkeletonTextLine />
        </SkeletonText>
      </TransactionDate>
    </Wrapper>
  );
};

export default IndPoliticianTradeItemSkeleton;
const SkeletonImageWrapper = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
