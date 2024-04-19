import React, { useState } from "react";
import MessagePanel from "../components/MessagePanel";
import SideBar from "../components/SideBar2";

export default function MessagePage() {
  const [open, setOpen] = useState(false);

  return (
    <main
      style={{
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: open ? 240 : 100,
          transition: "flex-basis 0.3s ease-in-out",
          backgroundColor: "#f7f9fe",
        }}
        className="drawer-wrapper"
      >
        <SideBar open={open} setOpen={setOpen} />
      </div>
      <section className="main-section">
        <MessagePanel />
      </section>
    </main>
  );
}
