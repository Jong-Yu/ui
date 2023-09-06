import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components/Typography/Typography';

const meta = {
  title: 'Elements/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: {
        name: 'enum',
        value: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body'],
        required: true,
      },
      description: '문자 Tag',
      table: {
        type: { summary: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body'] },
        defaultValue: { summary: 'body' },
      },
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body'],
      },
    },
    align: {
      type: {
        name: 'enum',
        value: ['left', 'center', 'right'],
        required: false,
      },
      description: '정렬',
      table: {
        type: { summary: ['left', 'center', 'right'] },
      },
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
    children: {
      type: { name: 'string', required: true },
      description: '내용',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    style: {
      type: { name: 'object', value: {}, required: false },
      description: '스타일',
      table: {
        type: { summary: 'object' },
      },
      control: 'object',
    },
  },
  args: {
    variant: 'body',
    children: 'Body',
    align: undefined,
    style: undefined,
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Heading 5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Heading 6',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body',
  },
};

export const Left: Story = {
  args: {
    variant: 'body',
    children: 'Left',
    align: 'left',
  },
};

export const Center: Story = {
  args: {
    variant: 'body',
    children: 'Center',
    align: 'center',
  },
};

export const Right: Story = {
  args: {
    variant: 'body',
    children: 'Right',
    align: 'right',
  },
};
