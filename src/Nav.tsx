import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function nav() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Hello Nav</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => navigate("/home")}>jump to home</button>
      <button onClick={() => navigate("/app")}>jump to app</button>
    </div>
  );
}
