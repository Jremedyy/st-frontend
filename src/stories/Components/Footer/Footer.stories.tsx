import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@/components";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {

    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {},
};
