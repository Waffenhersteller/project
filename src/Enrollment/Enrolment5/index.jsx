import Heading from "../../Heading";

import Style from '../../Enrollment/index.module.css';
import link from "../../AllAssets/link.svg";
import Document from "../../AllAssets/Document.svg";
import newTab from "../../AllAssets/newTab.svg";
import download from "../../AllAssets/download.svg";

const Application = <div className={Style.content}>
    <p className={Style.text}>Шановні батьки! Саме зараз ви можете заповнити анкету на вступ для майбутніх учнів ліцею. Будь ласка, перейдіть за посиланням нижче. Заявки приймаються до 20.05.2023. </p>
    <Externalink type={1} content={"Анкета на вступ"}/>


</div>


const list = <div className={Style.content}>
<p className={Style.text}>Шановні батьки! Вступний процес вже завершений. Ви можете переглянути список зарахованих учнів до першого класу станом на 01.06.2023 за посиланням нижче.Шановні батьки! Вступний процес вже завершений. Ви можете переглянути список зарахованих учнів до п'ятого класу станом на 01.06.2023 за посиланням нижче.</p>
<Externalink type={2} content={"Список зарахованих учнів"}/>
</div>

const massage = <p className={Style.text}>Шановні батьки! Набір у п'ятий клас наразі закритий. Анкета на вступ до ліцею буде доступна для заповнення з квітня 2024 року.</p>


function Enrollment5(){
    return(
        <div>
            <Heading massage='Набір у 5 клас'/>

            <div className={Style.conteiner}>
                {Application}
            </div>

        </div>
    );
}

export default Enrollment5
