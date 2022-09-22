import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;





function Counter(){
  const [count, setCount]=useState(0)
  function Increment(){
    setCount(count + 1)
  }
  return <button onClick={Increment}>I have been clicked {count} times</button>
}
export default Counter
