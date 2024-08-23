import type { Meta, StoryObj } from "@storybook/react";

import { FeaturedArticle } from "@/components";


const meta = {
  title: "Components/FeaturedArticle",
  component: FeaturedArticle,
  parameters: {


    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof FeaturedArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image:
      "https://images.ctfassets.net/adm95tf39lbj/fw5LgFVGOcFrotghFe2WX/0d8c5a55246f17ca2d55fb350d1b356d/super-mario-movie.png?fm=webp&w=1280&q=90",
    title:
      "Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.",
    href:
      "https://google.com"
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=111%3A361&mode=dev",
    },
  },
};
