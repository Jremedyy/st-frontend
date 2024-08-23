import type { Meta, StoryObj } from "@storybook/react";

import { ArticleRecentGroup } from "@/components";

const meta = {
  title: "Components/ArticleRecentGroup",
  component: ArticleRecentGroup,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof ArticleRecentGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    viewAllLink: "",
    latestArticles: [
      {
        heroImage:
          "https://images.ctfassets.net/adm95tf39lbj/fw5LgFVGOcFrotghFe2WX/0d8c5a55246f17ca2d55fb350d1b356d/super-mario-movie.png?fm=webp&w=1280&q=90",
        articleTitle:
          "Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo. Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo. Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.",
        articleSubtitle:
          "Lorem ipsum dolor sit amet consectetur. Amet consectetur feugiat nulla ac. At vehicula dolor nullam duis semper sed eget.",
        articleAuthor: "Spencer",
        articleDate: "12/11/23",
      },
      {
        heroImage:
          "https://images.ctfassets.net/adm95tf39lbj/fw5LgFVGOcFrotghFe2WX/0d8c5a55246f17ca2d55fb350d1b356d/super-mario-movie.png?fm=webp&w=1280&q=90",
        articleTitle:
          "Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.",
        articleSubtitle:
          "Lorem ipsum dolor sit amet consectetur. Amet consectetur feugiat nulla ac. At vehicula dolor nullam duis semper sed eget.",
        articleAuthor: "Spencer",
        articleDate: "12/11/23",
      },
      {
        heroImage:
          "https://images.ctfassets.net/adm95tf39lbj/fw5LgFVGOcFrotghFe2WX/0d8c5a55246f17ca2d55fb350d1b356d/super-mario-movie.png?fm=webp&w=1280&q=90",
        articleTitle:
          "Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.",
        articleSubtitle:
          "Lorem ipsum dolor sit amet consectetur. Amet consectetur feugiat nulla ac. At vehicula dolor nullam duis semper sed eget.",
        articleAuthor: "Spencer",
        articleDate: "12/11/23",
      },
      {
        heroImage:
          "https://images.ctfassets.net/adm95tf39lbj/fw5LgFVGOcFrotghFe2WX/0d8c5a55246f17ca2d55fb350d1b356d/super-mario-movie.png?fm=webp&w=1280&q=90",
        articleTitle:
          "Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.",
        articleSubtitle:
          "Lorem ipsum dolor sit amet consectetur. Amet consectetur feugiat nulla ac. At vehicula dolor nullam duis semper sed eget.",
        articleAuthor: "Spencer",
        articleDate: "12/11/23",
      },
      {
        heroImage:
          "https://images.ctfassets.net/adm95tf39lbj/fw5LgFVGOcFrotghFe2WX/0d8c5a55246f17ca2d55fb350d1b356d/super-mario-movie.png?fm=webp&w=1280&q=90",
        articleTitle:
          "Lorem ipsum dolor sit amet consectetur. Et interdum ac commodo.",
        articleSubtitle:
          "Lorem ipsum dolor sit amet consectetur. Amet consectetur feugiat nulla ac. At vehicula dolor nullam duis semper sed eget.",
        articleAuthor: "Spencer",
        articleDate: "12/11/23",
      },
    ],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fpGtmhcFcgnBgGnTxTftF9/ST---DRAFT?node-id=111%3A565&mode=dev",
    },
  },
};
