import { Icon } from "@iconify/react";
import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
import featureOpenFill from "@iconify/icons-eva/file-add-outline";
import { PATH_PAGE } from "src/routes/paths";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: "/",
  },
  {
    title: "About",
    path: "/About",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: "About",
        items: [
          { title: "What is DeSci?", path: PATH_PAGE.desci },
          { title: "Ethereum", path: PATH_PAGE.ethereum },
          { title: "Partners", path: PATH_PAGE.partners },
          { title: "FAQ", path: PATH_PAGE.faq },
        ],
      },
    ],
  },
  {
    title: "NFT",
    path: "/NFT",
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: "NFT",
        items: [
          { title: "Microbes #", path: PATH_PAGE.microbes },
          { title: "DNA", path: PATH_PAGE.dna },
          { title: "Cosmos", path: PATH_PAGE.cosmos },
        ],
      },
    ],
  },
  {
    title: "Community",
    path: "/Community",
    icon: <Icon icon={featureOpenFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: "Community",
        items: [
          { title: "Socials", path: PATH_PAGE.socials },
          { title: "Research Community", path: PATH_PAGE.researchCommunity },
          { title: "Artistic Community", path: PATH_PAGE.artisticCommunity },
          { title: "Desci DAO", path: PATH_PAGE.desciDAO },
        ],
      },
    ],
  },
  {
    title: "Contact",
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: PATH_PAGE.contact,
  },
];

export default menuConfig;
