import { Button } from "./../components/Button";
import { useState, useEffect } from "react";

const Container = () => {
  const [number, setNumber] = useState(0);

  const handlerClickSum = () => {
    setNumber(number + 1);
    console.log(number);
    return number;
  };
  const handlerClickRest = () => {
    setNumber(number - 1);
    console.log(number);
    return number;
  };

  return (
    <div className="container">
      <h1>Contador en React </h1>
      <p>Number: {number} </p>

      <Button text="contador suma" onClick={handlerClickSum} />
      <Button text="contador resta" onClick={handlerClickRest} />
    </div>
  );
};

export { Container };
