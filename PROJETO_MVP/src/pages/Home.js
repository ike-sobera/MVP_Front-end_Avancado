import { Link } from 'react-router-dom';
import banner from '../assets/banner.png';
import SimpleListMenu from '../components/SimpleMenu';
import { useState } from 'react';

export default function Home() {
    const [menuOptionSelected, setMenuOptionSelected] = useState('');

    return (
        <div className="content-product">
            
            <header>
                {/* Botão "Sobre Mim" no canto superior esquerdo */}
                <Link to="/about" style={{ position: 'fixed', top: '12px', left: '20px', zIndex: 999, borderRadius: "32px" }}>
                <button className="about-link">Sobre Mim</button>
                </Link>
                    <div className="user">
                        <span>Minha conta</span>
                    </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
                <div className="text-intro" style={{ marginBottom: '20px' }}>
                    <p>Ike Sobera, o DJ perfeito para o seu evento!</p>
                    
                    <SimpleListMenu setMenuOptionSelected={setMenuOptionSelected} />
                </div>
                

                
                {/* Botão para ir para a página Products */}
                <Link to={"/products"} state={{ menuOptionSelected: menuOptionSelected }} style={{ marginLeft: '20px' }}>
                    <button className='more-info'>Contrate agora!</button>
                </Link>
            </section>

        </div>
    );
}
