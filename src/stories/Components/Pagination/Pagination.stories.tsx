import type { Meta, StoryObj } from "@storybook/react";

import { PaginationProps, Pagination } from "@/components";

const mockData: PaginationProps = {
  currentPage: 2,
  totalCount: 100,
  siblingCount: 1,
  pageSize: 5,
  baseUrl: "",
};

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockData },
};
