
import React from 'react';
import { Feature } from '../types';

export const FEATURES: Feature[] = [
  {
    id: 'nano-banana',
    title: 'Nano Banana Image Gen',
    description: 'Ultra-high-quality image generation using the latest Gemini models for professional branding.',
    icon: 'image',
    details: [
      'Native 2K and 4K resolution support',
      'Hyper-realistic texture rendering',
      'Advanced prompt adherence',
      'Real-time information grounding'
    ]
  },
  {
    id: 'smart-context',
    title: 'Smart Context Mode',
    description: 'Automatically chooses the perfect canvas size and framing for your final destination.',
    icon: 'target',
    details: [
      'Sets correct canvas size',
      'Applies optimal contrast & sharpness',
      'Suggests background styles',
      'Adjusts margins and framing'
    ]
  },
  {
    id: 'bg-removal',
    title: 'Background Removal',
    description: 'High-quality AI extraction with fine-grained control over hair and edges.',
    icon: 'scissors',
    details: [
      'Hair and edge refinement controls',
      'Shadow preservation toggle',
      'Mask preview with manual brush',
      'Instant local processing'
    ]
  },
  {
    id: 'variant-gen',
    title: 'Variant Generator',
    description: 'Generate 3–5 visual variations for A/B testing from a single original image.',
    icon: 'layers',
    details: [
      'Different lighting presets',
      'Alternative backgrounds',
      'Smart crop variations',
      'Side-by-side A/B comparison'
    ]
  },
  {
    id: 'content-pipeline',
    title: 'Image → Content Pipeline',
    description: 'Transform a single image into a full set of marketing assets instantly.',
    icon: 'text-cursor',
    details: [
      'Social media captions & hashtags',
      'SEO meta descriptions',
      'Accessibility alt text',
      'Video title suggestions'
    ]
  },
  {
    id: 'style-memory',
    title: 'Style Memory',
    description: 'Save and reuse brand presets including colors, shadows, and text rules.',
    icon: 'save',
    details: [
      'Store brand color palettes',
      'Reusable shadow intensity',
      'Background type templates',
      'Dynamic text placement rules'
    ]
  },
  {
    id: 'creator-video',
    title: 'Creator Video Support',
    description: 'Extract best frames from videos and generate high-quality thumbnails.',
    icon: 'video',
    details: [
      'Extract best frames from video',
      'Instant thumbnail creation',
      'Apply BG removal to frames',
      'Focused, fast workflow'
    ]
  },
  {
    id: 'offline-mode',
    title: 'Offline & Low-Bandwidth',
    description: 'Local background removal with optional cloud enhancement for speed.',
    icon: 'wifi-off',
    details: [
      'Local background removal',
      'Optional cloud enhancement',
      'No forced login for basics',
      'Low-data usage mode'
    ]
  },
  {
    id: 'transparent-ai',
    title: 'Transparent AI System',
    description: 'Full transparency on which model was used and its confidence score.',
    icon: 'eye',
    details: [
      'Model lineage tracking',
      'Confidence score display',
      'Fully editable masks',
      'Process verification logs'
    ]
  },
  {
    id: 'learning-mode',
    title: 'Learning Mode',
    description: 'Pixzio explains design principles and why specific edits were applied.',
    icon: 'graduation-cap',
    details: [
      'Explanations for every change',
      'Guided design principle tips',
      'Contextual design advice',
      'Non-intrusive educational UI'
    ]
  }
];

export const Icons = {
  Target: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  Scissors: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
  ),
  Layers: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17"/><polygon points="2 12 12 17 22 12"/></svg>
  ),
  TextCursor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"/><path d="M7 22h1a4 4 0 0 0 4-4v-1"/><path d="M7 2h1a4 4 0 0 1 4 4v1"/></svg>
  ),
  Save: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
  ),
  Video: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
  ),
  WifiOff: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
  ),
  Eye: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  ChevronDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  ArrowUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
  ),
  Image: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
  )
};
