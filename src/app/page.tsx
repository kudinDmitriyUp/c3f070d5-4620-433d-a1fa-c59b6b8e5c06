"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoCarousel from '@/components/sections/hero/HeroLogoCarousel';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import PricingCardSeven from '@/components/sections/pricing/PricingCardSeven';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872355195-egwe0eju.jpg"
          brandName="WebAI"
          button={{
            text: "Get Started",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoCarousel 
          logoText="WebAI"
          description="ChatGPT-powered AI that builds, designs, and manages your website. Let artificial intelligence handle your web presence while you focus on growing your business."
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872367405-odx5z8vi.jpg",
              imageAlt: "AI Chatbot Interface"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872368249-vh79o51j.jpg",
              imageAlt: "Website Builder Platform"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872369043-uj6iwsdw.jpg",
              imageAlt: "Machine Learning Automation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872369866-jjzytm57.jpg",
              imageAlt: "AI Dashboard"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872370667-lp11nhtt.jpg",
              imageAlt: "Neural Network Technology"
            }
          ]}
          ariaLabel="WebAI Hero Section with AI Chatbot Carousel"
          containerClassName="w-full"
          logoClassName="text-5xl md:text-7xl font-bold"
          descriptionClassName="text-lg md:text-2xl mt-8"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen 
          title="How WebAI Works"
          description="Experience the power of AI-driven web development. From conversation to live website in minutes."
          tag="Features"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              tag: "Intelligence",
              title: "Smart Chat Interface",
              subtitle: "Talk to your AI assistant",
              description: "Describe what you need in plain English. Our AI understands your vision and transforms it into design requirements, content structure, and implementation plans.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872356575-86pe2dtk.jpg",
              imageAlt: "Smart Chat Interface"
            },
            {
              id: 2,
              tag: "Automation",
              title: "Instant Web Generation",
              subtitle: "Beautiful sites created automatically",
              description: "Watch as AI generates complete websites with responsive layouts, optimized images, and production-ready code. No manual coding required.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872357072-y9hjyk83.jpg",
              imageAlt: "Web Builder AI Platform"
            },
            {
              id: 3,
              tag: "Optimization",
              title: "Performance Analytics",
              subtitle: "Data-driven improvements",
              description: "Get real-time insights into your website's performance. AI recommends optimizations for speed, SEO, and user experience based on analytics data.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872357848-4rih8x3f.jpg",
              imageAlt: "Analytics Dashboard"
            },
            {
              id: 4,
              tag: "Integration",
              title: "Seamless Connections",
              subtitle: "Works with your tools",
              description: "Integrate with 500+ tools and services. Connect payment processors, CRM systems, email platforms, and analytics tools directly through AI.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872358628-4q5sr4u1.jpg",
              imageAlt: "Integration Technology"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardSeven 
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your needs. Scale as you grow."
          tag="Pricing"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          containerStyle="default"
          plans={[
            {
              id: "starter",
              tag: "STARTER",
              pricingOptions: [
                {
                  value: "monthly",
                  label: "Monthly",
                  price: "$49",
                  subtitle: "Per Month"
                },
                {
                  value: "yearly",
                  label: "Yearly",
                  price: "$490",
                  subtitle: "Per Year (Save 17%)"
                }
              ],
              defaultOption: "monthly",
              description: "Perfect for getting started. AI builds your first website with 5 pages and basic chatbot.",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "#contact"
                }
              ]
            },
            {
              id: "pro",
              tag: "MOST POPULAR",
              tagIcon: Sparkles,
              pricingOptions: [
                {
                  value: "monthly",
                  label: "Monthly",
                  price: "$149",
                  subtitle: "Per Month"
                },
                {
                  value: "yearly",
                  label: "Yearly",
                  price: "$1490",
                  subtitle: "Per Year (Save 17%)"
                }
              ],
              defaultOption: "yearly",
              selectorNote: "Most teams choose yearly and save 17%",
              description: "For growing businesses. Unlimited pages, advanced AI chat, email campaigns, and priority support.",
              buttons: [
                {
                  text: "Get Started",
                  href: "#contact"
                }
              ]
            },
            {
              id: "enterprise",
              tag: "ENTERPRISE",
              pricingOptions: [
                {
                  value: "custom",
                  label: "Custom",
                  price: "Contact",
                  subtitle: "For Large Teams"
                }
              ],
              defaultOption: "custom",
              description: "For enterprises. Custom integrations, dedicated AI model, white-label options, and 24/7 support.",
              buttons: [
                {
                  text: "Schedule Demo",
                  href: "#contact"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour 
          title="Loved by Founders & Teams"
          description="See how WebAI is transforming how businesses build their digital presence."
          tag="Testimonials"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "TechStart Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872359160-q8l6mrce.jpg"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Founder",
              company: "Digital Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872359718-9ollreoh.jpg"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Marketing Director",
              company: "Growth Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872360365-hkrv9gyl.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "Innovation Hub",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872360967-hagr5736.jpg"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofTwo 
          title="Trusted by Industry Leaders"
          description="WebAI integrates with the tools your team already loves."
          tag="Partners"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872362748-qc9o28oa.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872363393-ra2vmy26.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872364190-5wztdpdh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872364887-kuleg17i.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764872365684-03iq4rd1.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText 
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about WebAI."
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "How does WebAI work?",
              content: "WebAI uses advanced natural language processing to understand your requirements through conversation. You describe your vision, and our AI generates complete website designs, content, and code. The AI learns from your feedback to refine the output until you're satisfied."
            },
            {
              id: "2",
              title: "Do I need coding experience?",
              content: "No coding experience needed! WebAI handles all the technical aspects. You communicate with our AI in plain English, and it builds your website automatically. The generated code is clean and production-ready if you need to customize it later."
            },
            {
              id: "3",
              title: "Can I customize the generated website?",
              content: "Absolutely. While WebAI generates your site automatically, you have full control to customize it. You can edit the code directly, use our visual editor, or ask the AI to make specific changes through conversation."
            },
            {
              id: "4",
              title: "Is my data secure?",
              content: "Yes. We use enterprise-grade encryption for all data. Your websites and conversations are private and secure. We comply with GDPR, CCPA, and other privacy regulations."
            },
            {
              id: "5",
              title: "What kind of websites can WebAI build?",
              content: "WebAI can build portfolios, blogs, landing pages, e-commerce sites, SaaS platforms, and more. The AI can handle complex layouts, animations, and integrations. If you can describe it, WebAI can build it."
            },
            {
              id: "6",
              title: "Can I use my own domain?",
              content: "Yes. You can use any domain you own. WebAI provides hosting, or you can deploy to your own hosting provider. We support custom domains and SSL certificates."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline 
          text="Ready to build your AI-powered website?"
          animationType="entrance-slide"
          inputPlaceholder="Enter your email to get started"
          buttonText="Get Started Free"
          useInvertedBackground="noInvert"
          ariaLabel="Contact Section - Email Signup"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis 
          logoText="WebAI"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Blog", href: "/blog" }
              ]
            },
            {
              items: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "contact" },
                { label: "Support", href: "/support" }
              ]
            },
            {
              items: [
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Status", href: "/status" }
              ]
            }
          ]}
          ariaLabel="Site Footer"
        />
      </div>
    </ThemeProvider>
  );
}