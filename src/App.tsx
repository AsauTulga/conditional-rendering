import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleBlock = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Условный рендеринг</h1>

      <button onClick={toggleBlock}>
        {isVisible ? "Скрыть блок" : "Показать блок"}
      </button>

      {isVisible && (
        <div className="content-block">
          <h2>Блок отображается</h2>
          <p>Этот блок показывается или скрывается с помощью boolean state.</p>
        </div>
      )}
    </div>
  );
}

export default App;
