import React, {createContext, useState} from 'react';

// Create a theme context
export const ThemeContext = createContext();

// Create a theme provider component
export const ThemeProvider = ({children}) => {
  // Define your initial theme state
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Define your theme object based on the current theme state
  const themeObject = {
    theme,
    toggleTheme,
    // Add more theme properties as needed
    colors: {
      // Define your color palette for different themes
      light: {
        primary: '#007AFF',
        secondary: '#FF3B30',
        // Add more color properties as needed
      },
      dark: {
        primary: '#000',
        secondary: '#FF453A',
        // Add more color properties as needed
      },
    },
    buttons: {
      light: {
        primary: {
          backgroundColor: '#FF7100',
          color: '#FFF',
          // Add more button styles as needed
        },
        secondary: {
          backgroundColor: '#fff',
          color: '#000',
          // Add more button styles as needed
        },
        outline: {
          borderColor: '#1E1E1E80',
          color: 'black',
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
        },
      },
      dark: {
        primary: {
          backgroundColor: '#FF7100',
          color: '#FFF',
          // Add more button styles as needed
        },
        secondary: {
          backgroundColor: '#fff',
          color: '#fff',
          // Add more button styles as needed
        },
        outline: {
          borderColor: '#1E1E1E80',
          color: 'black',
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
        },
      },
    },
    input: {
      light: {
        color: 'black',
      },
      dark: {
        color: 'white',
      },
    },
    inputContainer: {},
    typography: {
      h1: {
        fontSize: 24,
        fontWeight: '600',
        // Add more h1 properties as needed
      },
    },
    // Add more theme properties as needed
  };

  return (
    // Provide the theme object to all child components
    <ThemeContext.Provider value={themeObject}>
      {children}
    </ThemeContext.Provider>
  );
};
