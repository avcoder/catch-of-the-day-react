import { useState, useRef } from "react";

// styles
import "./AddFishForm.css";

// components
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

// types
import type { Fish } from "./AddFishForm.types";

type AddFishFormProps = {
  addFish: (fish: Fish) => void;
};

function AddFishForm({ addFish }: AddFishFormProps) {
  const [availability, setAvailability] = useState(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<Dropdown>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  const createFish = (event: React.FormEvent) => {
    event.preventDefault();
    const fish: Fish = {
      name: nameRef.current?.value ?? "",
      price: priceRef.current?.value ? parseFloat(priceRef.current.value) : 0,
      status: statusRef.current?.props.value ?? "",
      desc: descRef.current?.value ?? "",
      image: imageRef.current?.value ?? "",
    };

    addFish(fish);

    (event.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Card unstyled={true} pt={{ root: { className: "add-fish-form" } }}>
      <form onSubmit={createFish}>
        <div style={{ display: "flex" }}>
          <InputText
            className="p-inputtext-sm"
            placeholder="Fish Name"
            name="name"
            ref={nameRef}
          />
          <InputText
            className="p-inputtext-sm"
            placeholder="Fish Price"
            name="price"
            ref={priceRef}
          />
          <Dropdown
            value={availability}
            className="p-inputtext-sm"
            options={[
              { name: "Fresh!", code: "available" },
              { name: "Sold Out!", code: "unavailable" },
            ]}
            optionLabel="name"
            optionValue="code"
            placeholder="Status"
            onChange={(e) => setAvailability(e.value)}
            pt={{ root: { style: { width: "100%" } } }}
            ref={statusRef}
            name="status"
          />
        </div>
        <InputText
          className="p-inputtext-sm"
          placeholder="Fish Desc"
          pt={{ root: { style: { width: "100%" } } }}
          ref={descRef}
          name="desc"
        />
        <InputText
          className="p-inputtext-sm"
          placeholder="Fish Image"
          pt={{ root: { style: { width: "100%" } } }}
          ref={imageRef}
          name="image"
        />
        <Button
          label="+ Add Item"
          size="small"
          pt={{ root: { style: { width: "100%" } } }}
          rounded={false}
          text
          severity="secondary"
        />
      </form>
    </Card>
  );
}

export default AddFishForm;
