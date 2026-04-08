# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> deve falhar propositalmente para validar cenário reprovado
- Location: tests\dashboard.spec.ts:13:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByRole('heading', { name: 'BOP Monitoring Solution' })
Expected: "Título propositalmente incorreto"
Received: "BOP Monitoring Solution"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'BOP Monitoring Solution' })
    8 × locator resolved to <h1 class="text-2xl font-bold mb-6 text-slate-800">BOP Monitoring Solution</h1>
      - unexpected value "BOP Monitoring Solution"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - heading "BOP Monitoring Solution" [level=1] [ref=e3]
    - generic [ref=e6]:
      - list [ref=e8]:
        - listitem [ref=e9]:
          - img "Temperatura (°C) legend icon" [ref=e10]
          - text: Temperatura (°C)
        - listitem [ref=e12]:
          - img "Temperatura (°F) legend icon" [ref=e13]
          - text: Temperatura (°F)
      - application [ref=e15]:
        - generic [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e53]: 10:00 AM
            - generic [ref=e55]: 11:30 AM
            - generic [ref=e57]: 1:10 PM
            - generic [ref=e59]: 3:15 PM
            - generic [ref=e61]: 6:20 PM
          - generic [ref=e62]:
            - generic [ref=e64]: 0°F
            - generic [ref=e66]: 25°F
            - generic [ref=e68]: 50°F
            - generic [ref=e70]: 75°F
            - generic [ref=e72]: 100°F
          - generic [ref=e73]:
            - generic [ref=e75]: 0°C
            - generic [ref=e77]: 9°C
            - generic [ref=e79]: 18°C
            - generic [ref=e81]: 27°C
            - generic [ref=e83]: 36°C
  - button "Open Next.js Dev Tools" [ref=e89] [cursor=pointer]:
    - img [ref=e90]
  - alert [ref=e93]
  - generic [ref=e94]: "9"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('deve carregar o gráfico com múltiplos pontos de dados do BOP', async ({ page }) => {
  4  |   await page.goto('/');
  5  | 
  6  |   const chartContainer = page.locator('[data-testid="chart-container"]');
  7  |   await expect(chartContainer).toBeVisible();
  8  | 
  9  |   const dataPoints = page.locator('.recharts-dot');
  10 |   await expect.poll(async () => dataPoints.count()).toBeGreaterThan(1);
  11 | });
  12 | 
  13 | test('deve falhar propositalmente para validar cenário reprovado', async ({ page }) => {
  14 |   await page.goto('/');
  15 | 
  16 |   const title = page.getByRole('heading', { name: 'BOP Monitoring Solution' });
> 17 |   await expect(title).toHaveText('Título propositalmente incorreto');
     |                       ^ Error: expect(locator).toHaveText(expected) failed
  18 | });
```