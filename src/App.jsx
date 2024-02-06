import React from "react";
import Header from "./components/header/Header";
import TitleButton from "./components/bannersWatch/TitleButton";
import Watch from "./components/bannersWatch/Watch";
import Stats from "./components/stats/Stats";
import Form from "./components/form/Form";

const App = () => {
  return (
    <main className="">
      <Header />
      <TitleButton />
      <Watch />
      <Stats/>
      <Form/>
    </main>
  );
};

export default App;
