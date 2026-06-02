import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khyati Jain — Software Engineer | .NET & Full Stack" },
      {
        name: "description",
        content:
          "Portfolio of Khyati Jain — Software Engineer specializing in .NET, C#, ASP.NET MVC, and SQL Server. Building scalable enterprise systems and performance-driven applications.",
      },
      { property: "og:title", content: "Khyati Jain — Software Engineer" },
      {
        property: "og:description",
        content:
          "Enterprise .NET & SQL engineer building scalable systems, dashboards, and high-performance applications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
