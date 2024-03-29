import './Style/Day3.css'
import { useState } from 'react';

export default function Day3() {
    const [isOpen, setIsOpen] = useState(false);

    //Si se hace click en el boton, entonces isOpen se vuelve true y se le agrega la clase show-nav
    const handleClick = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='bodyDay3'>
            <div className={`containerDay3 ${isOpen === true? 'show-navDay3' : 'close-navDay3'}`}>
                <div className="circle-containerDay3">
                    <div className="circleDay3">
                        <button id="closeDay3" className="closeDay3" onClick={() => handleClose()}> ⨯ </button>
                        <button id="openDay3" className="openDay3" onClick={() => handleClick()}>
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
            <nav className={`${isOpen === true? 'navBarDay3' : 'notNavBarDay3'}`}>
                <ul>
                    <li><i></i><a href="#">🏠︎ Home</a></li>
                    <li><i></i><a href="#">👤 About</a></li>
                    <li><i></i><a href="#">✉️ Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}