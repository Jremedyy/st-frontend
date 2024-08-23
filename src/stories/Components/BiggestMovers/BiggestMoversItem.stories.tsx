import type { Meta, StoryObj } from "@storybook/react";

import { BiggestMoversItem } from "@/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BiggestMoversItem",
  component: BiggestMoversItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout

    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BiggestMoversItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    avatarImage:
      "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
    politicianName: "Politician Name",
    politicianRole: "House",
    politicianParty: "Democrat",
    politicianState: "TX",
    percentageDetails: "36%",
    index: 0
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=126%3A959&mode=dev",
    },
  },
};
