import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = React.createContext();

export const ColorModeProvider = ({ children }) => {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Poppins',
        color: 'white',
      },
    },
  });

  return (
    <ColorModeContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};