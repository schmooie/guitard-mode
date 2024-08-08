import type { StoryObj, Meta } from "@storybook/react";
import String from "../components/String";

const meta = {
  title: 'Strings',
  component: String,
  tags: ['autodocs'],
  args: {
    hasBottomBorder: false,
    openNote: 'E2'
  }
} satisfies Meta<typeof String>

export default meta;
type Story = StoryObj<typeof meta>;

export const FiveFrets: Story = {
  args: { numFrets: 5 }
}

export const TwelveFrets: Story = {
  args: { numFrets: 12 }
}

export const HasBottomBorder: Story = {
  args: { numFrets: 12, hasBottomBorder: true }
}

export const OpenNote: Story = {
  args: { openNote: 'A4' }
}
