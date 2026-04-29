import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from './input-field';

const meta = {
  title: 'UI/InputField',
  component: InputField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto associado ao campo de entrada e exibido como label.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de apoio exibido dentro do input antes da digitação.',
      table: {
        type: { summary: 'string' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo nativo do campo HTML input.',
      table: {
        type: { summary: 'HTML input type' },
      },
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro exibida abaixo do campo quando preenchida.',
      table: {
        type: { summary: 'string | undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita a interação com o campo.',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    type: 'text',
    error: '',
    disabled: false,
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: 'Informe um nome válido.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Campo indisponível',
  },
};