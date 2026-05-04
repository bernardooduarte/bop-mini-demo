import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

// ═══════════════════════════════
// 1. META — configura o componente
// ═══════════════════════════════
const meta = {
  title: 'BOP Monitoring/Controls/Button',
  component: Button,

  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido dentro do botão.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Define a intenção visual do botão na interface BOP.',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Define o tamanho do botão.',
    },
    loading: {
      control: 'boolean',
      description: 'Mostra estado de carregamento e desabilita o botão.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão manualmente.',
    },
    onClick: { action: 'clicked' },
  },

  args: {
    label: 'Clique aqui',
    variant: 'primary',
    size: 'md',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ═══════════════════════════════
// 2. STORIES BÁSICAS
// ═══════════════════════════════
export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary', label: 'Secundário' },
};

export const Danger: Story = {
  args: { variant: 'danger', label: 'Deletar' },
};

export const Small: Story = {
  args: { size: 'sm', label: 'Pequeno' },
};

export const Large: Story = {
  args: { size: 'lg', label: 'Grande' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Loading: Story = {
  args: { loading: true, label: 'Salvando...' },
};



// ═══════════════════════════════
// 3. STORY MOSTRANDO VARIAÇÕES
// ═══════════════════════════════
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button label="Primário" variant="primary" />
      <Button label="Secundário" variant="secondary" />
      <Button label="Perigo" variant="danger" />
    </div>
  ),
};