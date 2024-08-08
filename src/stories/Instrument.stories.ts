import type { StoryObj, Meta } from "@storybook/react";
import Instrument from "../components/Instrument";

const meta = {
  title: 'Instruments',
  component: Instrument
} satisfies Meta<typeof Instrument>

export default meta;
type Story = StoryObj<typeof meta>

export const Guitar: Story = {
  args: { notesForStrings: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'], numFrets: 14 }
}
