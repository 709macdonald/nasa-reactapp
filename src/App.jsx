import { useState } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <Main />
      {showModal && <SideBar />}
      <Footer />
    </>
  );
}

export default App;
