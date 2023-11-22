import { useState } from "react";

function App() {

  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () =>{
    window.open(`https://google.com/search?q=${userQuery}`,'_blank')
  }

 const updateUserQuery = (event) => {
  console.log('userQuery', userQuery);
   setUserQuery(event.target.value)
  }

  const keyPressHandler = (event) => {
    if(event.key === 'Enter'){
      searchQuery();
    }
  }

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <div className="form">
        <input type="text" value={userQuery} onKeyPress={keyPressHandler} onChange={updateUserQuery} />
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
