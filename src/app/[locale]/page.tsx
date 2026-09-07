import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  Bell,
  Bot,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  CircuitBoard,
  ExternalLink,
  KeyRound,
  Mail,
  MessageCircle,
  Mic,
  Network,
  PlayCircle,
  Radio,
  Shield,
  Timer,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { contact, siteContent } from "@/content";
import { isLocale, routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const featureIcons: LucideIcon[] = [
  Radio,
  MessageCircle,
  KeyRound,
  Mic,
  CalendarClock,
  Bell,
  Bot,
  Wifi,
  Timer,
];

const architectureIcons = [Shield, CircuitBoard, Network, CheckCircle2];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  setRequestLocale(rawLocale);

  const content = siteContent[rawLocale];
  const otherLocale: Locale = rawLocale === "id" ? "en" : "id";
  const mailto = `mailto:${contact.email}?subject=Islamic%20Smart%20Door%20Collaboration`;

  return (
    <main className="min-h-screen bg-[#fbfaf4] text-[#151a17]">
      <header className="sticky top-0 z-50 border-b border-[#d8cf9a]/60 bg-[#fbfaf4]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Islamic Smart Door (ISD)">
            <span className="flex size-9 items-center justify-center rounded-lg bg-[#151a17] text-sm font-bold text-[#f2d36b]">
              ISD
            </span>
            <span className="hidden text-sm font-semibold tracking-normal text-[#151a17] sm:inline">
              Islamic Smart Door
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 rounded-lg border border-[#ded7aa] bg-white/80 p-1 text-sm lg:flex"
            aria-label="Primary navigation"
          >
            {content.nav.map((item) => (
              <a
                className="rounded-md px-3 py-2 text-[#4b5651] transition hover:bg-[#edf7f1] hover:text-[#0f6f5b]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="rounded-lg border border-[#ded7aa] bg-white px-3 py-2 text-sm font-semibold text-[#151a17] transition hover:border-[#0f6f5b] hover:text-[#0f6f5b]"
              href={`/${otherLocale}`}
              hrefLang={otherLocale}
              aria-label={rawLocale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              {rawLocale === "id" ? "EN" : "ID"}
            </a>
            <a
              className={buttonVariants({
                size: "lg",
                className: "bg-[#0f6f5b] text-white hover:bg-[#0b5949]",
              })}
              href="#contact"
              aria-label={content.contact.label}
            >
              <Mail aria-hidden="true" />
              <span className="hidden sm:inline">{content.contact.label}</span>
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(30deg,#0f6f5b_1px,transparent_1px),linear-gradient(150deg,#d6c67a_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <Badge className="mb-5 w-fit rounded-md border-[#d6c67a] bg-white/80 px-3 py-1 text-[#0f6f5b]">
              {content.hero.eyebrow}
            </Badge>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-[#151a17] sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-[#38433e] sm:text-2xl">
              {content.hero.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5b665f]">
              {content.hero.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className={buttonVariants({
                  size: "lg",
                  className: "h-11 bg-[#0f6f5b] px-4 text-white hover:bg-[#0b5949]",
                })}
                href="#contact"
              >
                <Mail />
                {content.hero.primary}
              </a>
              <a
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "h-11 border-[#d6c67a] bg-white px-4 text-[#151a17] hover:bg-[#fff8d6]",
                })}
                href="#demo"
              >
                <PlayCircle />
                {content.hero.demo}
              </a>
              <a
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "h-11 px-4 text-[#151a17] hover:bg-[#edf7f1]",
                })}
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink />
                {content.hero.secondary}
              </a>
            </div>

            <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {content.hero.stats.map((stat) => (
                <div
                  className="rounded-lg border border-[#ded7aa] bg-white/86 p-3 shadow-sm"
                  key={stat.label}
                >
                  <dt className="whitespace-nowrap text-xl font-semibold text-[#151a17] sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-5 text-[#667169] sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-12 h-40 w-24 rotate-6 border-l border-t border-[#d6c67a]" />
            <div className="relative overflow-hidden rounded-lg border border-[#d6c67a] bg-white p-3 shadow-2xl shadow-[#151a17]/10">
              <Image
                src="/isd-device.svg"
                alt={content.hero.imageAlt}
                width={1200}
                height={900}
                priority
                unoptimized
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <MotionSection id="problem" className="border-y border-[#ded7aa] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#0f6f5b]">
              {content.problem.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#151a17] sm:text-4xl">
              {content.problem.title}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-lg border-[#eadf9a] bg-[#fffaf0] shadow-none">
              <CardHeader>
                <CardTitle>{content.problem.problemTitle}</CardTitle>
              </CardHeader>
              <CardContent className="leading-7 text-[#5c675f]">{content.problem.problem}</CardContent>
            </Card>
            <Card className="rounded-lg border-[#b8d9ca] bg-[#f0faf5] shadow-none">
              <CardHeader>
                <CardTitle>{content.problem.solutionTitle}</CardTitle>
              </CardHeader>
              <CardContent className="leading-7 text-[#405047]">{content.problem.solution}</CardContent>
            </Card>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="features" className="bg-[#fbfaf4]">
        <SectionIntro title={content.featuresTitle} body={content.featuresLead} />
        <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {content.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <Card
                className="rounded-lg border-[#ded7aa] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#0f6f5b] hover:shadow-md"
                key={feature.title}
              >
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-[#edf7f1] text-[#0f6f5b]">
                    <Icon aria-hidden="true" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="leading-7">{feature.body}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection id="architecture" className="border-y border-[#ded7aa] bg-[#151a17] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#f2d36b]">
              {content.architecture.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              {content.architecture.title}
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/72">{content.architecture.body}</p>
          </div>
          <div className="grid gap-4">
            {content.architecture.nodes.map((node, index) => {
              const Icon = architectureIcons[index];
              return (
                <div
                  className="grid gap-4 rounded-lg border border-white/14 bg-white/[0.06] p-4 sm:grid-cols-[auto_1fr]"
                  key={node.title}
                >
                  <div className="flex size-11 items-center justify-center rounded-lg bg-[#f2d36b] text-[#151a17]">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{node.title}</h3>
                    <p className="mt-1 leading-7 text-white/68">{node.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="demo" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-[#0f6f5b]">
              {content.gallery.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#151a17] sm:text-4xl">
              {content.gallery.title}
            </h2>
            <p className="mt-4 leading-8 text-[#5b665f]">{content.gallery.body}</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <ImageCard
              src="/isd-device.svg"
              alt={content.gallery.deviceAlt}
              title={content.gallery.items[0].title}
              body={content.gallery.items[0].body}
            />
            <ImageCard
              src="/isd-exhibition.svg"
              alt={content.gallery.exhibitionAlt}
              title={content.gallery.items[1].title}
              body={content.gallery.items[1].body}
            />
          </div>
          <div className="mt-4 grid gap-4 rounded-lg border border-[#ded7aa] bg-[#fbfaf4] p-4 md:grid-cols-[minmax(220px,360px)_1fr] md:items-center">
            <div className="overflow-hidden rounded-lg border border-[#ded7aa] bg-black">
              <iframe
                className="aspect-[9/16] w-full"
                src={contact.youtubeEmbed}
                title={content.gallery.items[2].title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-2 md:p-6">
              <PlayCircle className="size-12 text-[#0f6f5b]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-[#151a17]">{content.gallery.items[2].title}</h3>
              <p className="mt-2 max-w-md leading-7 text-[#5b665f]">{content.gallery.items[2].body}</p>
              <a
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "mt-5 h-11 border-[#d6c67a] bg-white text-[#151a17] hover:bg-[#fff8d6]",
                })}
                href={contact.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="technical" className="bg-[#fbfaf4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#0f6f5b]">
              {content.technical.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#151a17] sm:text-4xl">
              {content.technical.title}
            </h2>
            <p className="mt-4 leading-8 text-[#5b665f]">{content.technical.body}</p>
          </div>
          <div className="grid gap-3">
            {content.technical.groups.map((group, index) => (
              <details
                className="group rounded-lg border border-[#ded7aa] bg-white p-4 shadow-sm"
                key={group.title}
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#151a17]">
                  {group.title}
                  <ChevronDown className="size-5 text-[#0f6f5b] transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="mt-4 grid gap-3">
                  {group.items.map((item) => (
                    <li className="flex gap-3 leading-7 text-[#5b665f]" key={item}>
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#0f6f5b]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-[#ded7aa] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-normal text-[#0f6f5b]">
            {content.recognition.label}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-[#151a17] sm:text-4xl">
            {content.recognition.title}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {content.recognition.items.map((item) => (
              <Card className="rounded-lg border-[#ded7aa] bg-[#fbfaf4] shadow-none" key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="leading-7">{item.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[#151a17] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#f2d36b]">
              {content.about.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              {content.about.title}
            </h2>
          </div>
          <div>
            <p className="leading-8 text-white/72">{content.about.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {content.about.points.map((point) => (
                <Badge
                  className="rounded-md border-white/16 bg-white/[0.08] px-3 py-1 text-white"
                  key={point}
                >
                  {point}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "border-white/20 bg-white text-[#151a17] hover:bg-[#f2d36b]",
                })}
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink />
                LinkedIn
              </a>
              <a
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "text-white hover:bg-white/10 hover:text-white",
                })}
                href={contact.github}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="bg-[#fbfaf4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-[#0f6f5b]">
              {content.contact.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#151a17] sm:text-4xl">
              {content.contact.title}
            </h2>
            <p className="mt-4 leading-8 text-[#5b665f]">{content.contact.body}</p>
          </div>
          <Card className="rounded-lg border-[#ded7aa] bg-white shadow-sm">
            <CardContent className="pt-6">
              <form action={mailto} method="post" encType="text/plain" className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">{content.contact.name}</Label>
                  <Input id="name" name="name" required className="h-11 rounded-lg" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{content.contact.email}</Label>
                  <Input id="email" name="email" type="email" required className="h-11 rounded-lg" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">{content.contact.message}</Label>
                  <Textarea id="message" name="message" required className="min-h-32 rounded-lg" />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="h-11 bg-[#0f6f5b] text-white hover:bg-[#0b5949]">
                    <Mail />
                    {content.contact.send}
                  </Button>
                  <a
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className: "h-11 border-[#d6c67a] bg-white text-[#151a17] hover:bg-[#fff8d6]",
                    })}
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink />
                    {content.contact.linkedin}
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </MotionSection>

      <footer className="border-t border-[#ded7aa] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-[#5b665f] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Islamic Smart Door (ISD) - Mustafidh</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#0f6f5b]" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <Separator orientation="vertical" className="h-4 bg-[#ded7aa]" />
            <a className="hover:text-[#0f6f5b]" href={`/${otherLocale}`} hrefLang={otherLocale}>
              {rawLocale === "id" ? "English" : "Bahasa Indonesia"}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionIntro({ title, body }: { title: string; body: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#151a17] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 leading-8 text-[#5b665f]">{body}</p>
      </div>
    </div>
  );
}

function ImageCard({
  src,
  alt,
  title,
  body,
}: {
  src: string;
  alt: string;
  title: string;
  body: string;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-[#ded7aa] bg-[#fbfaf4]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={780}
        unoptimized
        className={cn("aspect-[16/10] w-full object-cover", src.includes("device") && "aspect-[4/3]")}
      />
      <figcaption className="border-t border-[#ded7aa] bg-white p-4">
        <h3 className="font-semibold text-[#151a17]">{title}</h3>
        <p className="mt-1 leading-7 text-[#5b665f]">{body}</p>
      </figcaption>
    </figure>
  );
}
