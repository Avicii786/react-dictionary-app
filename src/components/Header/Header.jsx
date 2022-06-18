import React from "react";
import "./Header.css";
import { TextField, createTheme, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import categories from "../../data/category.js";

function Header({ category, setCategory, word, setWord }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            label="Search a Word"
            variant="standard"
            className="search"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            variant="standard"
          >
            {categories.map((option, index) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
