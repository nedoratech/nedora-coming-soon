import React from 'react';
import { LogoPlaceholder } from './LogoPlaceholder';
import { SocialLinks } from './SocialLinks';
import { motion } from 'framer-motion';
export function ComingSoonPage() {
  return <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-6">
      <motion.div className="max-w-3xl w-full mx-auto text-center" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }}>
        <div className="mb-12">
          <LogoPlaceholder />
        </div>
        <motion.h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2,
        duration: 0.8
      }}>
          We're Coming Soon
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }}>
          Our new website is under construction. We're working hard to bring you
          an amazing experience. Stay tuned for updates.
        </motion.p>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }}>
          <SocialLinks />
        </motion.div>
        <motion.div className="mt-16 text-sm text-slate-500" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 0.8
      }}>
          © {new Date().getFullYear()} Nedora Tech. All rights reserved.
        </motion.div>
      </motion.div>
    </div>;
}