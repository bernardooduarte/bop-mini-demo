import type { Meta, StoryObj } from '@storybook/react-vite';
import { StorybookLinkButton } from './storybook-link-button';

const meta = {
title: 'BOP Monitoring/External Links/Storybook Vercel Link',
  component: StorybookLinkButton,
  args: {
    href: 'https://bop-mini-demo-storybook.vercel.app',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StorybookLinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
