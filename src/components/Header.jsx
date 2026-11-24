import { useEffect, useRef, useState } from 'react';
import { Brand } from './Brand.jsx';
import { Navbar } from './Navbar.jsx';
import { MenuIcon } from './Icons.jsx';

/** React administra el estado del menú y limpia los listeners automáticamente. */
export function Header({ brand, navigation, contact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1100px)');

    function closeOnEscape(event) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function closeOnOutsideClick(event) {
      if (media.matches && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function closeOnBreakpointChange() {
      setMenuOpen(false);
    }

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);
    media.addEventListener('change', closeOnBreakpointChange);

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      media.removeEventListener('change', closeOnBreakpointChange);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      data-header
      data-open={menuOpen}
      data-scrolled={scrolled}
      className="group fixed z-50 flex min-h-20 items-center justify-between gap-6 rounded-xl bg-brand-dark px-6 py-3 text-white shadow-lg transition-[top] duration-300 top-[clamp(34px,4.2vw,58px)] right-[clamp(30px,4.2vw,58px)] left-[clamp(30px,4.2vw,58px)] data-[scrolled=true]:top-[22px] max-[1100px]:min-h-[72px] max-[1100px]:px-[18px] max-[1100px]:py-3.5 max-[700px]:top-6 max-[700px]:right-6 max-[700px]:left-6"
    >
      <Brand {...brand} />

      <button
        ref={menuButtonRef}
        type="button"
        aria-controls="navegacion-principal"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
        onClick={() => setMenuOpen((open) => !open)}
        className="ml-auto hidden size-11 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-transparent text-white max-[1100px]:inline-flex"
      >
        <MenuIcon />
      </button>

      <Navbar
        links={navigation}
        contact={contact}
        onNavigate={() => setMenuOpen(false)}
      />
    </header>
  );
}
