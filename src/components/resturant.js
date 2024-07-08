import React, { useState } from 'react';
import menu from './menuapi.js';
import Menucart from './menucart.js';
import "./resturant.css";
const Resturant = () => {


    const [menudata, muofdata] = useState(menu);
    console.log(menudata);
    const filteritem = (catagory) => {
        const updatelist = menu.filter((currele) => {
            return currele.catagory == catagory

        })

        muofdata(updatelist);

    }
    return ( <
        >

        <
        div className = "main" >
        <
        div className = "container1" >
        <
        nav className = 'navbar' >
        <
        ul >
        <
        li onClick = {
            () => {
                filteritem("Breakfast")
            }
        } > Breakfast < /li> <
        li onClick = {
            () => {
                filteritem("lunch")
            }
        } > Lunch < /li> <
        li onClick = {
            () => {
                filteritem("starter")
            }
        } > Starter < /li> <
        li onClick = {
            () => {
                filteritem("dinner")
            }
        } > Dinner < /li> <
        li onClick = {
            () => {
                muofdata(menu)
            }
        } > All < /li> <
        /ul> <
        /nav> <
        /div> <
        /div> <
        div className = "container2" >

        <
        Menucart menudata = { menudata }
        /> <
        /div>

        <
        />
    )
}

export default Resturant;