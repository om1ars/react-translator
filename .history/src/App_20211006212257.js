import './App.css';

function App() {
  const dictionaryApi = async() => {
    try{
      const data = await axios.get('')
    } catch(error){
      console.log(error);
    }
  } 

  return (
    <div className="App">
    </div>
  );
}

export default App;
