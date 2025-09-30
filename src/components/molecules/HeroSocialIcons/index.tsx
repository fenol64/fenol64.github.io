import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface HeroSocialIconsProps {
  t: any;
}

const socials = [
  { name: 'linkedin', href: 'https://www.linkedin.com/in/fenol64', icon: FaLinkedin },
  { name: 'github', href: 'https://github.com/fenol64', icon: FaGithub },
  { name: 'email', href: 'mailto:fenol64.dev@gmail.com', icon: MdEmail },
];

const HeroSocialIcons: React.FC<HeroSocialIconsProps> = ({ t }) => (
  <div className="flex gap-4 mt-8">
    {socials.map((social) => (
      <a key={social.name} href={social.href} target='_blank' className="bg-blue-100 text-blue-600 p-3 rounded-full shadow hover:bg-blue-200 transition" title={t(`socials.${social.name}`)}>
        {React.createElement(social.icon, { size: 24 })}
      </a>
    ))}
  </div>
);

export default HeroSocialIcons;
