'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, MessageCircle, Send, Facebook } from 'lucide-react'
import { LanguageToggle } from '@/components/language-toggle'
import { useTranslations } from '@/hooks/use-translations'

export default function Home() {
  const t = useTranslations()
  
  const socialLinks = [
    { icon: Send, href: 'https://t.me/kromcyber', label: 'Telegram', color: 'hover:text-sky-500 dark:hover:text-sky-300' },
    { icon: MessageCircle, href: 'https://discord.gg/xUpx276YJ2', label: 'Discord', color: 'hover:text-indigo-600 dark:hover:text-indigo-400' },
    { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61572114373387', label: 'Facebook', color: 'hover:text-blue-700 dark:hover:text-blue-500' },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Krom Cyber</h1>
          </div>
          <div className="flex gap-8 items-center">
            <Link href="#about" className="text-sm uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors">{t('about')}</Link>
            <Link href="#blog" className="text-sm uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors">Blog</Link>
            <Link href="#contact" className="text-sm uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors">{t('contact')}</Link>
            <LanguageToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="space-y-6">
          <h2 className="text-5xl sm:text-6xl font-light leading-tight text-balance">
            Cybersecurity Excellence
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Protecting the digital frontier. Krom Cyber is where cutting-edge security expertise meets innovative thinking. Join our community of cybersecurity professionals and enthusiasts.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Building */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground">Building</h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Web Design</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Crafting beautiful, intuitive interfaces that bring ideas to life with thoughtful design patterns.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Development</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Building robust, scalable systems with clean code and modern technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Featured Projects */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground">Projects</h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Design System</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                A comprehensive collection of reusable components and design patterns for modern web applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Community Hub</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                A platform connecting creators, developers, and designers to collaborate and share their work.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Writing */}
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground">Writing</h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-2">Thoughts on Design</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Deep dives into design principles, user experience, and the intersection of aesthetics and function.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Dev Insights</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Exploring modern development practices, best patterns, and tools that make building easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border/40">
        <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground mb-8">About</h3>
        <div className="space-y-6 max-w-2xl">
          <p className="text-lg text-foreground/70 leading-relaxed">
            Krom Cyber is a dedicated community of cybersecurity professionals, researchers, and practitioners committed to advancing digital security. We foster collaboration and knowledge-sharing in an increasingly connected world.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Through research, discussions, and shared insights, we&apos;re strengthening the global cybersecurity landscape—one breakthrough at a time.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-border/40">
        <div className="space-y-12">
          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold text-foreground mb-8">Connect With Us</h3>
            <p className="text-lg text-foreground/70 mb-12 max-w-2xl leading-relaxed">
              Join Krom Cyber and stay connected with the latest in cybersecurity. Reach us on any of our platforms and become part of our security-focused community.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`inline-flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  title={social.label}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-between items-center text-sm text-foreground/50">
          <p>&copy; 2026 Krom Cyber. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
