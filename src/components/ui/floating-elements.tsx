'use client'

import { Sparkles, Star } from 'lucide-react'

export function FloatingElements() {
  return (
    <>
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass border-primary/30 rotate-12 rounded-lg floating-element" />
      <div className="absolute top-40 right-20 w-16 h-16 neumorphism rotate-45 rounded-lg floating-element" style={{animationDelay: '2s'}} />
      <div className="absolute bottom-40 left-20 w-12 h-12 glass-card rotate-45 floating-element" style={{animationDelay: '4s'}} />
      <div className="absolute bottom-20 right-40 w-24 h-24 glass border-secondary/30 -rotate-12 rounded-full floating-element" style={{animationDelay: '1s'}} />
      
      {/* Particle Elements */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-primary/60 rounded-full floating-element" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-secondary/80 rounded-full floating-element" style={{animationDelay: '1.5s'}} />
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent/50 rounded-full floating-element" style={{animationDelay: '3s'}} />
      <Sparkles className="absolute top-1/4 left-1/3 h-4 w-4 text-primary/40 floating-element" style={{animationDelay: '2.5s'}} />
      <Star className="absolute bottom-1/4 right-1/4 h-3 w-3 text-secondary/50 floating-element" style={{animationDelay: '3.5s'}} />
    </>
  )
}