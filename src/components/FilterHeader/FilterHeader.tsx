import {
  DetailWrapper,
  DetailGroupWrapper,
  FilterGroupWrapper,
  Title,
  TitleWrapper,
  Wrapper,
  DetailValue,
  DetailName,
  TextWrapper,
  DetailIconWrapper,
  GridWrapper,
  ButtonWrapper,
  ApplyButton,
  FilterItem,
  HeaderFilterWrapper,
  ShowFilterButton,
  SummaryTitleWrapper,
  ClearFilterButton,
} from "./styles";
import { SearchBox, SearchBoxProps } from "../SearchBox";
import { ComboBox, ComboBoxProps } from "../ComboBox";

import {
  CompanySvg,
  FileSvg,
  MoneyBagSvg,
  PoliticianSvg,
  TradeIcon,
  CalendarSvg,
} from "../../common/icons";
import {
  SkeletonText,
  SkeletonTextLine,
} from "../../styled-components/global-styles";
import { useState } from "react";

export type DetailOptions = {
  trades?: string;
  filings?: string;
  volume?: string;
  politicians?: string;
  issuers?: string;
  time?: string;
};

export type FilterOptions = ComboBoxProps | SearchBoxProps;
export type TimeFilter = "1M" | "3M" | "6M" | "1Y" | "3Y";
export interface FilterHeaderProps {
  timePeriodOptions: string[];
  handleTimePeriodSelection: (selectedOptions: TimeFilter) => void;
  detailOptions: DetailOptions;
  filterOptions: FilterOptions[];
  headerTitle: string;
  isLoading: boolean;
  timeFilter: "button" | "combobox" | "none";
  handleApplyClick: () => void;
  selectedTimePeriod: TimeFilter;
  filtersApplied: boolean;
  handleClearFilterClick: () => void;
  setToInitialFilters: () => void;
}

const FilterHeader = (props: FilterHeaderProps) => {
  const timeFilters: TimeFilter[] = ["1M", "3M", "6M", "1Y", "3Y"];
  let details = Object.entries(props.detailOptions);
  const [selectedFilter, setSelectedFilter] = useState<TimeFilter>(
    props.selectedTimePeriod === undefined ? "1M" : props.selectedTimePeriod
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleFilterDisplayButtonClick = () => {
    if (isOpen) {
      props.setToInitialFilters();
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Wrapper>
      <SummaryTitleWrapper>
        <Title>{"Summary"}</Title>
        {props.timeFilter && (
          <ShowFilterButton onClick={() => handleFilterDisplayButtonClick()}>
            {isOpen ? "Hide Filters" : "Show Filters"}
          </ShowFilterButton>
        )}
      </SummaryTitleWrapper>
      <DetailGroupWrapper $numofdetails={details.length}>
        {details?.map((detail: [string, string], index: number) => (
          <DetailWrapper key={index} $column={index}>
            <TextWrapper className={props.isLoading ? "loading" : ""}>
              {props.isLoading ? (
                <SkeletonText className="header">
                  <SkeletonTextLine className="on-secondary" />
                </SkeletonText>
              ) : (
                <>
                  <DetailValue>{detail[1]}</DetailValue>
                  <DetailName>
                    {detail[0] === "time" ? "time frame" : detail[0]}
                  </DetailName>
                </>
              )}
            </TextWrapper>
            <DetailIconWrapper>
              {detail[0] === "trades" ? (
                <TradeIcon />
              ) : detail[0] === "filings" ? (
                <FileSvg />
              ) : detail[0] === "volume" ? (
                <MoneyBagSvg />
              ) : detail[0] === "politicians" ? (
                <PoliticianSvg />
              ) : detail[0] === "time" ? (
                <CalendarSvg />
              ) : (
                detail[0] === "issuers" && <CompanySvg />
              )}
            </DetailIconWrapper>
          </DetailWrapper>
        ))}
      </DetailGroupWrapper>

      {isOpen && (
        <>
          <TitleWrapper>
            <Title>{"Filters"}</Title>
            <HeaderFilterWrapper
              className={props.timeFilter === "none" ? "hidden" : "visible"}
            >
              {timeFilters.map((time: TimeFilter, index: number) => (
                <FilterItem
                  $isselected={time === selectedFilter ? "true" : "false"}
                  onClick={() => {
                    setSelectedFilter(time),
                      props.handleTimePeriodSelection(time);
                  }}
                  key={index}
                >
                  {time}
                </FilterItem>
              ))}
            </HeaderFilterWrapper>
          </TitleWrapper>
          <FilterGroupWrapper $numoffilters={props.filterOptions.length}>
            {props.filterOptions.map((options, index) =>
              "label" in options ? (
                <GridWrapper $column={index} key={index}>
                  <ComboBox
                    label={options.label}
                    options={options.options}
                    onSelectionChange={options.onSelectionChange}
                    allowMultiple={options.allowMultiple}
                    initialOption={options.initialOption || undefined}
                    selectedOptions={options.selectedOptions}
                  />
                </GridWrapper>
              ) : (
                <GridWrapper $column={index} key={index}>
                  <SearchBox
                    options={options.options}
                    displayResults={options.displayResults}
                    onSelectionChange={options.onSelectionChange}
                    placeholder={options.placeholder}
                    selectedOptions={options.selectedOptions}
                  />
                </GridWrapper>
              )
            )}
          </FilterGroupWrapper>
          <ButtonWrapper>
            {props.filtersApplied && (
              <ClearFilterButton onClick={() => props.handleClearFilterClick()}>
                {"Clear Filters"}
              </ClearFilterButton>
            )}
            <ApplyButton onClick={() => props.handleApplyClick()}>
              {"Apply"}
            </ApplyButton>
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default FilterHeader;
