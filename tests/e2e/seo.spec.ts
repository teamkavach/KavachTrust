import { test, expect } from '@playwright/test';

// ─── SEO & Meta Tags ──────────────────────────────────────────────────────────

test.describe('Per-page Document Titles', () => {
  const routes = [
    { path: '/', titleContains: 'Team Kavach' },
    { path: '/programs', titleContains: 'Our Programs | Team Kavach' },
    { path: '/about', titleContains: 'About Us | Team Kavach' },
    { path: '/impact', titleContains: 'Our Impact | Team Kavach' },
    { path: '/gallery', titleContains: 'Gallery | Team Kavach' },
    { path: '/get-involved', titleContains: 'Get Involved | Team Kavach' },
    { path: '/donate', titleContains: 'Donate | Team Kavach' },
    { path: '/contact', titleContains: 'Contact Us | Team Kavach' },
    { path: '/faq', titleContains: 'FAQ | Team Kavach' },
    { path: '/stories', titleContains: 'Volunteer Stories | Team Kavach' },
  ];

  for (const route of routes) {
    test(`"${route.path}" has correct page title`, async ({ page }) => {
      await page.goto(route.path);
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveTitle(new RegExp(route.titleContains.replace(/[|]/g, '\\|'), 'i'));
    });
  }
});

test.describe('Meta Description', () => {
  test('index.html meta description is set', async ({ page }) => {
    await page.goto('/');
    const metaDesc = await page.$eval(
      'meta[name="description"]',
      (el) => el.getAttribute('content')
    );
    expect(metaDesc).not.toBeNull();
    expect(metaDesc!.length).toBeGreaterThan(10);
  });
});

test.describe('Canonical & Accessibility', () => {
  test('lang attribute is set on html element', async ({ page }) => {
    await page.goto('/');
    const lang = await page.$eval('html', (el) => el.getAttribute('lang'));
    expect(lang).toBe('en');
  });

  test('favicon is linked', async ({ page }) => {
    await page.goto('/');
    const favicon = await page.$eval(
      'link[rel="icon"]',
      (el) => el.getAttribute('href')
    );
    expect(favicon).toBeTruthy();
  });

  test('apple-touch-icon is linked', async ({ page }) => {
    await page.goto('/');
    const touchIcon = await page.$eval(
      'link[rel="apple-touch-icon"]',
      (el) => el.getAttribute('href')
    );
    expect(touchIcon).toBeTruthy();
  });
});

// ─── Copy/Content Quality ─────────────────────────────────────────────────────

test.describe('Copy Quality — Sentences end with periods', () => {
  test('About hero description ends with period', async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
    await expect(
      page.getByText(/through grassroots initiatives\./i)
    ).toBeVisible();
  });

  test('Impact hero description ends with period', async ({ page }) => {
    await page.goto('/impact');
    await page.waitForLoadState('networkidle');
    await expect(
      page.getByText(/transforming lives across Bangalore\./i)
    ).toBeVisible();
  });

  test('Programs hero description ends with period', async ({ page }) => {
    await page.goto('/programs');
    await page.waitForLoadState('networkidle');
    await expect(
      page.getByText(/create lasting change in Bangalore\./i)
    ).toBeVisible();
  });

  test('GetInvolved hero description ends with period', async ({ page }) => {
    await page.goto('/get-involved');
    await page.waitForLoadState('networkidle');
    await expect(
      page.getByText(/social initiatives\./i)
    ).toBeVisible();
  });

  test('Gallery description ends with period', async ({ page }) => {
    await page.goto('/gallery');
    await page.waitForLoadState('networkidle');
    await expect(
      page.getByText(/real change across Bangalore\./i)
    ).toBeVisible();
  });

  test('FAQ hero description ends with period', async ({ page }) => {
    await page.goto('/faq');
    await page.waitForLoadState('networkidle');
    await expect(
      page.getByText(/volunteering with Team Kavach\./i)
    ).toBeVisible();
  });
});

// ─── Badge Text ───────────────────────────────────────────────────────────────

test.describe('Content Fixes Verification', () => {
  test('Gallery badge reads "Our Journey" not "Our Visual Journey"', async ({ page }) => {
    await page.goto('/gallery');
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('Our Journey', { exact: true })).toBeVisible();
    await expect(page.getByText('Our Visual Journey')).toHaveCount(0);
  });
});
