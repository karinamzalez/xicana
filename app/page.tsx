'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, Leaf, Code, Palette, Mail, Brush } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Art media for slideshow (supports images and videos)
  const artMedia = [
    // Add your computational art media here
    { 
      src: '/images/computational-art/art1.gif', 
      alt: 'Computational Art Demo',
      type: 'image',
      description: "#html5 #canvas"
    },
    { 
      src: '/images/computational-art/art2.gif', 
      alt: 'Computational Art Demo 2',
      type: 'image',
      description: '#html5 #canvas'
    },
    { 
      src: '/images/computational-art/art3.gif', 
      alt: 'Computational Art Demo 3',
      type: 'image',
      description: '#html5 #canvas'
    },
    // Temporarily removed due to file size limit
    // { 
    //   src: '/images/computational-art/art4.gif', 
    //   alt: 'Computational Art Demo 4',
    //   type: 'image',
    //   description: 'Algorithmic art exploration'
    // },
    { 
      src: '/images/computational-art/art5.gif', 
      alt: 'Computational Art Demo 5',
      type: 'image',
      description: 'Static algorithmic art piece'
    },
    { 
      src: '/images/computational-art/art6.gif', 
      alt: 'Computational Art Demo 6',
      type: 'image',
      description: 'Dynamic code art visualization'
    }
    // Example: { src: '/images/computational-art/artwork1.gif', alt: 'Description of artwork 1', type: 'image', description: 'Detailed description here' },
    // Example: { src: '/images/computational-art/artwork2.mp4', alt: 'Description of artwork 2', type: 'video', description: 'Video description here' }
  ]
  
  // Manual slideshow only - no auto-advance
  // useEffect(() => {
  //   if (activeSection === 'work') {
  //     const interval = setInterval(() => {
  //       setCurrentImageIndex((prev) => (prev + 1) % artMedia.length)
  //     }, 3000)
  //     return () => clearInterval(interval)
  //   }
  // }, [activeSection, artMedia.length])

  // Handle outside clicks to close sections
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target as Node)) {
        setActiveSection(null)
      }
    }

    if (activeSection && activeSection !== 'mobile-menu') {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeSection])

  const sections = [
    {
      id: 'intro',
      title: 'About',
      icon: <Leaf className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
                    <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/images/self.jpeg"
              alt="Karina Muñoz Gonzalez"
              fill
              className="rounded-lg object-contain"
            />
          </div>
          <p className="text-lg leading-relaxed">
            I’m a mission‑driven Software Engineer with 8+ years of full‑stack experience leveraging software
            to create effective platforms for diverse populations. Skilled in accessibility, picking up
            new tools, and building scalable services for millions of users. I’ve built
            inclusive digital platforms mainly for government agencies and nonprofits.
          </p>
          <p className="text-lg leading-relaxed">
            As an indigenous xicana with a background in community outreach, my
            interests in regard to software remain communal: to create easy-to-use platforms that improve the quality of
            life of my fellow humans. I believe languages materialized out
            of this innate urge to empathize with one another. Programming
            languages aren't exempt to this theory-- the more languages I
            learn, the more individuals I can connect with.
          </p>
          <p className="text-lg leading-relaxed">
            For as long as I can remember-- from video chatting with my family in Mexico for
            the first time, to editing the HTML on my first Myspace page--
            I've always deeply believed in technology's unprecedented ability to
            unlock human potential. Because of this belief, my transition
            from the nonprofit world to the enigmatic world of software
            development felt not only natural, but necessary.
          </p>
        </div>
      )
    },
    {
      id: 'work',
      title: 'Computational art',
      icon: <Brush className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            Having worked primarily in the civic tech sector throughout my career as a software engineer, most of my contributions have been to private repositories. Here is a collection of some computational art that I've created in my free time throughout the years. 
          </p>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">Art Gallery</h3>
            <div className="relative w-full h-[600px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  {artMedia[currentImageIndex].type === 'video' ? (
                    <video
                      src={artMedia[currentImageIndex].src}
                      className="w-full h-full rounded-lg object-contain"
                      controls
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <Image
                      src={artMedia[currentImageIndex].src}
                      alt={artMedia[currentImageIndex].alt}
                      fill
                      className="rounded-lg object-cover"
                    />
                  )}
                  
                  {/* Description Overlay - Hidden for now */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-lg">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {artMedia[currentImageIndex].alt}
                    </h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {artMedia[currentImageIndex].description}
                    </p>
                  </div> */}
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {artMedia.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-accent' : 'bg-gray-400/50'
                    }`}
                  />
                ))}
              </div>
              
              {/* Navigation arrows */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + artMedia.length) % artMedia.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % artMedia.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: 'crbn ftprnt ●°',
      icon: <Palette className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="relative w-full h-64 mb-8">
            <Image
              src="/images/visuals.gif"
              alt="Carbon Footprint Visuals"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <p className="text-lg leading-relaxed">
            crbn ftprnt is an installation I designed and built. All code was written in Go and TypeScript. I collaborated with my software collective, <a href="https://github.com/bright-wwweb/crbn-ftprnt" className="text-accent hover:underline">bright.wwweb</a>. The installation
            was commissioned by <a href="http://www.warmcookiesoftherevolution.org/" className="text-accent hover:underline">Warm Cookies Revolution</a> for an event
            centered around "energy". I chose to focus on the energy we consume, our carbon footprints. What resulted was an immersive experience that enabled participants to interact with a visual representation of their collective carbon footprint.
          </p>
          <p className="text-lg leading-relaxed">
            A big motivator for sustainable change stems from our intrinsic tendency to compare ourselves to others, group think-- "if I'm the only one doing it, nothing is going to change." If we see our neighbors changing,
            then change becomes a collaborative effort. Change is now suddenly less of a heavy burden and more of a collective _movement_. 
          </p>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Installation Components</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 3 lanterns with respective binary questions, PIR sensors, LEDs, and Arduinos</li>
                  <li>• Projected visualization with binary trees</li>
                  <li>• Nature gifs consumed from Giphy's API</li>
                  <li>• Actionable items monitor with carbon reduction steps</li>
                </ul>
              </div>
              <div className="relative w-full h-48">
                <Image
                  src="/images/installation.png"
                  alt="Installation Wireframe"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">The Three Binary Questions</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• DO YOU COMPOST?</li>
                  <li>• DO YOU DRIVE TO WORK?</li>
                  <li>• DO YOU USE HEATING AND COOLING IN YOUR HOME?</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  If an individual's answer to a question was "yes", they dropped a ball into the
                  lantern. The PIR sensor in the lantern would sense the movement, trigger the LED, and render a new node on the binary treeprojection.
                </p>
              </div>
              <div className="relative w-full h-48">
                <Image
                  src="/images/nh.gif"
                  alt="Neighbor Home"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Visualization Details</h3>
                <p className="text-gray-300">The projection consisted of:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Three binary trees connected, one per binary question</li>
                  <li>• The nodes represented pollution</li>
                  <li>• A rotation of nature gifs in the background</li>
                  <li>• As people answered yes to the questions, the visualization would render a new nature gif</li>
                  <li>• It would appear more polluted as the night progressed</li>
                </ul>
              </div>
              <div className="relative w-full h-48">
                <Image
                  src="/images/PIR.jpg"
                  alt="PIR Sensor"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
                </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: <Mail className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="space-y-4">
                <a
                  href="https://twitter.com/karinamzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6">𝕏</span>
                  <span>Twitter</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/karinamzalez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/karinamzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6">🐙</span>
                  <span>GitHub</span>
                </a>
                <a
                  href="/images/Karina_Munoz_Gonzalez_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <span className="w-6 h-6">📄</span>
                  <span>View Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,158,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-6 md:p-8">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">Karina Muñoz Gonzalez</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {section.icon}
                <span>{section.title}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setActiveSection(activeSection === 'mobile-menu' ? null : 'mobile-menu')}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6 md:p-8">
          <div className="max-w-4xl w-full">
            {/* Hero Section */}
            {!activeSection && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-8"
              >
                <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  XICANA ENGINEER & POETA
                </h2>
                <h3 className="text-2xl md:text-3xl font-light text-gray-300">
                  San Antonio, TX
                </h3>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Creating beautiful, easy-to-use platforms that improve the quality of life of my fellow humans.
                </p>
                
                {/* Navigation Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-accent transition-all duration-300"
                    >
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                          {section.icon}
                        </div>
                        <span className="font-semibold">{section.title}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Section Content */}
            <AnimatePresence mode="wait">
              {activeSection && activeSection !== 'mobile-menu' && (
                <motion.div
                  ref={sectionRef}
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold flex items-center space-x-3">
                      {sections.find(s => s.id === activeSection)?.icon}
                      <span>{sections.find(s => s.id === activeSection)?.title}</span>
                    </h2>
                    <button
                      onClick={() => setActiveSection(null)}
                      className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  {sections.find(s => s.id === activeSection)?.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Mobile Menu */}
        <AnimatePresence>
          {activeSection === 'mobile-menu' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="absolute right-0 top-0 h-full w-80 bg-gray-900 border-l border-gray-700 p-6"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">Menu</h3>
                  <button
                    onClick={() => setActiveSection(null)}
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className="flex items-center space-x-3 w-full p-4 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      {section.icon}
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Footer */}
        <footer className="md:hidden py-8 px-6 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700">
          <div className="flex flex-col items-center space-y-4">
            <Image 
              src="/images/icon.png" 
              alt="Footer Icon" 
              width={58} 
              height={58} 
              className="w-12 h-12 rounded-lg"
            />
            <p className="text-sm text-gray-400 text-center">
              © 2024 Karina Muñoz Gonzalez. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
} 