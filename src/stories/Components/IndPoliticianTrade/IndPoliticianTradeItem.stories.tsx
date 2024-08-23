import type { Meta, StoryObj } from "@storybook/react";

import { IndPoliticianTradeItem } from "@/components";

const meta = {
  title: "Components/IndPoliticianTradeItem",
  component: IndPoliticianTradeItem,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof IndPoliticianTradeItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    companyName: "Amazon",
    companyTicker: "Amzn",
    transactionType: "Buy",
    transactionAmount: "400k",
    transactionDate: "11/21/2023",
    companyImage:
      "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=367%3A1276&mode=dev",
    },
  },
};
