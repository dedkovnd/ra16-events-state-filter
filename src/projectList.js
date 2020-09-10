import React from "react";

export function Projectlist({list}) {


    return (
        <div className="toolbar">
            {list.map((elem, i)=><img key = {i} src = {elem.img}/>)}
        </div>
    )
}