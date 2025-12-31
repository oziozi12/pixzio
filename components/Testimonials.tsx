
import React from 'react';
import { Icons } from './constants';

const REVIEWS = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    role: "E-commerce Founder",
    text: "Pixzio is an absolute game-changer. The background removal is cleaner than anything I've used, even on complex hair. It's saved us thousands in retouching fees.",
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Marcus Thorne",
    handle: "@mthorne_vlogs",
    role: "Full-time YouTuber",
    text: "Smart Context Mode alone is worth the subscription. One upload and I have my thumbnail, my Insta post, and my SEO metadata ready to go.",
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Elena Rodriguez",
    handle: "@elena_design",
    role: "Creative Director",
    text: "The Variant Generator is incredible for A/B testing our product shots. We can test 5 different lighting styles in seconds without re-shooting.",
    avatar: "https://picsum.photos/seed/user3/100/100"
  },
  {
    name: "David Kim",
    handle: "@dk_visuals",
    role: "Social Media Manager",
    text: "Managing 10+ clients used to be a nightmare for image consistency. Pixzio's Style Memory lets me lock in brand looks and apply them instantly.",
    avatar: "https://picsum.photos/seed/user4/100/100"
  },
  {
    name: "Jessica Walsh",
    handle: "@jess_studio",
    role: "Brand Strategist",
    text: "The SEO and alt-text generation is surprisingly accurate. It doesn't just describe the image; it understands the marketing context.",
    avatar: "https://picsum.photos/seed/user5/100/100"
  },
  {
    name: "Aiden Smith",
    handle: "@aiden_tech",
    role: "Tech Reviewer",
    text: "Extracting frames from my 4K reviews to make thumbnails has never been easier. The hair refinement tool is the best in the business.",
    avatar: "https://picsum.photos/seed/user6/100/100"
  },
  {
    name: "Liam O'Connor",
    handle: "@liam_vfx",
    role: "VFX Artist",
    text: "The precision of the mask preview and manual correction brush is professional-grade. It integrates perfectly into my high-end post-production workflow.",
    avatar: "https://picsum.photos/seed/user7/100/100"
  },
  {
    name: "Sophia Martinez",
    handle: "@sophia_social",
    role: "Influencer",
    text: "Pixzio makes my feed look professional without me having to learn Photoshop. I love how it suggests backgrounds that match my aesthetic perfectly.",
    avatar: "https://picsum.photos/seed/user8/100/100"
  },
  {
    name: "James Wilson",
    handle: "@jwilson_photo",
    role: "Photographer",
    text: "Shadow preservation in background removal is a detail most tools miss. Pixzio gets it right every time, making the composite look natural.",
    avatar: "https://picsum.photos/seed/user9/100/100"
  }
];

const Testimonials: React.FC = () => {
  // To create a seamless loop, we duplicate the list
  const fullList = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Creator Reviews</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Trusted by the Creator Economy</h2>
          <p className="text-lg text-slate-600 mt-2 font-medium">
            Join 10,000+ creators who have automated their creative pipeline.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Ticker */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 60s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="flex animate-marquee gap-8 w-fit">
          {fullList.map((review, i) => (
            <div 
              key={i} 
              className="w-[380px] flex-shrink-0 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 transition-all hover:border-indigo-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4 text-indigo-500">
                {[...Array(5)].map((_, starIdx) => (
                  <svg key={starIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed italic mb-6">
                "{review.text}"
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">{review.handle}</span>
                <div className="bg-indigo-100 p-1.5 rounded-lg text-indigo-600">
                  <Icons.Check />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-40 grayscale contrast-125">
          <div className="text-2xl font-black tracking-tighter text-slate-400">YOUTUBE</div>
          <div className="text-2xl font-black tracking-tighter text-slate-400">SHOPIFY</div>
          <div className="text-2xl font-black tracking-tighter text-slate-400">INSTAGRAM</div>
          <div className="text-2xl font-black tracking-tighter text-slate-400">ETSY</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
