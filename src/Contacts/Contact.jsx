import Style from "./contact.module.css"
import fingerPrint from "./assets/fingerPrint.svg"
import line from "./assets/dividingLine.svg"
import { Toast, createToaster } from '@ark-ui/react'
import * as toast from "@zag-js/toast"


import Close from './../AllAssets/plus.svg';

import Group1 from './assets/Group.svg'
 


function Contact(){
    
    const notification = <div className={Style.notification}>
      <div className={Style.leftSideNotification}>
        <img src={Group1} alt="" />
        <p>Ваше повідомлення успішно надіслано</p>
      </div>
      


  <div className={Style.rigthSideNotification}  onClick={()=>toast.dismiss()}>
    
    <img src={Close} alt="" />
  </div>


    </div>
    
    const [Toaster, toast] = createToaster({
        placement: 'top-end',
        render(toast) {
          return (
            <Toast.Root>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.CloseTrigger>Close</Toast.CloseTrigger>
          </Toast.Root>
          )
        },
      })


    return(
        <div className={Style.contact}>
            <div className={Style.center}></div>
            <img src={fingerPrint} className={Style.fingerPrint}></img>
            <div className={Style.content}>
            <div className={Style.leftSide}>
                <h2>Залишилися питання?</h2>
                <img src={line}></img>
                <p>Ви можете надіслати своє повідомлення 
                через форму зворотнього звʼязку і ми вам 
                передзвонимо</p>

            </div>
            <div className={Style.rightSide}>
                <div className={Style.topSide}>
                <div><p>Імʼя Прізвище</p>
                <input type="text" placeholder="Наталія Стецик"></input>
                </div>
                <div><p>Номер телефону</p>
                <input type="text" placeholder="(096) 32 585 74"></input>

                </div>

                </div>

                <div className={Style.bottomSide}>
                <div><p>Повідомлення</p>
                <textarea placeholder="Напишіть тут, що вас цікавить" rows="4"  width="568"></textarea>
               
                
                </div>
                
                <button onClick={() => toast.create({
            title: 'Please checkout',
            
            render: (toast) => (
              <div>
                {notification}
              </div>
            ),
          })}>Надіслати</button>
                 <Toaster />
                </div>
            </div>
            </div>


        </div>






    )
}




export default Contact