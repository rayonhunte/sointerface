import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    onClick: () => console.log('clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    onClick: () => console.log('clicked'),
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    onClick: () => console.log('clicked'),
  },
};
