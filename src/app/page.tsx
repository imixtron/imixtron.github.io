import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThreeColumnSection from "@/components/ThreeColumnSection";
import Footer from "@/components/Footer";



const IndexPage = () => {
  return <div className="min-h-screen bg-background">
      <Header />
        <main>
          <Hero />
          <ThreeColumnSection />
        </main>
      <Footer />
    </div>;
};

export default IndexPage;