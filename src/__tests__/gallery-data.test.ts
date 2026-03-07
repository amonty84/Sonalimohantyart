import { describe, it, expect } from 'vitest';
import { galleryData, CATEGORIES, getArtworkSlug, getArtworkBySlug, getRelatedArtworks } from '@/data/gallery';

describe('Gallery Data', () => {
  it('should have artwork entries', () => {
    expect(galleryData.length).toBeGreaterThan(0);
  });

  it('every artwork has required fields', () => {
    for (const artwork of galleryData) {
      expect(artwork.id).toBeDefined();
      expect(artwork.title).toBeTruthy();
      expect(artwork.src).toBeTruthy();
      expect(artwork.medium).toBeTruthy();
      expect(artwork.dimensions).toBeTruthy();
      expect(artwork.category).toBeTruthy();
    }
  });

  it('all artwork categories are valid', () => {
    for (const artwork of galleryData) {
      expect(CATEGORIES).toContain(artwork.category);
    }
  });

  it('all artwork IDs are unique', () => {
    const ids = galleryData.map((a) => a.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('all artwork image paths start with /images/', () => {
    for (const artwork of galleryData) {
      expect(artwork.src).toMatch(/^\/images\/.+\.webp$/);
    }
  });
});

describe('getArtworkSlug', () => {
  it('converts title to URL-friendly slug', () => {
    const artwork = galleryData[0];
    const slug = getArtworkSlug(artwork);
    expect(slug).toMatch(/^[a-z0-9-]+$/);
    expect(slug).not.toMatch(/^-|-$/);
  });

  it('generates unique slugs for all artworks', () => {
    const slugs = galleryData.map(getArtworkSlug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });
});

describe('getArtworkBySlug', () => {
  it('finds artwork by slug', () => {
    const artwork = galleryData[0];
    const slug = getArtworkSlug(artwork);
    const found = getArtworkBySlug(slug);
    expect(found).toBeDefined();
    expect(found?.id).toBe(artwork.id);
  });

  it('returns undefined for non-existent slug', () => {
    const found = getArtworkBySlug('non-existent-slug-xyz');
    expect(found).toBeUndefined();
  });
});

describe('getRelatedArtworks', () => {
  it('returns artworks from the same category', () => {
    const artwork = galleryData[0];
    const related = getRelatedArtworks(artwork);
    for (const item of related) {
      expect(item.category).toBe(artwork.category);
      expect(item.id).not.toBe(artwork.id);
    }
  });

  it('returns at most the requested count', () => {
    const artwork = galleryData[0];
    const related = getRelatedArtworks(artwork, 2);
    expect(related.length).toBeLessThanOrEqual(2);
  });
});
