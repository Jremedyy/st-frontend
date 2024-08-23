import type { Meta, StoryObj } from "@storybook/react";

import { ComboBox } from "@/components/ComboBox";

const meta = {
  title: "Components/ComboBox",
  component: ComboBox,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Options",
    options: [
      "option 1",
      "option 2",
      "option 3",
      "option 4",
      "option 5",
      "option 6",
      "option 7",
      "option 8",
      "option 9",
      "option 10",
      "option 11",
      "option 12",
      "option 13",
      "option 14",
      "option 15",
      "option 16",
      "option 17",
    ],
    onSelectionChange: (selections: Set<string>) => {
      console.log(selections);
    },
    allowMultiple: true,
  },
};
