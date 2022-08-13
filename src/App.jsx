import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Layout from "./components/layout/Layout";
import AppRouter from "./components/router/AppRouter";
import "./styles/global.css";

const App = () => {
  return (
    <Layout>
      <Header />
      <AppRouter />
      <Footer />
    </Layout>
  );
};

export default App;
