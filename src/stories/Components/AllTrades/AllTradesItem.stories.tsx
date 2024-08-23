import type { Meta, StoryObj } from "@storybook/react";

import { AllTradesitem } from "@/components";

const meta = {
  title: "Components/AllTradesitem",
  component: AllTradesitem,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof AllTradesitem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    politicianName: "Nancy Peloci",
    chamber: "Senate",
    politicalParty: "Democrat",
    stateAbv: "CA",
    issuerName: "Us Tax Payer",
    issuerDetail: "",
    transactionType: "Sell",
    buyDayMonth: "5 Jan",
    buyYear: "2024",
    reportedDayMonth: "8 Jan",
    reportedYear: "2024",
    timeTookToReport: "14",
    owner: "Spouse",
    size: "150k-200k",
    price: "300k",
  },
};
