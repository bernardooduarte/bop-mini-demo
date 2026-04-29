import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Button } from './button';

// ═══════════════════════════════
// 1. META — configura o componente
// ═══════════════════════════════
const meta = {
  title: 'UI/Button',
  component: Button,
  
  // argTypes → controla o que aparece no painel Controls
  argTypes: {
    variant: {
      control: 'select',                          // dropdown
      options: ['primary', 'secondary', 'danger'],
      description: 'Visual style do botão',
    },
    size: {
      control: 'radio',                           // radio buttons
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },              // ← Actions: loga no painel
  },
  
  // args default para todas as stories
  args: {
    label: 'Clique aqui',
    variant: 'primary',
    size: 'md',
    onClick: fn(),                               // fn() = spy do Storybook
  },
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
// 3. STORY COM INTERACTION TEST
// ═══════════════════════════════
export const ClickTest: Story = {
  args: {
    label: 'Me clique!',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    
    // Encontra o botão
    const button = canvas.getByRole('button', { name: /me clique/i });
    
    // Simula clique
    await userEvent.click(button);
    
    // Verifica que onClick foi chamado
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

// ═══════════════════════════════
// 4. STORY MOSTRANDO VARIAÇÕES
// ═══════════════════════════════
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Danger" variant="danger" />
    </div>
  ),
};