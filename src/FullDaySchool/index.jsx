import Style from './index.module.css'
import Heading from '../Heading'
import img1 from './assets/image4.webp'
import img2 from './assets/image5.webp'

function FullTimeSchool(){
    return(
        <div className={Style.fullTimeSchool}>
            <Heading massage="Школа повного дня"></Heading>
            <p>Уже 4 роки у Львові втілюється у життя проект “Школа повного дня” у початкових класах. Цього року його реалізує 12 шкіл міста. Для ефективної роботи у школі повного дня педагоги заздалегідь проходять спеціальні курси та тренінги, отримують новий досвід та знання.<br></br><br></br>
Розпорядок дня «Школи повного дня» оптимально поєднує навчальну та позанавчальну сфери діяльності учнів в умовах освітньо-розвивального середовища як сукупності освітніх, виховних процесів, що забезпечують реалізацію індивідуальних потреб учнів, батьків, і членів педагогічного колективу.<br></br><br></br>
Освітній процес у таких класах триває впродовж 8 годин. Окрім основного навчання, діти у школі повного дня мають розвиткові, пізнавальну та творчу діяльність.<br></br><br></br>
Оскільки «Школа повного дня» забезпечує оптимальні умови для індивідуального, духовного, соціально-культурного і творчого розвитку школярів, інтеграцію навчальної і позанавчальної сфер діяльності учнів в умовах єдиного соціально-культурного освітнього простору, психолого-педагогічні умови розвитку школярів, оптимальне використання матеріально-технічних ресурсів ЗНЗ з метою реалізації освітніх, розвивальних, виховних завдань, взаємодію педагогів та батьків у вихованні школярів, розвиток різноманітних форм сімейного дозвілля на базі ЗНЗ, партнерство з різними державними та неурядовими організаціями, вона є чудовим майданчиком для впровадження STEAM-освіти під час творчо-пізнавальної діяльності школярів вже з 1 класу.<br></br><br></br>
Навчальна діяльність у «Школі повного дня» розпочинається із ранкової зустрічі, де учні дізнаються про те, що на них чекає цього дня чи тижня. Далі відбувається процес навчання, що проходить активно та інтерактивно. Оскільки кожна дитина має свої особливості сприйняття та відтворення інформації, саме «Школа повного дня» сприяє повною мірою розкриттю творчого потенціалу, формування індивідуальної освітньої траєкторії, навчання у власному темпі.</p>
        
        <img src={img1} className={Style.img1}/>
        <p>Обов’язковою в рамках «Школи повного дня» є годинна прогулянка, яка відбувається за попереднім планом і є частиною творчо-пізнавальної діяльності.<br></br><br></br>
У другій половині дня під час творчо-пізнавальної діяльності в рамках «Школи повного дня» практикується проведення STEM-уроків (виконання учнями дослідницьких міні-проєктів для розуміння практичного застосування науково-технічних знань, стимулювання творчості та ініціативи учнів, розвитку активної комунікації та групової роботи), STEM-проєктів (навчальні дослідження та технічне конструювання), STEM-екскурсій (інтегровані навчальні заняття, які проводяться за межами освітнього закладу в умовах природного ландшафту, виробництва, музею, виставки з метою спостереження та вивчення учнями різних об'єктів і явищ навколишнього середовища з метою розвитку знань, умінь та компетентностей, встановлених Державним стандартом освіти України), STEM-тижнів (комплексні навчально-виховні заходи, спрямовані на розвиток наукової та технічної творчості учнів, поглиблення їхніх знань зі STEM-предметів).<br></br><br></br>
Щодня вони можуть брати участь у різноманітних екскурсіях, відвідувати гуртки, конструювати з LEGO і додатково вивчати іноземну мову. А ще до проекту залучають батьків, які також можуть стати активними учасниками школи повного дня.<br></br><br></br>
Учні працюють в групах, індивідуально, фронтально, створюють проєкти творчого спрямування ілюструючи тему, опрацьовану в першій половині дня, самостійно створюють лічильний матеріал, адже навчаються від конкретного до абстрактного, від практики до теорії.
<br></br><br></br>Велике значення має тихе читання, яке відбувається щодня.<br></br><br></br>
Школа повного дня не є аналогом групи продовженого дня, яка має зовсім іншу мету. Школа повного дня є іншим форматом самого навчання в початковій школі, де вся діяльність спрямована на досягненні цілей, передбачених Новою українською школою. У школі повного дня працює один вчитель – класний керівник та вчителі-предметники.</p>
        
        
<img src={img2} className={Style.img2}/>
        </div>

            


        
    );
}


export default FullTimeSchool