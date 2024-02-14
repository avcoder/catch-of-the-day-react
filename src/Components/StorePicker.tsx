import { useState, useEffect, useRef } from "react";

// router
import { useNavigate } from "react-router-dom";

// styles
import "./StorePicker.css";

// components
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

// utils
import { getFunName } from "../Utils/helpers";

function StorePicker() {
  const [inputText, setInputText] = useState("");
  const myInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const funTxt = getFunName();
    setInputText(funTxt);
  }, []);

  const goToStore = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const route = myInput.current?.value ?? "";
    navigate(`/store/${route}`);
  };

  return (
    <div className="container">
      <div className="card">
        <Card title="Please Enter a Store">
          <form className="store-selector" onSubmit={goToStore}>
            <div className="store-name">
              <div className="p-float-label">
                <InputText
                  className="p-inputtext-lg"
                  id="storename"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  pt={{ root: { style: { width: "100%" } } }}
                  ref={myInput}
                />
                <label htmlFor="username">Store name</label>
              </div>
              <Button
                label="Visit Store →"
                onClick={() => {}}
                icon="pi pi-truck"
                size="small"
              />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default StorePicker;
