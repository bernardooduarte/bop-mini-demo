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