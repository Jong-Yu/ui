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
      control: 'text',
      defaultValue: '',
      description: '입력 폼의 값',
      type: { name: 'string', required: false },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '입력 폼 비활성화 여부',
      type: { name: 'boolean', required: false },
    },
    style: {
      control: 'object',
      defaultValue: {},
      description: '입력 폼 스타일',
      type: { name: 'object', value: {}, required: false },
    },
    onChange: {
      action: 'changed',
      description: '입력 폼 변경 이벤트',
      type: { name: 'function', required: false },
    },
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
    style: {},
    value: 'disabled',
    onChange: () => {},
  },
};
