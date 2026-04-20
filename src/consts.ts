export const SITE_TITLE = "Mainline - Modern Astro Template";
export const SITE_DESCRIPTION =
  "A modern, fully featured Astro template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.";

export const GITHUB_URL =
  "https://github.com/shadcnblocks/mainline-astro-template";

export const SITE_METADATA = {
  title: {
    default: "Mainline - Modern Astro Template",
    template: "%s | Mainline",
  },
  description:
    "A modern Astro template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
  keywords: [
    "Astro",
    "astro template",
    "astro theme",
    "astro starter",
    "shadcn template",
    "shadcn theme",
    "shadcn starter",
    "tailwind template",
    "tailwind theme",
    "tailwind starter",
    "mdx template",
    "mdx theme",
    "mdx starter",
  ],
  authors: [{ name: "shadcnblocks.com" }],
  creator: "shadcnblocks.com",
  publisher: "shadcnblocks.com",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Mainline - Modern Astro Template",
    description:
      "A modern Astro template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
    siteName: "Mainline",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mainline - Modern Astro Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainline - Modern Astro Template",
    description:
      "A modern Astro template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
    images: ["/og-image.jpg"],
    creator: "@ausrobdev",
  },
};

export type ServiceIcon =
  | "circle-dot"
  | "blend"
  | "diamond"
  | "chart-no-axes-column";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const SERVICES_ITEMS: Service[] = [
  {
    title: "Développement web",
    description:
      "Pour un produit de qualité : une forte expertise technique pour garder ta plateforme web à la pointe de la technologie.",
    icon: "circle-dot",
  },
  {
    title: "UX & UI Design",
    description:
      "Pour te démarquer : des wireframes et maquettes graphiques respectant le comportement utilisateur, et une identité graphique sexy et unique.",
    icon: "blend",
  },
  {
    title: "Gestion de projet web",
    description:
      "Pour garder le cap : un interlocuteur unique et une équipe technique dédiée sur toute la durée de ton projet, avec une méthodologie testée et approuvée.",
    icon: "diamond",
  },
  {
    title: "Infrastructure & maintenance de serveurs",
    description:
      "Pour anticiper les imprévus : de la maintenance et du monitoring de bugs en continu, tout en prenant à charge la gestion de ton hébergement web.",
    icon: "chart-no-axes-column",
  },
];

export const TEAM = [
  {
    name: 'Grégoire',
    key: 'gregoire',
    emoji: '🦅',
    linkedin: 'https://www.linkedin.com/in/grégoire-willmann-8b38a592/',
    job: 'Ingénieur backend, expert Ruby on Rails',
    title: 'Grand chaman des serveurs et du back-end',
    text: "Tout juste diplômé de l'école d'ingénieurs Télécom Saint-Etienne, je me suis lancé dans l'entrepreneuriat. Suite à de nombreuses demandes de développements web sur-mesure, nous avons décidé de créer une plateforme pour un de nos clients de l'époque. C'est comme ça que Kinoba est née. Je suis quelqu'un de réfléchi mais je n'hésite pas à mettre du son dans le bureau pour égayer nos journées !",
    totem: 'Mon totem : une plante, deux plantes, trois plantes...',
  },
  {
    name: 'Gabriel',
    key: 'gabriel',
    emoji: '🦌',
    linkedin: 'https://www.linkedin.com/in/gabriel-calmels-b76762a7/',
    job: 'Ingénieur backend, expert Symfony et Ruby on Rails',
    title: 'Intrépide guerrier back-end',
    text: "Diplômé de la même école d'ingénieurs que Grégoire, j'ai toujours été fasciné par l'entrepreneuriat. Après mes expériences avec Grégoire, je me suis lancé dans ce qui me stimule le plus : le dev. Je suis passionné par les nouvelles technologies et l'innovation et j'ai un humour… acide. J'aime le travail bien fait, mais si ça peut être fait avec le sourire, c'est encore mieux !",
    totem: 'Mon totem : un puzzle de poche pour stimuler mon esprit et une montre connectée pour être toujours notifié',
  },
  {
    name: 'François',
    key: 'francois',
    emoji: '🦊',
    linkedin: 'https://www.linkedin.com/in/françois-loupias-550a6411a/',
    job: 'Engineering manager Ruby on Rails, Vue.js, Angular, ReactJS et Svelte',
    title: 'Chaman fullstack',
    text: "C'est après avoir fait le bootcamp The Hacking Project pour confirmer la passion que j'avais pour le dev que j'ai décidé de rejoindre l'équipe Kinoba. J'ai de nombreux projets personnels et j'aime apprendre de nouvelles choses. Je suis curieux et motivé, mais je suis surtout imbattable aux séances de tir à l'arc organisées le midi dans l'open space. Tu peux pas test !",
    totem: 'Mon totem : une loupe de précision pour toujours taper dans le mille',
  },
  {
    name: 'Émilie',
    key: 'emilie',
    emoji: '🦔',
    linkedin: 'https://www.linkedin.com/in/emilie-maniglier/',
    job: 'Lead développeuse fullstack ReactJS, Vue.js, Angular et Ruby on Rails',
    title: 'Exploratrice du frontend',
    text: "Après plusieurs années en biologie, il était temps pour moi de me tourner vers un domaine dans lequel j'allais réellement m'épanouir. J'ai donc choisi de me reconvertir dans le développement Web. A l'issue d'une formation intense chez O'Clock, j'ai eu la chance de rencontrer la tribu Kinoba. J'aime me promener dans la nature pour me détendre loin des écrans et je suis toujours prête à relever de nouveaux défis !",
    totem: "Mon totem : une boussole pour compenser mon sens de l'orientation",
  },
  {
    name: 'Léo',
    key: 'leo',
    emoji: '🪶',
    linkedin: 'https://www.linkedin.com/in/leo-guilhamat-982182207/',
    job: 'Responsable de projets web et Business developer',
    title: 'Explorateur et conquérant',
    text: "Après avoir évolué dans le milieu de la vente et avoir été manager d'influenceurs, je me lance désormais dans la gestion de projet web et le développement commercial pour assister et accompagner les équipes techniques Kinoba. J'adore la musique et le sport, sans jamais oublier mon goût prononcé pour les montaditos espagnols !",
    totem: "Mon totem : une plume, pour m'aider à taper dans le mille avec légèreté",
  },
  {
    name: 'Étienne',
    key: 'etienne',
    emoji: '🐺',
    linkedin: 'https://www.linkedin.com/in/etienne-lachana-352398166/',
    job: 'Développeur fullstack Ruby on Rails, Laravel, Vue.js et ReactJS',
    title: 'Redoutable guerrier de tous les fronts',
    text: "Diplômé d'une école en développement web et à la suite d'une première expérience professionnelle, mon goût pour l'aventure m'a guidé chez Kinoba. Passionné par les nouvelles technologies, le développement me permet chaque jour d'apprendre de nouvelles choses. Cuisinier du dimanche et amateur de Brassens, la légende voudrait que je n'ai jamais perdu au Blind Test.",
    totem: 'Mon totem : un opinel, un peu pour la survie, beaucoup pour le saucisson',
  },
  {
    name: 'Alexis',
    key: 'alexis',
    emoji: '🧙',
    linkedin: 'https://www.linkedin.com/in/alexisbarreirinho/',
    job: 'Développeur fullstack Ruby on Rails, Vue.js et ReactJS',
    title: 'Magicien légendaire fullstack',
    text: "Après des années en tant que chef de projet digital dans différentes agences de développement web, j'ai naturellement migré vers le métier de… développeur web. J'ai survécu au Boot Camp du Wagon à Lyon grâce à mes madeleines. Maintenant dans les rangs de Kinoba je vais pouvoir donner vie à des projets passionnants !",
    totem: 'Mon totem : un paquet de madeleine pour alimenter les méninges et une balle pour occuper les mains',
  },
  {
    name: 'Marc',
    key: 'marc',
    emoji: '🛡️',
    linkedin: 'https://www.linkedin.com/in/marc-g%C3%B6tze-95750426b/',
    job: 'Développeur fullstack Ruby on Rails, Vue.js et ReactJS',
    title: 'Paladin fullstack',
    text: "Fort de 12 ans d’expérience à la radio et ayant toujours gravité autour de l’informatique via mes passions et mon environnement culturel, je me suis naturellement orienté vers le développement web. Diplômé chez Openclassrooms puis au Wagon, j’ai plaisir à rejoindre la tribu Kinoba pour travailler dans un domaine qui a toujours fait sens pour moi.",
    totem: 'Mon totem : une casquette pour le style et une console portable pour le fun',
  },
  {
    name: 'Hugo',
    key: 'hugo',
    emoji: '🎧',
    linkedin: 'https://www.linkedin.com/in/hugo-fortunier-9788a6ba/',
    job: 'Développeur fullstack Ruby on Rails et Vue.js',
    title: 'Redoutable guerrier de tous les fronts',
    text: "Après plusieurs années de travail dans un laboratoire d’analyse en métallurgie, j’ai décidé de me réorienter dans le développement web pour être plus stimulé dans mon activité professionnelle. J’ai donc suivi la formation du Wagon. J’ai ensuite alterné entre Freelance sur des petits projets web, professeur au Wagon pour ensuite travailler 2 ans dans une entreprise lyonnaise en tant que développeur fullstack. En quête de nouveaux challenges, j’ai finalement rejoint la joyeuse équipe de Kinoba.",
    totem: 'Mon totem : un vieux casque audio tout déchiqueté par les années',
  },
  {
    name: 'Clarisse',
    key: 'clarisse',
    emoji: '🏕️',
    linkedin: 'https://www.linkedin.com/in/clarisse-fabr%C3%A8ges/',
    job: 'Développeuse fullstack Ruby on Rails et Vue.js',
    title: 'Redoutable guerrière de tous les fronts',
    text: "Après plusieurs expériences de gestion de projet dans le milieu associatif, aussi bien en France qu'à l'international, j'ai décidé de suivre une nouvelle passion : le développement web. Convaincue que la tech peut aussi servir à améliorer le monde et avide de connaissances nouvelles, j'ai entamé mon alternance : après deux mois intensifs au Wagon, je rejoins Kinoba avec motivation. Et quand je ne suis pas en train de coder, je suis souvent sur un terrain de volley ou perdue dans la montagne !",
    totem: "Mon totem : Ma mini gourde rouge, malgré les critiques, car ce n'est pas la taille qui compte",
  },
  {
    name: 'Tayeb',
    key: 'tayeb',
    emoji: '🛸',
    linkedin: 'https://www.linkedin.com/in/tayeb-imadache-business-manager/',
    job: 'Commercial et business developer',
    title: 'Explorateur et conquérant',
    text: "Fort de 20 années d'expériences en qualité d'ingénieur commercial dans le domaine de la prestation de services, mon envie de rejoindre une société experte dans le développement web m'a naturellement conduit chez Kinoba. Très curieux de nature, toujours partant pour partager des verres, j'ai besoin de travailler dans un environnement positif (bienveillant, bonne ambiance, stimulant).",
    totem: 'Mon totem : des personnages de films pour décorer mon bureau (Gandalf, Aragorn, Stormtrooper, ...)',
  },
  {
    name: 'Amir',
    key: 'amir',
    emoji: '🧴',
    linkedin: 'https://www.linkedin.com/in/amirbcer/',
    job: 'Lead développeur fullstack Vue.js, Angular, React, Symfony et Ruby on Rails',
    title: 'Redoutable guerrier de tous les fronts',
    text: "Passionné d’informatique et de nouvelles technologies depuis mon enfance, j’en ai fait naturellement mon métier. Après mes études en développement web, j’ai travaillé pendant plusieurs années dans des contextes variés où j’ai pu enrichir mon expertise technique et mon sens de l’entrepreneuriat à travers divers projets. Rejoindre Kinoba et sa tribu est une belle opportunité de contribuer à une aventure excitante et d’apporter mon esprit d’équipe sans faille : un pour tous, tous pour un !",
    totem: 'Mon totem : une crème pour les mains, car tous les claviers méritent des mains douces.',
  },
  {
    name: 'Sophie',
    key: 'sophie',
    emoji: '🦊',
    linkedin: 'https://www.linkedin.com/in/sophie-renard-80ab2b37/',
    job: 'Directrice de projets',
    title: 'Facilitatrice du conseil',
    text: "Après neuf ans à jongler entre les projets dans l'univers des paiements, j'ai décidé qu'il était temps de changer de terrain de jeu. C'est naturellement que je rejoins l'équipe de Kinoba avec l'envie d'intégrer un collectif passionné. Ce que je fais le mieux ? Veiller à ce que tout roule, même quand les projets prennent des virages serrés. Pas forcément dans cet ordre mais toujours avec passion, j'ai un faible pour les jeux de mots, la mode et le fromage.",
    totem: "Mon totem : un stylo pour noter partout les grandes idées et les petites pensées (ou l'inverse)",
  },
  {
    name: 'Thomas',
    key: 'thomas',
    emoji: '☕',
    linkedin: 'https://www.linkedin.com/in/toww',
    job: 'Développeur fullstack Ruby on Rails, ReactJS et Three.js',
    title: 'Redoutable guerrier de tous les fronts',
    text: "Après plusieurs années en tant que designer graphique, je suis revenu à ma passion pour le code. Les formations The Hacking Project, Three.js Journey et une première expérience m'ont permis d'ajouter des cordes à mon arc avant de rejoindre la team Kinoba ! De nature curieuse, j'aime travailler en équipe, apprendre et partager, autant le code que les derniers morceaux que j'ai appréciés.",
    totem: 'Mon totem : un café, des post-its pour ne rien oublier et un paquet de Dinosaurus',
  },
];

export const SERVICES = {
  web_development: {
    name: 'web_development',
    icon: 'code',
    stacks: [
      {
        label: 'backend',
        items: [
          'backend.rails',
          'backend.node',
          'backend.symfony',
          'backend.django',
          'backend.laravel',
        ],
      },
      {
        label: 'frontend',
        items: [
          'frontend.react',
          'frontend.vue',
          'frontend.angular',
          'frontend.svelte',
          'frontend.typescript',
        ],
      },
      {
        label: 'design',
        items: [
          'frontend.tailwind',
          'frontend.bulma',
          'frontend.bootstrap',
          'frontend.sass',
          'frontend.css',
        ],
      },
    ],
  },
  ui_ux_design: {
    name: 'ui_ux_design',
    icon: 'click',
    stacks: [
      {
        label: 'tools',
        items: ['ux_ui.figma', 'ux_ui.figjam', 'ux_ui.adobe'],
      },
      {
        label: 'creation',
        items: [
          'ux_ui.design_system',
          'ux_ui.graphic_charter',
          'ux_ui.logo',
          'ux_ui.mockup',
          'ux_ui.prototyping',
        ],
      },
    ],
  },
  project_management: {
    name: 'project_management',
    icon: 'calendar',
    stacks: [
      {
        items: [
          'project_management.agile',
          'project_management.trello',
          'project_management.slack',
          'project_management.sprints',
          'project_management.budget_tracking',
        ],
      },
    ],
  },
  infrastructure_maintenance: {
    name: 'infrastructure_maintenance',
    icon: 'cloud',
    stacks: [
      {
        items: [
          'devops.jenkins',
          'devops.kubernetes',
          'devops.docker',
          'devops.sentry',
          'devops.heroku',
          'devops.ci_cd',
          'devops.github_actions',
        ],
      },
    ],
  },
};

export const KPIS = {
    clients: 110,
    tailor_made_projects: 65,
    team_support_max_length: (() => {
      const now = new Date();
      const startDate = new Date('2020-11');
      const diffMs = now.getTime() - startDate.getTime();
      const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);
      return Math.round(diffYears * 2) / 2;
    })(),
    yearly_visitors: '1.5M',
};
