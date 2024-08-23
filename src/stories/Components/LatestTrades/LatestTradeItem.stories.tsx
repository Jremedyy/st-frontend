import type { Meta, StoryObj } from "@storybook/react";

import { LatestTradesItem } from "@/components";

const meta = {
  title: "Components/LatestTradeItem",
  component: LatestTradesItem,
  parameters: {


    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof LatestTradesItem>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
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
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=97%3A218&mode=dev",
    },
  },
};
