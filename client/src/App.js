import axios from "axios"
import React from "react"

import Card from "./component/Card";
function App() {
  // fetch('http://localhost:3001/test').then(res =>
  //   res.json()
  // ).then(data => console.log(data))
  const [post, setPost] = React.useState(null);
  async function fetchdata(){
     await  axios.get('http://localhost:3001/test').then((response) => {
      setPost(response.data);
    });
  }

  React.useEffect(() => {
   fetchdata()
  }, []);
  if(!post)
  return(<h1>Loading...</h1>)
else
  return (
    <div className="App">
      <Card props={post}/>
    </div>
  );
}

export default App;
