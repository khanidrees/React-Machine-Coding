import StarComponent from "./components/StarComponent";
import "./styles.css";

export default function App({}) {
  return (
    <div className="App">
      <StarComponent starCount={5} />
    </div>
  );
}
