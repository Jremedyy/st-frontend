import type { Meta, StoryObj } from "@storybook/react";

import { LatestTradesGroup, LatestTradesItemInterface } from "@/components";

const meta = {
  title: "Components/LatestTradesGroup",
  component: LatestTradesGroup,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof LatestTradesGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData: LatestTradesItemInterface[] = [
  {
    companyName: "Amazon, Inc.",
    companyTicker: "AMZN",
    politicianName: "Politician Name",
    politicalParty: "Democrat",
    politicalRole: "Senate",
    state: "TX",
    transactionType: "Buy",
    transactionAmount: "150K",
    transactionDate: "11-27-2023",
    image:
      "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
  },
  {
    companyName: "Amazon, Inc.",
    companyTicker: "AMZN",
    politicianName: "Politician Name",
    politicalParty: "Democrat",
    politicalRole: "Senate",
    state: "TX",
    transactionType: "Buy",
    transactionAmount: "150K",
    transactionDate: "11-27-2023",
    image:
      "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
  },
  {
    companyName: "Amazon, Inc.",
    companyTicker: "AMZN",
    politicianName: "Politician Name",
    politicalParty: "Democrat",
    politicalRole: "Senate",
    state: "TX",
    transactionType: "Sell",
    transactionAmount: "150K",
    transactionDate: "11-27-2023",
    image:
      "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
  },
  {
    companyName: "Amazon, Inc.",
    companyTicker: "AMZN",
    politicianName: "Politician Name",
    politicalParty: "Democrat",
    politicalRole: "Senate",
    state: "TX",
    transactionType: "Buy",
    transactionAmount: "150K",
    transactionDate: "11-27-2023",
    image:
      "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
  },
  {
    companyName: "Amazon, Inc.",
    companyTicker: "AMZN",
    politicianName: "Politician Name",
    politicalParty: "Democrat",
    politicalRole: "Senate",
    state: "TX",
    transactionType: "Sell",
    transactionAmount: "150K",
    transactionDate: "11-27-2023",
    image:
      "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
  },
];

export const Primary: Story = {
  args: {
    viewAllLink: "",
    latestTrades: mockData,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=98%3A546&mode=dev",
    },
  },
};
