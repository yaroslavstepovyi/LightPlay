import React, { useState, useEffect } from "react";

const withScroll = (Component, startScroll) => {
  return function ScrollComponent(props) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      function HandleScroll() {
        setIsScrolled(window.pageYOffset > startScroll);
      }

      window.addEventListener("scroll", HandleScroll);

      return () => {
        window.removeEventListener("scroll", HandleScroll);
      };
    }, []);

    return <Component {...props} scroll={isScrolled} />
  };
};

export { withScroll };
