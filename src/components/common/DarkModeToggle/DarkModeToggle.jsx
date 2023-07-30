import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './DarkModeToggle.module.css';
import { handleDarkMode } from '@/utils/function/toggleDarkMode';
const isDark = () =>
  (localStorage && localStorage.theme === 'dark') ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

const getThemeString = (isDark) => (isDark ? 'dark' : 'light');

const DarkModeToggle = ({ ...props }) => {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    localStorage.theme = getThemeString(!isDarkMode);
    if (localStorage.theme === 'dark') {
      handleDarkMode(true);
    } else {
      handleDarkMode(false);
    }
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDark()) {
      handleDarkMode(true);
    } else {
      handleDarkMode(false);
    }
    setDarkMode(isDark());
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.button
        className={styles.toggle_button}
        onClick={() => toggleMode()}
        key={isDarkMode ? 'dark-icon' : 'light-icon'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {isDarkMode ? '🌙' : '🌤️'}
      </motion.button>
    </AnimatePresence>
  );
};

export default DarkModeToggle;
