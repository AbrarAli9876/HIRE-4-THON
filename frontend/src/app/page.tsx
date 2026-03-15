"use client";

import {
  Award,
  ChevronDown,
  Clock3,
  ExternalLink,
  Facebook,
  Globe2,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Medal,
  PhoneCall,
  ShieldCheck,
  Rocket,
  Sparkles,
  Trophy,
  Instagram,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type TimelineItem = {
  label: string;
  detail: string;
};

type Coordinator = {
  name: string;
  role: string;
  phone: string;
};

const keyHighlights = [
  {
    title: "₹4 LPA Job Offer",
    desc: "Software developer role for all champion team members",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Internship Opportunities",
    desc: "2–4 month internships for 2nd and 3rd place teams",
    icon: <GraduationCap className="h-7 w-7" />,
  },
  {
    title: "₹20K Prize Pool",
    desc: "Cash prizes for outstanding implementations",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "24-Hour Hackathon",
    desc: "Non-stop coding from 9:30 AM to 9:30 AM",
    icon: <Clock3 className="h-6 w-6" />,
  },
  {
    title: "National Participation",
    desc: "Teams joining from colleges across India",
    icon: <Globe2 className="h-6 w-6" />,
  },
];

const highlights = keyHighlights;

const prizeTiers = [
  {
    title: "Champion",
    prize: "₹4 LPA Job Offer",
    note: "Software Developer role for all team members",
    accent: "from-[#ff8f3b] via-[#ff6a00] to-[#ffb76b]",
  },
  {
    title: "2nd Place",
    prize: "2–4 Month Internship",
    note: "Plus cash prize",
    accent: "from-[#6a36ff] via-[#b277ff] to-[#ffae70]",
  },
  {
    title: "3rd Place",
    prize: "2–4 Month Internship",
    note: "Plus cash prize",
    accent: "from-[#5d2bb8] via-[#9f63ff] to-[#ffb86b]",
  },
  {
    title: "Prize Pool",
    prize: "₹20,000",
    note: "Cash prize for unique implementations",
    accent: "from-[#ff6a00] via-[#ff9548] to-[#ffd9a1]",
  },
];

const timeline: TimelineItem[] = [
  { label: "Registration", detail: "Teams apply and confirm slots." },
  { label: "Confirmation", detail: "Get playbook and logistics mail." },
  { label: "Hackathon Kickoff", detail: "26 March • Briefing and problem statements." },
  { label: "24-Hour Coding", detail: "Build, iterate, get on-ground mentor feedback." },
  { label: "Evaluation", detail: "Judges score innovation, impact, polish." },
  { label: "Final Pitch", detail: "Present to the jury and hiring partners." },
  { label: "Winners", detail: "Offers, internships, prize pool announced." },
];

const tracks = [
  {
    title: "Artificial Intelligence (AI) & Machine Learning (ML)",
    summary: "Data-driven solutions, predictive models, natural language processing, and intelligent systems.",
    icon: <Sparkles className="h-6 w-6" />,
    accent: "from-[#ff6a00]/28 via-[#ffb86b]/22 to-[#3a0066]/28",
  },
  {
    title: "Cybersecurity",
    summary: "Ethical hacking, security tools, vulnerability detection, and secure system design.",
    icon: <ShieldCheck className="h-6 w-6" />,
    accent: "from-[#22d3ee]/22 via-[#8b5cf6]/24 to-[#0ea5e9]/22",
  },
];

const facultyCoordinators: Coordinator[] = [
  { name: "Tanushree Mohapatra", role: "Faculty", phone: "+91 9739303491" },
  { name: "Sruthy V Nair", role: "Faculty", phone: "+91 6238433655" },
];

const studentCoordinators: Coordinator[] = [
  { name: "Lokapriya R", role: "Student", phone: "+91 9740289722" },
  { name: "Subash S S", role: "Student", phone: "+91 8904479439" },
];

const partners = [
  {
    name: "Dyashin",
    description:
      "Technology innovation partner supporting skill development, digital transformation, and industry collaboration for emerging engineers.",
    tag: "Industry Collaboration Partner",
    logo: "/dyashin-logo.png",
  },
  {
    name: "DSEdify",
    description:
      "A unit of Dyashin Technosoft focused on education technology, career enablement, and industry-ready training programs.",
    tag: "EdTech Partner",
    logo: "/dsedify-logo.png",
  },
];

const faqs = [
  {
    question: "What is HIRE-4-THON?",
    answer:
      "HIRE-4-THON is a national-level 24-hour hackathon organized by the Department of Artificial Intelligence & Data Science at KS School of Engineering and Management (KSSEM), Bengaluru. The event focuses on innovation, collaboration, and hiring opportunities where teams build real-world solutions and compete for job offers, internships, and prizes.",
  },
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where developers, designers, and innovators collaborate intensively for a limited time to build creative technology solutions. Participants work in teams to design, develop, and present their ideas or prototypes within the event duration.",
  },
  {
    question: "Who can participate in HIRE-4-THON?",
    answer:
      "Students from colleges across India are eligible to participate in HIRE-4-THON. Each team must consist of 2 to 4 members, and all members of a team must belong to the same college. Participants should have a passion for innovation, coding, and solving real-world problems.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "You can register by scanning the QR code available on the website or by opening the registration link provided in the registration section.",
  },
  {
    question: "When will participants receive the job offer?",
    answer:
      "Students from 1st to 3rd year who win the hackathon will receive their job offer after completing their 8th semester, and they will need to go through one technical interview round before final confirmation. Students from the 4th year who win the hackathon will receive the job offer directly without any additional technical round.",
  },
  {
    question: "Where will the hackathon take place?",
    answer:
      "The hackathon will take place at KS School of Engineering and Management (KSSEM), Bengaluru.",
    link: {
      label: "View Location on Google Maps",
      href: "https://maps.app.goo.gl/uyKK9ekLbQZh8uHK7?g_st=iw",
    },
  },
  {
    question: "Anything required from my side?",
    answer:
      "You'll just need your trusty laptop and its charger. While we do provide power stations at the venue and if possible bring a LAN connector or Ethernet Cable Adaptor. Hence, we strongly recommend that you charge your devices fully before arriving. Additionally, if you are taking any prescribed medicines or have any medical conditions, please make sure to bring your medicines along with you.",
  },
  {
    question: "Will food and facilities be provided?",
    answer:
      "Yes, basic facilities including food and essential arrangements will be provided to participants during the 24-hour hackathon to ensure a comfortable and productive experience.",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.25 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const saved = sessionStorage.getItem("scroll-pos");
    if (saved) {
      const top = parseFloat(saved);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top, left: 0, behavior: "auto" });
        });
      });
    }

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        sessionStorage.setItem("scroll-pos", String(window.scrollY));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);


  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="glow-blob glow-1" />
      <div className="glow-blob glow-2" />
      <div className="glow-blob glow-3" />

      <header className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex w-full items-start justify-between px-3 py-3 lg:px-6">
          <a href="#home" className="group flex items-center gap-3 text-slate-100">
            <span className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-2.5 shadow-inner shadow-black/40">
              <Image
                src="/kssem-logo.png"
                alt="KSSEM logo"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-3xl font-bold leading-none">KSSEM</span>
              <span className="text-lg font-semibold text-orange-100 leading-tight">KS Group of Institutions</span>
            </span>
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium text-slate-200 md:flex lg:gap-6">
            {[
              "home",
              "about",
              "register",
              "partners",
              "highlights",
              "prizes",
              "tracks",
              "timeline",
            ].map(item => (
              <a key={item} href={`#${item}`} className="transition hover:text-orange-200">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <button
            className="ml-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/70 text-slate-100 md:hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto block max-w-6xl px-4 pb-4 md:hidden"
          >
            <div className="glass rounded-2xl p-4">
              {["home", "about", "register", "partners", "highlights", "prizes", "tracks", "timeline"].map(item => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block rounded-lg px-3 py-2 text-slate-100 transition hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <section
        id="home"
        className="hero-banner relative h-[65vh] w-full bg-cover bg-center bg-no-repeat sm:h-[72vh] md:h-[80vh] lg:h-screen"
      />

      <main className="relative mx-auto mt-16 max-w-6xl px-4 pb-16 pt-6 sm:mt-24 sm:px-6 md:px-8 lg:mt-28 lg:px-6 space-y-28 sm:space-y-32">


        <section id="about" className="section">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow">Event Overview</p>
              <h2 className="text-3xl font-bold text-slate-50">Built for innovation, hiring, and national collaboration</h2>
              <p className="text-base text-slate-200 text-justify">
                HIRE-4-THON is KSSEM&apos;s national flagship hackathon. A 24-hour build sprint where ambitious teams ship solutions across AI, web, cloud, cybersecurity, healthcare, and open innovation. Expect mentors, evaluators, and career outcomes.
              </p>
              <p className="text-base text-slate-200 text-justify">
                Organized by the Department of Artificial Intelligence & Data Science in association with CSE, CS & BS, and ECE, this is the arena to showcase talent, solve real problems, and step directly into hiring pipelines.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#3a0066]/30 via-[#ff6a00]/15 to-[#0c0818] blur-2xl" />
              <div className="relative glass border-gradient rounded-3xl p-px">
                <div className="rounded-[22px] bg-black/75 p-6">
                  <div className="flex items-center justify-between text-slate-100">
                    <div className="space-y-1">
                      <p className="eyebrow">Event Snapshot</p>
                      <p className="text-lg font-semibold">Career-first hackathon</p>
                    </div>
                    <Layers className="h-6 w-6 text-orange-200" />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Innovation focus", "Hiring-ready outcomes", "Mentor-led reviews", "Final jury pitch"].map(item => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-orange-400/30 bg-linear-to-r from-[#ff6a00]/14 to-[#3a0066]/25 px-4 py-3 text-sm font-semibold text-slate-100">
                    <span>Code • Collaborate • Pitch • Get hired</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="register" className="section">
          <div className="border-gradient rounded-3xl p-px bg-black/60">
            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-linear-to-br from-black/80 via-[#0f0a1d]/80 to-[#120a22]/85 p-6 shadow-2xl sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.12),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(115,50,255,0.16),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(255,154,60,0.14),transparent_30%)]" />
              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="eyebrow">Registration</p>
                    <h2 className="text-3xl font-bold text-slate-50">Register for HIRE-4-THON</h2>
                    <p className="text-base text-slate-200">
                      Scan the QR code to register your team for the national-level 24-hour hackathon.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Team Size", value: "2 – 4 Members" },
                      { label: "Entry Fee", value: "₹1000 per Team" },
                      { label: "Venue", value: "KSSEM, Bengaluru" },
                      { label: "Date", value: "26 – 27 March 2026" },
                    ].map(card => (
                      <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur text-sm text-slate-200 shadow-lg shadow-black/20">
                        <p className="text-xs uppercase tracking-[0.14em] text-orange-200">{card.label}</p>
                        <p className="mt-1 font-semibold text-slate-50">{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,0.25),rgba(58,0,102,0.18),transparent_55%)] blur-3xl" />
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-orange-500/20 backdrop-blur">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="rounded-xl border border-orange-300/30 bg-black/40 p-3 shadow-inner shadow-orange-500/20">
                        <Image
                          src="/register-qr.png"
                          alt="Register for HIRE-4-THON QR"
                          width={176}
                          height={176}
                          sizes="176px"
                          className="h-44 w-44 rounded-lg object-contain bg-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-base font-semibold text-slate-50">Scan to Register</p>
                        <p className="text-xs text-slate-300">
                          Use your phone camera or QR scanner to open the registration form and submit your team details.
                        </p>
                      </div>
                      <a
                        href="https://konfhub.com/nlh"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#ff6a00] via-[#ff8f3b] to-[#ffb366] px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]"
                      >
                        Open Registration Link
                      </a>
                      <a
                        href="/hire-4-thon-rules.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-orange-100 shadow-lg shadow-orange-500/10 transition hover:scale-[1.02]"
                      >
                        <FileText className="h-4 w-4" />
                        Download Rules & Regulations (PDF)
                      </a>
                      <p className="text-xs text-slate-300">
                        Please review the rules before registering; submissions imply agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Partners</p>
              <h2 className="text-3xl font-bold text-slate-50">Collaboration that elevates</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {partners.map(partner => (
              <div
                key={partner.name}
                className="glass hover-glow flex flex-col gap-8 rounded-3xl border border-orange-500/20 bg-white/5 px-10 py-10 shadow-2xl shadow-orange-500/10 sm:flex-row sm:items-center sm:gap-10"
              >
                {partner.logo ? (
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-inner shadow-orange-500/20">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={112}
                      height={112}
                      sizes="112px"
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-br from-[#ff6a00]/25 to-[#3a0066]/40 text-orange-100">
                    <Sparkles className="h-12 w-12" />
                  </div>
                )}
                <div className="flex flex-col gap-3 text-left">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-2xl font-semibold text-slate-50">{partner.name}</p>
                    {partner.tag && (
                      <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-100">
                        {partner.tag}
                      </span>
                    )}
                  </div>
                  {partner.description && <p className="text-base leading-relaxed text-slate-300 text-justify">{partner.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="highlights" className="section">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="eyebrow">Key Highlights</p>
              <h2 className="text-3xl font-bold text-slate-50">Career outcomes front and center</h2>
            </div>
            <div className="hidden rounded-full bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-200 ring-1 ring-white/10 sm:inline-flex">
              Build • Demo • Hire
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(item => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                viewport={{ once: true }}
                className="glass hover-glow rounded-2xl border border-white/10 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Why Join</p>
              <h2 className="text-3xl font-bold text-slate-50">A premium hackathon experience</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {keyHighlights.map(card => (
              <div key={card.title} className="glass card-hover rounded-2xl border border-white/10 p-5">
                <div className="flex items-center gap-3 text-orange-200">
                  {card.icon}
                  <h3 className="text-base font-semibold text-slate-50">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="prizes" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Prizes</p>
              <h2 className="text-3xl font-bold text-slate-50">Offers, internships, and a rich prize pool</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {prizeTiers.map(card => (
              <div key={card.title} className="border-gradient rounded-3xl p-px">
                <div className="relative overflow-hidden rounded-[20px] border border-white/15 bg-white/5 p-6">
                  <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent" />
                  <div className={`absolute inset-0 opacity-70 blur-3xl bg-linear-to-br ${card.accent}`} />
                  <div className="relative flex flex-col gap-3 text-slate-100">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold uppercase tracking-[0.14em] text-orange-100">{card.title}</span>
                      <Medal className="h-5 w-5 text-amber-300" />
                    </div>
                    <p className="text-2xl font-bold text-slate-50">{card.prize}</p>
                    <p className="text-sm text-slate-200">{card.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="details" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Event Details</p>
              <h2 className="text-3xl font-bold text-slate-50">Logistics at a glance</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Date", value: "26 – 27 March 2026" },
              { title: "Time", value: "9:30 AM – 9:30 AM (24 Hours)" },
              { title: "Venue", value: "KSSEM, Bengaluru" },
              { title: "Team Size", value: "2 – 4 Members" },
              { title: "Entry Fee", value: "₹1000 per Team" },
              { title: "Format", value: "On-campus" },
            ].map(item => (
              <div key={item.title} className="glass rounded-2xl border border-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-orange-200">{item.title}</p>
                <p className="mt-2 text-lg font-semibold text-slate-50">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tracks" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Domains</p>
              <h2 className="text-3xl font-bold text-slate-50">Build where you excel</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tracks.map(track => (
              <motion.div
                key={track.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-orange-500/10"
              >
                <div className={`pointer-events-none absolute inset-0 opacity-80 blur-3xl bg-linear-to-br ${track.accent}`} aria-hidden="true" />
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-100 ring-1 ring-white/10">
                        {track.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-50 leading-snug">{track.title}</h3>
                        <p className="text-sm text-orange-100">Focus your build around career-ready outcomes.</p>
                      </div>
                    </div>
                    <Rocket className="h-5 w-5 text-orange-200" />
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">{track.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="timeline" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2 className="text-3xl font-bold text-slate-50">Your 24-hour journey</h2>
            </div>
          </div>
          <div className="mt-8 space-y-4 border-l border-white/10 pl-6">
            {timeline.map((step, idx) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="absolute -left-3 top-4 h-6 w-6 rounded-full bg-linear-to-br from-[#ff6a00] to-[#3a0066] shadow-lg shadow-orange-500/30" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-50">{step.label}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-orange-100">Step {idx + 1}</span>
                </div>
                <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="section">
          <div className="glass card-hover flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-100">
            <div>
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2 className="text-3xl font-bold text-slate-50">Get answers in seconds</h2>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="glass overflow-hidden rounded-3xl border border-orange-500/20 bg-linear-to-br from-black/70 via-[#120a22]/80 to-[#0c0818]/85 shadow-lg shadow-orange-500/10"
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="text-base font-semibold text-slate-50 sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-orange-200 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <motion.div
                    id={`faq-panel-${idx}`}
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pr-6 text-sm text-slate-300 sm:px-6 sm:pb-6 sm:text-base">
                      <p className="leading-relaxed">{faq.answer}</p>
                      {faq.link && (
                        <a
                          href={faq.link.href}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-200 underline-offset-4 hover:underline"
                        >
                          {faq.link.label}
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="eyebrow">Coordinators</p>
              <h2 className="text-3xl font-bold text-slate-50">Talk to the organizing team</h2>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">Faculty Coordinators</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {facultyCoordinators.map(coord => (
                  <div key={coord.name} className="glass hover-glow flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-50">{coord.name}</p>
                      <p className="text-sm text-orange-200">{coord.phone}</p>
                    </div>
                    <PhoneCall className="h-5 w-5 text-orange-200" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">Student Coordinators</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {studentCoordinators.map(coord => (
                  <div key={coord.name} className="glass hover-glow flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-50">{coord.name}</p>
                      <p className="text-sm text-orange-200">{coord.phone}</p>
                    </div>
                    <PhoneCall className="h-5 w-5 text-orange-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-orange-500/30 bg-linear-to-br from-black via-[#0c0818] to-[#120a22]">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">Hire-4-Thon</p>
              <p className="text-2xl font-bold text-slate-50">HIRE-4-THON</p>
              <p className="text-sm text-slate-300">National Level 24-Hour Hackathon</p>
              <p className="text-sm text-slate-400">KS School of Engineering and Management, Bengaluru</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-100">Code • Collaborate • Pitch • Get Hired</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">Partners</p>
              <div className="flex flex-wrap items-center gap-4">
                {[{ name: "Dyashin", logo: "/dyashin-logo.png" }, { name: "DSEdify", logo: "/dsedify-logo.png" }].map(partner => (
                  <div
                    key={partner.name}
                    className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-inner shadow-orange-500/15"
                    aria-label={partner.name}
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={96}
                      height={96}
                      sizes="96px"
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">Contact</p>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-orange-200" />
                  <span>+91 9740289722</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-200" />
                  <span>events@kssem.edu.in</span>
                </div>
                <a
                  href="https://kssem.edu.in/"
                  className="flex items-center gap-2 text-orange-200 transition hover:text-orange-100"
                >
                  <Globe2 className="h-4 w-4" />
                  <span>College Website</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">Follow</p>
              <div className="flex items-center gap-4 text-slate-300">
                <a
                  href="https://www.linkedin.com/in/kssem-ai-ds-5a9866269/"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-orange-400/50 hover:text-orange-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/kssem_ai_n_ds/"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-orange-400/50 hover:text-orange-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/KSSEM_AI_DS?t=DICje6W-jVxQFdQ63vZvwQ&s=09"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-orange-400/50 hover:text-orange-200"
                  aria-label="X (Twitter)"
                >
                  <svg
                    role="img"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M4 4h3.3L13 11l5.7-7H22l-7.3 9L22 20h-3.3L13 13l-5.7 7H2l7.3-9L2 4h2z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/KSSEM-AIDS/100090927090234/"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-orange-400/50 hover:text-orange-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
            <p>© 2026 HIRE-4-THON</p>
            <p>All rights reserved.</p>
          </div>
          <div className="mt-3 text-center text-sm font-bold text-orange-200 sm:text-right sm:text-base">
            Developed by K.S. Abrar Ali Ahmed, Dept. of AI & DS, 6th Sem.
          </div>
        </div>
      </footer>

    </div>
  );
}
