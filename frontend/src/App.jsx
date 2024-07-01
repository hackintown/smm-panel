import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-4">
        <Button size={"lg"} className="my-5 font-base bg ">
          Start a Project
        </Button>
      </div>
    </>
  );
}

export default App;
