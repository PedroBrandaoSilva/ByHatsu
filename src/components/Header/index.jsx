import { useState, useEffect } from "react";
import { HeaderContainer, Image, NavList, Burger } from "./style";
import { animes } from "../../data/animes";

function Header({ setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 645);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 645);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <HeaderContainer>
      <Image src="/assets/react.svg" alt="Logo" />

      <Burger $isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Burger>

      <NavList $isOpen={menuOpen}>
        {!isMobile && (
          <>
            <li><a href="#">Modelos</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </>
        )}

        {isMobile &&
          animes.map(anime => (
            <li key={anime} onClick={() => handleAnimeClick(anime)}>
              {anime}
            </li>
          ))}
      </NavList>
    </HeaderContainer>
  );
}

export default Header;
