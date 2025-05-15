"use client";

import type React from "react";

import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Mail,
  ChevronDown,
  Trophy,
  Award,
  CircleCheck,
  Users,
  BookOpen,
  School,
  Heart,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Portfolio() {
  // Refs for smooth scrolling
  const heroRef = useRef<HTMLDivElement | null>(null);
  const workRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const publicationsRef = useRef<HTMLDivElement | null>(null);
  const awardsRef = useRef<HTMLDivElement | null>(null);
  const competitiveRef = useRef<HTMLDivElement | null>(null);
  const outreachRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">
            <button onClick={() => scrollToSection(heroRef)}>
              Seemanta Bhattacharjee
            </button>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection(workRef)}
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(publicationsRef)}
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection(awardsRef)}
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection(competitiveRef)}
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Competitive Programming
            </button>
            <button
              onClick={() => scrollToSection(outreachRef)}
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Outreach
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                window.open("https://github.com/border-b", "_blank");
              }}
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                window.open("mailto:babune99@gmail.com", "_blank");
              }}
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="container py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Seemanta Bhattacharjee
              </h1>
              <p className="text-gray-500 md:text-md">
                <span className="italic">hacker</span> with a knack for problem
                solving
              </p>
            </div>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              Exploring quantum algorithms for machine learning, and trustworthy
              AI-assisted software development.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button onClick={() => scrollToSection(workRef)}>
                View Work
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1CWP-BNMYnl5PzDjCaR5dT3j2TQDhApV9/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Avatar className="h-80 w-80">
              <AvatarImage
                src="/seemanta.jpeg?height=256&width=256"
                alt="Seemanta"
              />
            </Avatar>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section ref={workRef} className="py-12 md:py-24 bg-gray-50">
        <div className="container space-y-6 md:space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Work Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Professional experience in industry and research
            </p>
          </div>
          <div className="space-y-0">
            {/* Experience Item 1 */}
            <div className="group relative border-l-2 border-gray-200 pl-8 pb-10 transition-colors hover:border-gray-400">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-gray-200 transition-colors group-hover:border-gray-400">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-600"></div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium">
                    November 2023 - Present
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">re:frame</h3>
                  <p className="text-gray-600 font-medium">Software Engineer</p>
                </div>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>
                    Built LLM-aware compilers that generate provably correct and
                    type-safe code.
                  </li>
                  <li>
                    Developed Docker container images and accompanying
                    deployment scripts to automate service rollout.
                  </li>
                  <li>
                    Enabled precise point-in-time database snapshot restoration
                    for rapid data recovery.
                  </li>
                  <li>
                    Developed observability dashboard to monitor and debug
                    systems in production.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    Compiler
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    Docker
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    AWS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    SQLite
                  </Badge>
                </div>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="group relative border-l-2 border-gray-200 pl-8 pb-10 transition-colors hover:border-gray-400">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-gray-200 transition-colors group-hover:border-gray-400">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-600"></div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium">
                    October 2024 - April 2025
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">SierraRomeo.AI</h3>
                  <p className="text-gray-600 font-medium">Lead Engineer</p>
                </div>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>
                    Built the data pipeline and data orchestration
                    infrastructure for an enterprise aviation compliance and
                    analytics platform.
                  </li>
                  <li>
                    Used Turbopuffer to index, catalog, and manage data across
                    hundreds of document types for rapid search and retrieval.
                  </li>
                  <li>
                    Developed an intelligent assistant tool to automatically
                    analyze and extract insights from user-uploaded compliance
                    documents.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    RAG
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    GCS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    Inngest
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    TypeScript
                  </Badge>
                </div>
              </div>
            </div>

            {/* Experience Item 3 - Example of returning to a company */}
            <div className="group relative border-l-2 border-gray-200 pl-8 pb-10 transition-colors hover:border-gray-400">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-gray-200 transition-colors group-hover:border-gray-400">
                <div className="h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-600"></div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium">
                    July 2023 - September 2023
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Scale AI</h3>
                  <p className="text-gray-600 font-medium">
                    Software Engineer (Contract)
                  </p>
                </div>
                <ul className="text-gray-600 list-disc list-inside space-y-1">
                  <li>
                    Taught AI coding agents how to solve problems in competitive
                    programming
                  </li>
                  <li>
                    Automated stress testing and failure-case generation via
                    Bash to boost code robustness.
                  </li>
                  <li>
                    Streamlined AI workflows with Python, TensorFlow, and
                    PyTorch
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    C++
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    Algorithms
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:bg-gray-100"
                  >
                    Reinforcement Learning
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-12 md:py-24">
        <div className="container space-y-6 md:space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Collection of research, personal, and team projects
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/diffusion.png"
                  alt="Distributed ML Framework"
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Quantum Diffusion Models</CardTitle>
                <CardDescription>
                  Generating Realistic Quark-Gluon Interactions with Diffusion
                  Models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  This project applies advanced diffusion models to the CMS
                  experiment's quark-gluon dataset, generating realistic
                  multi-channel images (HCAL, ECAL, track) that reflect particle
                  interactions in high-energy collisions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">Diffusion Models</Badge>
                  <Badge variant="secondary">Quantum Computing</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.open(
                      "https://github.com/border-b/Quantum-Diffusion",
                      "_blank"
                    );
                  }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </CardFooter>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/chessai.png"
                  alt="Algorithm Optimization Library"
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>ChessAI</CardTitle>
                <CardDescription>
                  Chess analysis tool to improve your moves
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Modern LLMs still have a long way to go when it comes to
                  playing or understanding chess. This is an experimental
                  approach that uses a combination of stockfish and an LLM to
                  analyze and improve your chess moves.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Engine Analysis</Badge>
                  <Badge variant="secondary">LLM</Badge>
                  <Badge variant="secondary">Chess</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/10x.avif"
                  alt="Privacy-Preserving ML"
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>10xlaunch</CardTitle>
                <CardDescription>
                  Get 10x more users from same website traffic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Just add a one-line script to your website and know exactly
                  who's visiting your website. Get names, emails, and LinkedIn
                  profiles of your anonymous website visitors automatically as
                  soon as they land on your website.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">User Intelligence</Badge>
                  <Badge variant="secondary">Growth Hacking</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    window.open(
                      "https://www.producthunt.com/products/10xlaunch#10xlaunch",
                      "_blank"
                    );
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section ref={publicationsRef} className="bg-gray-50 py-12 md:py-24">
        <div className="container space-y-6 md:space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Publications
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Academic papers and research publications
            </p>
          </div>
          <div className="space-y-6">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>
                      Classification of Financial Data Using Quantum Support
                      Vector Machine
                    </CardTitle>
                    <CardDescription className="mt-1 italic font-semibold">
                      Undergraduate Thesis, Asian Quantum Information Science
                      Conference (AQIS) 2023
                    </CardDescription>
                  </div>
                  <Badge>arXiv</Badge>
                </div>
              </CardHeader>
              <div className="px-8 py-4 flex flex-col md:flex-row gap-6">
                <div className="md:w-[50%] flex justify-center md:justify-start">
                  <img
                    src="/experimentFlow.png"
                    alt="Publication preview"
                    className="rounded-md w-auto h-40 object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    We performed a comprehensive study applying quantum kernels
                    to financial time‑series data, using a self‑curated Dhaka
                    Stock Exchange (DSEx) Broad Index dataset. Implemented and
                    benchmarked multiple quantum‐kernelized SVM models,
                    identified the optimal kernel for our dataset, and
                    demonstrated an empirical quantum advantage. To ensure
                    robustness, we validated results against the Phase Space
                    Terrain Ruggedness Index and projected the computational
                    resources required to scale this approach for future
                    practitioners.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-medium">Authors:</p>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">
                        Seemanta Bhattacharjee
                      </span>
                      , Md. Muhtasim Fuad, and A. K. M. Fakhrul Hossain
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium">Supervised by:</p>
                    <p className="text-sm text-gray-500">
                      <a
                        href="https://scholar.google.com/citations?user=kgmTVm8AAAAJ&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-700"
                      >
                        Dr. Omar Shehab (IBM)
                      </a>
                      {", "}
                      <a
                        href="https://www.sust.edu/departments/cse/faculty/fakhrul-cse@sust.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-700"
                      >
                        A. K. M. Fakhrul Hossain (SUST)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.open("https://arxiv.org/abs/2412.10860v1", "_blank");
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Preprint
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-12 md:py-24">
        <div className="container space-y-6 md:space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Awards & Honors
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Problem Solving and Programming Competitions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Award Card 1 - ICPC */}
            <div className="group bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 transition-colors duration-300 group-hover:bg-yellow-100">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2 relative">
                  <div>
                    <h3 className="text-xl font-bold">
                      International Collegiate Programming Contest
                    </h3>
                    <p className="text-sm text-gray-500">2023</p>
                  </div>
                  <p className="text-gray-600">
                    Ranked 10th (top 1% out of 1200+ teams) in ICPC Dhaka
                    Regional Contest 2022.
                  </p>
                </div>
              </div>
            </div>

            {/* Award Card 2 - Meta Hacker Cup */}
            <div className="group bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 transition-colors duration-300 group-hover:bg-yellow-100">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2 relative">
                  <div>
                    <h3 className="text-xl font-bold">Meta Hacker Cup</h3>
                    <p className="text-sm text-gray-500">2023</p>
                  </div>
                  <p className="text-gray-600">
                    Ranked among the top 8% of 20,000+ participants worldwide in
                    the Meta Hacker Cup 2023.
                  </p>
                </div>
              </div>
            </div>

            {/* Award Card 3 - Google Kick Start */}
            <div className="group bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 transition-colors duration-300 group-hover:bg-yellow-100">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2 relative">
                  <div>
                    <h3 className="text-xl font-bold">Google Kick Start</h3>
                    <p className="text-sm text-gray-500">2022</p>
                  </div>
                  <p className="text-gray-600">
                    Top 2% among 17,000+ participants in Google Kick Start Round
                    A 2022.
                  </p>
                </div>
              </div>
            </div>

            {/* Award Card 4 - Bangladesh Mathematical Olympiad */}
            <div className="group bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 transition-colors duration-300 group-hover:bg-yellow-100">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2 relative">
                  <div>
                    <h3 className="text-xl font-bold">
                      Bangladesh Mathematical Olympiad
                    </h3>
                    <p className="text-sm text-gray-500">2013</p>
                  </div>
                  <p className="text-gray-600">
                    Chittagong Divisional Champion in the largest mathematical
                    olympiad in Bangladesh.
                  </p>
                </div>
              </div>
            </div>

            {/* Award Card 5 - National High School Programming Contest */}
            <div className="group bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 transition-colors duration-300 group-hover:bg-yellow-100">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2 relative">
                  <div>
                    <h3 className="text-xl font-bold">
                      National High School Programming Contest
                    </h3>
                    <p className="text-sm text-gray-500">2016</p>
                  </div>
                  <p className="text-gray-600">
                    Ranked 2nd among 100+ participants in National High School
                    Programming Contest 2016.
                  </p>
                </div>
              </div>
            </div>

            {/* Award Card 6 - Govt. Scholarship */}
            <div className="group bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 transition-colors duration-300 group-hover:bg-yellow-100">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-2 relative">
                  <div>
                    <h3 className="text-xl font-bold">
                      Government Talent Pool Scholarship
                    </h3>
                    <p className="text-sm text-gray-500">2010–2021</p>
                  </div>
                  <p className="text-gray-600">
                    Awarded a merit-based full free studentship and monthly
                    stipend by the Board of Intermediate and Secondary Education
                    for outstanding performance in the national board
                    examinations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section ref={competitiveRef} className="bg-gray-50 py-12 md:py-24">
        <div className="container space-y-6 md:space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Competitive Programming
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Journey as a competitive programmer
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <CardHeader>
                <CardTitle>Codeforces</CardTitle>
                <CardDescription>
                  Max Rating:{" "}
                  <span className="text-purple-700 font-bold">
                    1956 (Candidate Master)
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Top 1% globally among 900,000+ users.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.open(
                      "https://codeforces.com/profile/border",
                      "_blank"
                    );
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Profile
                </Button>
              </CardFooter>
            </Card>

            {/* CodeChef Card */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <CardHeader>
                <CardTitle>CodeChef</CardTitle>
                <CardDescription>
                  Max Rating:{" "}
                  <span className="text-yellow-400 font-bold">2010 (5★)</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Top 1% globally among 1,000,000+ users.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.open(
                      "https://www.codechef.com/users/border",
                      "_blank"
                    );
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Profile
                </Button>
              </CardFooter>
            </Card>

            {/* LeetCode Card */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <CardHeader>
                <CardTitle>LeetCode</CardTitle>
                <CardDescription>
                  Max Rating:{" "}
                  <span className="text-orange-400 font-bold">2342</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Top 0.6% globally among 700,000+ users, top 10 in Bangladesh.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.open("https://leetcode.com/u/border_b/", "_blank");
                  }}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Profile
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Problem Setter Experience - Two Column Layout */}
          <div className="mt-12">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Left Card - International Problems */}
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
                <CardHeader>
                  <CardTitle>International Problem Setting</CardTitle>
                  <CardDescription>
                    Judge and Problem Author for International Platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-col space-y-6">
                    <div className="flex justify-center space-x-8 py-2">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src="/chef-icon.png"
                            alt="CodeChef"
                            className="rounded-full object-cover border-2 border-white shadow"
                          />
                        </div>
                        <p className="mt-2 text-sm font-medium">CodeChef</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src="/hackerearth-icon.png"
                            alt="HackerEarth"
                            className="rounded-full object-cover border-2 border-white shadow"
                          />
                        </div>
                        <p className="mt-2 text-sm font-medium">HackerEarth</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src="/codedrills-icon.jpeg"
                            alt="CodeDrills"
                            className="rounded-full object-cover border-2 border-white shadow"
                          />
                        </div>
                        <p className="mt-2 text-sm font-medium">CodeDrills</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="text-sm font-semibold mb-2 flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                        Contribution Highlights
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <div className="min-w-4 mr-2 mt-1">•</div>
                          <span>
                            Created algorithmic challenges for international
                            coding competitions
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="min-w-4 mr-2 mt-1">•</div>
                          <span>
                            Designed test cases to validate solution correctness
                            and efficiency
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Card - IUPC Problems */}
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
                <CardHeader>
                  <CardTitle>Inter-University Programming Contests</CardTitle>
                  <CardDescription>
                    Judge and Problem Author for National level Inter University
                    Programming Competitions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 py-4">
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <CircleCheck className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">
                        Miaki Presents IUPC | KUET BitFest 2025
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <CircleCheck className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">
                        IUT 11th National ICT Fest 2024
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <CircleCheck className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">
                        Kite Games IUPC | SUST CSE Carnival 2024
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <CircleCheck className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">15th IIUC IUPC 2023</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                        <CircleCheck className="h-4 w-4 text-yellow-600" />
                      </div>
                      <span className="text-gray-700">
                        SEC Inter University Junior PC 2022
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Section */}
      <section ref={outreachRef} className="bg-white py-12 md:py-24">
        <div className="container space-y-6 md:space-y-12">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Outreach
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Mentoring and training the next generation of competitive
              programmers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Bangladesh Competitive Programming Society */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="h-2 bg-red-500 rounded-t-lg"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  Bangladesh Competitive Programming Society
                </CardTitle>
                <CardDescription>
                  Training Contest Manager{" "}
                  <span className="text-xs text-gray-500 ml-1">
                    2022 - Present
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Founding member of the{" "}
                    <span className="font-semibold">largest</span> Competitive
                    Programming Discord Community in Bangladesh, with{" "}
                    <span className="font-semibold">over 11,000</span> active
                    members.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Bangladesh Mathematical Olympiad */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="h-2 bg-green-500 rounded-t-lg"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  Bangladesh Mathematical Olympiad
                </CardTitle>
                <CardDescription>
                  Academic Team Member{" "}
                  <span className="text-xs text-gray-500 ml-1">
                    2018 - 2020
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Authored problems for BdMO contests with participation from{" "}
                    <span className="font-semibold">over 40,000 students</span>{" "}
                    nationwide.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Lightbulb className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Contributed to the evaluation and selection of problems for
                    the competition.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3: SUST Competitive Programming Lab */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="h-2 bg-blue-500 rounded-t-lg"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  SUST Competitive Programming Lab
                </CardTitle>
                <CardDescription>
                  Trainer{" "}
                  <span className="text-xs text-gray-500 ml-1">
                    2022 - 2024
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Trained <span className="font-semibold">200+ students</span>{" "}
                    in competitive programming, preparing them for national and
                    international contests.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Trophy className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Set weekly training contests, provided feedback, and helped
                    form ICPC teams that attended the{" "}
                    <span className="font-semibold">ICPC World Finals</span>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4: Chittagong Junior Coders */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="h-2 bg-orange-500 rounded-t-lg"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">
                  Chittagong Junior Coders
                </CardTitle>
                <CardDescription>
                  Trainer, Algorithms Workshop{" "}
                  <span className="text-xs text-gray-500 ml-1">
                    2018 - 2019
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <School className="h-5 w-5 text-orange-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Mentored{" "}
                    <span className="font-semibold">
                      50 high school students
                    </span>{" "}
                    in foundational competitive programming, providing
                    introductory classes on algorithms and data structures.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 5: Pabna University Workshop */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
              <div className="h-2 bg-purple-500 rounded-t-lg"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">PUST CP Workshop</CardTitle>
                <CardDescription>
                  Guest Trainer{" "}
                  <span className="text-xs text-gray-500 ml-1">2023</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Award className="h-5 w-5 text-purple-500" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Led a three-month intensive program for ICPC preparation,
                    helping two teams qualify for the{" "}
                    <span className="font-semibold">
                      first time in the university's history
                    </span>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Improved Book Card */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:z-10">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>
                    Introduction to Math Olympiad (Primary Category)
                  </CardTitle>
                  <CardDescription className="mt-1">
                    Co-authored guidebook for young math enthusiasts
                  </CardDescription>
                </div>
                <Badge>Book</Badge>
              </div>
            </CardHeader>
            <div className="px-8 py-4 flex flex-col md:flex-row gap-6">
              <div className="md:w-[10%] flex justify-center md:justify-start">
                <img
                  src="/book.jpg"
                  alt="Math Olympiad Book Cover"
                  className="rounded-md w-full h-auto object-cover shadow-md border border-gray-200"
                />
              </div>
              <div className="md:w-[70%]">
                <p className="text-sm text-gray-500 mb-3">
                  I co-authored a Bengali guidebook that gently introduces
                  children to core problem-solving techniques and prepares them
                  for Math Olympiads. Filled with step-by-step exercises, clear
                  visual explanations, and fun, thought-provoking challenges,
                  it’s designed to nurture young learners’ mathematical
                  intuition from the ground up.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Problem Solving</Badge>
                  <Badge variant="secondary">Mathematics</Badge>
                  <Badge variant="secondary">Education</Badge>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Published by Swapno '71 Publication, 2023
                </p>
              </div>
            </div>
            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  window.open(
                    "https://www.rokomari.com/book/288872/gonit-olympiad-er-hate-khori-primary",
                    "_blank"
                  );
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on Rokomari
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8 bg-gray-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              © 2025 Seemanta Bhattacharjee. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                window.open("https://github.com/border-b", "_blank");
              }}
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                window.open("mailto:babune99@gmail.com", "_blank");
              }}
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
