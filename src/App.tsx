import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiMail, FiUser, FiSettings, FiRefreshCw } from 'react-icons/fi';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <FiHome size={20} /> },
    { icon: <FiMail size={20} /> },
    { icon: <FiUser size={20} /> },
    { icon: <FiSettings size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Refresh Button */}
      <button 
        className="fixed top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
        onClick={() => window.location.reload()}
      >
        <FiRefreshCw size={20} />
      </button>

      {/* Menu Button & Panel */}
      <div className="fixed top-4 left-4 z-50">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex flex-col gap-4 mt-3"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: 0.05 * index, type: 'spring', stiffness: 200 }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black group transition-colors cursor-pointer shadow-md"
                  >
                    <span className="text-gray-700 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Page Content */}
      <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
        {/* ✨ Fancy Animated Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
        >
          Peerlist Challenge - Day 1
        </motion.h1>

        {/* Instruction Text */}
        <p className="text-lg text-gray-600">Open the menu in the top left corner</p>
      </div>
    </div>
  );
}

export default App;
