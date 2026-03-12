"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  CalendarClock,
  Clock3,
  Flame,
  Globe2,
  GraduationCap,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Waypoints,
} from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type Highlight = {
  title: string;
  desc: string;
  icon: JSX.Element;
};

type TimelineItem = {
  label: string;
  detail: string;
  time?: string;
};

const highlights: Highlight[] = [
  {
    title: "₹4 LPA Job Offers",
    desc: "For every member of the champion team.",
    icon: <Award className="h-5 w-5 text-cyan-300" />,
  },
  {
    title: "Internships for Top Teams",
    desc: "2nd & 3rd place land internships with top partners.",
    icon: <GraduationCap className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "₹20K Prize Pool",
    desc: "Cash rewards and spotlight for category winners.",
    icon: <Trophy className="h-5 w-5 text-pink-300" />,
  },
  {
    title: "National Participation",
    desc: "Builders from colleges across India, one arena.",
    icon: <Globe2 className="h-5 w-5 text-cyan-200" />,
  },
  {
    title: "24-Hour Sprint",
    desc: "Non-stop creation, pressure, and adrenaline.",
    icon: <Clock3 className="h-5 w-5 text-amber-200" />,
  },
];

const whyCards = [
  {
    title: "National Exposure",
    desc: "Showcase your build to mentors, recruiters, and peers nationwide.",
    icon: <Globe2 className="h-5 w-5 text-cyan-300" />,
  },
  {
    title: "Career Launchpad",
    desc: "Job offers, internships, and hiring-ready demos in one weekend.",
    icon: <Rocket className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Elite Networking",
    desc: "Team up with top builders, meet mentors, and form winning crews.",
    icon: <Users className="h-5 w-5 text-pink-300" />,
  },
  {
    title: "Real-World Pressure",
    desc: "Ship under a 24-hour clock and pitch like a pro.",
    icon: <Flame className="h-5 w-5 text-amber-300" />,
  },
  {
    title: "Innovation First",
    desc: "Solve pressing problems with AI, cloud, cybersecurity, and more.",
    icon: <Layers className="h-5 w-5 text-cyan-200" />,
  },
  {
    title: "Recognition & Prizes",
    desc: "Win the spotlight, prizes, and certificates for every winner.",
    icon: <ShieldCheck className="h-5 w-5 text-emerald-300" />,
  },
];

const prizeCards = [
  {
    title: "Champion Team",
    prize: "₹4 LPA Job Offer",
    note: "For every team member",
    highlight: true,
  },
  {
    title: "2nd Place",
    prize: "Internship Offer",
    note: "2-4 month opportunity",
  },
  {
    title: "3rd Place",
    prize: "Internship Offer",
    note: "2-4 month opportunity",
  },
  {
    title: "Category Winners",
    prize: "₹20K Prize Pool",
    note: "Split across special awards",
  },
];

const timeline: TimelineItem[] = [
  { label: "Registration Opens", detail: "Apply with your team to secure a slot." },
  { label: "Shortlisting", detail: "Confirmation email with final checklist." },
  { label: "Kickoff", detail: "Briefing, team sync, and problem statements drop.", time: "26th" },
  { label: "24-Hour Sprint", detail: "Build, iterate, and ship under pressure.", time: "26th-27th" },
  { label: "Evaluation", detail: "Judges assess innovation, impact, and polish." },
  { label: "Final Pitch", detail: "Present to the jury and showcase your demo." },
  { label: "Winners", detail: "Champions crowned, offers and prizes announced." },
];

const tracks = [
  "Artificial Intelligence",
  "Web Development",
  "Cloud Computing",
  "Healthcare Tech",
  "Cybersecurity",
  "Education Tech",
  "Smart Automation",
  "Open Innovation",
];

const rules = [
  "Teams only; collaborate and code together.",
  "Original work built during the hackathon.",
  "Follow timelines and submission rules.",
  "Maintain fair play and respect the code of conduct.",
  "All code must be produced within the 24-hour window.",
];

const faqs = [
  {
    q: "Who can participate?",
    a: "Students from any college across India; multidisciplinary teams welcome.",
  },
  {
    q: "Is it open to all colleges?",
    a: "Yes. National-level participation is encouraged.",
  },
  {
    q: "What is the duration?",
    a: "A continuous 24-hour build sprint from 26th to 27th.",
  },
  {
    q: "Are internships guaranteed for 2nd and 3rd place?",
    a: "Yes, shortlisted teams earn 2-4 month internship opportunities.",
  },
  {
    q: "What does the winning team receive?",
    a: "Each member receives a ₹4 LPA job offer plus glory and recognition.",
  },
  {
    q: "Do all winners get certificates?",
    a: "Yes, certificates for all winning and finalist teams.",
  },
  {
    q: "Is there a registration fee?",
    a: "No fee for this edition. Register early to secure your slot.",
  },
];

const stats = [
  { label: "Participants", value: 600 },
  { label: "Colleges", value: 120 },
  { label: "Hours", value: 24 },
  { label: "Prize Pool", value: 20000, prefix: "₹" },
];

function AnimatedCounter({ value, prefix = "" }: { value: number; prefix?: string }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", latest => setDisplay(Math.round(latest)));
    return () => unsubscribe();
  }, [spring]);

  return (
    <span className="text-gradient text-4xl font-semibold">
      {prefix}
      {display}
    </span>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.3 });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="glow-blob glow-1" />
      <div className="glow-blob glow-2" />
      <div className="glow-blob glow-3" />
      <motion.div className="grid-overlay" style={{ y: glowY }} />

      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="border-gradient rounded-xl p-[1px]">
              <div className="flex items-center gap-2 rounded-[11px] bg-slate-900/80 px-3 py-2">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <span className="text-lg font-semibold tracking-tight text-gradient">HACK4THON</span>
              </div>
            </div>
            <span className="hidden text-sm text-slate-300 sm:block">National 24-Hour Hackathon</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            {[
              "home",
              "about",
              "highlights",
              "prizes",
              "timeline",
              "tracks",
              "faq",
              "register",
            ].map(item => (
              <a
                key={item}
                href={`#${item}`}
                className="transition hover:text-cyan-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-100 md:hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
        {menuOpen && (
          <div className="mx-auto block max-w-6xl px-4 pb-4 md:hidden">
            <div className="glass rounded-2xl p-4">
              {[
                "home",
                "about",
                "highlights",
                "prizes",
                "timeline",
                "tracks",
                "faq",
                "register",
              ].map(item => (
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
          </div>
        )}
      </header>

      <main className="relative mx-auto max-w-6xl px-4 pb-16 lg:px-6">
        {/* Hero */}
        <section id="home" className="section pt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30 p-6 sm:p-10 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(244,114,182,0.12),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 ring-1 ring-white/10">
                  National Level • 24-Hour Sprint
                </div>
                <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-gradient">HACK4THON</span>
                  <br />
                  A 24-Hour National Coding Marathon
                </h1>
                <p className="max-w-2xl text-lg text-slate-200">
                  Build with the best minds across India. Code. Ship. Pitch. Land the offers that change your career trajectory.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 ring-1 ring-white/10">
                    <CalendarClock className="h-4 w-4 text-cyan-300" />
                    26th – 27th • 24 Hours
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 ring-1 ring-white/10">
                    <Clock3 className="h-4 w-4 text-purple-300" />
                    Non-Stop Build Sprint
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 ring-1 ring-white/10">
                    <Globe2 className="h-4 w-4 text-emerald-300" />
                    Nationwide Participation
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
                  >
                    Explore Event
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
                  {stats.map(stat => (
                    <div key={stat.label} className="glass rounded-2xl border border-white/10 px-4 py-3">
                      <AnimatedCounter value={stat.value} prefix={stat.prefix} />
                      <p className="text-xs uppercase tracking-wide text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-fuchsia-500/10 to-purple-500/10 blur-3xl" />
                <div className="relative glass border-gradient rounded-3xl p-[1px]">
                  <div className="rounded-[22px] bg-slate-950/80 p-6">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span className="font-semibold text-gradient">Code. Build. Compete. Get Hired.</span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">
                        Live 24H
                        <span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" />
                      </span>
                    </div>
                    <div className="mt-6 space-y-3">
                      {["Team Sync", "Build", "Demo", "Pitch"].map((step, idx) => (
                        <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 text-sm font-semibold text-cyan-200">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-100">{step}</p>
                            <p className="text-xs text-slate-400">Sprint harder. Ship smarter. Impress judges.</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 to-purple-500/10 p-4 text-sm text-slate-100">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        Countdown
                      </div>
                      <div className="mt-2 flex flex-wrap gap-3 text-lg font-semibold">
                        <span className="rounded-xl bg-slate-900/80 px-3 py-2">12d</span>
                        <span className="rounded-xl bg-slate-900/80 px-3 py-2">06h</span>
                        <span className="rounded-xl bg-slate-900/80 px-3 py-2">32m</span>
                        <span className="rounded-xl bg-slate-900/80 px-3 py-2">14s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section id="highlights" className="section">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Highlights</p>
              <h2 className="text-3xl font-bold text-slate-50">What makes HACK4THON elite</h2>
            </div>
            <div className="hidden rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200 ring-1 ring-white/10 sm:inline-flex">
              Build • Demo • Hire
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(item => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="glass card-hover rounded-2xl border border-white/10 p-5"
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

        {/* About */}
        <section id="about" className="section">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">About</p>
              <h2 className="text-3xl font-bold text-slate-50">HACK4THON is where ideas ignite careers</h2>
              <p className="text-base text-slate-200">
                A national-level 24-hour coding marathon designed for builders who want to push boundaries. Collaborate with the sharpest minds, solve real problems, and pitch to decision makers ready to hire.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Innovation + impact driven", "Career outcomes in focus", "Mentors and judges on site", "Serious builds, serious prizes"].map(point => (
                  <div key={point} className="flex items-center gap-2 text-sm text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/15 via-cyan-500/12 to-slate-900/70 blur-2xl" />
              <div className="relative glass border-gradient rounded-3xl p-[1px]">
                <div className="rounded-[22px] bg-slate-950/85 p-6">
                  <div className="flex items-center justify-between text-slate-100">
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-[0.25em] text-purple-200">Format</p>
                      <p className="text-lg font-semibold">24-Hour Non-Stop</p>
                    </div>
                    <Waypoints className="h-6 w-6 text-cyan-300" />
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {["Team collaboration", "Problem-solving under pressure", "Live mentorship", "Final stage pitching"].map(item => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 to-purple-500/10 px-4 py-3 text-sm font-semibold text-slate-100">
                    <span>Code. Build. Compete. Get Hired.</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Participate */}
        <section className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Why Participate</p>
              <h2 className="text-3xl font-bold text-slate-50">Reasons to join the sprint</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map(card => (
              <div key={card.title} className="glass card-hover rounded-2xl border border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prizes */}
        <section id="prizes" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Prizes</p>
              <h2 className="text-3xl font-bold text-slate-50">Win offers, internships, and cash</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {prizeCards.map(card => (
              <div
                key={card.title}
                className={`border-gradient card-hover rounded-2xl p-[1px] ${card.highlight ? "shadow-xl shadow-cyan-500/25" : ""}`}
              >
                <div className="glass rounded-[18px] border border-white/10 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-200">
                    <span className="font-semibold">{card.title}</span>
                    <Trophy className="h-5 w-5 text-amber-300" />
                  </div>
                  <p className="mt-3 text-xl font-bold text-gradient">{card.prize}</p>
                  <p className="text-sm text-slate-300">{card.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Timeline</p>
              <h2 className="text-3xl font-bold text-slate-50">Flow of the hackathon</h2>
            </div>
          </div>
          <div className="mt-8 space-y-4 border-l border-white/10 pl-6">
            {timeline.map((step, idx) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                viewport={{ once: true }}
                className="relative rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <span className="absolute -left-3 top-4 h-6 w-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-50">{step.label}</h3>
                  {step.time && <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-cyan-100 ring-1 ring-white/10">{step.time}</span>}
                </div>
                <p className="mt-1 text-sm text-slate-300">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section id="tracks" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Tracks</p>
              <h2 className="text-3xl font-bold text-slate-50">Choose your domain</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map(track => (
              <div key={track} className="glass card-hover flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-100">
                <span>{track}</span>
                <Rocket className="h-4 w-4 text-cyan-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Rules */}
        <section className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Guidelines</p>
              <h2 className="text-3xl font-bold text-slate-50">Play fair, build bold</h2>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {rules.map(rule => (
              <details key={rule} className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-slate-100">
                  {rule}
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-slate-300">Stay aligned with the spirit of fair competition and respect fellow hackers.</p>
              </details>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">FAQ</p>
              <h2 className="text-3xl font-bold text-slate-50">Everything you need to know</h2>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {faqs.map(faq => (
              <details key={faq.q} className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-slate-100">
                  {faq.q}
                  <span className="transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-slate-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <section id="register" className="section">
          <div className="border-gradient rounded-3xl p-[1px]">
            <div className="glass relative overflow-hidden rounded-[22px] border border-white/10 px-6 py-10 sm:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_30%)]" />
              <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Ready?</p>
                  <h2 className="text-3xl font-bold text-slate-50">Ready to build, compete, and unlock career opportunities?</h2>
                  <p className="text-slate-200">Register now and get the playbook, mentor access, and the stage to shine.</p>
                </div>
                <a
                  href="https://example.com/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:scale-[1.02]"
                >
                  Register for HACK4THON
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-gradient ring-1 ring-white/10">
              HACK4THON
            </div>
            <p className="mt-2 text-sm text-slate-300">Premium national hackathon • College name placeholder</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-cyan-200">About</a>
            <a href="#prizes" className="transition hover:text-cyan-200">Prizes</a>
            <a href="#faq" className="transition hover:text-cyan-200">FAQ</a>
            <a href="mailto:contact@hack4thon.com" className="transition hover:text-cyan-200">Contact</a>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} HACK4THON. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
