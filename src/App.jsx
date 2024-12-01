import ScaleLoader from "react-spinners/ScaleLoader";
import { useState, useEffect } from "react";
import FirstPage from "./components/FirstPage";

import Nav from "./components/ui/Nav";
import "./App.css";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import Footer from "./components/Footer";
import LastGreet from "./components/lastGreet";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ScaleLoader color={"#fff"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <Nav />
          <main className="antialiased overflow-x-hidden w-full mx-auto relative bg-gray-950 z-10 select-none">
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <FifthPage />
            <SixthPage />

            <LastGreet />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default App;
