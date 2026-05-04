# Estudo manual da demo BOP

## Objetivo
A aplicação BOP monitora uma série de temperatura e permite configurar alertas.

## Fluxo principal
1. A página carrega dados de `/api/temperature`.
2. A temperatura em Fahrenheit é convertida para Celsius.
3. O gráfico exibe as duas séries.
4. O usuário define um limiar de temperatura.
5. O usuário ativa ou desativa alertas.

## Componentes estudados

### Button
Usado para salvar limiar e ativar/desativar alertas.

Props:
- label
- variant
- size
- disabled
- loading
- onClick

Variantes e estados:
- primary
- secondary
- danger
- disabled
- loading

### InputField
Usado para editar o limiar de temperatura.

Props:
- label
- placeholder
- type
- error
- disabled

Props nativas herdadas:
- qualquer atributo válido de `input` via `InputHTMLAttributes<HTMLInputElement>`

Estados:
- default
- error
- disabled

### StorybookLinkButton
Link externo para abrir o Storybook publicado no Vercel.

Props:
- href

### SortableAlertList
Botão de alerta usado para representar itens ordenáveis na interface.

Props:
- label
- variant
- disabled
- loading
- onClick
- className

Variantes:
- alta-temperatura
- falha-do-sensor
- pressao-critica
- baixa-pressao

Observação:
- a prop `children` aparece no tipo atual, mas não é usada na renderização.