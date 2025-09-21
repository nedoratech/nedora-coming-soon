import React from "react";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";
export function SocialLinks() {
  const socialLinks = [
    {
      icon: <LinkedinIcon size={20} />,
      url: "https://www.linkedin.com/company/nedora-tech",
      label: "LinkedIn",
    },
  ];
  return (
    <div>
      <p className="text-slate-600 mb-4">Follow us on social media</p>
      <div className="flex justify-center gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-lg transition-all"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
