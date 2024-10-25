import './style.css'

export function Suggestion() {
    return(
        <div className='container-suggestion'>
            <div className="header-suggestion">
                <img src='https://media.licdn.com/dms/image/v2/D4D03AQH0lLD_nyprHg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727386632071?e=1734566400&v=beta&t=VqCpgv4KXlVmaP1PX_K_HPgOEjUa0MjSaVssHo9QLxI' alt="img-suggestion"/>
                <div className="user-infos-suggestion">

                    <div className="infos">
                        <span>Davi Muniz</span>
                        <p>davimuniz.01</p>
                    </div>

                    <button className='switch'>mudar</button>
                </div>
            </div>
            <div className='header-main-suggestion'>
                    <p>sugestões para você</p>

                    <span>ver tudo</span>

            </div>

            <div className='user-suggestion'>

                <div className='infos-suggestion'>
                    <img src='https://i.pinimg.com/736x/b5/10/3a/b5103af13bf5ed885d9524a6dce40d6c.jpg' alt=''/>
                    <div className='info-suggestion'>
                        <span>Mc ig</span>
                        <p>seguido por NeymarJr</p>
                    </div>
                    <button className='Follow'>seguir</button>
                </div>

                <div className='infos-suggestion'>
                    <img src='https://s2-extra.glbimg.com/U3jd68icfTYVDoYPc5ntBfNZG1M=/0x0:1200x1600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2024/X/h/yfzhDfSFSWS0zN8Zy5rw/whatsapp-image-2024-01-06-at-12.56.58.jpeg' alt=''/>
                    <div className='info-suggestion'>
                        <span>Buzeira</span>
                        <p>seguido por NeymarJr</p>
                    </div>
                    <button className='Follow'>seguir</button>
                </div>

                <div className='infos-suggestion'>
                    <img src='https://t.ctcdn.com.br/yqdc6HhlbsOooDFzVQ0Yjh9Mu-k=/i490767.jpeg' alt=''/>
                    <div className='info-suggestion'>
                        <span>Mark Zuckerberg</span>
                        <p>seguido por Helon Musk</p>
                    </div>
                    <button className='Follow'>seguir</button>
                </div>

                <div className='infos-suggestion'>
                    <img src='https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/15/1500526562-brazil-v-peru-final-copa-america-brazil-2019-1-2048x1366.jpg' alt=''/>
                    <div className='info-suggestion'>
                        <span>Paolo Guerrero</span>
                        <p>seguido por Corinthians</p>
                    </div>
                    <button className='Follow'>seguir</button>
                </div>
                <div className='infos-suggestion'>
                    <img src='https://musicnonstop.uol.com.br/wp-content/uploads/2024/09/Travis-Scott.webp' alt=''/>
                    <div className='info-suggestion'>
                        <span>Travis Scott</span>
                        <p>seguido por Projota</p>
                    </div>
                    <button className='Follow'>seguir</button>
                </div>
            </div>

            <footer className='footer-suggestion'>
                <p>Sobre &bull; ajuda &bull; imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; termos &bull; local &bull;</p>
                <p>&copy; 2024 MunizApp From instituto Proa</p>
            </footer>

        </div>
    )
}