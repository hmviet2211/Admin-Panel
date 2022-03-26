import React from 'react'
import './newUser.css'
const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUSerTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="" className="">Username</label>
                    <input type="text" placeholder="John" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="" className="">Fullname</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="" className="">Email</label>
                    <input type="email" placeholder="John@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="" className="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="" className="">Phone</label>
                    <input type="text" placeholder="+1 234 567 " />
                </div>
                <div className="newUserItem">
                    <label htmlFor="" className="">Address</label>
                    <input type="text" placeholder="Viet Nam" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="file" className="">Image</label>
                    <input type="file" id="file"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="" className="">Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <label htmlFor="" className="">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male" className="">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="fmale" className="">Femal</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other" className="">Other</label>
                    </div>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser