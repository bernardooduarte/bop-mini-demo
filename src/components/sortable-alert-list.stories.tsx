import type { Meta, StoryObj } from '@storybook/react-vite';
import { SortableAlertList } from './sortable-alert-list';

const meta = {
  title: 'BOP Monitoring/Alerts/Sortable Alert List',
  component: SortableAlertList,
  argTypes: {
    variant: {
      control: 'select',
      options: ['alta-temperatura', 'falha-do-sensor', 'pressao-critica', 'baixa-pressao'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Alerta de Alta Temperatura',
    variant: 'alta-temperatura',
    disabled: false,
    loading: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SortableAlertList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SensorFailure: Story = {
  args: {
    label: 'Falha do Sensor',
    variant: 'falha-do-sensor',
  },
};

export const CriticalPressure: Story = {
  args: {
    label: 'Pressão Crítica',
    variant: 'pressao-critica',
  },
};

export const LowPressure: Story = {
  args: {
    label: 'Baixa Pressão',
    variant: 'baixa-pressao',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Atualizando alerta...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Alerta indisponível',
  },
};