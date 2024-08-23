import type { Meta, StoryObj } from "@storybook/react";

import { PoliticianCard, PoliticianCardProps } from "@/components";

const mockData: PoliticianCardProps = {
  politicianImage: "",
  politicianName: "Nancy Peloci",
  tradeVolume: "1.5M",
  numOfTrades: "46",
  lastTradeDate: "12/22/2023",
  chamber: "House",
  state: "CA",
  politicalParty: "Democrat",
  politicianId: ""
};

const meta = {
  title: "Components/PoliticianCard",
  component: PoliticianCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PoliticianCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockData },
};
