import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlertDnDDemo } from './alert-dnd-demo';

const meta = {
  title: 'BOP Monitoring/Alerts/DnD Demo',
  component: AlertDnDDemo,
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDnDDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
