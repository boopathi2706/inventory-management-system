import "../css/InventoryDashboard.css";
import { useState } from "react";
import Dashboard from "./Dashboard.jsx";
import Report from "./Report.jsx";
import Product from "./Product.jsx";
import Customer from "./Customer.jsx";
import Setting from "./Setting.jsx";
import Profile from "./Profile.jsx";
import Help from "./Help.jsx";

const InventoryDashboard = () => {
    const[dash,setDash]=useState(true);
    const[report,setReport]=useState(false);
    const[product,setProduct]=useState(false);
    const[customer,setCustomer]=useState(false);
    const[setting,setSetting]=useState(false);
    const[profile,setProfile]=useState(false);
    const[help,setHelp]=useState(false);

    const comeOnDashboard=()=>{
        setDash(true);
        setReport(false);
        setProduct(false);
        setCustomer(false);
        setSetting(false);
        setProfile(false);
        setHelp(false);
       let report=document.getElementById("report_btn");
            report.classList.remove("btn_active");
        let dashboard=document.getElementById("dashboard_btn");
            dashboard.classList.add("btn_active");
        let product=document.getElementById("product_btn");
            product.classList.remove("btn_active");
        let customer=document.getElementById("customer_btn");
            customer.classList.remove("btn_active");
        let setting=document.getElementById("setting_btn");
            setting.classList.remove("btn_active");
        let profile=document.getElementById("profile_btn");
            profile.classList.remove("btn_active");
        let help=document.getElementById("help_btn");
            help.classList.remove("btn_active");
    }
    const comeOnReport=()=>{
        setDash(false);
        setReport(true);
        setProduct(false);
        setCustomer(false);
        setSetting(false);
        setProfile(false);
        setHelp(false);
        let report=document.getElementById("report_btn");
            report.classList.add("btn_active");
        let dashboard=document.getElementById("dashboard_btn");
            dashboard.classList.remove("btn_active");
        let product=document.getElementById("product_btn");
            product.classList.remove("btn_active");
        let customer=document.getElementById("customer_btn");
            customer.classList.remove("btn_active");
        let setting=document.getElementById("setting_btn");
            setting.classList.remove("btn_active");
        let profile=document.getElementById("profile_btn");
            profile.classList.remove("btn_active");
        let help=document.getElementById("help_btn");
            help.classList.remove("btn_active");
    }
    const comeOnProduct=()=>{
        setDash(false);
        setReport(false);
        setProduct(true);
        setCustomer(false);
        setSetting(false);
        setProfile(false);
        setHelp(false);
        let report=document.getElementById("report_btn");
            report.classList.remove("btn_active");
        let dashboard=document.getElementById("dashboard_btn");
            dashboard.classList.remove("btn_active");
        let product=document.getElementById("product_btn");
            product.classList.add("btn_active");
        let customer=document.getElementById("customer_btn");
            customer.classList.remove("btn_active");
        let setting=document.getElementById("setting_btn");
            setting.classList.remove("btn_active");
        let profile=document.getElementById("profile_btn");
            profile.classList.remove("btn_active");
        let help=document.getElementById("help_btn");
            help.classList.remove("btn_active");
    }

    const comeOnCustomer=()=>{
        setDash(false);
        setReport(false);
        setProduct(false);
        setCustomer(true);
        setSetting(false);
        setProfile(false);
        setHelp(false);
        let report=document.getElementById("report_btn");
            report.classList.remove("btn_active");
        let dashboard=document.getElementById("dashboard_btn");
            dashboard.classList.remove("btn_active");
        let product=document.getElementById("product_btn");
            product.classList.remove("btn_active");
        let customer=document.getElementById("customer_btn");
            customer.classList.add("btn_active");
        let setting=document.getElementById("setting_btn");
            setting.classList.remove("btn_active");
        let profile=document.getElementById("profile_btn");
            profile.classList.remove("btn_active");
        let help=document.getElementById("help_btn");
            help.classList.remove("btn_active");
    }


    const comeOnSetting=()=>{
        setDash(false);
        setReport(false);
        setProduct(false);
        setCustomer(false);
        setSetting(true);
        setProfile(false);
        setHelp(false);
        let report=document.getElementById("report_btn");
            report.classList.remove("btn_active");
        let dashboard=document.getElementById("dashboard_btn");
            dashboard.classList.remove("btn_active");
        let product=document.getElementById("product_btn");
            product.classList.remove("btn_active");
        let customer=document.getElementById("customer_btn");
            customer.classList.remove("btn_active");
        let setting=document.getElementById("setting_btn");
            setting.classList.add("btn_active");
        let profile=document.getElementById("profile_btn");
            profile.classList.remove("btn_active");
        let help=document.getElementById("help_btn");
            help.classList.remove("btn_active");
    }

    const comeOnProfile=()=>{
        setDash(false);
        setReport(false);
        setProduct(false);
        setCustomer(false);
        setSetting(false);
        setProfile(true);
        setHelp(false);
        let report=document.getElementById("report_btn");
            report.classList.remove("btn_active");
        let dashboard=document.getElementById("dashboard_btn");
            dashboard.classList.remove("btn_active");
        let product=document.getElementById("product_btn");
            product.classList.remove("btn_active");
        let customer=document.getElementById("customer_btn");
            customer.classList.remove("btn_active");
        let setting=document.getElementById("setting_btn");
            setting.classList.remove("btn_active");
        let profile=document.getElementById("profile_btn");
            profile.classList.add("btn_active");
        let help=document.getElementById("help_btn");
            help.classList.remove("btn_active");
    }

    const comeOnHelp=()=>{
        setDash(false);
        setReport(false);
        setProduct(false);
        setCustomer(false);
        setSetting(false);
        setProfile(false);
        setHelp(true);
        let report=document.getElementById("report_btn");
            report.classList.remove("btn_active");
        let dashboard=document.getElementById("dashboard_btn");
            dashboard.classList.remove("btn_active");
        let product=document.getElementById("product_btn");
            product.classList.remove("btn_active");
        let customer=document.getElementById("customer_btn");
            customer.classList.remove("btn_active");
        let setting=document.getElementById("setting_btn");
            setting.classList.remove("btn_active");
        let profile=document.getElementById("profile_btn");
            profile.classList.remove("btn_active");
        let help=document.getElementById("help_btn");
            help.classList.add("btn_active");
    }







  return (
    <div className="dashboard_container">
       
        <div className="side_bar">
             {/* <i className="fa-solid fa-bars"></i> */}

             <div className="logo">
                  
             </div>
             <div className="nav_option">
                  <button className="option_btn dashboard_btn btn_active" id="dashboard_btn" onClick={comeOnDashboard} ><i className="fa-solid fa-chart-simple"></i>&nbsp; Dashboard</button>
                  <button className="option_btn report_btn" id="report_btn" onClick={comeOnReport}><i className="fa-solid fa-flag"></i>&nbsp;&nbsp;Report</button>
                  <button className="option_btn product_btn" id="product_btn" onClick={comeOnProduct}><i className="fa-solid fa-store"></i>&nbsp;&nbsp;Product</button>
                  <button className="option_btn customer_btn" id="customer_btn" onClick={comeOnCustomer}><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Customer</button>
                  <button className="option_btn setting_btn" id="setting_btn" onClick={comeOnSetting}><i className="fa-solid fa-gears"></i>&nbsp;&nbsp;Settings</button>
                  <button className="option_btn profile_btn" id="profile_btn" onClick={comeOnProfile}><i className="fa-solid fa-id-card"></i>&nbsp;&nbsp;Profile</button>
                  <button className="option_btn help_btn" id="help_btn" onClick={comeOnHelp}><i className="fa-solid fa-circle-info"></i>&nbsp;&nbsp;Help</button>
             </div>

        </div>
        <div className="main_dashboard">
               {dash &&(<Dashboard />)}
               {report && (<Report/>)}
                {product && (<Product/>)}
                 {customer && (<Customer/>)}
                  {setting && (<Setting/>)}
                   {profile && (<Profile/>)}
                    {help && (<Help/>)}

        </div>
    </div>
  )
}

export default InventoryDashboard