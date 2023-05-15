import logo from './assets/logo.png'

function App() {
  return (
      <div className="App">
        <h1>Task: Add an image below</h1>
          <img src={logo}
               height={100}
               alt="Logo of little Lemon with a yellow lemon image and text"/>
      </div>
  );
}

export default App;
