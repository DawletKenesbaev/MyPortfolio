import { motion } from "framer-motion";
import React from 'react'
import About from "./about/About";
function Test() {
  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        <About />
      </motion.div> 
       )
}

export default Test
