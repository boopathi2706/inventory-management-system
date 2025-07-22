import "../css/Customer.css";
import { useState,useEffect } from "react";
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
      const [customerData, setCustomerData] = useState([]);


 useEffect(() => {
    fetch("http://localhost:3000/app/customer/get-customer")
      .then((res) => res.json())
      .then((item) => setCustomerData(item))
      .catch((err) => console.log("can't fetch the data"));
  });

    
      const editCustomer = (index) => {
         if(!customerEditBoxOpen){
           let edit=document.getElementById("customer_edit_popup");
           edit.classList.add("customer_pop_edit_down");
          edit.classList.remove("customer_pop_edit_up");
         setCustomerEditBoxOpen(true);
          setCustomername(customerData[index].customerName);
          setMobileno(customerData[index].phoneNo);
          setAddress(customerData[index].address);
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

      if (!customerinsertBoxOpen) {
        let insert = document.getElementById("customer_insert_popup");
        insert.classList.add("customer_pop_edit_down");
        insert.classList.remove("customer_pop_edit_up");
        setCustomerInsertBoxOpen(true);
        return; 
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
    
     
      const newProduct = {
        customerName: insertcustomername.trim(),
        phoneNo:insertmobileno.trim(),
        address :insertaddress.trim(),
      };
    
      fetch("http://localhost:3000/app/customer/create-customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to insert customer");
        return res.json();
      })
      .then((response) => {
        alert("customer inserted successfully!");
         setCustomerData([...customerData, newProduct]);
      })
      .catch((error) => console.error("Error inserting customer:", error));

     
      let insert = document.getElementById("customer_insert_popup");
      insert.classList.remove("customer_pop_edit_down");
      insert.classList.add("customer_pop_edit_up");
  
      setInsertCustomername("");
      setInsertMobileno("");
      setInsertAddress("");
      setCustomerInsertBoxOpen(false);
       
        console.log("customer details updated successfully");
      };
    
    
    
     const handleProductDetailsUpdate = async(e) => {
        e.preventDefault();
        if(customerIndex==-1){
          alert("invalid product");
        }
        const selectedCustomer = customerData[customerIndex];

        const updatedCustomer = {
      customerName: customername,
                phoneNo:Number(mobileno),
                address: address,
  };

      try {
    const response = await fetch(`http://localhost:3000/app/customer/update-customer/${selectedCustomer._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCustomer),
    });

    if (!response.ok) {
      throw new Error("Failed to update product in backend");
    }

    
    const updatedData = customerData.map((item, index) =>
      index === customerIndex
        ? { ...item, ...updatedCustomer }
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
     } catch (error) {
    console.error("Error updating product:", error);
  }
};
     const handleDeleteCustomer = (DeleteIndex) => {
         const nameToDelete = customerData[DeleteIndex]._id;

    fetch(`http://localhost:3000/app/customer/delete-customer/${nameToDelete}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        const updatedData = customerData.filter((_, index) => index !== DeleteIndex);
        setData(updatedData);
        console.log("Deleted successfully");
      })
      .catch((error) => console.error("Error deleting customer:", error));
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
            <td>{item.customerName}</td>
            <td>{item.phoneNo}</td>
            <td>{item.address}</td>
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