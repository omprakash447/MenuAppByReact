import React from 'react'

const Menucart = ({ menudata }) => {
    return ( <
        >

        {
            menudata.map((currele) => {
                return ( <
                    >
                    <
                    div className = "card" >
                    <
                    p id = 'no' > { currele.id } < /p> <
                    p > Name: { currele.name } < /p> <
                    p > Price: { currele.price } < /p> <
                    p > About: { currele.about } < /p> <
                    img src = { currele.img }
                    alt = "" / >
                    <
                    /div> <
                    />
                )
            })
        }


        <
        />
    )
}

export default Menucart;