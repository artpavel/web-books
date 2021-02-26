import cl from './News.module.css'

const News = (props) => {
    return (
        <div>
            <section className="news">
                <div className="container">
                    <h2>Новости из соцсетей</h2>
                    <div className="items">
                        <div className="item">
                            <a href="">
                                Facebook
                            </a>
                            <img src="images/image%2065.jpg" alt=""/>
                                <strong></strong>
                                <p>Что у нас нового? Новый вебинар и новый взгляд на старую проблему!</p>
                                <div className="name">
                                    <img src="images/MaskGroup1.png" alt="" className="newsImg"/>
                                        <h3>Виталий Гривцов</h3>
                                </div>
                        </div>
                        <div className="item">
                            <a href="">
                                Youtube
                            </a>
                            <img src="images/image%2065.jpg" alt=""/>
                                <strong>HOonestTRAILERS | THE SHINING</strong>
                                <p>Что у нас нового? Новый вебинар и новый взгляд на старую проблему!</p>
                                <p>Что у нас нового? Новый вебинар и новый взгляд на старую проблему!</p>
                                <p>Что у нас нового? Новый вебинар и новый взгляд на старую проблему!</p>
                                <div className="name">
                                    <img src="images/MaskGroup1.png" alt="" className="newsImg"/>
                                        <h3>Виталий Гривцов</h3>
                                </div>
                        </div>
                        <div className="item">
                            <a href="">
                                Facebook
                            </a>
                            <img src="images/image%2065.jpg" alt=""/>
                                <strong></strong>
                                <p>Что у нас нового? Новый вебинар и новый взгляд на старую проблему!</p>
                                <div className="name">
                                    <img src="images/MaskGroup1.png" alt="" className="newsImg"/>
                                        <h3>Виталий Гривцов</h3>
                                </div>
                        </div>
                        <div className="item">
                            <a href="">
                                Instagram
                            </a>
                            <img src="images/image%2065.jpg" alt=""/>
                                <strong></strong>
                                <p>Что у нас нового? Новый вебинар и новый взгляд на старую проблему!</p>
                                <div className="name">
                                    <img src="images/MaskGroup1.png" alt="" className="newsImg"/>
                                        <h3>Виталий Гривцов</h3>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News