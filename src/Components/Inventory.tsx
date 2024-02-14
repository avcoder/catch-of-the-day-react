// components
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";

import AddFishForm from "./AddFishForm";

// types
import type { Fish } from "./AddFishForm.types";

type InventoryProps = {
  addFish: (fish: Fish) => void;
  loadSampleFishes: () => void;
};

function Inventory({ addFish, loadSampleFishes }: InventoryProps) {
  return (
    <Panel
      unstyled={true}
      headerTemplate={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            backgroundColor: "#fff",
            marginBottom: "40px",
          }}
        >
          <h1>Inventory</h1>
          <Button
            label="Load Sample Fishes"
            size="small"
            onClick={loadSampleFishes}
            icon="pi pi-cloud-download"
            severity="secondary"
            aria-label="Load Sample Fishes"
            outlined
            pt={{ root: { style: { height: "50px", alignSelf: "center" } } }}
          />
        </div>
      }
      pt={{ root: { style: { overflow: "auto", padding: "10px" } } }}
    >
      <AddFishForm addFish={addFish} />
    </Panel>
  );
}

export default Inventory;
