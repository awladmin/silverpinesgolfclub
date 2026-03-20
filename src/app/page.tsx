import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Features } from "@/components/features";
import { SignatureCourse } from "@/components/signature-course";
import { MembershipCta } from "@/components/membership-cta";
import { Clubhouse } from "@/components/clubhouse";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Features />
        <SignatureCourse />
        <MembershipCta />
        <Clubhouse />
      </main>
      <Footer />
    </>
  );
}
