import { navItems } from '@/config';
import { motion } from 'framer-motion';
const Cover = () => {
  const containerVariants = {
    initial: {
      visibility: 'visible',
      backgroundColor: '#1c4a54'
    },
    firstAnimation: {
      backgroundColor: '#00cbf920'
    },
    secondAnimation: {
      visibility: 'hidden',
    }
  }
  
  return (
    <motion.div 
    variants={containerVariants}
    initial="initial"
    animate={["firstAnimation", "secondAnimation"]}
    transition={{
      duration: 1.5,
      ease: "easeInOut",
      // This determines when each animation starts
      times: [0, 1]  // firstAnimation starts at 0, secondAnimation at 1
    }}
    className="h-screen w-screen fixed z-[100] flex items-center justify-center">
      <a href="/" className="text-[#00caf9] w-12 h-12">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,25 95,75 50,95 5,75 5,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
          />
          <text
            x="50"
            y="65"
            className="font-mono text-3xl"
            fill="currentColor"
            textAnchor="middle"
          >
            {navItems.iconLogo}
          </text>
        </svg>
      </a>
    </motion.div>
  )
}

export default Cover;