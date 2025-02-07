import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

export function TourGuide({ 
  isVisible, 
  message, 
  position = "bottom-right" 
}: {
  isVisible: boolean;
  message: string;
  position?: "bottom-right" | string;
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className={`fixed ${position === "bottom-right" ? "bottom-4 right-4" : position} z-50`}
        >
          <div className="flex items-end">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-white rounded-2xl p-4 shadow-lg max-w-xs mr-4"
            >
              <p className="text-gray-800 text-lg">{message}</p>
              <div className="w-4 h-4 bg-white transform rotate-45 absolute -bottom-2 right-8"></div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-24 h-24"
            >
              <Image
                src="/tour-guide.png"
                width={96}
                height={96}
                alt="Tour Guide"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}