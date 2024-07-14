import { QcSocial } from "./QcSocial.js";

import facebookIcon from "../../assets/icons/facebook-dark.svg";
import twitterIcon from "../../assets/icons/twitterX-dark.svg";
import youtubeIcon from "../../assets/icons/youtube-dark.svg";

import facebookIconLight from "../../assets/icons/facebook.svg";
import twitterIconLight from "../../assets/icons/twitterX.svg";
import youtubeIconLight from "../../assets/icons/youtube.svg";

export default {
  title: "Composants/QcSocial",
  tags: ['autodocs'],
  component: QcSocial,
  argTypes: {
    titre: {
      control: "text",
      description: "Titre du composant.",
    },
    medias: {
      control: "object",
      description: "Liste de médias sociaux sous forme d'objet {icon, url, text}.",
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "Thème du composant.",
    },
  },
  render: ({ ...args }) => {
    const medias = JSON.stringify(args.medias);
    return `
      <qc-social
        ${args.titre ? `titre="${args.titre}"` : ''}
        ${args.theme ? `theme="${args.theme}"` : ''}
        medias='${medias}'
      >
      </qc-social>`;
  },
};

export const Default = {
  args: {
    titre: "Suivez-nous sur les réseaux sociaux",
    medias: [
      { icon: facebookIcon, url: "https://facebook.com", text: "Facebook" },
      { icon: twitterIcon, url: "https://twitter.com", text: "Twitter" },
      { icon: youtubeIcon, url: "https://linkedin.com", text: "LinkedIn" },
    ],
    theme: "dark",
  },
  decorators: [
    (Story) => `
      <div style="background-color: #223654; padding: 3rem;">
        ${Story()}
      </div>
    `,
  ],
};

Default.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};

export const LightTheme = {
  args: {
    titre: "Suivez-nous sur les réseaux sociaux",
    medias: [
      { icon: facebookIconLight, url: "https://facebook.com", text: "Facebook" },
      { icon: twitterIconLight, url: "https://twitter.com", text: "Twitter" },
      { icon: youtubeIconLight, url: "https://linkedin.com", text: "LinkedIn" },
    ],
    theme: "light",
  },
  decorators: [
    (Story) => `
      <div class="p-4">
        ${Story()}
      </div>
    `,
  ],
};

LightTheme.storyName = "Thème clair";

LightTheme.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};
