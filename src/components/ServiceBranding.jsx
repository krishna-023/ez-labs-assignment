import React from "react";
import { motion } from "framer-motion";


import award from "../assets/icons/award.svg";
import social from "../assets/icons/social.svg";

const fallback = "https://upload.wikimedia.org/wikipedia/commons/8/8e/OOjs_UI_icon_arrow-ltr-progressive.svg";

export default function ServiceBranding() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Creative Branding Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <img
              src={award || fallback}
              alt="Award Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Brand Identity
            </h3>
            <p className="text-gray-600 mb-4">
              We craft stunning brand identities that reflect your unique vision and voice.
            </p>
            <img
              src={arrow || fallback}
              alt="Arrow"
              className="w-6 h-6 opacity-60 hover:opacity-100 transition"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img
              src={social || fallback}
              alt="Social Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Social Branding
            </h3>
            <p className="text-gray-600 mb-4">
              Engage and inspire your audience across every digital touchpoint.
            </p>
            <img
              src={arrow || fallback}
              alt="Arrow"
              className="w-6 h-6 opacity-60 hover:opacity-100 transition"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img
              src={award || fallback}
              alt="Design Icon"
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Design Strategy
            </h3>
            <p className="text-gray-600 mb-4">
              We build visually consistent and strategic design systems for lasting impact.
            </p>
            <img
              src={arrow || fallback}
              alt="Arrow"
              className="w-6 h-6 opacity-60 hover:opacity-100 transition"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
