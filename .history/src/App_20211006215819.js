import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [word, setword] = useState(initialState)
  const [meanings, setmeanings] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );

      // console.log(data);
      setmeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, []);

  return <div className="App"></div>;
}

export default App;
