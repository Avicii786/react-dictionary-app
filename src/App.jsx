import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {}
  };
  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  return (
    <div className="App">
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div></div>

        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
