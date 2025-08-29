import { useState, useEffect, useRef } from "react";
import { Globe, Moon, Sun, Monitor, ChevronDown, Github, Linkedin, ExternalLink } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
type Language = "en" | "pl";

const assets = {
  en: {
    common: {
      email: "kontakt@adrianjobda.pl",
      phone: "+48 451 173 472",
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    sections: {
      hero: {
        title: "Adrian Jobda",
        subtitle: "Software Developer",
        description: "Passionate about creating innovative solutions and building exceptional user experiences with modern technologies.",
        learnMore: "Learn More"
      },
      about: {
        title: "About Me",
        description: "I'm a passionate developer with over 4 years of commercial experience and 7 years of experience overall. I'm always pursuing new challenges and opportunities to grow as a developer. My projects are developed with a focus on clean, readable code and customer satisfaction. During my short career I've worked on projects for multiple companies, both local and international. My main area of expertise is web and multi-platform development, but I've also worked on full-stack projects. I'm also personally interested Computer Science as an entire field, mainly focusing on Cybersecurity and new technologies, such as AI."
      },
      skills: {
        title: "Skills"
      },
      experience: {
        title: "Experience",
        work: [
          {
            role: "Solutions Engineer",
            company: "Gainsight",
            period: "Apr 2025 - Present",
            summary: "Implementing and maintaining customer-requested customizations for Gainsight's products. I've already worked on projects for companies such as Google, Adobe, LinkedIn, Jamf, and many more.",
            icon: "/experience/gainsight.jpg"
          },
          {
            role: "Angular Developer",
            company: "BMCG Software",
            period: "Mar 2021 - Mar 2025",
            summary: "Developing and maintaining multiple projects using Angular and related technologies, such as Ionic and Typescript. Successfully delivered multiple projects, including two mobile apps.",
            icon: "/experience/bmcg.jpg"
          },
          {
            role: "Customer Support Specialist",
            company: "BMCG Software",
            period: "Nov 2020 - Mar 2021",
            summary: "Providing technical support and expertise to enterprise customers. My tasks included troubleshooting issues, resolving customer inquiries, and setting up our services in their environments.",
            icon: "/experience/bmcg.jpg"
          }
        ]
      },
      education: {
        title: "Education",
        schools: [
          {
            name: "Warsaw University of Technology",
            location: "Warsaw, Poland",
            degree: "Master of Science in Computer Science",
            summary: "Ongoing master's degree in Computer Science. I'm currently starting my last year of studies and preparing for my thesis.",
            period: "2024 - 2026",
            icon: "/education/wut.png"
          },
          {
            name: "Polish-Japanese Academy of Information Technology",
            location: "Warsaw, Poland",
            degree: "Bachelor of engineering in Computer Science",
            summary: "Obtained a Bachelor's degree in Computer Science with a specialization in Cybersecurity and advanced Networking with one of the highest grades. I also completed multiple optional courses related to Artificial Intelligence, advanced Software Engineering, and Bioinformatics.",
            period: "2020 - 2024",
            icon: "/education/pjatk.png"
          }
        ]
      },
      contact: {
        title: "Contact",
        description: "I'm always looking for new opportunities and collaborations. Feel free to reach out to me via email or connect with me on social media.",
        email: "kontakt@adrianjobda.pl",
        phone: "+48 451 173 472",
        contactWithMe: "My profiles",
        quickLinks: [
          {
            name: "GitHub",
            url: "https://github.com/theConsite",
            icon: "github"
          },
          {
            name: "LinkedIn",
            url: "https://linkedin.com/in/adrianjobda",
            icon: "linkedin"
          }
        ]
      }
    },
    footer: `Copyright © 2025 - ${new Date().getFullYear()} Adrian Jobda. All rights reserved.`
  },
  pl: {
    common: {
      email: "kontakt@adrianjobda.pl",
      phone: "+48 451 173 472",
      about: "O mnie",
      skills: "Umiejętności",
      experience: "Doświadczenie",
      education: "Edukacja",
      contact: "Kontakt"
    },
    sections: {
      hero: {
        title: "Adrian Jobda",
        subtitle: "Software Developer",
        description: "Pasjonat tworzenia innowacyjnych rozwiązań i budowania wyjątkowych doświadczeń z wykorzystaniem nowoczesnych technologii.",
        learnMore: "Dowiedz się więcej"
      },
      about: {
        title: "O mnie",
        description: "Jestem pasjonatem programowania z ponad 5-letnim stażem komercyjnym i 7-letnim doświadczeniem ogółem. Zawsze poszukuję nowych wyzwań i możliwości rozwoju jako programista. Tworzę moje projekty z naciskiem na czysty, czytelny kod i zadowolenie klienta. Podczas mojej kariery realizowałem już projekty dla wielu firm, zarówno lokalnych, jak i międzynarodowych. Moim głównym obszarem specjalizacji jest programowanie webowe i wieloplatformowe, ale pracowałem również przy projektach full-stack. Poza tym interesuję się informatyką w ogóle, koncentrując się głównie na cyberbezpieczeństwie i nowych technologiach, takich jak AI."
      },
      skills: {
        title: "Umiejętności"
      },
      experience: {
        title: "Doświadczenie",
        work: [
          {
            role: "Solutions Engineer",
            company: "Gainsight",
            period: "Kwi 2025 - Obecnie",
            summary: "Modyfikacja produktów Gainsight zgodnie z potrzebami klientów oraz późniejsze utrzymanie. Pracowałem już przy projektach dla firm takich jak Google, Adobe, LinkedIn, Jamf i wielu innych.",
            icon: "/experience/gainsight.jpg"
          },
          {
            role: "Angular Developer",
            company: "BMCG Software",
            period: "Mar 2021 - Mar 2025",
            summary: "Rozwijanie i utrzymywanie wielu projektów przy użyciu Angular i powiązanych technologii, takich jak Ionic i TypeScript. Miałem okazję pracować nad wieloma projektami, a nawet wydać dwie aplikacje mobilne.",
            icon: "/experience/bmcg.jpg"
          },
          {
            role: "Customer Support Specialist",
            company: "BMCG Software",
            period: "Lis 2020 - Mar 2021",
            summary: "Zapewnianie wsparcia technicznego i ekspertyzy dla klientów korporacyjnych. Moje zadania obejmowały rozwiązywanie problemów, rozpatrywanie wymagań klientów oraz konfigurowanie naszych usług w ich środowiskach.",
            icon: "/experience/bmcg.jpg"
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
            summary: "Trwające studia magisterskie z informatyki. Obecnie rozpoczynam ostatni rok studiów i przygotowuję się do pracy magisterskiej.",
            period: "2024 - 2026",
            icon: "/education/wut.png"
          },
          {
            name: "Polsko-Japońska Akademia Technik Komputerowych",
            location: "Warszawa, Polska",
            degree: "Inżynier Informatyki",
            summary: "Obroniłem tytuł inżyniera informatyki ze specjalizacją w cyberbezpieczeństwie i zaawansowanych sieciach komputerowych, uzyskując ocenę 4,5 na koniec studiów. Ukończyłem również wiele kursów dodatkowych związanych ze sztuczną inteligencją, zaawansowaną inżynierią oprogramowania i bioinformatyką.",
            period: "2020 - 2024",
            icon: "/education/pjatk.png"
          }
        ]
      },
      contact: {
        title: "Kontakt",
        description: "Zawsze poszukuję nowych możliwości i współpracy. Zapraszam do kontaktu przez email lub media społecznościowe.",
        email: "kontakt@adrianjobda.pl",
        phone: "+48 451 173 472",
        contactWithMe: "Moje profile",
        quickLinks: [
          {
            name: "GitHub",
            url: "https://github.com/theConsite",
            icon: "github"
          },
          {
            name: "LinkedIn",
            url: "https://linkedin.com/in/adrianjobda",
            icon: "linkedin"
          }
        ]
      }
    },
    footer: `Copyright © 2025 - ${new Date().getFullYear()} Adrian Jobda. Wszelkie prawa zastrzeżone.`
  }
};
function HomeContent() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [language, setLanguage] = useState<Language>("en");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const { theme, toggleTheme } = useTheme();
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);

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

  // Handle click outside to close language dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const isClickInsideDropdown = languageDropdownRef.current && languageDropdownRef.current.contains(target);
      const isClickOnButton = languageButtonRef.current && languageButtonRef.current.contains(target);
      
      if (!isClickInsideDropdown && !isClickOnButton) {
        setIsLanguageDropdownOpen(false);
      }
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isLanguageDropdownOpen]);

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

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    if (!isLanguageDropdownOpen && languageButtonRef.current) {
      const rect = languageButtonRef.current.getBoundingClientRect();
      const dropdownHeight = 80; // Approximate height for 2 options
      setDropdownPosition({
        top: rect.top - dropdownHeight - 16, // Position above button with margin
        left: rect.left-72
      });
    }
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const languageOptions = [
    { code: 'en' as Language, label: 'English', flag: 'en' },
    { code: 'pl' as Language, label: 'Polski', flag: '🇵🇱' }
  ];

  const t = assets[language]
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <nav className=" fixed bottom-2 right-2 z-50 w-fit">
          <div className="glass flex items-center justify-center gap-2 p-3 md:gap-4">
            <button 
              onClick={toggleTheme}
              className="smlbtn-hover flex items-center gap-2 px-3 py-2"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="w-4 h-4" />
              ) : theme === 'dark' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Monitor className="w-4 h-4" />
              )}
            </button>
            <button 
              ref={languageButtonRef}
              onClick={toggleLanguageDropdown}
              className={`smlbtn-hover flex items-center gap-2 px-3 py-2 ${isLanguageDropdownOpen ? 'active' : ''}`}
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
    </nav>
    
    {/* Language Dropdown */}
    {isLanguageDropdownOpen && (
      <div 
        ref={languageDropdownRef}
        className="w-36 glass border border-border/20 rounded-lg overflow-hidden shadow-lg z-50"
        style={{
          position: 'fixed',
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`
        }}
      >
        {languageOptions.map((option) => (
          <button
            key={option.code}
            onClick={() => handleLanguageSelect(option.code)}
            className={`w-full px-3 py-2 text-left hover:bg-foreground/10 transition-colors flex items-center gap-2 ${
              language === option.code ? 'bg-foreground/5' : ''
            }`}
          >
            <span className="text-sm">{option.label}</span>
          </button>
        ))}
      </div>
    )}
    
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
                className="glass glass-hover px-6 py-3 bg-highlight"
              >
                {t.sections.hero.learnMore}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="min-h-screen w-full px-6 py-16 flex items-center">
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
    <section id="skills" className="min-h-screen w-full px-6 py-16 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 flex items-center">
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
              <div className="glass-hover p-2">HTML</div>
              <div className="glass-hover p-2">Angular</div>
              <div className="glass-hover p-2">Flutter</div>
              <div className="glass-hover p-2">Ionic</div>
              <div className="glass-hover p-2">Bootstrap</div>
            </div>
          </div>
          {/* Backend */}
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <div className="space-y-2">
              <div className="glass-hover p-2">Node.js</div>
              <div className="glass-hover p-2">Python</div>
              <div className="glass-hover p-2">PostgreSQL</div>
              <div className="glass-hover p-2">NoSql systems</div>
              <div className="glass-hover p-2">Django</div>
              <div className="glass-hover p-2">Flask</div>
              <div className="glass-hover p-2">Java</div>
              <div className="glass-hover p-2">C/C++</div>
            </div>
          </div>
          {/* Tools */}
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="space-y-2">
              <div className="glass-hover p-2">Git</div>
              <div className="glass-hover p-2">Docker</div>
              <div className="glass-hover p-2">AWS</div>
              <div className="glass-hover p-2">Azure</div>
              <div className="glass-hover p-2">RESTful APIs</div>
              <div className="glass-hover p-2">SOAP</div>
              <div className="glass-hover p-2">CUDA</div>
              <div className="glass-hover p-2">AI/ML</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section id="experience" className="min-h-screen w-full px-6 py-16 flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.experience.title}
        </h2>
        <div className="space-y-6">
          {t.sections.experience.work.map((job, index) => (
            <div key={index} className="glass p-6 transition-all hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 overflow-hidden">
                  <img src={`${job.icon}`} alt={job.role} className="w-16 h-16" />
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
    <section id="education" className="min-h-screen w-full px-6 py-16 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.education.title}
        </h2>
        <div className="space-y-6">
          {t.sections.education.schools.map((school, index) => (
            <div key={index} className="glass p-6 transition-all hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 overflow-hidden">
                  <img src={`${school.icon}`} alt={school.name} className="w-16 h-16" />
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
    <section id="contact" className="min-h-screen w-full px-6 py-16 flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {t.sections.contact.title}
        </h2>
        <div className="glass p-8 max-w-3xl mx-auto">
          <p className="text-lg text-center mb-8">
            {t.sections.contact.description}
          </p>
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="p-4 text-center">
              <p className="font-semibold mb-2">Email</p>
              <p className="text-foreground/60">{t.sections.contact.email}</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="border-t border-border/20 pt-6">
            <h3 className="text-lg font-semibold text-center mb-4">{t.sections.contact.contactWithMe}</h3>
            <div className="flex justify-center gap-4 ">
              {t.sections.contact.quickLinks.map((link, index) => {
                const IconComponent = 
                  link.icon === 'github' ? Github :
                  link.icon === 'linkedin' ? Linkedin : ExternalLink;
                
                return (
                  <a
                    key={index}
                    href={link.url}
                    target={link.icon !== 'mail' ? '_blank' : undefined}
                    rel={link.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                    className="p-3 rounded-full transition-all hover:scale-110 flex items-center justify-center smlbtn-hover"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="w-full px-6 py-8">
      <div className="max-w-6xl mx-auto text-center text-foreground/60">
        <p>{t.footer}</p>
      </div>
    </footer>
    </div>
  );
}

export default function Home() {
  return <HomeContent />;
}
