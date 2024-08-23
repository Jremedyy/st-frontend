import type { Meta, StoryObj } from "@storybook/react";

import { IndPoliticianOverview } from "@/components";

const meta = {
  title: "Components/IndPoliticianOverview",
  component: IndPoliticianOverview,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof IndPoliticianOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    politicianName: "Nancy Peloci",
    politicianImage: "https://www.congress.gov/img/member/p000197_200.jpg",
    chamber: "House",
    politicalParty: "Democrat",
    state: "PA",
    district: "5",
    age: "35",
    tradeVolume: "3000",
    dateOfLastTrade: "11/21/2023",
    committees: ["Intelligence", "Financial Svcs."],
    numOfTrades: "50",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=363%3A361&mode=dev",
    },
  },
};
