import React from 'react'

function Button({event, children}){
    return(
        <button onClick={event}>{children}</button>
    )
}

function onChangeColor(){
    let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor=== 'black'){
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'black';
    }
}

export default function ColorSwitch(){
  return (
    <div>
        <Button onClick={onChangeColor}>Cambiar de color</Button>
        <button>
            Contador de clicks
        </button>

    </div>
  )
}
