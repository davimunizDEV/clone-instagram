import { AiOutlineSearch, AiFillHome} from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './style.css'


export function Header() {

    return (
        <header className="header" >
            <div className="container">
                <span className='letreiro'>Muniz app</span>
        <div className="input-fake"> 
        <IconContext.Provider value={{color: '#8e8e8e'}}>
            <AiOutlineSearch />
        </IconContext.Provider>
            

            <input placeholder='pesquisar'>
            </input>
        </div>

        <div className='menu-icons'>
            <IconContext.Provider value={{size: '26px'}}>
            <div>
             <AiFillHome />
            </div>
            <div>
             <RiMessengerLine />
            </div>
            <div>
             <BsPlusSquare />
            </div>
            <div>
             <MdOutlineExplore />
            </div>
            <div>
             <FiHeart />
            </div>
            
            
           
           
           
            </IconContext.Provider>
            <img className='img-user' src='https://media.licdn.com/dms/image/v2/D4D03AQH0lLD_nyprHg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727386632071?e=1734566400&v=beta&t=VqCpgv4KXlVmaP1PX_K_HPgOEjUa0MjSaVssHo9QLxI' alt='perfil'/>
        </div>
        
        </div>
    </header>
    );
}
               
