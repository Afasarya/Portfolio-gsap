const site_url =
  process.env.NEXT_PUBLIC_APP_URL || 
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
  "https://the-portfolio-arya.vercel.app";

export const siteConfig = {
  name: "Arya | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://twitter.com/tehseen_type",
    github: "https://github.com/tehseen01/the-portfolio",
  },
  mailSupport: "coderea9@gmail.com",
};
