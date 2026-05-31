"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Send, 
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Palette,
  PenTool,
  Layers,
  Grid3X3,
  BookOpen,
  Printer
} from "lucide-react";

const capabilities = [
  { icon: PenTool, label: "Illustrator" },
  { icon: Layers, label: "Photoshop" },
  { icon: BookOpen, label: "InDesign" },
  { icon: Grid3X3, label: "Logo Design" },
  { icon: Palette, label: "Brand Identity" },
  { icon: Printer, label: "Print Media" },
];

const contactInfo = [
  { icon: Mail, value: "garymatanhire7@gmail.com", href: "mailto:garymatanhire7@gmail.com" },
  { icon: Phone, value: "+48 66 43 40 742", href: "tel:+48664340742" },
  { icon: MapPin, value: "Warsaw, PL", href: null },
];

export function AboutSection() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setMessage("");
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-32 lg:py-48"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-foreground/5 blur-3xl"
      />
      <motion.div
        style={{ y: imageY }}
        className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-secondary/50 blur-3xl"
      />

      <div ref={contentRef} className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-muted-foreground uppercase">
            [ About ]
          </span>
        </motion.div>

        {/* Central Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-12 max-w-sm"
        >
          <motion.div
            style={{ y: imageY }}
            className="relative aspect-square overflow-hidden bg-secondary"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center border border-border bg-card">
                <Palette className="h-10 w-10 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Name & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-foreground">
            Gary Matanhire
          </h2>
          <p className="mb-6 text-xs tracking-widest text-muted-foreground uppercase">
            Graphic Designer / Warsaw
          </p>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
            Recent graduate with a systematic approach to design. I specialize in geometric 
            logo construction and print media, using research and analysis to solve visual 
            problems with precision and originality.
          </p>
        </motion.div>

        {/* Capability Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-card text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <cap.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground">{cap.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mb-20 h-px w-32 bg-border"
        />

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
          id="contact"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-muted-foreground uppercase">
            [ Contact ]
          </span>
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
            Get in Touch
          </h3>

          {/* Contact Info */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.href ? (
                  <a href={item.href} className="transition-colors hover:text-foreground">
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Simple Message Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mx-auto max-w-lg"
          >
            <div className="mb-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full resize-none border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-all text-sm"
                placeholder="Leave a message..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium transition-all ${
                isSubmitted
                  ? "bg-foreground text-background"
                  : "bg-foreground text-background hover:bg-foreground/90"
              } disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Sent
                </>
              ) : (
                <>
                  Send
                  <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 inline-flex items-center gap-2 border border-border px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            <span className="text-xs text-foreground uppercase tracking-wider">
              Available for projects
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
