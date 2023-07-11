import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisible(false)} visable={alertVisable}>
          My Alert
        </Alert>
      )}
      <Button onClick={() => setAlertVisible(true)} color="danger">
        My Button
      </Button>
    </div>
  );
}

export default App;
