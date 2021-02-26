import cl from './Home.module.css'


const Home = (props) => {
    return (

        <div>

            <div>
                <div className="title">
                    <h3>Топ книг</h3>
                </div>
                <div className="slider">
                    <div className="slide">

                        <a href="#"><img src="images/books/item1.png" alt="" className="scale"/></a>

                        <div className="slide_text">
                            <p>Гривцов.В.Е.</p>
                        </div>
                        <div className="slide_title">
                            <p>Пятьдесят оттенков свободы</p>
                        </div>
                        <div className="slide_price">
                            <h4>690 грн</h4>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide_img">
                            <a href="#"><img src="images/books/item2.png" alt="" className="scale"/></a>
                        </div>
                        <div className="slide_text">
                            <p>Гривцов.В.Е.</p>
                        </div>
                        <div className="slide_title">
                            <p>Пятьдесят оттенков свободы</p>
                        </div>
                        <div className="slide_price">
                            <h4>690 грн</h4>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide_img">
                            <a href="#"><img src="images/books/item3.png" alt="" className="scale"/></a>
                        </div>
                        <div className="slide_text">
                            <p>Гривцов.В.Е.</p>
                        </div>
                        <div className="slide_title">
                            <p>Пятьдесят оттенков свободы</p>
                        </div>
                        <div className="slide_price">
                            <h4>690 грн</h4>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide_img">
                            <a href="#"><img src="images/books/item4.png" alt="" className="scale"/></a>
                        </div>
                        <div className="slide_text">
                            <p>Гривцов.В.Е.</p>
                        </div>
                        <div className="slide_title">
                            <p>Пятьдесят оттенков свободы</p>
                        </div>
                        <div className="slide_price">
                            <h4>690 грн</h4>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide_img">
                            <a href="#"><img src="images/books/item4.png" alt="" className="scale"/></a>
                        </div>
                        <div className="slide_text">
                            <p>Гривцов.В.Е.</p>
                        </div>
                        <div className="slide_title">
                            <p>Пятьдесят оттенков свободы</p>
                        </div>
                        <div className="slide_price">
                            <h4>690 грн</h4>
                        </div>
                    </div>

                </div>
                <div className="btn">
                    <a href="#" className="brown_button">Показать все книги</a>
                </div>
            </div>

            <div>
                <h2>Как приобрести книги</h2>
                <div className="howBuy__item">
                    <div className="number">01</div>
                    <div className="howBuy__title">
                        <h3>Регистрация на сайте</h3>
                    </div>
                    <div className="howBuy__text">
                        <p>Зарегистрируйтесь на ресурсе <br/> и выберите интересующую вас книгу</p>
                    </div>
                    <div className="howBuy__img">
                        <img src="images/phone-buy111.png" alt=""/>
                    </div>
                </div>

                <div className="howBuy__item">
                    <div className="number">02</div>
                    <div className="howBuy__title">
                        <h3>Оплата</h3>
                    </div>
                    <div className="howBuy__text">
                        <p>Оплатите книгу с помощью своей банковской карты</p>
                    </div>
                    <div className="howBuy__img">
                        <img src="images/karta-buy.png" alt=""/>
                    </div>
                </div>

                <div className="howBuy__item">
                    <div className="number">03</div>
                    <div className="howBuy__title">
                        <h3>Читайте</h3>
                    </div>
                    <div className="howBuy__text">
                        <p>Наслаждайтесь книгой <br/> в собственном кабинетеу</p>
                    </div>
                    <div className="howBuy__img">
                        <img src="images/book-buy.png" alt="" className="img2"/>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Home