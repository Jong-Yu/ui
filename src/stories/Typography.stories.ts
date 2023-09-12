import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../elements/Typography/Typography';

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
        value: ['title', 'contents', 'caption'],
        required: true,
      },
      description: '문자 Tag',
      table: {
        type: { summary: ['title', 'contents', 'caption'] },
        defaultValue: { summary: 'body' },
      },
      control: {
        type: 'select',
        options: ['title', 'contents', 'caption'],
      },
    },
    bold: {
      type: { name: 'boolean', required: false },
      description: '볼드체',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
    },
    italic: {
      type: { name: 'boolean', required: false },
      description: '이탤릭체',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean',
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
    variant: 'contents',
    children: 'Body',
    style: undefined,
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    variant: 'title',
    children: 'Title',
  },
};

export const Body: Story = {
  args: {
    variant: 'contents',
    children: 'Body',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption',
  },
};

export const Bold: Story = {
  args: {
    variant: 'contents',
    children: 'Body',
    bold: true,
  },
};

export const Italic: Story = {
  args: {
    variant: 'contents',
    children: 'Body',
    italic: true,
  },
};
