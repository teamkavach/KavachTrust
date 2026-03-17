import { test, expect } from '@playwright/test';

// ─── Navbar & Routing ─────────────────────────────────────────────────────────

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('logo is visible and links to home', async ({ page }) => {
    const logo = page.getByRole('link', { name: /TeamKavach/i }).first();
    await expect(logo).toBeVisible();
    await logo.click();
    await expect(page).toHaveURL('/');
  });

  test('all nav links are present', async ({ page }) => {
    const isMobile = (page.viewportSize()?.width ?? 1280) < 1024;

    if (isMobile) {
      await page.getByRole('button', { name: /open menu/i }).click();
      for (const name of ['Home', 'Programs', 'Gallery', 'Get Involved', 'About', 'Impact']) {
        await expect(page.getByRole('button', { name })).toBeVisible();
      }
      return;
    }

    const nav = page.getByRole('navigation');
    for (const name of ['Home', 'Programs', 'Gallery', 'Get Involved', 'About', 'Impact']) {
      await expect(nav.getByRole('link', { name })).toBeVisible();
    }
  });

  test('Donate Now button is present in navbar', async ({ page }) => {
    const isMobile = (page.viewportSize()?.width ?? 1280) < 1024;

    if (isMobile) {
      await page.getByRole('button', { name: /open menu/i }).click();
      await expect(page.getByRole('button', { name: /Donate Now/i })).toBeVisible();
      return;
    }

    await expect(
      page.getByRole('navigation').getByRole('link', { name: /Donate/i })
    ).toBeVisible();
  });

  test('navbar becomes solid on scroll', async ({ page }) => {
    const nav = page.getByRole('navigation');
    // Initially on home page hero - bg is gradient
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(400);
    // After scroll navbar should have bg-white shadow class
    await expect(nav).toHaveClass(/shadow-lg/);
  });
});

test.describe('Mobile Navbar', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('hamburger menu opens and closes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const menuButton = page.getByRole('button', { name: /open menu/i });
    await expect(menuButton).toBeVisible();

    // Open menu
    await menuButton.click();
    await expect(page.getByRole('button', { name: /close menu/i })).toBeVisible();

    // Mobile nav links visible
    await expect(page.getByRole('button', { name: 'Programs' })).toBeVisible();

    // Close menu
    await page.getByRole('button', { name: /close menu/i }).click();
    await expect(page.getByRole('button', { name: /open menu/i })).toBeVisible();
  });

  test('mobile nav link navigates correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: /open menu/i }).click();
    await page.getByRole('button', { name: 'About' }).click();

    await expect(page).toHaveURL('/about');
  });
});

test.describe('All Routes Load', () => {
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/programs', label: 'Programs' },
    { path: '/about', label: 'About' },
    { path: '/impact', label: 'Impact' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/get-involved', label: 'GetInvolved' },
    { path: '/donate', label: 'Donate' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
    { path: '/stories', label: 'Stories' },
  ];

  for (const route of routes) {
    test(`${route.label} page loads without errors (${route.path})`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });

      await page.goto(route.path);
      await page.waitForLoadState('networkidle');

      // Page should not be blank
      await expect(page.locator('body')).not.toBeEmpty();

      // No JS console errors (filter out known 3rd-party noise)
      const criticalErrors = consoleErrors.filter(
        (e) => !e.includes('instagram') && !e.includes('cdn') && !e.includes('favicon')
      );
      expect(criticalErrors).toHaveLength(0);
    });
  }
});

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('footer renders with brand name', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
    await expect(footer.getByText('TeamKavach', { exact: true }).first()).toBeVisible();
  });

  test('footer quick links work', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await footer.getByRole('link', { name: 'Programs' }).click();
    await expect(page).toHaveURL('/programs');
  });

  test('footer social links are present', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await expect(footer.getByRole('link', { name: 'Instagram' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'YouTube' })).toBeVisible();
  });

  test('footer shows copyright text', async ({ page }) => {
    await expect(
      page.getByText(/TeamKavach\. All rights reserved/i)
    ).toBeVisible();
  });

  test('footer contact info present', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await expect(footer.getByRole('link', { name: /kavachtrust@gmail\.com/i })).toBeVisible();
    await expect(footer.getByRole('link', { name: /7892474801/i })).toBeVisible();
  });
});
