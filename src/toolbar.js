import React from "react";


export function Toolbar({filters, onChange, selected}) {
    console.log(filters)

    return (
        <div className="toolbar">
            {filters.map(o=><button className = {o === selected ? "selected" : ""} key={o} onClick={(e)=>onChange(e)}>{o}</button>)}
        </div>
    )
}