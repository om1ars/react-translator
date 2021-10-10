import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Switch, withStyles } from "@material-ui/core";
import { Header } from "./components/Header/Header";
import { Definitions } from "./components/Definitions";

function App() {
  const [word, setword] = useState("");
  const [meanings, setmeanings] = useState([]);
  const [category, setcategory] = useState("en");
  const [checked, setChecked] = useState(false);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      // console.log(data);
      setmeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setChecked(!checked);
  };

  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white", justifyContent: 'space-evenly' }}
    >
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <span>{checked ? ''}</span>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setcategory={setcategory}
          word={word}
          setword={setword}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
