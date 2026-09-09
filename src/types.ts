export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  altText: string;
  location?: string;
  year?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  location: string;
  rating?: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface RhythmInfo {
  id: string;
  name: string;
  origin: string;
  tempo: string;
  character: string;
  description: string;
}

export interface BookingSimulation {
  eventType: string;
  date: string;
  city: string;
  rhythms: string[];
  clientName: string;
  observations: string;
}
