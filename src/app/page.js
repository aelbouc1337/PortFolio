import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Cursus from "@/components/Cursus";

export default function Home() {
  return (
    <main className="w-full bg-bg flex flex-col items-center pt-4">
      <Navbar />
      <Header />
      <About />
      <Stack />
      <Cursus />
    </main>
  );
}
