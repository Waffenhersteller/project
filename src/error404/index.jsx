import Style from './index.module.css'
import { Link } from 'react-router-dom'
import zeroone from './assets/404.svg'
function errore(){
    return(
        <errore>
            <div className={Style.content}> 
                <img src={zeroone} ></img>
                <h2>На жаль, сторінку не знайдено</h2>
                <p>Можливо, вона видалена, перейменована або тимчасово недоступна. Будь ласка,<br></br> перевірте правильність URL-адреси або перейдіть на головну сторінку ліцею, щоб знайти<br></br> потрібну інформацію.</p>
                <button><Link to='/'>Перейти на головну</Link></button>
            </div>





        </errore>



    )
}





export default errore