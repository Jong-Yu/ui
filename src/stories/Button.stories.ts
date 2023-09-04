import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button/Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      defaultValue: false,
      description: 'Primary 여부',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Disabled 여부',
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
      description: '버튼 내용',
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: '버튼의 크기 정도',
    },
    style: {
      control: 'object',
      description: '버튼 스타일',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    disabled: false,
    fullWidth: false,
    children: 'Button',
    size: 'medium',
    style: {},
    onClick: () => {},
  } as ButtonProps,
};

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
