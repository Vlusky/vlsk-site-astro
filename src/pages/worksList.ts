import { remToPixels } from "../scripts/unitConvertions";

interface image {
  src: string;
  alt: string;
  link?: string;
}

interface youtube {
  id: string;
  title: string;
}

// ![todo) change the src to the scaled down discord version
export const illust: image[] = [
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882866434134066/with-oasis.png?width=310&height=413",
    alt: "Cover art for CrunchyBagels's novel With Oasis",
    link: "https://www.honeyfeed.fm/novels/8699"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1081772078400815174/Fpk87u0aYAAZbmX.png?width=377&height=413",
    alt:"Miku (Purin) Suride wearing a uniform from Blue Archive",
    link:"https://twitter.com/vlusky_husky/status/1628400101331972098"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1078613629143879711/FpQ0x4baEAI_Xrt.png?width=231&height=412",
    alt:"Raimon Matataki from Hoshikuzu Telepath",
    link:"https://twitter.com/vlusky_husky/status/1626983719235092481"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1081772357875671151/FoNtDhsaMAAtHOB.png?width=275&height=413",
    alt:"Lisa Imai wearing a Hanasakigawa sailor uniform",
    link:"https://twitter.com/vlusky_husky/status/1622260425864933377"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1081772733110702311/FnpmR7vaYAAbKt4.png?width=734&height=413",
    alt:"Diamond from Houseki no Kuni in low poly style",
    link:"https://twitter.com/vlusky_husky/status/1619719736727830528"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1081772980020977726/FmwyCuEaMAQ8_Go.png?width=734&height=413",
    alt:"Nijika Ichiji doing the pose from Zettai Sengen",
    link:"https://twitter.com/vlusky_husky/status/1615721737198669824"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1078613899521310760/FlzUZgnaAAE8g0o.png?width=252&height=412",
    alt:"Kita Ikuyo X Kasumi Toyama",
    link:"https://twitter.com/vlusky_husky/status/1611396327187054594"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1081773239291887717/FhdZsUPaMAAhEy2.png?width=413&height=413",
    alt:"#BTRBandParody with Bocchi as Neil from the Lemon Demon - Spirit Phone album cover",
    link:"https://twitter.com/vlusky_husky/status/1591839994683195395"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1081817551702605925/FiVh8hMakAYWaDz.png?width=734&height=413",
    alt:"Ryo Yamada and Rin Shima",
    link:"https://twitter.com/vlusky_husky/status/1595789393721462788"
  },
  {
    src:"https://media.discordapp.net/attachments/1027882514548789279/1078614467249713232/Fi42aQ_aYAAGq9Z.png?width=413&height=413",
    alt:"Rei and Yua from the DIY Anime wearing the costumes of Ran and Moca from Bandori",
    link:"https://twitter.com/vlusky_husky/status/1598274944651390976"
  }
]

export const design: image[] = [
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882862738944061/iyashikei.png?width=734&height=413",
    alt: "Infographic about Iyashikei with Rin Shima",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882863208706059/lock-banner.png?width=734&height=413",
    alt: "Banner design with LOCK or Rokka Asahi",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882865846915102/tomoe-poly.png?width=734&height=413",
    alt: "Banner design with Tomoe Udagawa",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882863561035806/mindspace.png?width=413&height=413",
    alt: "Mindspace album art",
  },
  {
    src: "https://media.discordapp.net/attachments/1027882514548789279/1027882862218858526/crystals.png?width=734&height=413",
    alt: "Crystals",
  }
]

// youtubeID
// https://www.youtube.com/watch?v=_##########

export const motion: youtube[] = [
  {id:"_llL0D8Jbr4",title:"Lyrical Lily - Maihime but Bocchi the Rock!"},
  {id:"kmiwqzMF6F8",title:"Roselia - Sanctuary"},
  {id:"XUYi3lpncOg",title:"Happy Around! - GURU GURU DJ TURN!!"},
  {id:"L_iHuC7Wvo8",title:"Photon Maiden - 4 Challenges"},
  {id:"HXeW1cCc_mE",title:"Afterglow - SENSENFUKOKU"},
  {id:"v5QcY46pDkU",title:"False Noise - Collapse Theme"}, // False Noise - Collapse Theme Motion Graphics test
]


// https://www.youtube.com/watch?v=Z1UXpUNsf08&t=1604s
export const video: youtube[] = [
  {id:"Z1UXpUNsf08",title:"CG Anime Battle Royale"},
  {id:"kOr9n-Y-WW0",title:"Bocchi vs Her Contemporaries"},
  {id:"UQXPOKUt7zQ",title:"Digging the Dig Delight Direct Drive"},
  {id:"F2pAsfzGbk8",title:"Establish Life, Establish Dominance"},
  {id:"e73JIsjQffI",title:"I did not care for K-ON"},
  {id:"TADtZYJVc4k",title:"BanG Dream! and the Bangers it had within"},
  {id:"wqoURmKBVMI",title:"Hands down, the best CGDCT in town"},
  {id:"C6KhZTJDZcM",title:"Netflix Furry Starter Pack"},
]

// soundcloud API song/playlist ID
// api.soundcloud.com/[tracks|playlists]/##########
// (it's hidden somewhere inside the "share embed")

export const songs = [
  "1398023656", // radiopassive
  "1246708291", // loquacious
  "1148013934", // isshokenmei
  "1188342196", // sunset forest
  "1167044617", // lonely night
  "972780034",  // in and out of stasis
];
