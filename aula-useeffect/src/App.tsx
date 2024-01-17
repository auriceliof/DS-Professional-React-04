/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {

  console.log("PASSOU NO APP");

  const [productId, setProductId ] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("PASSOU NO useEffect")
    setProd(findProduct(productId));
  }, []);

  function handleClick(){
    console.log("PASSOU NO handleClick")
  }

  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para o produto 2</button>
    </>
  )
}

export default App
