import Style from "./index.module.css"
import Heading from "../Heading";
import Externalink from "../UI/Externalink";



function Bulling(){
    return(
        <div className={Style.bulling}>
            <Heading massage="Протидія булінгу"/> 
            <Externalink width={"848px"} type={2} content={"План заходів для протидії булінгу"}/>
            <Externalink width={"848px"} type={2} content={"Порядок розгляду заяв про випадки булінгу"}/>
            <Externalink width={"848px"} type={2} content={"Порядок реагування на випадки булінгу"}/>
                


                
        
        </div>



    );
}


export default Bulling