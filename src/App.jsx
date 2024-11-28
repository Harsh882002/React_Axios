import { useEffect, useState } from "react";
import { getPost } from "./api/PostApi";
import Card from "./UI/Card";
import Post from "./Component/Post";


const App = () => {
return(
  <>
  <Post />
  </>
)
}

export default App;