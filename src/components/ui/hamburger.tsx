import { motion } from 'framer-motion';

interface HamburgerProps{ 
  handleClick:React.FC,
  isclose:Boolean
}
const Hamburger: React.FC<HamburgerProps>  = ({isclose, handleClick}) =>{ 
    return ( 
      <div className="relative h-[20px] w-9 gap-2" onClick={handleClick} >
        <motion.div 
        initial={{ top: '0' , rotate: '0deg'  }}
        animate={{
           top: isclose ? '48%' : '0',
           rotate: isclose ? '45deg' :'0deg'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 border-[0.7px] w-full"></motion.div>
        <motion.div  
        initial={{ width:'80%', rotate: '0deg'  }}
        animate={{
           rotate: isclose ? '135deg' :'0deg',
           width: isclose ? '100%' :'80%'
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-[48%] right-0 border-[0.7px] w-[80%]"></motion.div>
        <motion.div  
        initial={{  top:'100%' ,width:'50%', rotate: '0deg'  }}
        animate={{
          top:isclose ? '48%':'100%',
           rotate: isclose ? '135deg' :'0deg',
           width: isclose ? '100%' :'50%'
        }} className="absolute right-0 border-[0.7px] w-[50%]"></motion.div>
      </div>
    )
}

export default Hamburger;