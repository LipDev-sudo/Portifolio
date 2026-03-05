import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { ThemeToggle } from "./components/theme-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
        
        <footer className="py-8 px-4 border-t">
          <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hamilton Felipe. Todos os direitos reservados.</p>
          </div>
        </footer>
        
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
