import { useEffect, useState } from "react";
import useFetch from "./Utils/Hooks/useFetch";

const FetchDos = () => {
  let [albums] = useFetch("https://jsonplaceholder.typicode.com/albums", []);
  console.log({ albums });
  return <div>FetchDos</div>;
};
export default FetchDos;
