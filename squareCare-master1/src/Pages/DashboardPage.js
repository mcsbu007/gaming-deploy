import "../components/DashboardPage/DashboardPage.css";
import Task from "../components/DashboardPage/Task";
import TimeWidget from "../components/DashboardPage/TimeWidget";
import Scheduler from "../components/StaffManagementPage/Scheduler";
import Sidebar from "../components/SideBar2";
import React, {useState} from 'react';


function DashboardPage(){
    const [open, setOpen] = useState(false);

    return(<>
        <main style={{ display: "flex" ,overflow:"hidden"}}>
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
        <section className="DS-background" style={{ flexGrow: 1, minWidth: '300px'}}>
            <div className="DS-whole-screen">
                <div className="Nav">

                </div>
                <div className="DS-Lside">
                    <Scheduler></Scheduler>
                </div>
                <div className="DS-Rside">
                    <div className="DS-Time">
                        <TimeWidget></TimeWidget>
                    </div>
                    <div className="DS-Task">
                        <Task></Task>
                    </div>
                </div>
            </div>
        </section>
        </main>
    </>)
}

export default DashboardPage;
