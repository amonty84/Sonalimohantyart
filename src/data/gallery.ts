export type ArtworkCategory = 'Animals & Birds' | 'Flowers' | 'Women' | 'Mythology';

export const CATEGORIES: ArtworkCategory[] = ['Animals & Birds', 'Flowers', 'Women', 'Mythology'];

export interface Artwork {
  id: number;
  title: string;
  src: string;
  year: string;
  medium: string;
  dimensions: string;
  category: ArtworkCategory;
}

export const galleryData: Artwork[] = [
  {
    "id": 1,
    "title": "32 Forms of Ganesha",
    "src": "/images/32-Forms-of-Ganesha_30inX30in_Sonali-Mohanty-1.webp",
    "year": "",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 30\"",
    "category": "Mythology"
  },
  {
    "id": 4,
    "title": "A Lesson in Humility",
    "src": "/images/A-Lesson-in-Humility_30X24in_2015_Acrylic_Sonali-Mohanty-1.webp",
    "year": "2015",
    "medium": "Acrylic",
    "dimensions": "30\" x 24\"",
    "category": "Mythology"
  },
  {
    "id": 8,
    "title": "All His Creatures",
    "src": "/images/All-His-Creatures_30X36_SonaliMohanty_2025-1.webp",
    "year": "2025",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 36\"",
    "category": "Animals & Birds"
  },
  {
    "id": 11,
    "title": "Bal Ganesha",
    "src": "/images/Bal-Ganesha_Sonali-Mohanty-1.webp",
    "year": "",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "Various",
    "category": "Mythology"
  },
  {
    "id": 14,
    "title": "Birds of a Feather",
    "src": "/images/Birds-of-a-feather_30X36_SonaliMohanty_2025-1.webp",
    "year": "2025",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 36\"",
    "category": "Animals & Birds"
  },
  {
    "id": 16,
    "title": "Brothers in Arms 1",
    "src": "/images/Brothers-in-Arm-1_24X24n_2016-1.webp",
    "year": "2016",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "24\" x 24\"",
    "category": "Animals & Birds"
  },
  {
    "id": 22,
    "title": "Cow",
    "src": "/images/Cow_11inX14in_acrylic-on-acrylic-paper_2020-1.webp",
    "year": "2020",
    "medium": "Acrylic on Acrylic Paper",
    "dimensions": "11\" x 14\"",
    "category": "Animals & Birds"
  },
  {
    "id": 24,
    "title": "Divine Four 03",
    "src": "/images/Divine-Four-03-30X30-2018.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 30\"",
    "category": "Mythology"
  },
  {
    "id": 25,
    "title": "Dove",
    "src": "/images/Dove_20inX20in_Mixed-Media_2022.webp",
    "year": "2022",
    "medium": "Mixed Media",
    "dimensions": "20\" x 20\"",
    "category": "Animals & Birds"
  },
  {
    "id": 26,
    "title": "Ekdantaya",
    "src": "/images/Ekdantaya_12X12in_2016-1.webp",
    "year": "2016",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Mythology"
  },
  {
    "id": 29,
    "title": "Elephant and Women 1",
    "src": "/images/Elephant-and-Women-1-_12X12_Acrylic-on-canvas_Sonali-Mohanty_2024-1.webp",
    "year": "2024",
    "medium": "Acrylic on Canvas",
    "dimensions": "12\" x 12\"",
    "category": "Women"
  },
  {
    "id": 31,
    "title": "Elephants in the Room",
    "src": "/images/Elephants_In_The_Room_30inX30in_SonaliMohanty_2025-1.webp",
    "year": "2025",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 30\"",
    "category": "Animals & Birds"
  },
  {
    "id": 33,
    "title": "Father and Son 2",
    "src": "/images/Father-and-on-2_12inX12in_Acrylic_2022-1.webp",
    "year": "2022",
    "medium": "Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Mythology"
  },
  {
    "id": 36,
    "title": "Ganesha and the Moon",
    "src": "/images/Ganesha-and-the-moon_24X30in_2016-1.webp",
    "year": "2016",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "24\" x 30\"",
    "category": "Mythology"
  },
  {
    "id": 38,
    "title": "Gang Gang of Cows",
    "src": "/images/Gang-gang-of-cows_20in_20in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "20\" x 20\"",
    "category": "Animals & Birds"
  },
  {
    "id": 40,
    "title": "Garden Birds",
    "src": "/images/Garden-Birds_Sonali-Mohanty_Acylic_18inX24in_2016-1.webp",
    "year": "2016",
    "medium": "Acrylic",
    "dimensions": "18\" x 24\"",
    "category": "Animals & Birds"
  },
  {
    "id": 42,
    "title": "Garden of Bliss",
    "src": "/images/Garden-Of-Bliss_30X36_SonaliMohanty_2025-1.webp",
    "year": "2025",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 36\"",
    "category": "Flowers"
  },
  {
    "id": 44,
    "title": "Gemini",
    "src": "/images/Gemini_Generated_Image_49cbs349cbs349cb.webp",
    "year": "",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "Various",
    "category": "Women"
  },
  {
    "id": 46,
    "title": "Glaring Glaring of Cats",
    "src": "/images/Glaring-glaring-of-cats_20in_20in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "20\" x 20\"",
    "category": "Animals & Birds"
  },
  {
    "id": 48,
    "title": "Golden Ganesha",
    "src": "/images/Golden-Ganesha_30X30_Sonali-Mohanty_2023.webp",
    "year": "2023",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 30\"",
    "category": "Mythology"
  },
  {
    "id": 49,
    "title": "Haridra Ganapati",
    "src": "/images/Haridra-Ganapati_9inX12in_Acrylic-on-Acrylic-paper_2020-1.webp",
    "year": "2020",
    "medium": "Acrylic on Acrylic Paper",
    "dimensions": "9\" x 12\"",
    "category": "Mythology"
  },
  {
    "id": 51,
    "title": "Heart2Heart",
    "src": "/images/Heart2Heart_24inX36in_Sonali-Mohanty_Acrylic_2024-1.webp",
    "year": "2024",
    "medium": "Acrylic",
    "dimensions": "24\" x 36\"",
    "category": "Women"
  },
  {
    "id": 54,
    "title": "Horse",
    "src": "/images/Horse_11inX14in_acrylic-on-acrylic-paper_2020-1.webp",
    "year": "2020",
    "medium": "Acrylic on Acrylic Paper",
    "dimensions": "11\" x 14\"",
    "category": "Animals & Birds"
  },
  {
    "id": 56,
    "title": "I Wish I Could Fly",
    "src": "/images/I-wish-I-could-fly_6X6_Watercolor-and-Gouache-_Sonali-Mohanty.webp",
    "year": "",
    "medium": "Watercolor and Gouache",
    "dimensions": "6\" x 6\"",
    "category": "Women"
  },
  {
    "id": 57,
    "title": "Iris",
    "src": "/images/Iris_20inX20in_Mixed-Media_2022.webp",
    "year": "2022",
    "medium": "Mixed Media",
    "dimensions": "20\" x 20\"",
    "category": "Flowers"
  },
  {
    "id": 58,
    "title": "Kanthaka and Siddhartha",
    "src": "/images/Kanthaka-and-Siddhartha_12X12_2019-1.webp",
    "year": "2019",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Mythology"
  },
  {
    "id": 62,
    "title": "Lucky 7",
    "src": "/images/Lucky-7_24X24_Acrylic-on-canvas_Sonali-Mohanty_2024-1.webp",
    "year": "2024",
    "medium": "Acrylic on Canvas",
    "dimensions": "24\" x 24\"",
    "category": "Animals & Birds"
  },
  {
    "id": 64,
    "title": "Mini Planets",
    "src": "/images/Mini-Planets_4X6_Watercolor-and-Gouache-_Sonali-Mohanty_2022.webp",
    "year": "2022",
    "medium": "Watercolor and Gouache",
    "dimensions": "4\" x 6\"",
    "category": "Flowers"
  },
  {
    "id": 65,
    "title": "Elaborate Elephants",
    "src": "/images/Mohanty-Sonali-Elaborate-Elephants_24X24in-2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "24\" x 24\"",
    "category": "Animals & Birds"
  },
  {
    "id": 67,
    "title": "Embellished Steer",
    "src": "/images/Mohanty-Sonali-Embellished-Steer-30X30in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 30\"",
    "category": "Animals & Birds"
  },
  {
    "id": 71,
    "title": "Grand Tabby",
    "src": "/images/Mohanty-Sonali-Grand-Tabby-_18inX24in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "18\" x 24\"",
    "category": "Animals & Birds"
  },
  {
    "id": 74,
    "title": "Nandi and Ganesha",
    "src": "/images/Nandi-and-Ganesha-_12X12_2019-1.webp",
    "year": "2019",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Mythology"
  },
  {
    "id": 78,
    "title": "Navadurga",
    "src": "/images/Navadurga_30X30_Acrylic-on-canvas_Sonali-Mohanty_2023.webp",
    "year": "2023",
    "medium": "Acrylic on Canvas",
    "dimensions": "30\" x 30\"",
    "category": "Mythology"
  },
  {
    "id": 79,
    "title": "Parrot",
    "src": "/images/Parrot_11X14_AcrylicMixed-Media-on-Paper_2020_SonaliMohanty-1.webp",
    "year": "2020",
    "medium": "Acrylic / Mixed Media on Paper",
    "dimensions": "11\" x 14\"",
    "category": "Animals & Birds"
  },
  {
    "id": 81,
    "title": "Peacock",
    "src": "/images/Peacock_11inX14in_acrylic-on-acrylic-paper_2020-1.webp",
    "year": "2020",
    "medium": "Acrylic on Acrylic Paper",
    "dimensions": "11\" x 14\"",
    "category": "Animals & Birds"
  },
  {
    "id": 84,
    "title": "Pod Pod of Birds",
    "src": "/images/Pod-Pod-of-birds_20in_20in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "20\" x 20\"",
    "category": "Animals & Birds"
  },
  {
    "id": 86,
    "title": "Poppy",
    "src": "/images/Poppy_20inX20in_Mixed-Media_2022.webp",
    "year": "2022",
    "medium": "Mixed Media",
    "dimensions": "20\" x 20\"",
    "category": "Flowers"
  },
  {
    "id": 87,
    "title": "Red Lotus 4",
    "src": "/images/Red-Lotus4_Acrylic_12X12-1.webp",
    "year": "",
    "medium": "Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Flowers"
  },
  {
    "id": 89,
    "title": "Ruby",
    "src": "/images/Ruby_12inX12in_Mixed-Media_2022-1.webp",
    "year": "2022",
    "medium": "Mixed Media",
    "dimensions": "12\" x 12\"",
    "category": "Flowers"
  },
  {
    "id": 93,
    "title": "Sapphire",
    "src": "/images/Sapphire_20inX20in_Mixed-Media_2022.webp",
    "year": "2022",
    "medium": "Mixed Media",
    "dimensions": "20\" x 20\"",
    "category": "Flowers"
  },
  {
    "id": 94,
    "title": "Scarlet",
    "src": "/images/Scarlet_20inX20in_Mixed-Media_2022.webp",
    "year": "2022",
    "medium": "Mixed Media",
    "dimensions": "20\" x 20\"",
    "category": "Flowers"
  },
  {
    "id": 95,
    "title": "Sonali Mohanty",
    "src": "/images/Sonali-Mohanty.webp",
    "year": "",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "Various",
    "category": "Women"
  },
  {
    "id": 99,
    "title": "The Balloon Seller",
    "src": "/images/The-Balloon-Seller_Sonali-Mohanty_18inX36in_Acrylic_2016-1.webp",
    "year": "2016",
    "medium": "Acrylic",
    "dimensions": "18\" x 36\"",
    "category": "Women"
  },
  {
    "id": 101,
    "title": "The Divine Four 03",
    "src": "/images/The-Divine-Four-03_30in-X-30in_Acrylic_2018-1.webp",
    "year": "2018",
    "medium": "Acrylic",
    "dimensions": "30\" x 30\"",
    "category": "Mythology"
  },
  {
    "id": 104,
    "title": "The Divine Four 4",
    "src": "/images/The-Divine-Four-4.webp",
    "year": "",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "Various",
    "category": "Mythology"
  },
  {
    "id": 106,
    "title": "The Divine Repose 2",
    "src": "/images/The-Divine-Repose2_12X12in_2016-1.webp",
    "year": "2016",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Mythology"
  },
  {
    "id": 109,
    "title": "The Family Man",
    "src": "/images/The-Family-Man_24X30in_2016-1.webp",
    "year": "2016",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "24\" x 30\"",
    "category": "Mythology"
  },
  {
    "id": 112,
    "title": "The First Drink of the Day",
    "src": "/images/The-First-drink-of-the-day_28inX22in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "28\" x 22\"",
    "category": "Animals & Birds"
  },
  {
    "id": 114,
    "title": "The Golden Bowl of Destiny",
    "src": "/images/The-Golden-Bowl-of-Destiny_24X24in_Acrylic_Sonali-Mohanty-1.webp",
    "year": "",
    "medium": "Acrylic",
    "dimensions": "24\" x 24\"",
    "category": "Mythology"
  },
  {
    "id": 117,
    "title": "The Holy Trio: Jaganath, Balabhadra and Subhadra",
    "src": "/images/The-Holy-Trio-Jaganath-Balabhadra-and-Subhadra_12X24_2019-1.webp",
    "year": "2019",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "12\" x 24\"",
    "category": "Mythology"
  },
  {
    "id": 120,
    "title": "The Magnificent Duo",
    "src": "/images/The-Magnificient-Duo_36X30_SonaliMohanty_2025-1.webp",
    "year": "2025",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "36\" x 30\"",
    "category": "Animals & Birds"
  },
  {
    "id": 122,
    "title": "The Queue",
    "src": "/images/The-Queue_24inX36in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "24\" x 36\"",
    "category": "Animals & Birds"
  },
  {
    "id": 125,
    "title": "The Sum of All Things",
    "src": "/images/The-Sum-of-All-Things_30inX24in_2015_Acrylic_Sonali-Mohanty-1.webp",
    "year": "2015",
    "medium": "Acrylic",
    "dimensions": "30\" x 24\"",
    "category": "Mythology"
  },
  {
    "id": 129,
    "title": "The Wedding Party",
    "src": "/images/The-Wedding-Party_30inX24in_2018.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 24\"",
    "category": "Women"
  },
  {
    "id": 130,
    "title": "Tiger",
    "src": "/images/Tiger_Tiger_30inX36in_SonaliMohanty_2024-1.webp",
    "year": "2024",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "30\" x 36\"",
    "category": "Animals & Birds"
  },
  {
    "id": 132,
    "title": "Trimurti Ganapati",
    "src": "/images/Trimurti-Ganapati_12inX12in_Acrylic_2022-1.webp",
    "year": "2022",
    "medium": "Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Mythology"
  },
  {
    "id": 135,
    "title": "Trip Trip of Goats",
    "src": "/images/Trip-Trip-of-goats_20in_20in_2018-1.webp",
    "year": "2018",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "20\" x 20\"",
    "category": "Animals & Birds"
  },
  {
    "id": 138,
    "title": "Two Friends",
    "src": "/images/Two-Friends_Bulls_Acrylic_30X30_2014.webp",
    "year": "2014",
    "medium": "Acrylic",
    "dimensions": "30\" x 30\"",
    "category": "Animals & Birds"
  },
  {
    "id": 143,
    "title": "Wisteria",
    "src": "/images/Wisteria_20inX20in_Mixed-Media_2022.webp",
    "year": "2022",
    "medium": "Mixed Media",
    "dimensions": "20\" x 20\"",
    "category": "Flowers"
  },
  {
    "id": 144,
    "title": "Father and Son",
    "src": "/images/father-and-son-12inch-square-2022-1.webp",
    "year": "2022",
    "medium": "Mixed Media / Acrylic",
    "dimensions": "12\" x 12\"",
    "category": "Mythology"
  }
];
