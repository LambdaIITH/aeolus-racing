import { Instagram, Facebook, type Icon as IconType, Linkedin, Youtube } from '@lucide/astro';

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Get In Touch", href: "/contact" },
];

type SocialItems = {
  name: string;
  href: string;
  icon: typeof IconType;
};

export const socials: SocialItems[] = [
  { name: "Instagram", href: "https://instagram.com/aeolus_racing", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/aeolus.racing", icon: Facebook },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/team-aeolus-racing/", icon: Linkedin },
  { name: "Youtube", href: "https://www.youtube.com/channel/UCWKZm9_iErSXgVYuIn_Ujqg", icon: Youtube },
];