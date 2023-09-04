import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button/Button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      type: { name: 'boolean', required: false },
      description: 'Primary 버튼 여부 ',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: '버튼 비활성화 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    children: {
      type: { name: 'string', required: false },
      description: '버튼 내용',
      table: {
        type: { summary: 'object' },
      },
      control: 'text',
    },
    size: {
      type: {
        name: 'enum',
        value: ['small', 'medium', 'large'],
        required: false,
      },
      description: '버튼 크기',
      table: {
        type: { summary: ['small', 'medium', 'large'] },
        defaultValue: { summary: 'medium' },
      },
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    style: {
      type: { name: 'object', value: {}, required: false },
      description: '버튼 스타일',
      table: {
        type: { summary: 'object' },
      },
      control: 'object',
    },
    onClick: {
      type: { name: 'function', required: false },
      description: '버튼 클릭 이벤트',
      table: {
        type: { summary: 'function' },
      },
      action: 'onClick',
    },
  },
  args: {
    primary: false,
    disabled: undefined,
    children: 'Button',
    size: undefined,
    style: undefined,
    onClick: e => {
      console.log(e);
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  } as ButtonProps,
};

export const Secondary: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
