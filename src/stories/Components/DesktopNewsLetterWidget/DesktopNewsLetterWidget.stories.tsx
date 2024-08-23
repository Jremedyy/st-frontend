import type { Meta, StoryObj } from "@storybook/react";

import { DesktopNewsLetterWidget } from "@/components";

const meta = {
  title: "Components/DesktopNewLetterWidget",
  component: DesktopNewsLetterWidget,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof DesktopNewsLetterWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { title: "Swamp Trades", description: "Subscribe to our news letter!" },
};
