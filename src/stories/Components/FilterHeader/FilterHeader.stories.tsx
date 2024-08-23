import type { Meta, StoryObj } from "@storybook/react";

import { FilterHeader, FilterOptions, Option } from "@/components";
import {
  allCommittees,
  politicalParties,
  states,
  timePeriodOptions,
} from "./FilterData";

const meta = {
  title: "Components/FilterHeader",
  component: FilterHeader,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof FilterHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const handlePoliticalPartySelection = (selectedOptions: Set<string>) => {
  throw new Error("Function not implemented.");
};
const handleCommittieSelection = (selectedOptions: Set<string>) => {
  throw new Error("Function not implemented.");
};
const handleStateSelection = (selectedOptions: Set<string>) => {
  throw new Error("Function not implemented.");
};

const selectedOptionsMap = new Map<string, Option>();

const filterOptions: FilterOptions[] = [
  {
    label: "Political Party",
    options: politicalParties,
    onSelectionChange: handlePoliticalPartySelection,
    allowMultiple: true,
    initialOption: undefined,
    selectedOptions: new Set(),
  },
  {
    label: "Committees",
    options: allCommittees,
    onSelectionChange: handleCommittieSelection,
    allowMultiple: true,
    initialOption: undefined,
    selectedOptions: new Set(),
  },
  {
    label: "Political State",
    options: states,
    onSelectionChange: handleStateSelection,
    allowMultiple: true,
    initialOption: undefined,
    selectedOptions: new Set(),
  },
  {
    onSelectionChange: () => {},
    displayResults: true,
    placeholder: "Find by name",
    options: new Map<string, Option>(),
    initialOption: undefined,
    allowMultiple: true,
    selectedOptions: selectedOptionsMap,
  },
  {
    onSelectionChange: () => {},
    displayResults: true,
    placeholder: "Find by Issuer",
    options: new Map<string, Option>(),
    initialOption: undefined,
    allowMultiple: true,
    selectedOptions: selectedOptionsMap,
  },
];

export const Primary: Story = {
  args: {
    timePeriodOptions: timePeriodOptions,
    detailOptions: {
      time: "250",
      politicians: "400k",
      volume: "3000",
      filings: "6700",
      trades: "5000",
    },
    filterOptions: filterOptions,
    headerTitle: "Politicians",
    selectedTimePeriod: "1M",
    handleApplyClick: () => {},
    isLoading: false,
    timeFilter: "button",
  },
};
