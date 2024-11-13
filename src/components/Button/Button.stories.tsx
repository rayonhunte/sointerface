import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeSwitcher } from '../ThemeSwitcher';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    color: 'default',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div>
        <ThemeSwitcher />
        <div style={{ marginTop: '1rem' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary',
    size: 'md',
  },
  decorators: Default.decorators,
};