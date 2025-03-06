import React, { useState, createContext, useContext, useEffect } from 'react';
import classNames from "classnames";
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = ({...props}) => {
  
  const defaultTheme = {
    main: "default", //other value can be passed "clean,shady,softy"
    sidebar: "light", //other value can be passed "dark,white,theme"
    sidebarVisibility: false,
    sidebarMobile: false,
    header: "white", //other value can be passed "light,dark,theme"
    skin: "light", //other value can be passed "dark"
  }
    const [theme, setTheme] = useState(defaultTheme);

    const themeUpdate = {
      uistyle: function (value) {
        setTheme((prevTheme) => ({ ...prevTheme, main: value }));
      },
      sidebar: function (value) {
        setTheme((prevTheme) => ({ ...prevTheme, sidebar: value }));
      },
      sidebarVisibility: function () {
        setTheme((prevTheme) => ({ ...prevTheme, sidebarVisibility: !prevTheme.sidebarVisibility }));
      },
      sidebarHide: function () {
        setTheme((prevTheme) => ({ ...prevTheme, sidebarVisibility: false }));
      },
      header: function (value) {
        setTheme((prevTheme) => ({ ...prevTheme, header: value }));
      },
      skin: function (value) {
        setTheme((prevTheme) => ({ ...prevTheme, skin: value }));
      },
      reset: function () {
        setTheme((prevTheme) => ({
          ...prevTheme,
          main: defaultTheme.main,
          sidebar: defaultTheme.sidebar,
          header: defaultTheme.header,
          skin: defaultTheme.skin,
        }));
      },
    };
    

    const bodyClass = classNames({
      "nk-body bg-white npc-default has-sidebar no-touch nk-nio-theme": true,
    });

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = bodyClass;
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if(theme.main === "default"){
      body.classList.add("ui-default")
      body.classList.remove("ui-shady")
    }
    if(theme.main === "shady"){
      body.classList.add(`ui-shady`)
      body.classList.remove("ui-default")
    }
    if(theme.skin === "dark"){
      body.classList.add(`dark-mode`)
    }else{
      body.classList.remove("dark-mode")
    }
    if(theme.sidebarVisibility === true){
      body.classList.add("nav-shown")
    }else{
      body.classList.remove("nav-shown")
    }
  }, [theme]);

  useEffect(() => {
    const handleMobileSidebar = () => {
        if (window.innerWidth < 1200) {
          setTheme({...theme, sidebarMobile : true})
        } else {
          setTheme({...theme, sidebarMobile : false, sidebarVisibility : false})
        }
    }

    handleMobileSidebar();
    window.addEventListener('resize', handleMobileSidebar);
    return () => {
     window.removeEventListener('resize', handleMobileSidebar);
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme} >
      <ThemeUpdateContext.Provider value={themeUpdate}>
        {props.children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
export default ThemeProvider;