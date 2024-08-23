import type { Meta, StoryObj } from "@storybook/react";

import { SearchBox } from "@/components";

const meta = {
  title: "Components/SearchBox",
  component: SearchBox,
  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      "Company 1",
      "Company 2",
      "Company 3",
      "Company 4",
      "Company 5",
      "Company 6",
      "Company 7",
      "Company 8",
      "Company 9",
      "Company 10",
    ],
    displayResults: true,
    placeholder: "Find by issuer",
    onInputChange: (input: string) => {
      return [
        "testing 1",
        "testing 2",
        "testing 3",
        "testing 4",
        "testing 5",
        "testing 6",
        "testing 7",
        "testing 8",
        "testing 9",
        "testing 10",
      ];
    },
    onSelectionChange: (selections: Set<string>) => {
      console.log(selections);
    },
  },
};
