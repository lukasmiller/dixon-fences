import Link from "next/link";
import type { ReactNode } from "react";

type CmsPageShellProps = {
  title: string;
  subtitle?: string;
  body: string;
  currentPath?: string;
  children?: ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
];

export default function CmsPageShell({
  title,
  subtitle,
  body,
  currentPath,
  children,
}: CmsPageShellProps) {
  const paragraphs = body.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="page1" id="top">
      <header>
        <div className="container_12">
          <div className="grid_12">
            <h1>
              <Link href="/">
                <img src="/template/images/logo.png" alt="Dixon Fences" />
              </Link>
            </h1>
            <div className="menu_block">
              <nav className="horizontal-nav full-width horizontalNav-notprocessed">
                <ul className="sf-menu">
                  {navItems.map((item) => {
                    const isCurrent = currentPath === item.href || (item.href === "/" && currentPath === "/");

                    return (
                      <li key={item.href} className={isCurrent ? "current" : ""}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="clear" />
            </div>
          </div>
        </div>
      </header>

      <div className="page1_block">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>

      <div className="content">
        <div className="container_12">
          <div className="grid_12">
            {children ? (
              children
            ) : (
              <article className="extra_wrapper">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>
            )}
          </div>
        </div>
      </div>

      <footer>
        <div className="container_12">
          <div className="grid_12">
            <div className="socials">
              <a href="#"><i className="icon-google-plus" /></a>
              <a href="#"><i className="icon-twitter" /></a>
              <a href="#"><i className="icon-facebook" /></a>
              <a href="#"><i className="icon-pinterest" /></a>
              <a href="#"><i className="icon-linkedin" /></a>
            </div>
            <address>
              <strong>Dixon Fences</strong>
              123 Main Street <br />
              Your City, ST 12345 <br />
              <span>Phone:</span> (555) 123-4567
            </address>
            <div className="copy">
              <strong>Fencing Contractor</strong> &copy; 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
