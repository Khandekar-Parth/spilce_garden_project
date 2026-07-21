import { motion } from 'framer-motion'

// Scroll-reveal wrapper: children fade + slide up when they enter the viewport.
export default function Reveal({ children, delay = 0, y = 28, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
