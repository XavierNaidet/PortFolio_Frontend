export type MediatProps = {
  name: string;
  href: string;
  icon: string; // Path to the icon
};

export const mediats : MediatProps[] = [
  {
    name: "GitHub",
    href: "https://github.com/YourGithubName",
    icon: "/logos/black/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/YourLinkedinName/",
    icon: "/logos/black/linkedin.svg",
  },
  {
    name: "Mail",
    href: "mailto:your@mail.com",
    icon: "/icons/mailicon.svg",
  },
];