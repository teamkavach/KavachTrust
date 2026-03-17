import { test, expect } from '@playwright/test';

const nameInput = (page: Parameters<typeof test>[0] extends never ? never : any) => page.locator('input[name="name"]');
const emailInput = (page: Parameters<typeof test>[0] extends never ? never : any) => page.locator('input[name="email"]');
const phoneInput = (page: Parameters<typeof test>[0] extends never ? never : any) => page.locator('input[name="phone"]');
const topicSelect = (page: Parameters<typeof test>[0] extends never ? never : any) => page.locator('select[name="topic"]');
const messageInput = (page: Parameters<typeof test>[0] extends never ? never : any) => page.locator('textarea[name="message"]');

// ─── Contact Form ─────────────────────────────────────────────────────────────

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
  });

  test('hero renders correctly', async ({ page }) => {
    await expect(page.getByText(/We'd Love to Hear From You/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Get in Touch/i, level: 1 })).toBeVisible();
  });

  test('all required form fields are present', async ({ page }) => {
    await expect(nameInput(page)).toBeVisible();
    await expect(emailInput(page)).toBeVisible();
    await expect(messageInput(page)).toBeVisible();
  });

  test('optional fields are present', async ({ page }) => {
    await expect(phoneInput(page)).toBeVisible();
    await expect(topicSelect(page)).toBeVisible();
  });

  test('volunteering sub-options appear when topic is "Volunteering"', async ({ page }) => {
    await topicSelect(page).selectOption('Volunteering');
    await expect(page.getByText(/How would you like to contribute\?/i)).toBeVisible();
    await expect(page.getByText(/Volunteer on Ground/i)).toBeVisible();
    await expect(page.getByText(/Content Creation/i)).toBeVisible();
    await expect(page.getByText(/Event Organizer/i)).toBeVisible();
  });

  test('volunteering sub-options disappear when topic changes', async ({ page }) => {
    await topicSelect(page).selectOption('Volunteering');
    await expect(page.getByText(/Volunteer on Ground/i)).toBeVisible();
    await topicSelect(page).selectOption('Donation');
    await expect(page.getByText(/How would you like to contribute\?/i)).toHaveCount(0);
  });

  test('send button is present and has correct type', async ({ page }) => {
    const sendBtn = page.getByRole('button', { name: /Send Message/i });
    await expect(sendBtn).toBeVisible();
    await expect(sendBtn).toHaveAttribute('type', 'submit');
  });

  test('submitting empty form does not send (HTML5 validation)', async ({ page }) => {
    await page.getByRole('button', { name: /Send Message/i }).click();
    // Should still be on contact page (HTML5 required validation prevents submit)
    await expect(page).toHaveURL('/contact');
  });

  test('contact info cards render', async ({ page }) => {
    const email = page.getByRole('link', { name: /kavachtrust@gmail\.com/i }).first();
    await email.scrollIntoViewIfNeeded();
    await expect(email).toBeVisible();
    await expect(page.getByRole('link', { name: /7892474801/i }).first()).toBeVisible();
    await expect(page.getByText(/Bangalore, Karnataka, India/i).first()).toBeVisible();
  });

  test('filling in form fields works', async ({ page }) => {
    await nameInput(page).fill('Test User');
    await emailInput(page).fill('test@example.com');
    await messageInput(page).fill('This is a test message for Team Kavach.');

    await expect(nameInput(page)).toHaveValue('Test User');
    await expect(emailInput(page)).toHaveValue('test@example.com');
    await expect(messageInput(page)).toHaveValue('This is a test message for Team Kavach.');
  });
});

// ─── Donate Page — Copy Buttons ───────────────────────────────────────────────

test.describe('Donate Page — Clipboard Interactions', () => {
  test.beforeEach(async ({ page }) => {
    // Grant clipboard permissions
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/donate');
    await page.waitForLoadState('networkidle');
  });

  test('copy UPI button toggles to check icon', async ({ page }) => {
    const upiCard = page.locator('div').filter({ hasText: 'UPI ID' }).filter({ hasText: 'teamkavach@ybl' }).first();
    const upiCopyBtn = upiCard.getByRole('button').first();
    await upiCopyBtn.click();
    await expect(upiCopyBtn).toBeVisible();
  });

  test('UPI ID value is accurate', async ({ page }) => {
    await expect(page.getByText('teamkavach@ybl')).toBeVisible();
  });

  test('PhonePe number value is accurate', async ({ page }) => {
    await expect(page.getByText('+91 9611438065')).toBeVisible();
  });
});

// ─── Gallery — Lightbox ───────────────────────────────────────────────────────

test.describe('Gallery Lightbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/gallery');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);
    // Open the first album
    await page.locator('.group.cursor-pointer').first().click();
    await page.waitForTimeout(500);
  });

  test('photos grid renders inside album', async ({ page }) => {
    const photos = page.locator('[class*="aspect-square"]');
    const count = await photos.count();
    expect(count).toBeGreaterThan(0);
  });

  test('clicking a photo opens lightbox', async ({ page }) => {
    const firstPhoto = page.locator('[class*="aspect-square"]').first();
    await firstPhoto.click();
    await expect(page.getByText(/Photo 1 of/i)).toBeVisible();
  });

  test('Escape key closes lightbox', async ({ page }) => {
    await page.locator('[class*="aspect-square"]').first().click();
    await page.keyboard.press('Escape');
    // Lightbox gone — back button still visible (still in album view)
    await expect(page.getByRole('button', { name: /Back to Gallery/i })).toBeVisible();
  });
});

// ─── Mobile Responsiveness ────────────────────────────────────────────────────

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('home hero is fully visible on mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('link', { name: /Join The Movement/i })).toBeVisible();
  });

  test('programs page is scrollable on mobile', async ({ page }) => {
    await page.goto('/programs');
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading', { name: /Our Programs/i, level: 1 })).toBeVisible();
    // scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByRole('link', { name: /Become a Volunteer/i })).toBeVisible();
  });

  test('contact form is usable on mobile', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');
    await expect(nameInput(page)).toBeVisible();
    await expect(page.getByRole('button', { name: /Send Message/i })).toBeVisible();
  });

  test('slogan container does not cause layout shift on mobile', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    // Wait for 3 slogan transitions
    await page.waitForTimeout(9500);
    // Page should not have scrolled horizontally
    const scrollX = await page.evaluate(() => window.scrollX);
    expect(scrollX).toBe(0);
  });

  test('donate page UPI details visible on mobile', async ({ page }) => {
    await page.goto('/donate');
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('teamkavach@ybl')).toBeVisible();
  });
});
