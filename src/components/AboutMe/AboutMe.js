import cl from './AboutMe.module.css'

const AboutMe = (props) =>{
    return(
        <div>

            <div>
                <div className="left">
                    <h1>Писатель - Психолог</h1>
                    <p>Психотерапевт Виталий Евгеньевич Гривцов</p>
                    <a href="" className="brown_button">Подробней</a>
                </div>
                <div className="right">
                    <img className="banner__photo" src="images/37%203.png" alt=""/>
                </div>
            </div>

            <div>
                <div className="left">
                    <img src="images/748%201.png" alt=""/>
                </div>
                <div className="right">
                    <h2>Коротко обо мне</h2>
                    <p>Символдрама: член Международного общества
                        Кататимного переживания образов.
                    </p>
                    <p>Имагинативных методов в психотерапии и психологии(МОКПО), Межрегиональной общественной
                        организации
                        содействия.</p>
                    <p>Развитию символдрамы в России.</p>
                    <p>Украине, Белоруссии, Казахстане (МОО СРС)
                        (Свидетельство № ISR 15291)</p>
                    <a href="" className="transparent_button">Подробней</a>
                </div>
            </div>


        </div>
    )
}

export default AboutMe