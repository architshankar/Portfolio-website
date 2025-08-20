import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FuzzyText from "../blocks/TextAnimations/FuzzyText/FuzzyText";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-6">
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.6} enableHover={true}>
            404
            
          </FuzzyText>
        </h1>
        <p className="text-lg mb-4">


          Oops! This page doesn’t exist.</p>
        <a href="/" className="text-blue-400 hover:text-blue-600 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
