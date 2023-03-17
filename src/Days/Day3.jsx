import './Day3.css'
import { useState } from 'react';

export default function Day1() {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
    // const [translateX, setTranslateX] = useState("");

    //Si se hace click en el boton, entonces isOpen se vuelve true y se le agrega la clase show-nav
    const handleClick = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='body'>
            <div className={`container ${isOpen === true? 'show-nav' : 'close-nav'}`}>
                <div className="circle-container">
                    <div className="circle">
                        <button id="close" className="close"
                        onClick={() => handleClose()}
                        > ⨯ </button>
                        <button id="open" className="open"
                        onClick={() => handleClick()}
                        >
                            <> ≡ </>
                        </button>
                    </div>
                </div>
                <div className="contenedorDia3">
                    <h1>Amazing Article</h1>
                    <small>Florin Pop</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
                    <h3>My Dog</h3>
                    <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="doggy" className='imagenDia3'/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
                </div>
            </div>
            <nav className={`${isOpen === true? 'navBar' : 'notNavBar'}`}>
                <ul>
                    <li><i></i><a href="#">🏠︎ Home</a></li>
                    <li><i></i><a href="#">👤 About</a></li>
                    <li><i></i><a href="#">✉️ Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}