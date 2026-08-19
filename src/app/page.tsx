import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("pregnancy-antenatal-care")!;

export const metadata: Metadata = {
  title: "Pregnancy & Antenatal Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Routine and high-touch antenatal care structured around each trimester with Dr. Santoshi Nandigam at The Birth Wave, Nungambakkam, Chennai.",
  keywords: [
    "Pregnancy Care Chennai",
    "Antenatal Care Nungambakkam",
    "Obstetrician Chennai",
    "Dr. Santoshi Nandigam",
    "Normal Delivery Chennai",
    "Natural Birth Chennai",
    "Pregnancy Yoga Chennai",
  ],
  openGraph: {
    title: "Pregnancy & Antenatal Care in Nungambakkam, Chennai – The Birth Wave",
    description:
      "Personalised pregnancy care, from your first visit to birth with Dr. Santoshi Nandigam.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <ServiceLandingPage service={service} />
      <Footer />
    </>
  );
}
