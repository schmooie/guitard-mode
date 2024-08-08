import type { StoryObj, Meta } from "@storybook/react";
import String from "../components/String";

const meta = {
  title: 'Strings',
  component: String,
  tags: ['autodocs']
} satisfies Meta<typeof String>

export default meta;
type Story = StoryObj<typeof meta>;

export const FiveFrets: Story = {
  args: { numFrets: 5 }
}

export const TwelveFrets: Story = {
  args: { numFrets: 12 }
}
