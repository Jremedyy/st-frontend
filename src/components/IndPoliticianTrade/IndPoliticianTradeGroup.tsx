import styled from "styled-components";
import IndPoliticianTradeItem, {
  IndPoliticianTradeItemProps,
} from "./IndPoliticianTradeItem";
import { ComponentFooter, MoreTradesButton } from "./styles";

import { FilterHeader, TimeFilter } from "../FilterHeader";
import IndPoliticianTradeItemSkeleton from "./IndPoliticianTradeItemSkeleton";

export interface IndPoliticianTradeGroupProps {
  handleTimePeriodSelection: (selectedOptions: TimeFilter) => void;
  politicianId: string;
  trades: IndPoliticianTradeItemProps[];
  detailGroupInfo: {
    numOfTrades: string;
    numOfFillings: string;
    volumeOfTrades: string;
    numOfIssuers: string;
  };
  isLoading: boolean;
}
const IndPoliticianTradeGroup = ({
  trades,
  detailGroupInfo,
  politicianId,
  isLoading,
  handleTimePeriodSelection,
}: IndPoliticianTradeGroupProps) => {
  const skeletons = Array.from({ length: 10 });

  return (
    <Wrapper>
      <FilterHeader
        timePeriodOptions={[]}
        handleTimePeriodSelection={handleTimePeriodSelection}
        detailOptions={{
          trades: detailGroupInfo.numOfTrades,
          filings: detailGroupInfo.numOfFillings,
          volume: detailGroupInfo.volumeOfTrades,
          issuers: detailGroupInfo.numOfIssuers,
        }}
        filterOptions={[]}
        headerTitle={"Recent Trades"}
        isLoading={isLoading}
        timeFilter={"none"}
        handleApplyClick={function (): void {}}
        selectedTimePeriod={"1M"}
      />
      <TableWrapper>
        <TableHeader>
          <tr>
            <TableHeaderItem>{"Company"}</TableHeaderItem>
            <TableHeaderItem>{"Action"}</TableHeaderItem>
            <TableHeaderItem>{"Amt. Traded"}</TableHeaderItem>
            <TableHeaderItem>{"Date"}</TableHeaderItem>
          </tr>
        </TableHeader>
        <tbody>
          {isLoading
            ? skeletons.map(() => <IndPoliticianTradeItemSkeleton />)
            : trades.map(
                (trade: IndPoliticianTradeItemProps, index: number) => (
                  <IndPoliticianTradeItem
                    companyName={trade.companyName}
                    companyTicker={trade.companyTicker}
                    transactionType={trade.transactionType}
                    transactionAmount={trade.transactionAmount}
                    transactionDate={trade.transactionDate}
                    companyImage={trade.companyImage}
                    lastTradeItem={trades.length - 1 === index ? true : false}
                    key={index}
                  />
                )
              )}
        </tbody>
      </TableWrapper>
      <ComponentFooter>
        <MoreTradesButton href={`/trades?politicianId=${politicianId}`}>
          {"More Activity"}
        </MoreTradesButton>
      </ComponentFooter>
    </Wrapper>
  );
};

export default IndPoliticianTradeGroup;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
    background-color: var(--background-color-secondary);
  }
`;

const TableWrapper = styled.table`
  table-layout: auto;
  flex-direction: column;
  width: 100%;
  background-color: var(--background-color-primary);
  gap: 10px;
  border-collapse: collapse;

  @media only screen and (min-width: 768px) {
    table-layout: fixed;
  }
  @media only screen and (min-width: 1024px) {
    margin: unset;
    background-color: var(--background-color-secondary);
    border-spacing: 10px;
  }
`;

const TableHeader = styled.thead`
  height: 40px;
  border-bottom: 1px solid var(--border-color);
`;

const TableHeaderItem = styled.td`
  color: var(--font-color-primary);
  font-family: var(--font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  padding-left: 16px;
  height: 40px;
`;
