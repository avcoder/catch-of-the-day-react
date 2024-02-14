// Components
import { Card } from "primereact/card";

// utils
import { formatPrice } from "../Utils/helpers";

// types
import type { Fish } from "./AddFishForm.types";

type FishProps = {
  details: Fish;
};

function Fish(props: FishProps) {
  const { image, name, price, status, desc } = props.details;
  return (
    <Card
      unstyled={true}
      pt={{
        root: {
          style: {
            borderBottom: "2px solid #000",
            borderTop: "1px solid #000",
            paddingBottom: "2rem",
            paddingTop: "2rem",
            marginBottom: "5px",
          },
        },
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <img src={image} alt={name} style={{ width: "150px" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ marginTop: "-8px" }}>{name}</h2>
            <p style={{ margin: "0" }}>{formatPrice(price)}</p>
          </div>
          <p>{desc}</p>
        </div>
      </div>
    </Card>
  );
}

export default Fish;
