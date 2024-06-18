import "./styles.css";
import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { produce } from "immer";
import { useEffect } from "react";

const numAtom = atom({ num: 0 });

export default function App() {
  const [value, setVal] = useAtom(numAtom);

  const navigate = useNavigate();
  console.log("catchApp", value);

  useEffect(() => {
    setVal(
      produce((ret) => {
        ret.num++;
      })
    );
  }, []);

  return (
    <div className="App">
      <h1>Hello APP</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>App Num: {value.num}</h2>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
