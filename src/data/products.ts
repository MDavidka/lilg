export interface PhoneSpecs {
  display: string
  chip: string
  camera: string
  battery: string
  storage: string
  ram: string
}

export interface Phone {
  id: string
  name: string
  brand: string
  tagline: string
  price: number
  originalPrice?: number
  image: string
  color: string
  colors: string[]
  specs: PhoneSpecs
  featured?: boolean
  category: 'flagship' | 'midrange' | 'budget'
}

export const phones: Phone[] = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    tagline: 'Titanium. So strong. So light. So Pro.',
    price: 999,
    originalPrice: 1199,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
    color: 'Natural Titanium',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    specs: {
      display: '6.1" Super Retina XDR OLED',
      chip: 'A17 Pro Chip',
      camera: '48MP Main | 12MP Telephoto | 12MP Ultra Wide',
      battery: 'Up to 23 hours video playback',
      storage: '256GB',
      ram: '8GB',
    },
    featured: true,
    category: 'flagship',
  },
  {
    id: 'galaxy-s24',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    tagline: 'Galaxy AI is here.',
    price: 899,
    originalPrice: 1099,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&q=80',
    color: 'Titanium Gray',
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Violet', 'Titanium Yellow'],
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      chip: 'Snapdragon 8 Gen 3',
      camera: '200MP Main | 50MP Telephoto | 12MP Ultra Wide',
      battery: 'Up to 30 hours video playback',
      storage: '256GB',
      ram: '12GB',
    },
    featured: true,
    category: 'flagship',
  },
  {
    id: 'pixel-8-pro',
    name: 'Pixel 8 Pro',
    brand: 'Google',
    tagline: 'The phone that knows you.',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80',
    color: 'Obsidian',
    colors: ['Obsidian', 'Porcelain', 'Bay'],
    specs: {
      display: '6.7" LTPO OLED',
      chip: 'Google Tensor G3',
      camera: '50MP Main | 48MP Telephoto | 48MP Ultra Wide',
      battery: 'Up to 24 hours',
      storage: '128GB',
      ram: '12GB',
    },
    featured: true,
    category: 'flagship',
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    brand: 'Apple',
    tagline: 'Dynamic Island. 48MP camera. USB-C.',
    price: 699,
    originalPrice: 799,
    image: 'https://images.unsplash.com/photo-1696426048680-6bf2e92c5045?w=600&q=80',
    color: 'Pink',
    colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
    specs: {
      display: '6.1" Super Retina XDR OLED',
      chip: 'A16 Bionic',
      camera: '48MP Main | 12MP Ultra Wide',
      battery: 'Up to 20 hours video playback',
      storage: '128GB',
      ram: '6GB',
    },
    category: 'midrange',
  },
  {
    id: 'galaxy-a54',
    name: 'Galaxy A54 5G',
    brand: 'Samsung',
    tagline: 'Awesome screen, awesome camera.',
    price: 449,
    image: 'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=600&q=80',
    color: 'Awesome Lime',
    colors: ['Awesome Lime', 'Awesome Graphite', 'Awesome Violet', 'Awesome White'],
    specs: {
      display: '6.4" Super AMOLED 120Hz',
      chip: 'Exynos 1380',
      camera: '50MP Main | 12MP Ultra Wide | 5MP Macro',
      battery: '5000mAh',
      storage: '128GB',
      ram: '6GB',
    },
    category: 'midrange',
  },
  {
    id: 'nothing-phone-2',
    name: 'Phone (2)',
    brand: 'Nothing',
    tagline: 'Pure instinct.',
    price: 599,
    originalPrice: 699,
    image: 'https://images.unsplash.com/photo-1696446702182-5e45e34e7c7c?w=600&q=80',
    color: 'Dark Gray',
    colors: ['Dark Gray', 'White'],
    specs: {
      display: '6.7" LTPO OLED',
      chip: 'Snapdragon 8+ Gen 1',
      camera: '50MP Main | 50MP Ultra Wide',
      battery: '4700mAh',
      storage: '256GB',
      ram: '12GB',
    },
    category: 'flagship',
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    tagline: 'Speed meets elegance.',
    price: 799,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=600&q=80',
    color: 'Flowy Emerald',
    colors: ['Flowy Emerald', 'Silky Black'],
    specs: {
      display: '6.82" ProXDR LTPO AMOLED',
      chip: 'Snapdragon 8 Gen 3',
      camera: '50MP Main | 64MP Telephoto | 48MP Ultra Wide',
      battery: '5400mAh, 100W charging',
      storage: '256GB',
      ram: '16GB',
    },
    category: 'flagship',
  },
  {
    id: 'moto-g84',
    name: 'Moto G84 5G',
    brand: 'Motorola',
    tagline: 'Premium design, pure value.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1598965402089-897e315ec660?w=600&q=80',
    color: 'Midnight Blue',
    colors: ['Midnight Blue', 'Glacier Green', 'Viva Magenta'],
    specs: {
      display: '6.55" pOLED 120Hz',
      chip: 'Snapdragon 695',
      camera: '50MP Main (OIS) | 8MP Ultra Wide',
      battery: '5000mAh',
      storage: '256GB',
      ram: '12GB',
    },
    category: 'budget',
  },
]

export const brands = ['All', 'Apple', 'Samsung', 'Google', 'Nothing', 'OnePlus', 'Motorola']

export const categories = [
  { id: 'all', label: 'All Phones' },
  { id: 'flagship', label: 'Flagship' },
  { id: 'midrange', label: 'Mid-Range' },
  { id: 'budget', label: 'Budget' },
]

export function getPhoneById(id: string): Phone | undefined {
  return phones.find((p) => p.id === id)
}

export function getPhonesByCategory(category: string): Phone[] {
  if (category === 'all') return phones
  return phones.filter((p) => p.category === category)
}

export function getFeaturedPhones(): Phone[] {
  return phones.filter((p) => p.featured)
}
