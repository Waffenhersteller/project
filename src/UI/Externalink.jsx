import React from "react";
import Style from './Externalink.module.css'
import newTab from '../AllAssets/newTab.svg'
import link from '../AllAssets/link.svg'
import download from '../AllAssets/download.svg'
import word from '../AllAssets/word.svg'
import PDF from '../AllAssets/PDF.svg'

function Externalink(props){
    let rigthSideImg  
    let leftSideImg
    if(props.type == 1){
        rigthSideImg = newTab
        leftSideImg = link
    }
    else if(props.type == 2){
        rigthSideImg = download
        leftSideImg = word
    }
    else if(props.type == 3){
        rigthSideImg = download
        leftSideImg = PDF
    }


    return( 
<div className={Style.block} style={{width: props.width}}>
    <div className={Style.leftSide}>
    <img src={leftSideImg}/>
    <p>{props.content}</p>

    </div>
<img src={rigthSideImg}/>


</div>
)
}


export default Externalink