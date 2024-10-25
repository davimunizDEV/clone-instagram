import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import { BsChat, BsBookmark, BsEmojiSmile  } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'


export function Post() {
    return(
        <>
            <header className='header-post'>

                <div className="infos-post">
                    <img className="feed" src= " https://conteudo.imguol.com.br/c/esporte/74/2024/03/13/rodrigo-garro-meia-do-corinthians-1710346508271_v2_450x450.jpg.webp" alt="Postagem" />
                    <span>Rodrigo Garro</span>
                </div>

                    <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                <img src= " https://conteudo.imguol.com.br/c/esporte/74/2024/03/13/rodrigo-garro-meia-do-corinthians-1710346508271_v2_450x450.jpg.webp" alt="fotos" />
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size: "30px"}}> 
                
                <section className='engajament-post'>
                 <div className='icons-1'>
                    <div className='icon'><IoMdHeartEmpty/></div>
                    <div className='icon'><BsChat/></div>
                    <div className='icon'><FiSend/></div>
                 </div>
                 <div className='icon'><BsBookmark/></div>
                       
                    
                </section>
                </IconContext.Provider>
                <section className='Like'>
                    <span>1.500 curtidas</span>
                </section>
                <div className='legend'>
                    <p>
                        <span> Rodrigo Garro:</span> vitória muito importante  para seguimos o campeonato, vai corinthians
                    </p>
                </div>
                <div className='time-post'>
                    <time>há 1 hora</time>
                </div>
                <div className='comment'>

                    <div className='fake-comment'>

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                            <BsEmojiSmile/>
                            </div>
                           
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário'/>
                        
                    </div>
                    <button>Publicar</button>
                </div>
                
            </div>

            <header className='header-post'>

                <div className="infos-post">
                    <img className="feed" src= "https://cdns-images.dzcdn.net/images/artist/bf0efde00f4771459ced4892cae72689/1900x1900-000000-80-0-0.jpg" alt="Postagem" />
                    <span>Mc Ryan</span>
                </div>

                    <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                <img src= "https://www.conjur.com.br/wp-content/uploads/2024/06/entretenimento-mc-ryan-sp-mc-ryan-funkeiro-funk-1708757916.webp" alt="fotos" />
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size: "30px"}}> 
                
                <section className='engajament-post'>
                 <div className='icons-1'>
                    <div className='icon'><IoMdHeartEmpty/></div>
                    <div className='icon'><BsChat/></div>
                    <div className='icon'><FiSend/></div>
                 </div>
                 <div className='icon'><BsBookmark/></div>
                       
                    
                </section>
                </IconContext.Provider>
                <section className='Like'>
                    <span>1.5 Mi</span>
                </section>
                <div className='legend'>
                    <p>
                        <span> Mc Ryan:</span> Novo albúm ja está disponivel familía 
                    </p>
                </div>
                <div className='time-post'>
                    <time>há 1 hora</time>
                </div>
                <div className='comment'>

                    <div className='fake-comment'>

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                            <BsEmojiSmile/>
                            </div>
                           
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário'/>
                        
                    </div>
                    <button>Publicar</button>
                </div>

                
         </div>

         <header className='header-post'>

                <div className="infos-post">
                    <img className="feed" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg/800px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg" alt="Postagem" />
                    <span>Lionel Messi</span>
                </div>

                    <FiMoreHorizontal />
            </header>

            <div className='img-post'>
                <img src= "https://tmssl.akamaized.net//images/foto/galerie/lionel-messi-1711467863-132837.jpg?lm=1711467875" alt="fotos" />
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size: "30px"}}> 
                
                <section className='engajament-post'>
                 <div className='icons-1'>
                    <div className='icon'><IoMdHeartEmpty/></div>
                    <div className='icon'><BsChat/></div>
                    <div className='icon'><FiSend/></div>
                 </div>
                 <div className='icon'><BsBookmark/></div>
                       
                    
                </section>
                </IconContext.Provider>
                <section className='Like'>
                    <span>30 mi</span>
                </section>
                <div className='legend'>
                    <p>
                        <span> Lionel Messi:</span> Victoria muy importante para la secuencia del campeonato
                    </p>
                </div>
                <div className='time-post'>
                    <time>há 1 hora</time>
                </div>
                <div className='comment'>

                    <div className='fake-comment'>

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                            <BsEmojiSmile/>
                            </div>
                           
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentário'/>
                        
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        
        </>
    )

}