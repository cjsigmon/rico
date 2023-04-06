import * as React from "react";
import { useState, useContext } from "react";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import '../styles.css';
import HeaderImg from "../components/header";
import Footer from "../components/footer";
import MyContext from "../MyContext";
import HomePage from "../components/realHome";

const Index = () =>  {
  const [myBoolean, setMyBoolean] = useState(MyContext);

      return (
        <MyContext.Provider value={{ myBoolean, setMyBoolean }}>
          <HomePage />
        </MyContext.Provider>
        
      )
    }
    
    export const Head = () => <title>Home Page</title>
    
    // Step 3: Export your component
    export default Index;

   