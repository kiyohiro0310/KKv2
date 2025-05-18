import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  });
};

export const staggerFadeInUp = (elements: string | Element | Element[], stagger: number = 0.2) => {
  return gsap.from(elements, {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger,
    ease: 'power3.out',
  });
};

export const fadeIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power2.out',
  });
};

export const scaleIn = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power2.out',
  });
};

export const slideInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  });
};

export const slideInRight = (element: string | Element, delay: number = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
  });
};

export const createScrollTrigger = (
  element: string | Element,
  animation: gsap.core.Tween,
  start: string = 'top 80%'
) => {
  return ScrollTrigger.create({
    trigger: element,
    start,
    animation,
    toggleActions: 'play none none reverse',
  });
}; 