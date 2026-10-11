
import { useState } from "react";

import Envelope from "./components/Envelope";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";
import PartyDetails from "./components/PartyDetails";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="app">
      {!opened ? (
        <Envelope onOpen={() => setOpened(true)} />
      ) : (
        <main className="reveal-animation">
          <div className="top-banner">
            ✦ ALL HALLOWS' EVE ✦
          </div>

          <Invitation />

          <Countdown />

          <PartyDetails />

          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;

