import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  time: string;
}

export interface Collection {
  id: string;
  title: string;
  image: string;
  description: string;
  whatsappMessage: string;
}

export interface Product {
  id: number;
  collectionId: string;
  title: string;
  price?: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}