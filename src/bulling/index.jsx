import Style from "./index.module.css"
import Heading from "../Heading";
import word1 from "./assets/Layer_5.svg"

import download from "./assets/Download.svg"
function bulling(){
    return(
        <bulling>
            <Heading massage="Протидія булінгу"/>
            
            <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={word1}/>
                            <p>План заходів для протидії булінгу</p>

                        </div>
                        <img src={download}/>
                </div>


                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={word1}/>
                            <p>Порядок розгляду заяв про випадки булінгу</p>

                        </div>
                        <img src={download}/>
                </div>


                <div className={Style.block}>
                        <div className={Style.leftSide}>
                            <img src={word1}/>
                            <p>Порядок реагування на випадки булінгу</p>

                        </div>
                        <img src={download}/>
                </div>

        
        </bulling>



    );
}


export default bulling