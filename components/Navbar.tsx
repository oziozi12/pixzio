import gt from "../images/gt.png";
import React, { useState } from "react";
import { FEATURES, Icons } from "./constants";
import { Link } from 'react-router-dom';

const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "target":
      return <Icons.Target />;
    case "scissors":
      return <Icons.Scissors />;
    case "layers":
      return <Icons.Layers />;
    case "text-cursor":
      return <Icons.TextCursor />;
    case "save":
      return <Icons.Save />;
    case "video":
      return <Icons.Video />;
    case "eye":
      return <Icons.Eye />;
    case "graduation-cap":
      return <Icons.GraduationCap />;
    case "image":
      return <Icons.Image />;
    default:
      return <Icons.Check />;
  }
};

const Navbar: React.FC = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isGenerateOpen, setIsGenerateOpen] = useState(false);

  const generateItems = [
    {
      title: "AI Image Generator",
      desc: "Create stunning 4K visuals from text",
      icon: "image",
    },
    {
      title: "AI Video Generator",
      desc: "Generate cinematic B-roll and social clips",
      icon: "video",
    },
    {
      title: "AI Logo Generator",
      desc: "Design brand identities in seconds",
      icon: "target",
    },
    {
      title: "AI Image Generator",
      desc: "Advanced variant and style synthesis",
      icon: "layers",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card mx-4 my-2 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-10">
        <div
          className="flex items-center gap-2 cursor-pointer"
          title="Pixzio Home - AI Content Suite"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={gt}
              alt="Pixzio Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Pixzio
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {/* Features Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setIsFeaturesOpen(true)}
            onMouseLeave={() => setIsFeaturesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                isFeaturesOpen ? "text-indigo-600" : "hover:text-indigo-600"
              }`}
              title="Explore Pixzio's core AI capabilities"
            >
              Edit
              <Icons.ChevronDown />
            </button>

            {isFeaturesOpen && (
              <div className="absolute top-full left-0 pt-2 w-[480px] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-4 grid grid-cols-2 gap-2">
                  {FEATURES.map((feature) => (
                    <a
                      key={feature.id}
                      href={`#${feature.id}`}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                    >
                      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                        <FeatureIcon icon={feature.icon} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-0.5">
                          {feature.title}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">
                          {feature.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Generate Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => setIsGenerateOpen(true)}
            onMouseLeave={() => setIsGenerateOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors py-2 ${
                isGenerateOpen ? "text-indigo-600" : "hover:text-indigo-600"
              }`}
              title="Creative AI generation tools"
            >
              Generate
              <Icons.ChevronDown />
            </button>

            {isGenerateOpen && (
              <div className="absolute top-full left-0 pt-2 w-[320px] animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-3 flex flex-col gap-1">
                  {generateItems.map((item, idx) => (
                    <a
                      key={idx}
                      href="#playground"
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                    >
                      <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all"
                      >
                        <FeatureIcon icon={item.icon} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
  to="/pricing"
  className="hover:text-indigo-600 transition-colors"
  title="Find the right Pixzio plan for you"
>
  Pricing
</Link>

<Link
  to="/download"
  className="hover:text-indigo-600 transition-colors"
  title="Use Pixzio on iPhone and Android"
>
  Download
</Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="hidden sm:block text-sm font-semibold text-slate-700 hover:text-indigo-600 px-4 py-2"
          title="Access your existing account and brand presets"
        >
          Log In
        </button>
        <button
          className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all"
          title="Start creating for free - No credit card required"
        >
          Get Started Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
