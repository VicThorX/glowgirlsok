import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { BentoGrid } from "@/components/sections/bento-grid";
import { Philosophy } from "@/components/sections/philosophy";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-obsidian-900 text-foreground overflow-x-hidden selection:bg-gold-400/30 selection:text-white">
      {/* Floating Editorial Navigation */}
      <Navbar />

      {/* High-End Hero Section with Parallax & Formula Switcher */}
      <Hero />

      {/* Manifesto Marquee Banner */}
      <MarqueeStrip />

      {/* Bento Grid Collections & Products */}
      <BentoGrid />

      {/* Botanical Alchemy & Ritual Section */}
      <Philosophy />

      {/* Community & Instagram Results Gallery */}
      <InstagramFeed />

      {/* Luxury Footer */}
      <Footer />
    </main>
  );
}
