import Heading from "../../Heading";
import Style from '../../Enrollment/index.module.css';

import Externalink from "../../UI/Externalink.jsx";

const Application = <div className={Style.content}>
    <p className={Style.text}>Шановні батьки! Саме зараз ви можете заповнити анкету на вступ для майбутніх учнів ліцею. Будь ласка, перейдіть за посиланням нижче. Заявки приймаються до 20.05.2023. </p>
    <Externalink type={1} content={"Анкета на вступ"}/>
</div>


const list = <div className={Style.content}>
<p className={Style.text}>Шановні батьки! Вступний процес вже завершений. Ви можете переглянути список зарахованих учнів до першого класу станом на 01.06.2023 за посиланням нижче.Шановні батьки! Вступний процес вже завершений. Ви можете переглянути список зарахованих учнів до першого класу станом на 01.06.2023 за посиланням нижче.</p>
<Externalink type={2} content={"Список зарахованих учнів"}/>
</div>

const massage = <p className={Style.text}>Шановні батьки! Набір у перший клас наразі закритий. Анкета на вступ до ліцею буде доступна для заповнення з квітня 2024 року.</p>


function Enrollment1(){
    return(
        <div >
            <Heading massage='Набір у 1 клас'/>

            <div className={Style.conteiner}>
                {list}
            </div>

        </div>
    );
}

export default Enrollment1
