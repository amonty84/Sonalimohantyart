const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(imgDir).filter(f => f.match(/\.(jpg|jpeg|png)$/) && !f.toLowerCase().includes('bio-pic') && !f.toLowerCase().includes('display-pic'));

const gallery = files.map((file, idx) => {
    // Try to parse info from filename: Title_Size_Year_Medium_Artist.jpg
    // This varies a lot, so we'll just parse basic title
    let nameParts = file.split('.')[0].split('_');
    let titleStr = nameParts[0].replace(/-/g, ' ');

    let year = nameParts.find(p => p.match(/20\d\d/)) || 'Unknown Year';

    // Basic classification
    let isPortrait = false;
    // We'll alternate aspects for masonry

    return {
        id: idx + 1,
        title: titleStr,
        src: `/images/${file}`,
        year,
        medium: 'Mixed Media / Acrylic', // default generic
        dimensions: 'Various',
    };
});

// Remove clear duplicates if they just end in -1, -2 etc, but keep unique
const uniqueGallery = [];
const seenTitles = new Set();
for (const item of gallery) {
    const baseTitle = item.title.replace(/\s\d$/, '');
    if (!seenTitles.has(baseTitle)) {
        uniqueGallery.push(item);
        seenTitles.add(baseTitle);
    }
}

const outContent = `export interface Artwork {
  id: number;
  title: string;
  src: string;
  year: string;
  medium: string;
  dimensions: string;
}

export const galleryData: Artwork[] = ${JSON.stringify(uniqueGallery, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/gallery.ts'), outContent);
console.log('Gallery data generated.');
