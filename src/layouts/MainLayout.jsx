import Header from "../components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import {motion} from "framer-motion";
  

function MainLayout() {
    return (

          <div>
      <Header />    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>
      <main>
        <Outlet /> 
      </main>
      <footer>
        <p>© 2026 Hospital Website</p>
      </footer>
    </div>
  );
}

export default MainLayout;
