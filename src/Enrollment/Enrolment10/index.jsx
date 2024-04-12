import Heading from "../../Heading";
import Style from '../../Enrollment/index.module.css';
import link from "../../AllAssets/link.svg";
import Document from "../../AllAssets/Document.svg";
import newTab from "../../AllAssets/newTab.svg";
import download from "../../AllAssets/download.svg";

const Application = <div className={Style.content}>
    <p className={Style.text}>Шановні батьки! Саме зараз ви можете заповнити анкету на вступ для майбутніх учнів ліцею. Будь ласка, перейдіть за посиланням нижче. Заявки приймаються до 20.05.2023. </p>
<div className={Style.block}>
<div className={Style.leftSide}>
    <img src={link}/>
    <p>Анкета на вступ</p>

</div>
<img src={newTab}/>


</div>
</div>


const list = <div className={Style.content}>
<p className={Style.text}>Шановні батьки! Вступний процес вже завершений. Ви можете переглянути список зарахованих учнів до десятого класу станом на 01.06.2023 за посиланням нижче.Шановні батьки! Вступний процес вже завершений. Ви можете переглянути список зарахованих учнів до п'ятого класу станом на 01.06.2023 за посиланням нижче.</p>
<div className={Style.block}>
<div className={Style.leftSide}>
<img src={Document}/>
<p>Список зарахованих учнів</p>

</div>
<img src={download}/>


</div>
</div>

const massage = <p className={Style.text}>Шановні батьки! Набір у десятий клас наразі закритий. Анкета на вступ до ліцею буде доступна для заповнення з квітня 2024 року.</p>


function enrollment10(){
    return(
        <enrollment10>
            <Heading massage='Набір у 10 клас'/>

            <div className={Style.conteiner}>
                {/* Application */ list /* Application */}
            </div>

        </enrollment10>
    );
}

export default enrollment10
