import { Panel } from "primereact/panel";
import type { HeaderProps } from "./Header.types";

const Header = ({ heading, tagline }: HeaderProps) => (
  <Panel
    unstyled={true}
    pt={{
      root: { style: { overflow: "auto", padding: "10px", width: "500px" } },
    }}
    headerTemplate={
      <div style={{ textAlign: "center", backgroundColor: "#fff" }}>
        <h1>{heading}</h1>
        <p style={{ color: "#f5a623", marginTop: "-20px" }}>
          === {tagline} ===
        </p>
      </div>
    }
  ></Panel>
);

export default Header;
