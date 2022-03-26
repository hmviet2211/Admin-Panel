import React from 'react'
import './newProduct.css'
const NewProduct = () => {
    return (
        <div className="newProduct">
            <h1 className="newUSerTitle">New Product</h1>
            <form action="" className="newUserForm">
                <div className="newProductItem">
                    <label htmlFor="file" className="">Image</label>
                    <input type="file" id="file"/>
                </div>
                <div className="newProductItem">
                    <label htmlFor="" className="">Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="" className="">Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="" className="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct