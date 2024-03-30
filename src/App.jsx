import Home from "./views/Home";
import React, { useEffect, useState } from "react";
import Loading from "./views/Loading";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return <div>{loading ? <Loading /> : <div ><Home /></div>}</div>;

}

export default App;
