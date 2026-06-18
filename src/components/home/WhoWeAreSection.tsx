"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { mission, vision } from "@/lib/data/about";

export function WhoWeAreSection() {
  return (
    <Section id="who-we-are">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader title="Who We Are" centered={false} />
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              World Impact Initiative is a Canadian nonprofit organization committed to empowering
              individuals and communities facing social, economic, and humanitarian challenges.
            </p>
            <p>
              We believe lasting change begins with people and is strengthened through partnership,
              inclusion, opportunity, and volunteerism.
            </p>
            <p>
              Our work focuses on protecting human rights, supporting vulnerable children and families,
              promoting equitable access to education and health resources, and fostering opportunities
              for youth and persons with disabilities.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-6" hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Mission</h3>
                  <p className="text-muted text-sm leading-relaxed">{mission}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6" hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Vision</h3>
                  <p className="text-muted text-sm leading-relaxed">{vision}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

export function CTASection() {
  return (
    <Section background="gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <Users className="w-12 h-12 text-accent mx-auto mb-6" aria-hidden="true" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Us in Creating Lasting Change
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Whether through donations, partnerships, or volunteering, your support transforms lives
          and builds stronger communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/donate"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-dark transition-colors"
          >
            Make a Donation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Partner With Us
          </a>
          <a
            href="/volunteer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Volunteer Today
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
