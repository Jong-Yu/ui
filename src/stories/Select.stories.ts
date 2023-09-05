import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select/Select';

const meta = {
  title: 'Elements/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: { name: 'string', required: false },
      description: '선택된 값',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    options: {
      type: {
        name: 'array',
        value: { name: 'string' || 'number' },
        required: true,
      },
      description: '선택할 수 있는 값들',
      table: {
        type: { summary: 'array' },
      },
      control: 'object',
      options: ['서울', '경기', '인천'],
    },
    label: {
      type: { name: 'string', required: false },
      description: '레이블',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    disabled: {
      type: { name: 'boolean', required: false },
      description: '비활성화 여부',
      table: {
        type: { summary: 'boolean' },
      },
      control: 'boolean',
    },
    onChange: {
      action: 'onChange',
      description: '값이 변경될 때 호출되는 함수',
      type: { name: 'function', required: false },
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    value: '서울',
    options: ['서울', '경기', '인천'],
    label: undefined,
    disabled: undefined,
    onChange: undefined,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: '서울',
    options: ['서울', '경기', '인천'],
  },
};

export const UseLabel: Story = {
  args: {
    label: 'Label',
    options: ['서울특별시', '경기도', '인천광역시'],
  },
};

export const Disabled: Story = {
  args: {
    value: '서울특별시',
    options: ['서울특별시', '경기도', '인천광역시'],
    disabled: true,
  },
};
