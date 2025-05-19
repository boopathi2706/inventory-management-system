import { useState } from "react";
import "../css/Product.css";

const Product = () => {
  const[editBoxOpen ,setEditBoxOpen]=useState(false);
  const [productname ,setProductname]=useState("");
  const [quantity,setQuantity]=useState(0);
  const [price,setPrice]=useState(0);
   const[insertBoxOpen ,setInsertBoxOpen]=useState(false);
  const [insertproductname ,setInsertProductname]=useState("");
  const [insertquantity,setInsertQuantity]=useState(0);
  const [insertprice,setInsertPrice]=useState(0);
  const [productIndex,setProductIndex]=useState(-1);
  const [data,setData] =useState([
    { ProductName: "Orange", ProductQuantity: 10, ProductPrice: 5 },
    { ProductName: "Apple", ProductQuantity: 20, ProductPrice: 8 },
    { ProductName: "Banana", ProductQuantity: 15, ProductPrice: 3 },
    { ProductName: "Grapes", ProductQuantity: 12, ProductPrice: 6 },
    { ProductName: "Pineapple", ProductQuantity: 7, ProductPrice: 10 },
    { ProductName: "Mango", ProductQuantity: 18, ProductPrice: 12 },
    { ProductName: "Watermelon", ProductQuantity: 5, ProductPrice: 15 },
    { ProductName: "Strawberry", ProductQuantity: 25, ProductPrice: 20 },
    { ProductName: "Papaya", ProductQuantity: 9, ProductPrice: 7 },
    { ProductName: "Kiwi", ProductQuantity: 13, ProductPrice: 9 },
  ]); 

  const editProduct = (index) => {
     if(!editBoxOpen){
       let edit=document.getElementById("edit_popup");
       edit.classList.add("pop_edit_down");
      edit.classList.remove("pop_edit_up");
     setEditBoxOpen(true);
      setProductname(data[index].ProductName);
      setQuantity(data[index].ProductQuantity);
      setPrice(data[index].ProductPrice);
     }
     else{
      alert("close the edit popup");
     }
    
  };
 const handleEditPopupClose=()=>{
       setEditBoxOpen(false);
         let edit=document.getElementById("edit_popup");
        edit.classList.remove("pop_edit_down");
      edit.classList.add("pop_edit_up");
      
 }




 const insertProduct = (e) => {
  e.preventDefault();

  // If the insert popup is not open, open it and stop further execution
  if (!insertBoxOpen) {
    let insert = document.getElementById("insert_popup");
    insert.classList.add("pop_edit_down");
    insert.classList.remove("pop_edit_up");
    setInsertBoxOpen(true);
    return; // ✅ Exit here to avoid inserting without user input
  }
  
  
};

 const handleInsertPopupClose=()=>{
       setInsertBoxOpen(false);
         let insert=document.getElementById("insert_popup");
        insert.classList.remove("pop_insert_down");
      insert.classList.add("pop_insert_up");
      
 }

const handleProductDetailsInsert = (e) => {
    e.preventDefault();
  
  if (
    !insertproductname?.trim() || 
    isNaN(insertquantity) || insertquantity <= 0 || 
    isNaN(insertprice) || insertprice <= 0
) {
    alert("Invalid product");
    return;
}

  // Add new product to data
  const newProduct = {
    ProductName: insertproductname.trim(),
    ProductQuantity: Number(insertquantity),
    ProductPrice: Number(insertprice),
  };

  setData([...data, newProduct]);

  // Optionally close the insert popup after insertion
  let insert = document.getElementById("insert_popup");
  insert.classList.remove("pop_edit_down");
  insert.classList.add("pop_edit_up");
  setInsertBoxOpen(false);

  // Clear the input fields
  setInsertProductname("");
  setInsertQuantity("");
  setInsertPrice("");
   
    console.log("Product updated successfully");
  };



 const handleProductDetailsUpdate = (e) => {
    e.preventDefault();
    if(productIndex==-1){
      alert("invalid product");
    }
    const updatedData = data.map((item, index) =>
      index === productIndex
        ? {
            ...item,
            ProductName: productname,
            ProductQuantity: Number(quantity),
            ProductPrice: Number(price),
          }
        : item
    );
   
    setData(updatedData);
    setProductIndex(-1);
    setProductname("");
    setQuantity("");
    setPrice("");
    setEditBoxOpen(false);
    let edit=document.getElementById("edit_popup");
    edit.classList.remove("pop_edit_down");
    edit.classList.add("pop_edit_up");
    console.log("Product updated successfully");
  };

  const handleDelete = (DeleteIndex) => {
  const updatedData = data.filter((_, index) => index !== DeleteIndex);
  setData(updatedData); 
};

  return (
    <div className="product_container">
     <table className="styled-table">
  <thead>
    <tr>
      <th>S.no</th>
      <th>Product Name</th>
      <th>Product Quantity</th>
      <th>Product Price</th>
      <th>Modify</th>
    </tr>
  </thead>

  <tbody>
    {data.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.ProductName}</td>
        <td>{item.ProductQuantity}</td>
        <td>${item.ProductPrice}</td>
        <td>
          <button
            className="edit-btn-table"
           
          >
            <i className="fa-solid fa-pen-to-square"  onClick={() => {
              setProductIndex(index);
              editProduct(index);
            }}></i>
            <i className="fa-solid fa-trash" onClick={() => handleDelete(index)}></i>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      <div className="edit_popup " id="edit_popup">
        <h3 className="product_details_title">Product Details</h3>
          <div className="edit_values">
            <label htmlFor="" className="label_edit">Product Name</label>
            <input type="text" id="productname" className="input_edit" value={productname} onChange={(e)=>{setProductname(e.target.value)}} />
          </div>
          <div className="edit_values">
             <label htmlFor="" className="label_edit">Product Quantity</label>
            <input type="text" id="quantity" className="input_edit" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} />
          </div>
          <div className="edit_values">
             <label htmlFor="" className="label_edit">Product Price</label>
            <input type="text" id="price" className="input_edit" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
          </div>


          <button className="edit_btn " onClick={handleProductDetailsUpdate} >Update & Save</button>
          <i className="fa-solid fa-circle-xmark edit_close_mark" onClick={handleEditPopupClose}></i>
      </div>






      <div className="insert_popup " id="insert_popup">
        <h3 className="product_details_title">Product Add Details</h3>
          <div className="edit_values">
            <label htmlFor="" className="label_edit">Product Name</label>
            <input type="text" id="productname" className="input_edit"  onChange={(e)=>{setInsertProductname(e.target.value)}} />
          </div>
          <div className="edit_values">
             <label htmlFor="" className="label_edit">Product Quantity</label>
            <input type="text" id="quantity" className="input_edit"  onChange={(e)=>{setInsertQuantity(e.target.value)}} />
          </div>
          <div className="edit_values">
             <label htmlFor="" className="label_edit">Product Price</label>
            <input type="text" id="price" className="input_edit"  onChange={(e)=>{setInsertPrice(e.target.value)}} />
          </div>


          <button className="edit_btn " onClick={handleProductDetailsInsert} >  Insert Product</button>
          <i className="fa-solid fa-circle-xmark insert_close_mark" onClick={handleInsertPopupClose}></i>
      </div>


      <div className="insert_data_btn">
        <i className="fa-solid fa-plus" onClick={insertProduct}></i>
      </div>
    </div>
  );
};

export default Product;
