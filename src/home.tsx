import "./styles.css";
import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const numAtom = atom(0);

export default function App() {
  const [value, setVal] = useAtom(numAtom);

  const navigate = useNavigate();
  console.log("catchHome", value);

  useEffect(() => {
    setVal(value + 1);
  }, []);

  return (
    <div className="App">
      <h1>Hello Home</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>App Num: {value}</h2>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
