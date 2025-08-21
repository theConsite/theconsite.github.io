import { useState, useEffect } from "react";
import { Globe, User, Wrench, BookOpenText, Briefcase, Handshake, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
type Language = "en" | "pl";

const assets = {
  en: {
    common: {
      email: "kontakt@adrianjobda.pl",
      phone: "+48 451 173 472",
      address: "Warsaw, Poland",
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      theme: "Theme",
      language: "Language"
    },
    sections: {
      hero: {
        title: "Adrian Jobda",
        subtitle: "Software Developer",
        description: "Passionate about creating innovative solutions and building exceptional user experiences with modern technologies.",
        learnMore: "Learn More",
        downloadResume: "Download Resume"
      },
      about: {
        title: "About Me",
        description: "I'm a passionate software developer with over 5 years of experience building web applications and mobile solutions. I love turning complex problems into simple, beautiful designs and writing clean, efficient code.",
        quickLinks: "Quick Links"
      },
      skills: {
        title: "Skills"
      },
      experience: {
        title: "Experience",
        work: [
          {
            role: "Senior Software Developer",
            company: "Tech Solutions Inc.",
            period: "2021 - Present",
            summary: "Leading development of enterprise web applications using React and Node.js",
            icon: "company-logo-1"
          },
          {
            role: "Full Stack Developer",
            company: "Digital Innovations",
            period: "2019 - 2021",
            summary: "Developed and maintained multiple client projects using modern web technologies",
            icon: "company-logo-2"
          }
        ]
      },
      education: {
        title: "Education",
        schools: [
          {
            name: "Warsaw University of Technology",
            location: "Warsaw, Poland",
            degree: "Master's in Computer Science",
            summary: "Specialized in Software Engineering and Artificial Intelligence",
            period: "2017 - 2019",
            icon: "university-logo"
          }
        ]
      },
      contact: {
        title: "Contact",
        description: "I'm always looking for new opportunities and collaborations. Feel free to reach out to me via email or connect with me on social media.",
        email: "kontakt@adrianjobda.pl",
        phone: "+48 451 173 472",
        address: "Warsaw, Poland"
      }
    },
    footer: {
      quickLinks: "Copyright © 2025 Adrian Jobda. All rights reserved."
    }
  },
  pl: {
    common: {
      email: "kontakt@adrianjobda.pl",
      phone: "+48 451 173 472",
      address: "Warszawa, Polska",
      about: "O mnie",
      skills: "Umiejętności",
      experience: "Doświadczenie",
      education: "Edukacja",
      contact: "Kontakt",
      theme: "Motyw",
      language: "Język"
    },
    sections: {
      hero: {
        title: "Adrian Jobda",
        subtitle: "Software Developer",
        description: "Pasjonat tworzenia innowacyjnych rozwiązań i budowania wyjątkowych doświadczeń użytkownika z wykorzystaniem nowoczesnych technologii.",
        learnMore: "Dowiedz się więcej",
        downloadResume: "Pobierz CV"
      },
      about: {
        title: "O mnie",
        description: "Jestem pasjonatem programowania, z ponad 5-letnim doświadczeniem w budowaniu aplikacji webowych i rozwiązań mobilnych. Lubię przekształcać złożone problemy w proste, piękne projekty i pisać czysty, wydajny kod.",
        quickLinks: "Szybkie linki"
      },
      skills: {
        title: "Umiejętności"
      },
      experience: {
        title: "Doświadczenie",
        work: [
          {
            role: "Starszy Programista",
            company: "Tech Solutions Inc.",
            period: "2021 - Obecnie",
            summary: "Prowadzenie rozwoju aplikacji webowych dla przedsiębiorstw z wykorzystaniem React i Node.js",
            icon: "company-logo-1"
          },
          {
            role: "Full Stack Developer",
            company: "Digital Innovations",
            period: "2019 - 2021",
            summary: "Rozwój i utrzymanie wielu projektów klienckich z wykorzystaniem nowoczesnych technologii webowych",
            icon: "company-logo-2"
          }
        ]
      },
      education: {
        title: "Edukacja",
        schools: [
          {
            name: "Politechnika Warszawska",
            location: "Warszawa, Polska",
            degree: "Magister Informatyki",
            summary: "Specjalizacja w Inżynierii Oprogramowania i Sztucznej Inteligencji",
            period: "2017 - 2019",
            icon: "university-logo"
          }
        ]
      },
      contact: {
        title: "Kontakt",
        description: "Jestem zawsze otwarty na nowe możliwości i współpracę. Możesz skontaktować się ze mną poprzez email lub połączyć się ze mną w mediach społecznościowych.",
        email: "kontakt@adrianjobda.pl",
        phone: "+48 451 173 472",
        address: "Warszawa, Polska"
      }
    },
    footer: {
      quickLinks: "Copyright © 2025 Adrian Jobda. Wszelkie prawa zastrzeżone."
    }
  }
};
function HomeContent() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [language, setLanguage] = useState<Language>("en");
  const { theme, toggleTheme } = useTheme();

  // Handle language initialization after mount
  useEffect(() => {
    const stored = localStorage.getItem("language");
    if (stored === "en" || stored === "pl") {
      setLanguage(stored as Language);
    } else if (navigator.language === "pl-PL") {
      setLanguage("pl");
    }
  }, []);

  // Persist language preference
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId || "hero");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const t = assets[language]
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
    {/* Background Elements */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-600/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
    </div>

    {/* Hero Section */}
    <section id="hero" className="relative min-h-[calc(100vh-5rem)] w-full flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-1 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t.sections.hero.title}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-6">
              {t.sections.hero.subtitle}
            </h2>
            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto lg:mx-0">
              {t.sections.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="glass glass-hover px-6 py-3"
              >
                {t.sections.hero.learnMore}
              </a>
              <button className="glass glass-hover px-6 py-3">
                {t.sections.hero.downloadResume}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <nav className="sticky top-0 z-50 w-full px-6 py-3">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between gap-3">
        {/* Main Navigation */}
        <div className="glass p-2 md:p-3 flex-grow">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={`glass-hover flex items-center gap-2 px-3 py-2 ${activeSection === "about" ? "active" : ""}`}
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">{t.common.about}</span>
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              className={`glass-hover flex items-center gap-2 px-3 py-2 ${activeSection === "skills" ? "active" : ""}`}
            >
              <Wrench className="w-4 h-4" />
              <span className="hidden sm:inline">{t.common.skills}</span>
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, 'experience')}
              className={`glass-hover flex items-center gap-2 px-3 py-2 ${activeSection === "experience" ? "active" : ""}`}
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">{t.common.experience}</span>
            </a>
            <a 
              href="#education" 
              onClick={(e) => handleNavClick(e, 'education')}
              className={`glass-hover flex items-center gap-2 px-3 py-2 ${activeSection === "education" ? "active" : ""}`}
            >
              <BookOpenText className="w-4 h-4" />
              <span className="hidden sm:inline">{t.common.education}</span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`glass-hover flex items-center gap-2 px-3 py-2 ${activeSection === "contact" ? "active" : ""}`}
            >
              <Handshake className="w-4 h-4" />
              <span className="hidden sm:inline">{t.common.contact}</span>
            </a>
          </div>
        </div>

        {/* Controls */}
        <div className="glass p-2 md:p-3">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <button 
              onClick={toggleTheme}
              className="glass-hover flex items-center gap-2 px-3 py-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="w-4 h-4" />
              ) : theme === 'dark' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Monitor className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System'}
              </span>
            </button>
            <button 
              onClick={() => setLanguage(prev => prev === "en" ? "pl" : "en")}
              className="glass-hover flex items-center gap-2 px-3 py-2"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language === "en" ? "PL" : "EN"}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* About Section */}
    <section id="about" className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.about.title}
        </h2>
        <div className="glass p-8 mb-12">
          <p className="text-lg text-center max-w-3xl mx-auto">
            {t.sections.about.description}
          </p>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section id="skills" className="w-full px-6 py-16 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.skills.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <div className="space-y-2">
              <div className="glass-hover p-2">React / Next.js</div>
              <div className="glass-hover p-2">TypeScript</div>
              <div className="glass-hover p-2">Tailwind CSS</div>
            </div>
          </div>
          {/* Backend */}
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <div className="space-y-2">
              <div className="glass-hover p-2">Node.js</div>
              <div className="glass-hover p-2">Python</div>
              <div className="glass-hover p-2">PostgreSQL</div>
            </div>
          </div>
          {/* Tools */}
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="space-y-2">
              <div className="glass-hover p-2">Git</div>
              <div className="glass-hover p-2">Docker</div>
              <div className="glass-hover p-2">AWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.experience.title}
        </h2>
        <div className="space-y-6">
          {t.sections.experience.work.map((job, index) => (
            <div key={index} className="glass p-6 transition-all hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  {job.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
                  <p className="text-foreground/60 mb-2">{job.company}</p>
                  <p className="text-sm text-foreground/40 mb-4">{job.period}</p>
                  <p className="text-foreground/80">{job.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Education Section */}
    <section id="education" className="w-full px-6 py-16 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.education.title}
        </h2>
        <div className="space-y-6">
          {t.sections.education.schools.map((school, index) => (
            <div key={index} className="glass p-6 transition-all hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  {school.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                  <p className="text-foreground/60 mb-2">{school.degree}</p>
                  <p className="text-sm text-foreground/40 mb-4">{school.period}</p>
                  <p className="text-foreground/80">{school.summary}</p>
                  <p className="text-sm text-foreground/60 mt-2">{school.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.contact.title}
        </h2>
        <div className="glass p-8 max-w-3xl mx-auto">
          <p className="text-lg text-center mb-8">
            {t.sections.contact.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-hover p-4 text-center">
              <p className="font-semibold mb-2">Email</p>
              <p className="text-foreground/60">{t.sections.contact.email}</p>
            </div>
            <div className="glass-hover p-4 text-center">
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-foreground/60">{t.sections.contact.phone}</p>
            </div>
            <div className="glass-hover p-4 text-center">
              <p className="font-semibold mb-2">Location</p>
              <p className="text-foreground/60">{t.sections.contact.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="w-full px-6 py-8">
      <div className="max-w-6xl mx-auto text-center text-foreground/60">
        <p>{t.footer.quickLinks}</p>
      </div>
    </footer>
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
