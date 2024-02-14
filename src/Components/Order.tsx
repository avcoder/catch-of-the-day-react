import { Panel } from "primereact/panel";

function Order() {
  return (
    <Panel
      unstyled={true}
      headerTemplate={
        <div style={{ textAlign: "center", backgroundColor: "#fff" }}>
          <h1>Order</h1>
        </div>
      }
    ></Panel>
  );
}

export default Order;
