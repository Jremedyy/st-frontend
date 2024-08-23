import type { Meta, StoryObj } from "@storybook/react";

import { NewsPageArticle } from "@/components";

const meta = {
  title: "Components/NewsPageArticle",
  component: NewsPageArticle,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof NewsPageArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    article: {
      primaryImageUrl:
        "https://images.ctfassets.net/adm95tf39lbj/4XFtsqO1v9h8Jz1K7hoRAm/b582d8cc697f1ee1a8c814d06268c8f6/super-nintendo-world-orlando-construction-progress.png?fm=webp&w=1024&q=80",
      title: "testing",
      seo: {
        description:
          "testingtestingtestingtestingtestingtestingtestingtestingtesting",
      },
      author: {
        firstName: "test",
        lastName: "balls",
      },
      createdAt: "",
    },
  },
};
