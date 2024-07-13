// Products.js

import { createContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Item from "../components/Item";
import banner from '../assets/banner.png';
import products from '../products.json';

export const Contexto = createContext();

export default function Products() {
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0);
  const [buttonActived, setButtonActived] = useState(false);

  let { state } = useLocation();
  let menuOptionSelected = state.menuOptionSelected;

  useEffect(() => {
    let listaFiltrada = [];
    if(menuOptionSelected !== '') {
      listaFiltrada = products.show.filter(product => product.title === menuOptionSelected);
      setProductList(listaFiltrada);
    } else {
      setProductList(products.show);
    }
  }, [menuOptionSelected]);

  return (
    <div className="content-product">
      <header className="page-header">
        <div className="user">
          <span>Usuário X: <span>{count}</span> compras</span>
        </div>
        
        {/* Container para alinhar os links horizontalmente */}
        <div className="header-links">
          <Link to="/about" className="about-link" style={{ position: 'fixed', top: '12px', left: '220px', zIndex: 999 }}>
            Sobre Mim
          </Link>
          
          <Link to="/" style={{ position: 'fixed', top: '12px', left: '30px', zIndex: 999, borderRadius: "32px" }}>
            <button className="back-button">Voltar para HomePage</button>
          </Link>
        </div>
      </header>

      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>

      <section className="main-products">
        <Contexto.Provider value={setCount}>
          {productList.map((p, index) => (
            <Item key={index} product={p} buttonActived={buttonActived} setButtonActived={setButtonActived} menuOptionSelected={menuOptionSelected}/>
          ))}
        </Contexto.Provider>
      </section>

      <footer>
        {/* Link clicável para o Instagram com estilo */}
        <p>Me acompanhe no Instagram! <a href="https://instagram.com/ikesobera" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>@ikesobera</a></p>
      </footer>
    </div>
  );
}
