
import { createContext, useState } from "react";
import LoadingAnimationSVG from '../assets/images/loadingSVG/Hand-Drawn-Mandala.svg';

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    const loadingAnimation= () =>{
        return (
          <>
            <div className="loading-overload" />
           <div className="loading-animationSVG"><img width={'200px'} height={'200px'} className="loading-animationSVG" src={LoadingAnimationSVG} alt="Loading Animation" /></div> 
            <div className="loading-text">Rüyanız analiz edilirken bekleyin...</div>
          </>
        );
    }



  return (
    <LoadingContext.Provider
      value={{
        loadingAnimation,
        isLoading,
        setIsLoading

      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;






