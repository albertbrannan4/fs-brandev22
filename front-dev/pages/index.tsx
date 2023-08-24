import { Inter } from "next/font/google";
import About from "@/components/AboutSection/About";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <About />
      </main>
    </>
  );
}
