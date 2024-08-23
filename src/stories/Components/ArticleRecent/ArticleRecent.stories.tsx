import type { Meta, StoryObj } from "@storybook/react";

import { ArticleRecent } from "@/components";

const meta = {
  title: "Components/ArticleRecent",
  component: ArticleRecent,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof ArticleRecent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    heroImage:
      "https://images.ctfassets.net/adm95tf39lbj/fw5LgFVGOcFrotghFe2WX/0d8c5a55246f17ca2d55fb350d1b356d/super-mario-movie.png?fm=webp&w=1280&q=90",
    articleTitle:
      "Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.",
    articleSubtitle:
      "Lorem ipsum dolor sit amet consectetur. Amet consectetur feugiat nulla ac. At vehicula dolor nullam duis semper sed eget.",
    articleAuthor: "Spencer",
    articleDate: "12/11/23",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=111%3A361&mode=dev",
    },
  },
};
