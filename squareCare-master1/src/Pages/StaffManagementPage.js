/*css stylesheet*/
import "../components/StaffManagementPage/StaffManagementPage.css"
import StaffInfo from "../components/StaffManagementPage/StaffInfo";
import ResponPatients from "../components/StaffManagementPage/ResponPatients";
import Scheduler from "../components/StaffManagementPage/Scheduler";
import Sidebar from "../components/SideBar2";
import React, { useState } from "react";

function StaffManagementPage() {
    const [open, setOpen] = useState(false);
    return (
        <main style={{ display: "flex",overflow: "hidden" }}>
        <div
        style={{
          width: open ? 240 : 100,
          transition: "width 0.3s ease-in-out",
          backgroundColor: "#FAFBFF",
        }}
        className="drawer-wrapper"
      >
         <Sidebar open={open} setOpen={setOpen} />
      </div>
        <section className="background" style={{ flexGrow: 1, minWidth: '300px'}}>
            <div className="whole-screen inline-flex block">
                <div className="col-s-11 col-5">
                    <StaffInfo></StaffInfo>
                    <ResponPatients></ResponPatients>
                </div >
                <div className="col-s-11 col-7">
                    <Scheduler></Scheduler>
                </div>
            </div>
        </section>
        </main>
    )
}

export default StaffManagementPage