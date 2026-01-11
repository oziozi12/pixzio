import React, { useState } from 'react';
import { Icons } from '../components/constants';

const PRICING_PLANS = [
  {
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    description: "For creators just starting their AI journey.",
    features: [
      "Standard Background Removal",
      "5 AI Variants per image",
      "Instagram & YouTube Presets",
      "10 Content Pipeline credits/mo",
      "Web-quality export (2K)",
      "Community support"
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Creator",
    price: { monthly: 24, yearly: 19 },
    description: "The complete suite for professional content makers.",
    features: [
      "Advanced Hair & Edge refinement",
      "Unlimited Background Removal",
      "Unlimited AI Variants",
      "Full Smart Context Mode access",
      "100 Content Pipeline credits/mo",
      "4K Pro Export quality",
      "Style Memory (Brand Kits)",
      "Priority API access"
    ],
    cta: "Join Creator Pro",
    popular: true,
  },
  {
    name: "Business",
    price: { monthly: 99, yearly: 49 },
    description: "Scale your agency with team-wide AI tools.",
    features: [
      "Everything in Creator",
      "Team Style Libraries",
      "Bulk Pipeline Processing",
      "White-label API access",
      "Unlimited Pipeline credits",
      "Dedicated account manager",
      "Commercial usage rights",
      "Custom workflow integration"
    ],
    cta: "Contact Sales",
    popular: false,
  }
];

const FAQ = [
  { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your monthly or yearly plan at any time through your dashboard settings. You'll maintain access until the end of your billing cycle." },
  { q: "What is 'Style Memory'?", a: "Style Memory allows you to save specific combinations of backgrounds, color grades, and lighting settings as 'Brand Kits' so you can apply them instantly to new images." },
  { q: "Do you offer education discounts?", a: "We do! Students and educators can receive 50% off Creator plans. Reach out to our support with your academic email." }
];

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500">
      {/* Header */}
      <section className="pt-20 pb-16 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[10px] font-black text-indigo-700 uppercase tracking-[0.2em]">Flexible Plans</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Scale Your Creativity</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium mb-10">
            Choose the plan that fits your creative volume. Upgrade, downgrade, or cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-slate-100 rounded-full p-1 flex items-center transition-colors hover:bg-slate-200"
            >
              <div className={`w-6 h-6 bg-indigo-600 rounded-full transition-transform shadow-md ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-400'}`}>
              Yearly <span className="ml-1 text-green-500 text-[10px] bg-green-50 px-1.5 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PRICING_PLANS.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative flex flex-col p-10 rounded-[3rem] border transition-all duration-500 hover:scale-[1.02] ${
                  plan.popular 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-slate-900/20' 
                  : 'bg-white text-slate-900 border-slate-200 hover:border-indigo-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl">
                    Best for Pro Creators
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-black mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-black">${plan.price[billingCycle]}</span>
                    <span className={`text-sm font-bold opacity-50`}>/month</span>
                  </div>
                  <p className={`text-sm leading-relaxed opacity-70`}>
                    {plan.description}
                  </p>
                </div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 ${plan.popular ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        <Icons.Check />
                      </div>
                      <span className="text-sm font-bold tracking-tight opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.1em] transition-all ${
                    plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200">
                <h4 className="font-black text-slate-900 mb-3">{item.q}</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Still have questions?</h2>
          <p className="text-slate-600 font-medium mb-12">Our creative specialists are here to help you choose the right plan for your brand.</p>
          <button className="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
            Speak to a Human
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
