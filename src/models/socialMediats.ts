export type SocialMediaLinkProps = {
  name: string;
  href: string;
  icon: string; // Path to the icon
  colorClass?: string; // Tailwind color classes
};

export const socialMediaLinks : SocialMediaLinkProps[] = [
  {
    name: "GitHub",
    href: "https://github.com/ton-profil",
    icon: "/logos/black/github.svg",
    colorClass: "hover:text-gray-700",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ton-profil",
    icon: "/logos/black/linkedin.svg",
    colorClass: "hover:text-blue-700",
  },
];