import { useState, useEffect } from "react";
import { HeaderContainer, Image, NavList, Burger } from "./style";
import { animes } from "../../data/animes";
import { useNavigate } from "react-router-dom";

function Header({ setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 645);

  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 645);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <HeaderContainer>
      <Image src="https://res.cloudinary.com/dfozzfg3u/image/upload/v1778062561/By_Hatsu_colorido_sem_fundo_roxoPrancheta_1_guxfmn.svg" alt="Logo" />

      <Burger $isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Burger>

      <NavList $isOpen={menuOpen}>
        {!isMobile && (
          <>
            <li><a onClick={() => navigate('/')}>Início</a></li>
            <li><a onClick={() => navigate('/produtos')}>Produtos</a></li>
            <li><a onClick={() => navigate('/new')}>Produtos Novos</a></li>
            <li><a onClick={() => navigate('/feedbacks')}>Feedbacks</a></li>
            <li><a onClick={() => navigate('/faq')}>FAQ</a></li>
          </>
        )}

        {isMobile &&
           (
           <>
            <li><a onClick={() => navigate('/')}>Início</a></li>
            <li><a onClick={() => navigate('/produtos')}>Produtos</a></li>
            <li><a onClick={() => navigate('/new')}>Produtos Novos</a></li>
            <li><a onClick={() => navigate('/feedbacks')}>Feedbacks</a></li>
            <li><a onClick={() => navigate('/faq')}>FAQ</a></li>
          </>
        )}
      </NavList>
    </HeaderContainer>
  );
}

export default Header;
