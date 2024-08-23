import type { Meta, StoryObj } from "@storybook/react";

import { TabletNewsLetterWidget } from "@/components";

const meta = {
  title: "Components/TabletNewsLetterWidget",
  component: TabletNewsLetterWidget,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof TabletNewsLetterWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { handleSubscribe: () => {} },
};
