import { Header } from "@/components/Header";
import { HeroCanvas } from "@/components/HeroCanvas";

export default function HomePage() {
  return <main className="page-shell min-h-svh bg-[#030303] text-white"><Header /><HeroCanvas /></main>;
}
