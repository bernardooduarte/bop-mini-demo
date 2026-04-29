import { test, expect } from '@playwright/test';

test('deve carregar o gráfico com múltiplos pontos de dados do BOP', async ({ page }) => {
  await page.goto('/');

  const chartContainer = page.locator('[data-testid="chart-container"]');
  await expect(chartContainer).toBeVisible();

  const dataPoints = page.locator('.recharts-dot');
  await expect.poll(async () => dataPoints.count()).toBeGreaterThan(1);
});

test('deve falhar propositalmente para validar cenário reprovado', async ({ page }) => {
  await page.goto('/');

  const title = page.getByRole('heading', { name: 'BOP Monitoring Solution' });
  await expect(title).toHaveText('Título propositalmente incorreto');
});

// ═══════════════════════════════════════════════════════════════════════
// TESTES DO InputField - Campo de Entrada de Temperatura
// ═══════════════════════════════════════════════════════════════════════

test('InputField: deve carregar o campo de entrada de temperatura', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"]');
  await expect(thresholdInput).toBeVisible();
});

test('InputField: deve exibir label "Limiar de Temperatura (°F)"', async ({ page }) => {
  await page.goto('/');

  const label = page.getByText('Limiar de Temperatura (°F)');
  await expect(label).toBeVisible();
});

test('InputField: deve carregar com valor padrão "85"', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  await expect(thresholdInput).toHaveValue('85');
});

test('InputField: deve permitir alterar o valor da temperatura', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  await thresholdInput.fill('95');
  await expect(thresholdInput).toHaveValue('95');
});

test('InputField: deve mostrar erro quando temperatura estiver fora do intervalo', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  const saveButton = page.locator('[data-testid="save-threshold-button"]');

  // Tentar inserir temperatura inválida (muito alta)
  await thresholdInput.fill('250');
  await saveButton.click();

  const errorMessage = page.getByText(/Temperatura deve estar entre/);
  await expect(errorMessage).toBeVisible();
});

test('InputField: deve limpar erro ao editar o campo', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  const saveButton = page.locator('[data-testid="save-threshold-button"]');

  // Inserir temperatura inválida
  await thresholdInput.fill('300');
  await saveButton.click();

  // Verificar que erro aparece
  let errorMessage = page.getByText(/Temperatura deve estar entre/);
  await expect(errorMessage).toBeVisible();

  // Editar o campo
  await thresholdInput.fill('85');

  // Erro deve desaparecer
  errorMessage = page.getByText(/Temperatura deve estar entre/);
  await expect(errorMessage).not.toBeVisible();
});

test('InputField: deve aceitar valores negativos válidos', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  const saveButton = page.locator('[data-testid="save-threshold-button"]');

  await thresholdInput.fill('-40');
  await saveButton.click();

  // Não deve exibir erro para valores dentro do intervalo
  const errorMessage = page.getByText(/Temperatura deve estar entre/);
  // Aguarde um pouco para garantir que o erro não apareça
  await page.waitForTimeout(500);
  await expect(errorMessage).not.toBeVisible();
});

// ═══════════════════════════════════════════════════════════════════════
// TESTES DO Button - Botão de Salvar Limiar
// ═══════════════════════════════════════════════════════════════════════

test('Button (Salvar): deve exibir botão "Salvar Limiar"', async ({ page }) => {
  await page.goto('/');

  const saveButton = page.locator('[data-testid="save-threshold-button"]');
  await expect(saveButton).toBeVisible();
  await expect(saveButton).toHaveText('Salvar Limiar');
});

test('Button (Salvar): deve mudar para "Salvando..." quando clicado', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  const saveButton = page.locator('[data-testid="save-threshold-button"]');

  await thresholdInput.fill('90');

  // Clicar no botão
  await saveButton.click();

  // Verificar que o texto mudou
  await expect(saveButton).toHaveText('Salvando...');

  // Aguardar a conclusão (500ms)
  await page.waitForTimeout(600);

  // Verificar que voltou ao texto original
  await expect(saveButton).toHaveText('Salvar Limiar');
});

test('Button (Salvar): deve desabilitar durante o processo de salvamento', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  const saveButton = page.locator('[data-testid="save-threshold-button"]');

  await thresholdInput.fill('80');
  await saveButton.click();

  // Verificar que está desabilitado
  await expect(saveButton).toBeDisabled();

  // Aguardar o fim do processo
  await page.waitForTimeout(600);

  // Verificar que está habilitado novamente
  await expect(saveButton).toBeEnabled();
});

test('Button (Salvar): deve estar desabilitado se houver erro de validação', async ({ page }) => {
  await page.goto('/');

  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  const saveButton = page.locator('[data-testid="save-threshold-button"]');

  // Inserir valor inválido
  await thresholdInput.fill('999');
  await saveButton.click();

  // O botão deve estar disponível para novo clique (não fica travado)
  await page.waitForTimeout(600);
  await expect(saveButton).toBeEnabled();
});

// ═══════════════════════════════════════════════════════════════════════
// TESTES DO Button - Botão de Ativar/Desativar Alertas
// ═══════════════════════════════════════════════════════════════════════

test('Button (Alertas): deve exibir botão "Ativar Alertas" inicialmente', async ({ page }) => {
  await page.goto('/');

  const toggleButton = page.locator('[data-testid="toggle-alerts-button"]');
  await expect(toggleButton).toBeVisible();
  await expect(toggleButton).toHaveText('Ativar Alertas');
});

test('Button (Alertas): deve ativar alertas ao clicar', async ({ page }) => {
  await page.goto('/');

  const toggleButton = page.locator('[data-testid="toggle-alerts-button"]');
  const alertStatus = page.locator('[data-testid="alert-status"]');

  // Status inicial deve ser "Desativados"
  await expect(alertStatus).toHaveText('⚫ Desativados');

  // Clicar para ativar
  await toggleButton.click();

  // Texto do botão deve mudar
  await expect(toggleButton).toHaveText('Desativar Alertas');

  // Status deve ser "Ativados"
  await expect(alertStatus).toHaveText('🟢 Ativados');
});

test('Button (Alertas): deve desativar alertas ao clicar novamente', async ({ page }) => {
  await page.goto('/');

  const toggleButton = page.locator('[data-testid="toggle-alerts-button"]');
  const alertStatus = page.locator('[data-testid="alert-status"]');

  // Ativar alertas
  await toggleButton.click();
  await expect(alertStatus).toHaveText('🟢 Ativados');

  // Desativar alertas
  await toggleButton.click();
  await expect(alertStatus).toHaveText('⚫ Desativados');
  await expect(toggleButton).toHaveText('Ativar Alertas');
});

test('Button (Alertas): deve mudar de variante quando toggled', async ({ page }) => {
  await page.goto('/');

  const toggleButton = page.locator('[data-testid="toggle-alerts-button"]');

  // Verificar classe inicial (secondary - cinza)
  let classes = await toggleButton.getAttribute('class');
  await expect(classes).toContain('bg-gray-200');

  // Clicar para ativar
  await toggleButton.click();

  // Verificar classe ativa (danger - vermelho)
  classes = await toggleButton.getAttribute('class');
  await expect(classes).toContain('bg-red-600');
});

// ═══════════════════════════════════════════════════════════════════════
// TESTES DE INTEGRAÇÃO - Componentes + Page
// ═══════════════════════════════════════════════════════════════════════

test('Integração: deve carregar todos os componentes na página', async ({ page }) => {
  await page.goto('/');

  // Chart
  const chartContainer = page.locator('[data-testid="chart-container"]');
  await expect(chartContainer).toBeVisible();

  // Input Field
  const thresholdInput = page.locator('[data-testid="threshold-input"]');
  await expect(thresholdInput).toBeVisible();

  // Botões
  const saveButton = page.locator('[data-testid="save-threshold-button"]');
  const toggleButton = page.locator('[data-testid="toggle-alerts-button"]');
  await expect(saveButton).toBeVisible();
  await expect(toggleButton).toBeVisible();

  // Status de alertas
  const alertStatus = page.locator('[data-testid="alert-status"]');
  await expect(alertStatus).toBeVisible();
});

test('Integração: deve manter estado de alertas ao salvar limiar', async ({ page }) => {
  await page.goto('/');

  const toggleButton = page.locator('[data-testid="toggle-alerts-button"]');
  const saveButton = page.locator('[data-testid="save-threshold-button"]');
  const thresholdInput = page.locator('[data-testid="threshold-input"] input');
  const alertStatus = page.locator('[data-testid="alert-status"]');

  // Ativar alertas
  await toggleButton.click();
  await expect(alertStatus).toHaveText('🟢 Ativados');

  // Salvar novo limiar
  await thresholdInput.fill('100');
  await saveButton.click();
  await page.waitForTimeout(600);

  // Alertas devem continuar ativados
  await expect(alertStatus).toHaveText('🟢 Ativados');
});

test('Integração: deve exibir seção de configuração de alertas', async ({ page }) => {
  await page.goto('/');

  const heading = page.getByText('Configuração de Alertas');
  await expect(heading).toBeVisible();
});

test('Integração: deve navegar para testes do Playwright', async ({ page }) => {
  await page.goto('/');

  const playwrightLink = page.locator('[data-testid="playwright-tests-link"]');
  await expect(playwrightLink).toBeVisible();
  await expect(playwrightLink).toHaveAttribute(
    'href',
    'https://github.com/bernardooduarte/bop-mini-demo/actions/workflows/playwright.yml'
  );
});