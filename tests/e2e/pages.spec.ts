import { test, expect } from '@playwright/test';

// ─── Home Page ────────────────────────────────────────────────────────────────

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('hero badge is visible', async ({ page }) => {
    await expect(page.getByText(/Bangalore's Youth-Led NGO Since 2019/i)).toBeVisible();
  });

  test('at least one slogan is visible', async ({ page }) => {
    // One of the three rotating slogans should be on screen
    const slogans = ['Sharing Warmth', 'Nurturing Dreams', 'Creating a Better Tomorrow'];
    let found = false;
    for (const slogan of slogans) {
      const el = page.getByText(slogan, { exact: true });
      if (await el.count() > 0) {
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });

  test('slogan indicator dots render', async ({ page }) => {
    // 3 dot buttons for the 3 slogans
    const dots = page.getByRole('button', { name: /Sharing Warmth|Nurturing Dreams|Creating a Better Tomorrow/i });
    await expect(dots).toHaveCount(3);
  });

  test('hero CTA buttons present', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Join The Movement/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /See Our Work/i })).toBeVisible();
  });

  test('stats section shows counters', async ({ page }) => {
    await expect(page.getByText(/Volunteers/i).first()).toBeVisible();
    await expect(page.getByText(/Blankets/i).first()).toBeVisible();
    await expect(page.getByText(/Years/i).first()).toBeVisible();
  });

  test('"What Happens When We Care" section renders', async ({ page }) => {
    await expect(page.getByText(/What Happens When We Care/i)).toBeVisible();
  });

  test('programs grid shows 3 programs', async ({ page }) => {
    await page.getByText('Our Programs').scrollIntoViewIfNeeded();
    const programTitles = ['Education', 'Healthcare', 'Environment'];
    for (const title of programTitles) {
      await expect(page.getByRole('heading', { name: title, level: 3 }).first()).toBeVisible();
    }
  });

  test('View All Programs button links to /programs', async ({ page }) => {
    const btn = page.getByRole('link', { name: /View All Programs/i });
    await btn.scrollIntoViewIfNeeded();
    await expect(btn).toHaveAttribute('href', '/programs');
  });

  test('final CTA section renders', async ({ page }) => {
    await expect(page.getByText(/Are You Ready To Make A Difference/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /Start Volunteering/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Support Our Cause/i })).toBeVisible();
  });

  test('"Join The Movement" navigates to get-involved', async ({ page }) => {
    await page.getByRole('link', { name: /Join The Movement/i }).click();
    await expect(page).toHaveURL('/get-involved');
  });
});

// ─── Programs Page ────────────────────────────────────────────────────────────

test.describe('Programs Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/programs');
    await page.waitForLoadState('networkidle');
  });

  test('hero section renders correctly', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Our Programs/i, level: 1 })).toBeVisible();
    await expect(page.getByText(/Creating Impact/i).first()).toBeVisible();
    await expect(page.getByText(/Community Impact/i)).toBeVisible();
  });

  test('all 5 programs render', async ({ page }) => {
    const programs = [
      'Education & Youth Empowerment',
      'Health & Welfare Drives',
      'Winter Blanket Distribution',
      'Environmental Conservation',
      'Sports and Cultural Engagement',
    ];
    for (const name of programs) {
      await expect(page.getByRole('heading', { name, level: 3 }).first()).toBeVisible();
    }
  });

  test('each program has impact items', async ({ page }) => {
    // Spot check: blanket distribution impact
    await expect(page.getByText(/1000\+ blankets distributed/i)).toBeVisible();
  });

  test('CTA section renders with correct links', async ({ page }) => {
    await expect(page.getByText(/Ready to Make/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /Become a Volunteer/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Support Our Work/i })).toBeVisible();
  });
});

// ─── About Page ───────────────────────────────────────────────────────────────

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
    await page.waitForLoadState('networkidle');
  });

  test('hero renders with Since 2019 badge', async ({ page }) => {
    await expect(page.getByText(/Since 2019/i).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /About Us/i, level: 1 })).toBeVisible();
  });

  test('"Who We Are" section renders', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Who We Are/i })).toBeVisible();
    await expect(page.getByText(/Team Kavach/i).first()).toBeVisible();
  });

  test('4 values render', async ({ page }) => {
    for (const v of ['Compassion', 'Community', 'Impact', 'Innovation']) {
      await expect(page.getByRole('heading', { name: v, level: 3 })).toBeVisible();
    }
  });

  test('timeline milestones render', async ({ page }) => {
    await expect(page.getByText('Our Journey').first()).toBeVisible();
    for (const milestone of ['Founded', 'Environmental', 'Blood Donation', 'Education', 'School Painting', 'Notebook Drive']) {
      const item = page.getByRole('heading', { name: milestone, level: 3 }).first();
      await item.scrollIntoViewIfNeeded();
      await expect(item).toBeVisible();
    }
  });

  test('mission statement renders', async ({ page }) => {
    await expect(page.getByText(/Our Mission/i).first()).toBeVisible();
    await expect(page.getByText(/safeguard those around us/i)).toBeVisible();
  });

  test('"180+ Volunteers" team section renders', async ({ page }) => {
    await expect(page.getByText(/180\+ Volunteers/i)).toBeVisible();
  });
});

// ─── Impact Page ──────────────────────────────────────────────────────────────

test.describe('Impact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/impact');
    await page.waitForLoadState('networkidle');
  });

  test('hero renders correctly', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Your Impact/i, level: 1 })).toBeVisible();
    await expect(page.getByText(/In Numbers/i).first()).toBeVisible();
    await expect(page.getByText(/Growing Impact Since 2019/i)).toBeVisible();
  });

  test('3 program impact cards render', async ({ page }) => {
    const cards = ['Education & Youth Impact', 'Health & Welfare Impact', 'Environmental Impact'];
    for (const card of cards) {
      await expect(page.getByRole('heading', { name: card, level: 3 })).toBeVisible();
    }
  });

  test('key impact stats visible', async ({ page }) => {
    await expect(page.getByText(/50,000\+/i).first()).toBeVisible();
    await expect(page.getByText(/1000\+/i).first()).toBeVisible();
    await expect(page.getByText(/600\+/i).first()).toBeVisible();
  });

  test('testimonials section renders', async ({ page }) => {
    await expect(page.getByText(/Stories from the Field/i)).toBeVisible();
    await expect(page.getByText(/Mr\. Manjunath BN/i)).toBeVisible();
  });

  test('"Growing Together Since 2019" section renders', async ({ page }) => {
    await expect(page.getByText(/Growing Together/i)).toBeVisible();
  });
});

// ─── Get Involved Page ────────────────────────────────────────────────────────

test.describe('Get Involved Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/get-involved');
    await page.waitForLoadState('networkidle');
  });

  test('hero renders with volunteer count badge', async ({ page }) => {
    await expect(page.getByText(/Join 180\+ Volunteers/i).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Get Involved/i, level: 1 })).toBeVisible();
    await expect(page.getByText(/Make an Impact/i).first()).toBeVisible();
  });

  test('"Why Volunteer With Us?" section renders', async ({ page }) => {
    await expect(page.getByText(/Why Volunteer With Us\?/i)).toBeVisible();
    for (const item of ['Real Impact', 'Community', 'Skill Growth', 'Flexible']) {
      await expect(page.getByRole('heading', { name: item, level: 3 })).toBeVisible();
    }
  });

  test('3 volunteer role cards render', async ({ page }) => {
    for (const role of ['Field Volunteer', 'Event Organizer', 'Content Creator']) {
      await expect(page.getByRole('heading', { name: role, level: 3 })).toBeVisible();
    }
  });

  test('"Apply Now" buttons link to /contact', async ({ page }) => {
    const applyButtons = page.getByRole('link', { name: /Apply Now/i });
    const count = await applyButtons.count();
    expect(count).toBeGreaterThan(0);
    // All apply buttons should go to /contact
    for (let i = 0; i < count; i++) {
      await expect(applyButtons.nth(i)).toHaveAttribute('href', '/contact');
    }
  });

  test('"How It Works" 3 steps render', async ({ page }) => {
    await expect(page.getByText(/How It Works/i)).toBeVisible();
    for (const step of ['Fill Application', 'Orientation', 'Start Impact']) {
      await expect(page.getByRole('heading', { name: step, level: 3 })).toBeVisible();
    }
  });

  test('donation impact card renders', async ({ page }) => {
    await expect(page.getByText(/Can't Volunteer\?/i)).toBeVisible();
    await expect(page.getByText(/₹250/i).first()).toBeVisible();
  });

  test('contact card has Instagram and email links', async ({ page }) => {
    await expect(page.getByRole('link', { name: /DM on Instagram/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Send us an Email/i })).toBeVisible();
  });
});

// ─── Gallery Page ─────────────────────────────────────────────────────────────

test.describe('Gallery Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/gallery');
    await page.waitForLoadState('networkidle');
  });

  test('hero renders with "Our Journey" badge', async ({ page }) => {
    await expect(page.getByText('Our Journey')).toBeVisible();
    await expect(page.getByRole('heading', { name: /Photo Gallery/i, level: 1 })).toBeVisible();
    await expect(page.getByText(/Stories in Pictures/i)).toBeVisible();
  });

  test('gallery description ends with period', async ({ page }) => {
    await expect(
      page.getByText(/Witness the moments that define our mission.*real change across Bangalore\./i)
    ).toBeVisible();
  });

  test('event albums grid loads', async ({ page }) => {
    // Wait for albums to load from JSON
    await page.waitForTimeout(1500);
    const albums = page.locator('.group.cursor-pointer');
    const count = await albums.count();
    expect(count).toBeGreaterThan(0);
  });

  test('clicking an album opens photo view', async ({ page }) => {
    await page.waitForTimeout(1500);
    const firstAlbum = page.locator('.group.cursor-pointer').first();
    await firstAlbum.click();
    // Back button appears in photo view
    await expect(page.getByRole('button', { name: /Back to Gallery/i })).toBeVisible();
  });

  test('"Back to Gallery" returns to events grid', async ({ page }) => {
    await page.waitForTimeout(1500);
    await page.locator('.group.cursor-pointer').first().click();
    await page.getByRole('button', { name: /Back to Gallery/i }).click();
    // Gallery hero should be visible again
    await expect(page.getByText('Our Journey')).toBeVisible();
  });
});

// ─── Donate Page ──────────────────────────────────────────────────────────────

test.describe('Donate Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/donate');
    await page.waitForLoadState('networkidle');
  });

  test('hero renders correctly', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Support Our Mission/i, level: 1 })).toBeVisible();
    await expect(page.getByText(/Every Rupee Counts/i)).toBeVisible();
  });

  test('Winter Campaign 2026 banner renders', async ({ page }) => {
    await expect(page.getByText(/Winter Campaign 2026/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /MISSION WINTER RELIEF/i })).toBeVisible();
  });

  test('UPI ID is displayed', async ({ page }) => {
    await expect(page.getByText('teamkavach@ybl')).toBeVisible();
  });

  test('PhonePe number is displayed', async ({ page }) => {
    await expect(page.getByText('+91 9611438065')).toBeVisible();
  });

  test('"After Payment" steps render', async ({ page }) => {
    await expect(page.getByText(/Important: After Payment/i)).toBeVisible();
    await expect(page.getByText('Take Screenshot', { exact: true })).toBeVisible();
    await expect(page.getByText('WhatsApp Us', { exact: true }).last()).toBeVisible();
    await expect(page.getByText('Get Receipt', { exact: true })).toBeVisible();
  });

  test('WhatsApp and email help links render', async ({ page }) => {
    await expect(page.getByRole('link', { name: /WhatsApp/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Email Us/i })).toBeVisible();
  });
});

// ─── FAQ Page ─────────────────────────────────────────────────────────────────

test.describe('FAQ Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/faq');
    await page.waitForLoadState('networkidle');
  });

  test('hero renders', async ({ page }) => {
    await expect(page.getByText(/Got Questions\?/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /Frequently Asked/i, level: 1 })).toBeVisible();
  });

  test('FAQ questions are listed', async ({ page }) => {
    const questions = page.locator('button').filter({ hasText: /\?/ });
    const count = await questions.count();
    expect(count).toBeGreaterThan(0);
  });

  test('clicking a question expands the answer', async ({ page }) => {
    const firstQuestion = page.locator('button').filter({ hasText: /\?/ }).first();
    await firstQuestion.click();
    // Answer area should appear
    const answerArea = page.locator('.overflow-hidden p').first();
    await expect(answerArea).toBeVisible();
  });

  test('clicking expanded question collapses it', async ({ page }) => {
    const firstQuestion = page.locator('button').filter({ hasText: /\?/ }).first();
    await firstQuestion.click();
    await page.waitForTimeout(300);
    await expect(page.locator('.overflow-hidden').filter({ has: page.locator('div.text-muted-foreground') }).first()).toBeVisible();
    await firstQuestion.click();
    await page.waitForTimeout(300);
    await expect(page.locator('.overflow-hidden').filter({ has: page.locator('div.text-muted-foreground') })).toHaveCount(0);
  });
});

// ─── Stories Page ─────────────────────────────────────────────────────────────

test.describe('Stories Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/stories');
    await page.waitForLoadState('networkidle');
  });

  test('story cards render', async ({ page }) => {
    const cards = page.locator('.grid .cursor-pointer, .grid [class*="rounded"]');
    // At least some story content is visible
    await expect(page.getByText(/From Volunteer to Mentor/i)).toBeVisible();
  });

  test('clicking a story navigates to story detail', async ({ page }) => {
    await page.getByText(/From Volunteer to Mentor/i).click();
    await expect(page).toHaveURL(/\/stories\//);
  });
});
