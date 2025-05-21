import "../css/Customer.css";
import { useState } from "react";
const Customer = () => {
      const[customerEditBoxOpen ,setCustomerEditBoxOpen]=useState(false);
      const [customername ,setCustomername]=useState("");
      const [mobileno,setMobileno]=useState("");
      const [address,setAddress]=useState("");
       const[customerinsertBoxOpen ,setCustomerInsertBoxOpen]=useState(false);
      const [insertcustomername ,setInsertCustomername]=useState("");
      const [insertmobileno,setInsertMobileno]=useState("");
      const [insertaddress,setInsertAddress]=useState("");
      const [customerIndex,setCustomerIndex]=useState(-1);
      const [customerData, setCustomerData] = useState([
  { CustomerName: "Ravi Kumar", MobileNo: "9876543210", Address: "No.12, MG Road, Bangalore" },
  { CustomerName: "Anita Sharma", MobileNo: "9123456780", Address: "45 Park Street, Kolkata" },
  { CustomerName: "Rahul Verma", MobileNo: "9988776655", Address: "56 Anna Nagar, Chennai" },
  { CustomerName: "Deepa Joshi", MobileNo: "9090909090", Address: "89 Nehru Street, Coimbatore" },
  { CustomerName: "Suresh Iyer", MobileNo: "8877665544", Address: "123 Sector 17, Chandigarh" },
  { CustomerName: "Pooja Mehta", MobileNo: "9988001122", Address: "Flat 2B, Powai, Mumbai" },
  { CustomerName: "Karthik Reddy", MobileNo: "9345678901", Address: "Gachibowli, Hyderabad" },
  { CustomerName: "Meena Das", MobileNo: "9012345678", Address: "Salt Lake, Kolkata" },
  { CustomerName: "Amit Patel", MobileNo: "9765432109", Address: "SG Highway, Ahmedabad" },
  { CustomerName: "Lakshmi Nair", MobileNo: "9091234567", Address: "Technopark, Trivandrum" 
}]);

    
      const editCustomer = (index) => {
         if(!customerEditBoxOpen){
           let edit=document.getElementById("customer_edit_popup");
           edit.classList.add("customer_pop_edit_down");
          edit.classList.remove("customer_pop_edit_up");
         setCustomerEditBoxOpen(true);
          setCustomername(customerData[index].CustomerName);
          setMobileno(customerData[index].MobileNo);
          setAddress(customerData[index].Address);
         }
         else{
          alert("close the edit popup");
         }
        
      };
     const handleEditPopupClose=()=>{
           setCustomerEditBoxOpen(false);
             let edit=document.getElementById("customer_edit_popup");
            edit.classList.remove("customer_pop_edit_down");
          edit.classList.add("customer_pop_edit_up");
          
     }
    
    
    
    
     const insertCustomer = (e) => {
      e.preventDefault();
    
      // If the insert popup is not open, open it and stop further execution
      console.log(customerinsertBoxOpen)
      if (!customerinsertBoxOpen) {
        let insert = document.getElementById("customer_insert_popup");
        insert.classList.add("customer_pop_edit_down");
        insert.classList.remove("customer_pop_edit_up");
        setCustomerInsertBoxOpen(true);
        return; // ✅ Exit here to avoid inserting without user input
      }
      
      
    };
    
     const handleInsertPopupClose=()=>{
          
           let insert=document.getElementById("customer_insert_popup");
            insert.classList.remove("customer_pop_insert_down");
          insert.classList.add("customer_pop_insert_up");
           setCustomerInsertBoxOpen(false);
          
     }
    
    const handleCustomerDetailsInsert = (e) => {
        e.preventDefault();
      
      if (
        !insertcustomername?.trim() || 
        !insertmobileno?.trim()|| 
        !insertaddress?.trim()
    ) {
        alert("Invalid product");
        return;
    }
    
      // Add new product to data
      const newProduct = {
        CustomerName: insertcustomername.trim(),
        MobileNo:insertmobileno.trim(),
        Address :insertaddress.trim(),
      };
    
      setCustomerData([...customerData, newProduct]);
    
      // Optionally close the insert popup after insertion
      let insert = document.getElementById("customer_insert_popup");
      insert.classList.remove("customer_pop_edit_down");
      insert.classList.add("customer_pop_edit_up");
      
    
      // Clear the input fields
      setInsertCustomername("");
      setInsertMobileno("");
      setInsertAddress("");
      setCustomerInsertBoxOpen(false);
       
        console.log("customer details updated successfully");
      };
    
    
    
     const handleProductDetailsUpdate = (e) => {
        e.preventDefault();
        if(customerIndex==-1){
          alert("invalid product");
        }
        const updatedData = customerData.map((item, index) =>
          index === customerIndex
            ? {
                ...item,
                CustomerName: customername,
                MobileNo:mobileno,
                Address: address,
              }
            : item
        );
       
        setCustomerData(updatedData);
        setCustomerIndex(-1);
        setCustomername("");
        setMobileno("");
        setAddress("");
        setCustomerEditBoxOpen(false);
        let edit=document.getElementById("customer_edit_popup");
        edit.classList.remove("customer_pop_edit_down");
        edit.classList.add("customer_pop_edit_up");
        console.log("Product updated successfully");
      };
    
      const handleDeleteCustomer = (DeleteIndex) => {
      const updatedData = customerData.filter((_, index) => index !== DeleteIndex);
      setCustomerData(updatedData); 
    };
    
      return (
        <div className="customer_container">
         <table className="styledcos-table">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Customer Name</th>
          <th>Customer Phone NO</th>
          <th>Address</th>
          <th>Modify</th>
        </tr>
      </thead>
    
      <tbody>
        {customerData.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.CustomerName}</td>
            <td>{item.MobileNo}</td>
            <td>{item.Address}</td>
            <td>
              <button
                className="edit-btn-table"
               
              >
                <i className="fa-solid fa-pen-to-square fa-customer"  onClick={() => {
                  setCustomerIndex(index);
                  editCustomer(index);
                }}></i>
                <i className="fa-solid fa-trash" onClick={() => handleDeleteCustomer(index)}></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
          <div className="customer_edit_popup " id="customer_edit_popup">
            <h3 className="customer_details_title">Customer Details</h3>
              <div className="customer_edit_values">
                <label htmlFor="" className="customer_label_edit">Customer Name</label>
                <input type="text" id="customername" className="customer_input_edit" value={customername} onChange={(e)=>{setCustomername(e.target.value)}} />
              </div>
              <div className="customer_edit_values">
                 <label htmlFor="" className="customer_label_edit">Mobile NO</label>
                <input type="text" id="mobileno" className="customer_input_edit" value={mobileno} onChange={(e)=>{setMobileno(e.target.value)}} />
              </div>
              <div className="customer_edit_values">
                 <label htmlFor="" className="customer_label_edit">Adress</label>
                <input type="text" id="address" className="customer_input_edit" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
              </div>
    
    
              <button className="customer_edit_btn " onClick={handleProductDetailsUpdate} >Update & Save</button>
              <i className="fa-solid fa-circle-xmark customer_edit_close_mark" onClick={handleEditPopupClose}></i>
          </div>
    
    
    
    
    
    
          <div className="customer_insert_popup " id="customer_insert_popup">
            <h3 className="customer_details_title">Customer Add Details</h3>
              <div className="customer_edit_values">
                <label htmlFor="" className="customer_label_edit">Customer Name</label>
                <input type="text" id="cutomer_name" className="customer_input_edit" value={insertcustomername}  onChange={(e)=>{setInsertCustomername(e.target.value)}} />
              </div>
              <div className="customer_edit_values">
                 <label htmlFor="" className="customer_label_edit">Mobile No</label>
                <input type="text" id="mobile_no" className="customer_input_edit"  value={insertmobileno} onChange={(e)=>{setInsertMobileno(e.target.value)}} />
              </div>
              <div className="customer_edit_values">
                 <label htmlFor="" className="customer_label_edit">Address</label>
                <input type="text" id="address_name" className="customer_input_edit" value={insertaddress}  onChange={(e)=>{setInsertAddress(e.target.value)}} />
              </div>
    
    
              <button className="customer_edit_btn " onClick={handleCustomerDetailsInsert} >  Insert Product</button>
              <i className="fa-solid fa-circle-xmark customer_insert_close_mark" onClick={handleInsertPopupClose}></i>
          </div>
    
    
          <div className="customer_insert_data_btn" onClick={insertCustomer}>
            <i className="fa-solid fa-plus" ></i>
          </div>
        </div>
      );
    };  
export default Customer