import type { Meta, StoryObj } from "@storybook/react";

import { BiggestMoversGroup } from "@/components";

const meta = {
  title: "Components/BiggestMoversGroup",
  component: BiggestMoversGroup,
  parameters: {
        layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof BiggestMoversGroup>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    viewAllLink: "",
    worstPerformers: [
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "-36%",
        index: 0
      },
    ],
    topGainers: [
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
      {
        avatarImage:
          "https://images.ctfassets.net/vm35rz92ipmx/71yJKeODDms6N3fBT6dxIU/98370ece8cacf5434609f82bc650e61a/Rectangle.png",
        politicianName: "Politician Name",
        politicianRole: "House",
        politicianParty: "Democrat",
        politicianState: "TX",
        percentageDetails: "36%",
        index: 0
      },
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=97%3A218&mode=dev",
    },
  },
};
