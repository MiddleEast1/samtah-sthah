export type ServiceId = 
  | 'car-towing'
  | 'furniture-moving'
  | 'door-unlock'
  | 'battery-service'
  | 'tire-service'
  | 'monthly-subscription';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
  features: string[];
  priceNote: string;
  image: string;
  popular?: boolean;
}

export interface SubscriptionPackage {
  id: string;
  title: string;
  price: number;
  period: string;
  tripsCount: number;
  maxDistanceKm: number;
  badge?: string;
  popular?: boolean;
  features: string[];
  description: string;
}

export interface BookingDetails {
  fromLocation: string;
  toLocation: string;
  carCondition: 'broken' | 'good' | 'furniture' | 'other';
  serviceType: ServiceId;
  carModel: string;
  customerPhone: string;
  notes: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  vehicle: string;
  comment: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'towing' | 'subscription' | 'furniture' | 'payment';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
