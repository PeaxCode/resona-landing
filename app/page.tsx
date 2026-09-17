import ActivityShowcase from '@/components/ActivityShowcase';
import CTASection from '@/components/CTASection';
import FeatureGrid from '@/components/FeatureGrid';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Manifesto from '@/components/Manifesto';
import Nav from '@/components/Nav';
import SoundCategories from '@/components/SoundCategories';
import TrustStrip from '@/components/TrustStrip';

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <Nav />
            <main className="flex-1">
                <Hero />
                <TrustStrip />
                <ActivityShowcase />
                <HowItWorks />
                <SoundCategories />
                <FeatureGrid />
                <Manifesto />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
