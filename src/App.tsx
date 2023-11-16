import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import Like from "./components/Like/Like";
import { useState } from "react";

function App() {
  const [activeButton, setactiveButton] = useState(false);
  const changeActiveButton = (param: boolean) => {
    setactiveButton(param);
  };
  return (
    <div>
      {activeButton && <Alert onClose={changeActiveButton}></Alert>}
      <Button color="danger" onClick={changeActiveButton}></Button>
      <Like />
    </div>
  );
}
export default App;
