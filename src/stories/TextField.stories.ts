import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../components/TextField/TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: { name: 'string', required: false },
      description: '입력 폼의 값',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: '입력 폼 비활성화 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    style: {
      type: { name: 'object', value: {}, required: false },
      description: '입력 폼 스타일',
      table: {
        type: { summary: 'object' },
      },
      control: 'object',
    },
    onChange: {
      type: { name: 'function', required: false },
      description: '입력 폼 변경 이벤트',
      table: {
        type: { summary: 'function' },
      },
      action: 'onChange',
    },
  },
  args: {
    value: undefined,
    disabled: undefined,
    style: undefined,
    onChange: undefined,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const UseValue: Story = {
  args: {
    disabled: false,
    style: {},
    value: 'use value',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'disabled',
  },
};
