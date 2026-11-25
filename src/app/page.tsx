import Image from "next/image";

// TODO: replace with the real sales inbox before launch.
const CONTACT_EMAIL = "hello@example.com";

// Stroke icons, 24x24 viewBox.
const icons = {
  drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  signal: "M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01",
  valve: "M3 12h5m8 0h5M8 8v8h8V8H8zM12 8V4m-3 0h6",
  chart: "M4 20V10m6 10V4m6 16v-8m4 8H2",
  sun: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 1v2m0 18v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  phone: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 16h.01",
  leaf: "M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19l7-7",
  layers: "m12 2 10 5-10 5L2 7l10-5zM2 12l10 5 10-5M2 17l10 5 10-5",
  bell: "M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9m4.3 13a2 2 0 0 0 3.4 0",
  shield: "M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z",
  battery: "M3 7h15v10H3zM21 10v4M7 10v4m4-4v4",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  building: "M3 21h18M5 21V5l7-3 7 3v16M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1",
  globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20",
  check: "m5 12 5 5L20 7",
  arrow: "M5 12h14m-6-6 6 6-6 6",
};

function Icon({ name, className = "h-6 w-6" }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${light ? "text-lime" : "text-brand-dark"}`}>
      {children}
    </p>
  );
}

const nav = [
  { href: "#awd", label: "AWD" },
  { href: "#platform", label: "Platform" },
  { href: "#device", label: "Device" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

const stats = [
  { value: "~30%", label: "less irrigation water with well-managed AWD*" },
  { value: "24/7", label: "water-level and field monitoring" },
  { value: "100%", label: "solar powered in the field" },
  { value: "IP67", label: "weatherproof enclosure" },
];

const awdSteps = [
  {
    title: "Flood",
    text: "The field is irrigated to a shallow standing water level after planting and through sensitive growth stages.",
    level: 80,
  },
  {
    title: "Let it dry",
    text: "Water is allowed to soak in and drop below the soil surface. Roots grow deeper and the soil breathes.",
    level: 30,
  },
  {
    title: "Re-flood on time",
    text: "When the level reaches the safe threshold, AquaNex alerts you (or opens the valve) to re-flood. Then the cycle repeats.",
    level: 12,
  },
];

const modules = [
  { name: "AquaNex Sense", text: "Water level monitoring", icon: "drop" },
  { name: "AquaNex Soil", text: "Soil moisture & field sensing", icon: "leaf" },
  { name: "AquaNex Flow", text: "Irrigation & pump automation", icon: "valve" },
  { name: "AquaNex Control", text: "Valve & equipment control", icon: "layers" },
  { name: "AquaNex Intelligence", text: "Analytics, alerts & decisions", icon: "chart" },
] as const;

const anatomy = [
  { title: "Solar panel lid", text: "Powers the device for continuous operation." },
  { title: "IoT antenna", text: "Sends data to the cloud via cellular, LoRa or NB-IoT." },
  { title: "Weatherproof enclosure", text: "Rugged, IP67-rated housing built for field conditions." },
  { title: "Mounting bracket", text: "Fits securely on the field pipe." },
  { title: "Water level sensor", text: "Measures the real-time water level in the paddy." },
];

const highlights = [
  { icon: "sun", title: "Solar powered", text: "Maintenance-free energy" },
  { icon: "signal", title: "Cellular / LoRa / NB-IoT", text: "Flexible connectivity" },
  { icon: "shield", title: "IP67 rated", text: "Weatherproof" },
  { icon: "battery", title: "Battery backup", text: "Runs through cloudy days" },
] as const;

const steps = [
  { title: "Sense", text: "Field units measure water level and soil moisture at regular intervals, day and night." },
  { title: "Monitor", text: "Readings stream to the AquaNex Cloud Platform over cellular, LoRa or NB-IoT." },
  { title: "Automate", text: "Rules and schedules open valves and run pumps, or send you an alert to act." },
  { title: "Optimise", text: "Season-long trends and recommendations help you use less water and protect yield." },
];

const benefits = [
  { icon: "drop", title: "Real-time monitoring", text: "Water level, soil moisture and field conditions, live." },
  { icon: "valve", title: "Smart irrigation", text: "Automate pumps and valves for efficient water use." },
  { icon: "chart", title: "Data & insights", text: "Track trends, get alerts and make better decisions." },
  { icon: "sun", title: "Energy efficient", text: "Solar powered for long, unattended operation." },
  { icon: "phone", title: "Remote access", text: "Monitor and control every field from anywhere." },
  { icon: "leaf", title: "Scalable solution", text: "From a single field to large estates, then on to fertilisation and other farm operations." },
] as const;

const audiences = [
  { icon: "users", title: "Rice farmers", text: "Fewer field trips, timely irrigation and lower pumping costs." },
  { icon: "building", title: "Estates & cooperatives", text: "One dashboard for many fields, teams and water zones." },
  { icon: "layers", title: "Agribusiness", text: "Field-level data to support growers and supply programmes." },
  { icon: "globe", title: "Climate programmes", text: "Time-stamped water records to support AWD verification and reporting." },
] as const;

const faqs = [
  {
    q: "What is Alternate Wetting and Drying (AWD)?",
    a: "AWD is a rice water-management practice where the paddy is flooded, allowed to dry until the water drops below the soil surface, then re-flooded. Done well, it cuts irrigation water and reduces methane from flooded fields without hurting yield.",
  },
  {
    q: "How does AquaNex collect and send data?",
    a: "A solar-powered field unit with a water-level sensor takes regular readings and sends them over cellular, LoRa or NB-IoT to the AquaNex Cloud Platform, where you see them on the web dashboard and mobile app.",
  },
  {
    q: "Will I get alerts when it's time to irrigate?",
    a: "Yes. You set thresholds per field. When the water level falls below it, AquaNex notifies you, or triggers the pump or valve automatically if you use AquaNex Flow and Control.",
  },
  {
    q: "How many units does a farm need?",
    a: "A good starting point is one unit per representative plot or water-management zone. Our team helps you plan coverage based on field layout and how water moves across your farm.",
  },
  {
    q: "Can AquaNex data support carbon or sustainability programmes?",
    a: "AquaNex keeps a continuous, time-stamped record of field water levels, which can serve as evidence of AWD practice. Whether it qualifies depends on each programme's methodology.",
  },
  {
    q: "Does it only work for rice?",
    a: "AWD support is built for paddy, but the platform is modular. Soil moisture sensing and irrigation automation work across other crops, and you can expand into fertilisation and other farm operations.",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#" aria-label="Syntrix home">
            <Image src="/logo/syntrix_horizontal_light.svg" alt="Syntrix" width={1600} height={280} priority className="h-8 w-auto" />
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-brand-dark">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:inline-block">
              Book a demo
            </a>
            <details className="relative lg:hidden">
              <summary className="cursor-pointer list-none rounded-lg p-2 text-ink hover:bg-mist" aria-label="Menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              </summary>
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-line bg-white p-2 shadow-xl">
                {nav.map((l) => (
                  <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-mist">{l.label}</a>
                ))}
                <a href="#contact" className="mt-1 block rounded-lg bg-brand px-3 py-2 text-center text-sm font-semibold text-white">Book a demo</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-mist to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-brand-dark shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand" />
                Intelligent agriculture water management
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Smart water.<br />
                <span className="text-brand">Sustainable agriculture.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                AquaNex by Syntrix is an IoT platform that senses, monitors, automates and optimises water in your fields. Built for paddy and Alternate Wetting &amp; Drying, ready to grow with your farm.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark">
                  Book a demo <Icon name="arrow" className="h-5 w-5" />
                </a>
                <a href="#platform" className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-3.5 font-semibold text-ink transition-colors hover:border-brand hover:text-brand-dark">
                  Explore the platform
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
                {["Sense", "Monitor", "Automate", "Optimise"].map((w) => (
                  <li key={w} className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand" />{w}</li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-mint" aria-hidden="true" />
              <Image src="/images/device-field.jpg" alt="AquaNex field unit with solar lid and antenna installed in a paddy field" width={278} height={645} priority className="relative h-auto w-full rounded-3xl shadow-2xl" />
              <div className="absolute -left-4 top-1/3 rounded-2xl border border-line bg-white px-4 py-3 shadow-xl sm:-left-12">
                <p className="text-xs font-medium text-muted">Water level · Field 01</p>
                <p className="flex items-center gap-1.5 text-xl font-bold text-ink"><Icon name="drop" className="h-5 w-5 text-sky-500" />+5.2 cm</p>
              </div>
              <div className="absolute -right-3 bottom-10 rounded-2xl bg-brand-deeper px-4 py-3 text-white shadow-xl sm:-right-10">
                <p className="text-xs text-lime">Irrigation</p>
                <p className="flex items-center gap-2 font-semibold"><span className="h-2 w-2 animate-pulse rounded-full bg-lime" />Auto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="px-4 text-center lg:border-l lg:border-line lg:first:border-l-0">
                <p className="text-4xl font-bold text-brand">{s.value}</p>
                <p className="mx-auto mt-2 max-w-[14rem] text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-7xl px-4 pb-6 text-xs text-muted sm:px-6">
            *Typical savings reported for AWD in rice research. Actual results depend on soil, climate and field management.
          </p>
        </section>

        {/* AWD */}
        <section id="awd" className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <Eyebrow>Why water management matters</Eyebrow>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Flooded paddies use the most water, and release methane.</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                <p>Rice is grown in continuously flooded fields. Underwater, organic matter breaks down without oxygen, and that makes rice one of agriculture&apos;s largest sources of methane.</p>
                <p>Alternate Wetting &amp; Drying (AWD) lets fields dry out between irrigations. It saves water and cuts methane. The catch: done by hand, it means walking every field to check water tubes. AquaNex does that for you, continuously.</p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {awdSteps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  {/* Water gauge illustration */}
                  <div className="relative h-32 overflow-hidden rounded-xl bg-gradient-to-b from-sky-50 to-white" aria-hidden="true">
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-[#8a6b47]" />
                    <div className="absolute inset-x-0 bottom-0 bg-sky-400/50 transition-all" style={{ height: `${s.level}%` }} />
                    <div className="absolute inset-x-0 bottom-10 border-t-2 border-dashed border-[#5e4529]" />
                    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
                      {[0, 1, 2, 3, 4].map((k) => (
                        <div key={k} className="h-16 w-1 origin-bottom rounded-full bg-brand" style={{ transform: `rotate(${(k - 2) * 8}deg)` }} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-5 text-sm font-semibold text-brand-dark">Step {i + 1}</p>
                  <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 rounded-2xl bg-brand-deeper p-8 text-white sm:grid-cols-2 lg:grid-cols-5">
              {["Less irrigation water", "Lower methane emissions", "Better soil aeration", "Deeper, healthier roots", "Fewer field visits"].map((b) => (
                <p key={b} className="flex items-start gap-2 font-medium"><Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-lime" />{b}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Platform */}
        <section id="platform" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>The AquaNex platform</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">One connected platform, five modules.</h2>
              <p className="mt-4 text-lg text-muted">Start with water-level monitoring and add soil sensing, pump automation, valve control and analytics as your farm grows. Everything connects through the AquaNex Cloud Platform.</p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {modules.map((m) => (
                <div key={m.name} className="group rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={m.icon} />
                  </div>
                  <h3 className="mt-5 font-bold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted">{m.text}</p>
                </div>
              ))}
            </div>
            <Image src="/images/platform-overview.jpg" alt="AquaNex platform overview: field sensors, pump station, cloud platform, web dashboard and mobile app" width={1280} height={720} className="mt-14 h-auto w-full rounded-3xl border border-line shadow-xl" />
          </div>
        </section>

        {/* Device */}
        <section id="device" className="bg-mist py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image src="/images/aquanex-product-sheet.jpg" alt="AquaNex field unit anatomy, dashboard and product views" width={1280} height={1169} className="h-auto w-full rounded-3xl shadow-xl" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>The field unit</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built for the paddy. Powered by the sun.</h2>
              <p className="mt-4 text-lg text-muted">The AquaNex Sense unit mounts on a pipe in the field and keeps reporting through monsoon rain and summer heat.</p>
              <ol className="mt-8 space-y-4">
                {anatomy.map((a, i) => (
                  <li key={a.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{a.title}</p>
                      <p className="text-muted">{a.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-center gap-3 rounded-xl bg-white p-4">
                    <Icon name={h.icon} className="h-6 w-6 shrink-0 text-brand" />
                    <div>
                      <p className="text-sm font-semibold leading-tight">{h.title}</p>
                      <p className="text-xs text-muted">{h.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">From field sensor to smart decision.</h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.title} className="border-t-2 border-brand pt-6">
                  <p className="text-sm font-bold text-brand">0{i + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="bg-brand-deepest py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <Eyebrow light>Web & mobile</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Every field, in your pocket.</h2>
              <p className="mt-4 text-lg text-white/75">See water level, soil moisture and irrigation status on a live field map. Get alerts the moment a field needs water, and switch pumps or valves without leaving home.</p>
              <ul className="mt-8 space-y-3">
                {["Live field map with sensor status", "Threshold alerts by app notification", "Remote and scheduled pump & valve control", "Season reports on water use and trends"].map((f) => (
                  <li key={f} className="flex items-center gap-3"><Icon name="check" className="h-5 w-5 text-lime" />{f}</li>
                ))}
              </ul>
            </div>
            <Image src="/images/dashboard.jpg" alt="AquaNex dashboard on laptop and phone showing water level 12.5 cm and soil moisture 68%" width={535} height={305} className="h-auto w-full rounded-3xl shadow-2xl ring-1 ring-white/10" />
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Why AquaNex</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Less water. Less labour. Better decisions.</h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-2xl border border-line bg-white p-8 transition hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white"><Icon name={b.icon} /></div>
                  <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-muted">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">From smallholder fields to large estates.</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((a) => (
                <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <Icon name={a.icon} className="h-8 w-8 text-brand" />
                  <h3 className="mt-4 font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
            </div>
            <div className="mt-12 divide-y divide-line overflow-hidden rounded-2xl border border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white open:bg-mist">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold">
                    {f.q}
                    <span className="text-2xl leading-none text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="relative overflow-hidden">
          <Image src="/images/paddy-field.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-brand-deepest/85" />
          <div className="relative mx-auto max-w-4xl px-4 py-24 text-center text-white sm:px-6">
            <Eyebrow light>Get started</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Make every drop count this season.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">Talk to the Syntrix team about a pilot on your fields. We&apos;ll help you plan sensor coverage, connectivity and automation.</p>
            <a href={`mailto:${CONTACT_EMAIL}?subject=AquaNex%20demo%20request`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 font-semibold text-brand-deepest transition-colors hover:bg-white">
              Book a demo <Icon name="arrow" className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f2a0b] text-white/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image src="/logo/syntrix_horizontal_dark.svg" alt="Syntrix" width={1600} height={280} className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm">Connecting Mind, Nature and Technology for Innovation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Platform</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {modules.map((m) => <li key={m.name}><a href="#platform" className="hover:text-lime">{m.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#awd" className="hover:text-lime">AWD for rice</a></li>
              <li><a href="#platform" className="hover:text-lime">Irrigation automation</a></li>
              <li><a href="#device" className="hover:text-lime">Field sensing</a></li>
              <li><a href="#how" className="hover:text-lime">Analytics & insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-lime">Contact</a></li>
              <li><a href="#faq" className="hover:text-lime">FAQ</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-lime">{CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-4 py-6 text-xs sm:px-6">© 2026 Syntrix Innovations. AquaNex is a trademark of Syntrix.</p>
        </div>
      </footer>
    </>
  );
}
