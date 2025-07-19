import { useState } from "react";
import "../css/Product.css";
import { useEffect } from "react";

const Product = () => {
  const [editBoxOpen, setEditBoxOpen] = useState(false);
  const [productname, setProductname] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [insertBoxOpen, setInsertBoxOpen] = useState(false);
  const [insertproductname, setInsertProductname] = useState("");
  const [insertquantity, setInsertQuantity] = useState(0);
  const [insertprice, setInsertPrice] = useState(0);
  const [productIndex, setProductIndex] = useState(-1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/app/product/get-product")
      .then((res) => res.json())
      .then((item) => setData(item))
      .catch((err) => console.log("can't fetch the data"));
  });

  const editProduct = (index) => {
    if (!editBoxOpen) {
      let edit = document.getElementById("edit_popup");
      edit.classList.add("pop_edit_down");
      edit.classList.remove("pop_edit_up");
      setEditBoxOpen(true);
      setProductname(data[index].name);
      setQuantity(data[index].quantity);
      setPrice(data[index].price);
    } else {
      alert("close the edit popup");
    }
  };
  const handleEditPopupClose = () => {
    setEditBoxOpen(false);
    let edit = document.getElementById("edit_popup");
    edit.classList.remove("pop_edit_down");
    edit.classList.add("pop_edit_up");
  };

  const insertProduct = (e) => {
    e.preventDefault();

    if (!insertBoxOpen) {
      let insert = document.getElementById("insert_popup");
      insert.classList.add("pop_edit_down");
      insert.classList.remove("pop_edit_up");
      setInsertBoxOpen(true);
      return;
    }
  };

  const handleInsertPopupClose = () => {
    setInsertBoxOpen(false);
    let insert = document.getElementById("insert_popup");
    insert.classList.remove("pop_insert_down");
    insert.classList.add("pop_insert_up");
  };

  const handleProductDetailsInsert = async (e) => {
    e.preventDefault();

    if (
      !insertproductname?.trim() ||
      isNaN(insertquantity) ||
      insertquantity <= 0 ||
      isNaN(insertprice) ||
      insertprice <= 0
    ) {
      alert("Invalid product");
      return;
    }

    const newProduct = {
      name: insertproductname.trim(),
      quantity: Number(insertquantity),
      price: Number(insertprice),
    };

    fetch("http://localhost:3000/app/product/create-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to insert product");
        return res.json();
      })
      .then((response) => {
        alert("Product inserted successfully!");
        setData([...data, newProduct]);
      })
      .catch((error) => console.error("Error inserting product:", error));

    let insert = document.getElementById("insert_popup");
    insert.classList.remove("pop_edit_down");
    insert.classList.add("pop_edit_up");
    setInsertBoxOpen(false);
    setInsertProductname("");
    setInsertQuantity("");
    setInsertPrice("");

    console.log("Product inserted successfully");
  };

 const handleProductDetailsUpdate = async (e) => {
  e.preventDefault();

  if (productIndex === -1) {
    alert("Invalid product");
    return;
  }

  const selectedProduct = data[productIndex];

  const updatedProduct = {
    name: productname,
    quantity: Number(quantity),
    price: Number(price),
  };

  try {
    const response = await fetch(`http://localhost:3000/app/product/update-product/${selectedProduct._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error("Failed to update product in backend");
    }

    // Update frontend UI
    const updatedData = data.map((item, index) =>
      index === productIndex
        ? { ...item, ...updatedProduct }
        : item
    );

    setData(updatedData);
    setProductIndex(-1);
    setProductname("");
    setQuantity("");
    setPrice("");
    setEditBoxOpen(false);
    let edit = document.getElementById("edit_popup");
    edit.classList.remove("pop_edit_down");
    edit.classList.add("pop_edit_up");

    console.log("Product updated successfully");

  } catch (error) {
    console.error("Error updating product:", error);
  }
};

  const handleDelete = (DeleteIndex) => {
    const nameToDelete = data[DeleteIndex]._id;

    fetch(`http://localhost:3000/app/product/delete-product/${nameToDelete}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        const updatedData = data.filter((_, index) => index !== DeleteIndex);
        setData(updatedData);
        console.log("Deleted successfully");
      })
      .catch((error) => console.error("Error deleting product:", error));
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
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
              <td>
                <button className="edit-btn-table">
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      setProductIndex(index);
                      editProduct(index);
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => handleDelete(index)}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="edit_popup " id="edit_popup">
        <h3 className="product_details_title">Product Details</h3>
        <div className="edit_values">
          <label htmlFor="" className="label_edit">
            Product Name
          </label>
          <input
            type="text"
            id="productname"
            className="input_edit"
            value={productname}
            onChange={(e) => {
              setProductname(e.target.value);
            }}
          />
        </div>
        <div className="edit_values">
          <label htmlFor="" className="label_edit">
            Product Quantity
          </label>
          <input
            type="text"
            id="quantity"
            className="input_edit"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <div className="edit_values">
          <label htmlFor="" className="label_edit">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            className="input_edit"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <button className="edit_btn " onClick={handleProductDetailsUpdate}>
          Update & Save
        </button>
        <i
          className="fa-solid fa-circle-xmark edit_close_mark"
          onClick={handleEditPopupClose}
        ></i>
      </div>

      <div className="insert_popup " id="insert_popup">
        <h3 className="product_details_title">Product Add Details</h3>
        <div className="edit_values">
          <label htmlFor="" className="label_edit">
            Product Name
          </label>
          <input
            type="text"
            id="productname"
            className="input_edit"
            onChange={(e) => {
              setInsertProductname(e.target.value);
            }}
          />
        </div>
        <div className="edit_values">
          <label htmlFor="" className="label_edit">
            Product Quantity
          </label>
          <input
            type="text"
            id="quantity"
            className="input_edit"
            onChange={(e) => {
              setInsertQuantity(e.target.value);
            }}
          />
        </div>
        <div className="edit_values">
          <label htmlFor="" className="label_edit">
            Product Price
          </label>
          <input
            type="text"
            id="price"
            className="input_edit"
            onChange={(e) => {
              setInsertPrice(e.target.value);
            }}
          />
        </div>

        <button className="edit_btn " onClick={handleProductDetailsInsert}>
          {" "}
          Insert Product
        </button>
        <i
          className="fa-solid fa-circle-xmark insert_close_mark"
          onClick={handleInsertPopupClose}
        ></i>
      </div>

      <div className="insert_data_btn">
        <i className="fa-solid fa-plus" onClick={insertProduct}></i>
      </div>
    </div>
  );
};

export default Product;
