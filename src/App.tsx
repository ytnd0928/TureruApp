import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import styles from "./App.module.css";
import Core from "../src/features/core/Core";

function App() {
  return (
    
    <div className={styles.app}>
      <ChakraProvider>
    
      <Core />
      </ChakraProvider>
    </div>
  );
}

export default App;