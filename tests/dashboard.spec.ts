import { test, expect } from '@playwright/test';

test('deve carregar o gráfico com múltiplos pontos de dados do BOP', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const chartContainer = page.locator('[data-testid="chart-container"]');
  await expect(chartContainer).toBeVisible();

  const dataPoints = page.locator('.recharts-dot');
  await expect(await dataPoints.count()).toBeGreaterThan(1);
});