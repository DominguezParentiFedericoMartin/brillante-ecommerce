import { useEffect, useState } from "react";
import useFetch from "./Utils/Hooks/useFetch";

const FetchUno = () => {
  let [users] = useFetch("https://jsonplaceholder.typicode.com/users", []);
  console.log({ users });
  return <div>FetchUno</div>;
};
export default FetchUno;
