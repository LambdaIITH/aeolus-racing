import { Instagram, Facebook, type Icon as IconType, Linkedin, Youtube } from '@lucide/astro';
import { socialLinks } from './contact';

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/#sponsors" },
  { name: "Get In Touch", href: "/contact" },
];

type SocialItems = {
  name: string;
  href: string;
  icon: typeof IconType;
};

export const socials: SocialItems[] = [
  { name: "Instagram", href: socialLinks.instagram, icon: Instagram },
  { name: "Facebook", href: socialLinks.facebook, icon: Facebook },
  { name: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { name: "Youtube", href: socialLinks.youtube, icon: Youtube },
];