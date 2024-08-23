import type { Meta, StoryObj } from "@storybook/react";

import { ArticleFeatured } from "@/components";

const meta = {
  title: "Components/ArticleFeatured",
  component: ArticleFeatured,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof ArticleFeatured>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    article: {
      title: "",
      slug: "",
      primaryImageUrl: "",
    },
  },
};
