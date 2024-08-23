import styled from "styled-components";
import AllTradesItem, { AllTradesItemProps } from "./AllTradesItem";

import AllTradesItemSkeleton from "./AllTradesItemSkeleton";

interface AllTradesGroupProps {
  isLoading: boolean;
  politicianTrades: AllTradesItemProps[];
}

const AllTradesGroup = ({
  politicianTrades,
  isLoading,
}: AllTradesGroupProps) => {
  return (
    <Table>
      <TableHead>
        <HeadRow>
          <ThLeft>Politician</ThLeft>
          <ThLeft>Trade Issuer</ThLeft>
          <ThCenter>Type</ThCenter>
          <ThCenter>Published</ThCenter>
          <ThCenter>Traded</ThCenter>
          <ThCenter>Filed After</ThCenter>
          <Owner>Owner</Owner>
          <ThCenter>Size</ThCenter>
          <Price>Price</Price>
        </HeadRow>
      </TableHead>
      <TableBody>
        {isLoading && (
          <>
            <AllTradesItemSkeleton /> <AllTradesItemSkeleton />
            <AllTradesItemSkeleton /> <AllTradesItemSkeleton />
            <AllTradesItemSkeleton /> <AllTradesItemSkeleton />
            <AllTradesItemSkeleton /> <AllTradesItemSkeleton />
            <AllTradesItemSkeleton /> <AllTradesItemSkeleton />
            <AllTradesItemSkeleton /> <AllTradesItemSkeleton />
          </>
        )}
        {!isLoading &&
          politicianTrades.map((trade: AllTradesItemProps, index: number) => (
            <AllTradesItem {...trade} key={index} />
          ))}
      </TableBody>
    </Table>
  );
};

export default AllTradesGroup;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid var(--border-color);
  color: var(--font-color-secondary);
  font-size: 16px;
  font-weight: 500;
`;

const HeadRow = styled.tr`
  display: grid;
  grid-template-columns:
    [politician] 220px [issuer] 220px
    [txType] minmax(80px, 0.4fr) [published] minmax(70px, 0.4fr) [buyDate] minmax(
      90px,
      0.6fr
    )
    [filed] minmax(85px, 0.4fr) [txSize] minmax(100px, 0.4fr);

  width: 100%;
  background-color: var(--background-color-primary);
  padding: 0 10px;
  @media only screen and (min-width: 1024px) {
    grid-template-columns:
      [politician] minmax(160px, 220px) [issuer] minmax(160px, 220px)
      [txType] minmax(60px, 0.4fr) [published] minmax(60px, 0.4fr) [buyDate] minmax(
        60px,
        0.4fr
      )
      [filed] minmax(65px, 0.4fr) [owner] minmax(60px, 0.4fr) [txSize] minmax(
        60px,
        0.4fr
      )
      [price] minmax(50px, 0.2fr);
  }
`;

const TableBody = styled.tbody`
  display: grid;
  width: 100%;
  table-layout: fixed;
  background-color: var(--background-color-primary);
  border-collapse: collapse;
  :last-child {
    border-bottom: none;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    background-color: var(--background-color-secondary);
  }
`;
const ThLeft = styled.th`
  justify-self: left;
  padding: 10px 0;
  text-transform: capitalize;
  font-size: 12px;
`;
const ThCenter = styled(ThLeft)`
  justify-self: center;
`;

const Owner = styled(ThCenter)`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: unset;
  }
`;

const Price = styled(Owner)``;
