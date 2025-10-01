import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => (
  <footer className="w-full bg-slate-50 border-t border-slate-200 pt-8 pb-4">
    <div className="container max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
      <div className="flex-1 min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">{t("brand")}</h3>
        <p className="text-slate-600 text-sm mb-4">{t("description")}</p>
      </div>
      <div className="flex-1 min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">{t("quickLinks.title")}</h3>
        <ul className="text-slate-600 text-sm space-y-1">
          {t.raw("quickLinks.links").map((link: any) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 min-w-[200px]">
        <h3 className="font-bold text-lg mb-2">{t("connect.title")}</h3>
        <div className="flex gap-4 mb-2">
          <a href={t("connect.github")} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub size={18} />
          </a>
          <a href={t("connect.linkedin")} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin size={18} />
          </a>
          <a href={t("connect.email")} target="_blank" rel="noopener noreferrer" title="Email">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </div>
    <hr className="my-6 border-slate-200" />
    <div className="container max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center text-xs text-slate-500 gap-2">
      <span>
        © {new Date().getFullYear()} Fernando Oliveira. {t("footer.madeWith")} <FaHeart className="inline text-red-500 mx-1" size={12} /> {t("footer.andCoffee")}
      </span>
      <a href="#top" className="font-semibold text-slate-800 hover:underline">{t("footer.backToTop")}</a>
    </div>
  </footer>
);

export default Footer;
