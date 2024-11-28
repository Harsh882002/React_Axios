import { useEffect } from "react";
import { getPost } from "./api/PostApi";

 
const App = () =>{
  const getPostData = async() =>{
    const res = await getPost();
    console.log(res.data);
  };

  useEffect(() =>{
    getPostData();
  },[]);

  return(
    <>
  
<h1>HELLO</h1>
      </>
  )
}

export default App;