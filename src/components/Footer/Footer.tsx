import { memo, useMemo } from "react";

import { SOCIAL_LINKS } from "../../config/socialLinks";
import type { SocialLink } from "../../config/socialLinks";
import "./Footer.scss";

const Footer = memo((): JSX.Element => {
  const renderSocialLinks = useMemo(
    () =>
      SOCIAL_LINKS.map(({ href, Icon, label }: SocialLink) => (
        <div className="icono" key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar perfil de ${label}`}
            className="social-link"
          >
            <Icon className="icon" aria-hidden="true" />
          </a>
        </div>
      )),
    []
  );

  const footerText = useMemo(
    () => "Passionately crafted by Lucas Cabral ❤🚀",
    []
  );

  return (
    <footer className="footer">
      <nav
        className="contenedor-de-iconos"
        role="navigation"
        aria-label="Enlaces de redes sociales"
      >
        {renderSocialLinks}
      </nav>

      <div className="descripcion">
        <p>{footerText}</p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
