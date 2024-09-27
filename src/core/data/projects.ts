export type TCategory = 'web' | 'mobile' | 'xr' | '3d'

export type TMedia = {
  src: string
  alt: string
  type: 'img' | 'video'
}

export interface IProject {
  title: string
  tagline: string
  summary: string
  contributions: string
  shortDescription: string
  stack: string[]
  categories: TCategory[]
  uri?: string
  href?: string
  twColor?: string
  twFade?: string
  twBg?: string
  media?: TMedia[]
}

export const projects: Record<string, IProject> = {
  triptych: {
    title: 'Triptych',
    tagline: '2024 Website Redesign',
    summary:
      'In 2024, Triptych Design Agency embarked on an ambitious website redesign focused on 3D animations and immersive interactivity. The goal was to reflect the agency’s forward-thinking approach, showcasing its technical prowess and creative vision. The result is a visually striking, interactive website that pushes the limits of modern web technology. This redesign garnered industry recognition, earning an Honorable Mention on Awwwards.com and the prestigious ‘Muzli Pick’ design award.',
    shortDescription: '2024 Website Redesign for Triptych Design Agency',
    contributions:
      'As a Front-end Developer, I led the development of the site’s 3D experience using React-Three-Fiber and Three.js. I crafted custom GLSL shaders, including the custom aurora borealis shader, the reflective water shader, and the rippling mouse effect using the ping-pong FBO technique in the home scene. I developed a custom post-processing rendering pipeline that ensured smooth and seamless transitions between the main scene and projects scenes. Additionally, I contributed to the integration of the application within the Webflow CMS, enabling efficient content management while maintaining cutting-edge interactivity.',
    stack: ['webflow', 'next.js', 'r3f', 'three.js', 'gsap', 'typescript', 'tailwind'],
    categories: ['web', '3d'],
    uri: 'triptych',
    href: 'https://www.triptych.co',
    twColor: 'group-hover:text-[#d709ed]',
    twFade: 'from-[#bb63c7]',
    twBg: 'bg-indigo-400 bg-opacity-70',
    media: [
      { src: '/video/triptych-video.mp4', alt: 'triptych-1', type: 'video' },
      { src: '/video/triptych-video-2.mp4', alt: 'triptych-2', type: 'video' },
    ],
  },
  'robin-knows': {
    title: 'Robin Knows',
    tagline: 'Empowering Safe Technology Use Through AI',
    summary:
      'Robin Knows operates in the ‘Age-Tech’ market, offering an AI-powered mobile app designed to help middle-aged users navigate the complexities of modern technology safely and confidently. Available on both iOS and Android, the app uses artificial intelligence to detect scams in image and text formats, while providing step-by-step tech support for a wide range of devices and appliances. The user-friendly chat interface ensures that users receive real-time assistance in an intuitive way.',
    shortDescription: 'AI-Driven Mobile App for Scam Detection and Tech Support',
    contributions:
      'Artificial Intelligence:\nI spearheaded the research and development for implementing AI using Large Language Models (LLMs), which drive the core functionality of the app. To ensure flexibility, I designed the LLM logic to be model-agnostic using the Langchain.js framework. My work included implementing persistent memory for chat interactions, conversation context revision, data vectorization into a vector database (RAG), fine-tuning LLMs based on private documentation, and integrating web-scraping mechanisms for sourcing specialized LLM resources. Additionally, I developed prompt templates and output formatting structures to optimize responses.\n\nMobile Application:\nAs for Front-end development of the mobile application, I built the chat interface UI using Expo and React Native, enabling cross-platform functionality. The chat interface supports audio, image, and text inputs, all transmitted via WebSocket connections between the app and the server. I also developed the UI for device management, notifications, and account settings, using TanStack Query to synchronize real-time data between the user database and the app, ensuring seamless user experience.',
    stack: [
      'react-native',
      'expo',
      'revcat',
      'cognito',
      'nativewind',
      'langchain.js',
      'weaviate',
      'nest.js',
      'prisma',
      'typescript',
    ],
    categories: ['mobile'],
    uri: 'robin-knows',
    href: 'https://www.robinknows.app',
    twColor: 'group-hover:text-[#FE906A]',
    media: [
      { src: '/video/robin-video.mp4', alt: 'robin-knows-1', type: 'video' },
      { src: '/video/robin-video-2.mp4', alt: 'robin-knows-2', type: 'video' },
    ],
  },
  fbi: {
    title: 'FBI',
    tagline: 'SOS: Safe Online Surfing',
    summary:
      'FBI Safe Online Surfing (SOS) is a browser-based educational game aimed at teaching students, grades 3 through 8, about the importance of internet safety. Developed by Triptych, this project seamlessly integrates quizzes, dialogues, and questionnaires into an engaging, narrative-driven game. Players explore diverse landscapes and interact with characters while learning valuable lessons about staying safe online. The game has been distributed to 12,560 schools across 49 states, Washington, D.C., and the Virgin Islands, with over 700,000 students completing the program.',
    shortDescription: 'SOS: A Browser-based Game about Internet Safety',
    contributions:
      'As a Front-end Developer, I played a critical role in building this interactive learning experience, built with Next.js and React-Three-Fiber. Using the Zustand library, I structured the global state-management for preserving the game-state logic throughout a session. I also integrated 3D assets and implemented a real-time physics engine, using Cannon.js, to handle gameplay mechanics, including player controls, NPC interactions, and dynamic environments. To ensure broad accessibility, I optimized the game for performance across various devices, from tablets and mobile phones to desktops, providing a consistent and smooth user experience.',
    stack: ['next.js', 'r3f', 'three.js', 'zustand', 'cannon.js', 'typescript', 'sass'],
    categories: ['web', '3d'],
    uri: 'fbi',
    href: 'https://sos.fbi.gov',
    twColor: 'group-hover:text-[#11bab7]',
    twFade: 'from-cyan-500',
    twBg: 'bg-cyan-500 bg-opacity-50',
    media: [
      { src: '/video/fbi-video.mp4', alt: 'fbi-1', type: 'video' },
      { src: '/video/fbi-video-2.mp4', alt: 'fbi-2', type: 'video' },
    ],
  },
  meta: {
    title: 'Meta',
    tagline: 'MY MAIN STREET',
    summary:
      'In collaboration with Meta and The Atlantic, Triptych developed “Main Street,” a virtual marketplace that blends the familiarity of in-person shopping with the immersive possibilities of the metaverse. Users can create their personalized “Main Street,” showcasing businesses and products tailored to their interests. This unique experience bridges the gap between traditional shopping and the evolving digital world, allowing users to explore actual brands within a curated virtual environment.',
    shortDescription: 'Virtual Marketplace in the Metaverse',
    contributions:
      'As a Front-End Developer for this project, I brought the 3D experience to life using Nuxt.js and vanilla Three.js. I collaborated closely with the lead 3D artist to integrate a large set of assets into a single scene while optimizing performance for a seamless experience. To achieve this, I implemented mesh instancing, allowing for the reuse of assets across the scene without increasing rendering overhead. Additionally, I developed custom raycasting logic to enable point-and-click navigation, giving users an intuitive way to explore the virtual marketplace. I also implemented a particle system to simulate various environmental elements, including snow, falling leaves, bees, and fireflies, corresponding to each season within the scene. This added layer of detail enhanced the immersive experience, giving the virtual marketplace dynamic, seasonally changing atmospheres.',
    stack: ['nuxtjs', 'threejs', 'gsap', 'sass'],
    categories: ['web', '3d'],
    uri: 'meta',
    href: 'https://www.theatlantic.com/sponsored/facebook-spa-2021/your-own-personal-main-street/interactive/',
    twColor: 'group-hover:text-blue-500',
    twFade: 'from-sky-600',
    twBg: 'bg-sky-300 bg-opacity-50',
    media: [
      { src: '/video/meta-video.mp4', alt: 'meta-1', type: 'video' },
      { src: '/video/meta-video-2.mp4', alt: 'meta-2', type: 'video' },
    ],
  },
  northface: {
    title: 'NorthFace',
    tagline: 'Augmented Reality Mountaineering',
    summary:
      'In collaboration with The North Face and The Atlantic, Triptych developed an augmented reality (AR) mobile experience to promote the FUTURELIGHT™ line, telling the incredible story of a historic ski descent of Mt. Lhotse. The experience allows users to virtually climb a 3D-rendered model of the mountain, with 360° high-resolution panoramic views at key checkpoints. The immersive mobile experience was designed with a smooth UI/UX that guides users through this breathtaking journey. The project received critical acclaim, winning ‘FWA Site of the Day’ and ‘The Mobile Site of The Week’ on Awwwards.',
    shortDescription: 'Immersive AR Experience to Promote FUTURELIGHT™ Line',
    contributions:
      'As a Front-End Developer, I worked with Vue.js and vanilla Three.js to implement both gyroscopic motion and touch controls, allowing users to navigate the 3D model of Mt. Lhotse. Users could follow a predetermined path, zoom in for a first-person perspective, or zoom out for a rotational view, with device orientation dictating the direction of view. Additionally, I created animations for interactive elements within the 3D scene and UI components, ensuring a fluid and engaging user experience.',
    stack: ['vuejs', 'threejs', 'gsap', 'sass'],
    categories: ['mobile', 'xr', '3d'],
    uri: 'northface',
    href: 'https://www.theatlantic.com/sponsored/north-face-2019/all-downhill-from-here/3208/',
    twColor: 'group-hover:text-red-500',
    twFade: 'from-zinc-300',
    twBg: 'bg-amber-500 bg-opacity-50',
    media: [
      { src: '/video/nf1.mp4', alt: 'northface-1', type: 'video' },
      { src: '/video/nf2.mp4', alt: 'northface-2', type: 'video' },
    ],
  },
  sanctavia: {
    title: 'Sanctavia',
    tagline: 'Interactive Sanctuary',
    summary:
      'Sanctavia is an online platform where instructors specializing in fitness, meditation, martial arts, and wellness offer one-on-one training sessions as part of the Sanctavia longevity program. Triptych was tasked with creating a unique user experience by presenting courses and products in a virtual sanctuary, where participants unlock portals as they progress through their training.',
    shortDescription: 'Interactive Sanctuary for Martial Arts and Longevity Training',
    contributions:
      'As a Front-End Developer on this project, I played a key role in integrating dynamic content and data structures from the Craft CMS into a Nuxt.js application. This integration powered the storefront and various UI elements throughout the platform. Additionally, I developed an event-management system to control animations within the 3D scene, utilizing vanilla Three.js. I also experimented with GLSL shaders, creating stylized water, reflections, and caustics, enhancing the visual aesthetics of the virtual environment.',
    stack: ['nuxt.js', 'three.js', 'glsl', 'craft CMS', 'sass'],
    categories: ['web', '3d'],
    uri: 'sanctavia',
    href: 'https://www.sanctavia.com',
    twColor: 'group-hover:text-orange-500',
    twFade: 'from-[#f2b366]',
    media: [
      { src: '/video/sanctavia-video-2.mp4', alt: 'sanctavia-1', type: 'video' },
      { src: '/video/sanctavia-video.mp4', alt: 'sanctavia-2', type: 'video' },
    ],
  },
  'wind-river': {
    title: 'Wind River',
    tagline: 'Modern Modular Homes',
    summary:
      'Wind River Built specializes in crafting luxury tiny and modular homes, offering bespoke, high-end designs. To enhance their website, they needed a visually immersive way to showcase their products. Triptych developed an interactive 3D map, allowing users to explore different neighborhoods, view house blueprints, and browse various home structures through a 360° environment, providing an authentic representation of Wind River’s craftsmanship.',
    shortDescription: 'Virtual Showcase for Luxury Tiny Homes',
    contributions:
      'Working as a Front-End Developer, I was tasked with creating the 360° viewing experience using React-Three-Fiber. I configured presentation controls and HDRi environment maps to ensure a realistic and engaging view of each home’s 3D model. I also implemented dynamic placement of custom tooltips within the 3D space to provide in-depth information about the homes, enhancing the user’s interactive experience. Additionally, I integrated custom code into Webflow to seamlessly retrieve and display dynamic data from the Webflow CMS, ensuring that content updates were reflected across the application and within the 3D environment.',
    stack: ['nextjs', 'r3f', 'webflow CMS', 'typescript', 'tailwind'],
    categories: ['web', '3d'],
    uri: 'wind-river',
    href: 'https://www.windriverbuilt.com',
    twColor: 'group-hover:text-green-500',
    twFade: 'from-[#aed494]',
    media: [
      { src: '/video/windriver-video.mp4', alt: 'wind-river-1', type: 'video' },
      { src: '/video/windriver-video-2.mp4', alt: 'wind-river-2', type: 'video' },
    ],
  },

  mastercard: {
    title: 'Mastercard',
    tagline: 'COMMON GROUND',
    summary:
      'In collaboration with Mastercard and The Atlantic, Triptych developed the “Common Ground” website as part of a campaign supporting an immersive show directed by visual artist Glenn Kaino, centered around environmental preservation. The site features a clean UI/UX design and a unique navigation experience, showcasing a series of articles focused on environmental care and protection.',
    shortDescription: 'Interactive Website for Environmental Preservation',
    contributions:
      'As a Front-End Developer, I utilized the GSAP animation library and the ScrollTrigger plugin to create a horizontal scroll element on the landing page, providing a smooth and engaging user experience. I also implemented subtle motion effects for organic forms and reveal animations for the articles within the interactive design. On subsequent pages, I developed parallax movement for various UI elements and ensured that style and spacing were consistent across the site, creating a cohesive and visually appealing aesthetic for the site as a whole.',
    stack: ['nextjs', 'gsap', 'typescript', 'tailwind'],
    categories: ['web'],
    uri: 'mastercard',
    href: 'https://www.theatlantic.com/sponsored/mastercard-2022/common-ground/',
    twColor: 'group-hover:text-red-500',
    twFade: 'from-[#d98f52]',
    media: [
      { src: '/video/mastercard-video.mp4', alt: 'mastercard-1', type: 'video' },
      { src: '/video/mastercard-video-2.mp4', alt: 'mastercard-2', type: 'video' },
    ],
  },
  'lumber-marketplace': {
    title: 'LM',
    tagline: 'Digital E-Commerce for Lumber',
    summary:
      'Lumber Marketplace is a national company that facilitates the buying and selling of lumber at high volumes. They hired Triptych to build a comprehensive e-commerce platform that features an intuitive dashboard for both businesses and clients, providing real-time data on orders, inventory, and product availability. Triptych developed and maintained a custom backend system, along with administrative and client-facing dashboards to streamline operations.',
    shortDescription: 'E-Commerce Site for Lumber Marketplace',
    contributions:
      'As a Front-End Developer, I constructed a REST API to enable seamless communication between the custom backend (built with Nest.js and Prisma) and the admin and customer dashboards. On the front-end, developed using Next.js, I created modular UI components to display real-time data using TanStack Query for efficient synchronization with the backend. I implemented advanced filtering and sorting solutions for large datasets in a product lookup table, optimized by geolocation. Additionally, I helped design and execute complex UX patterns to guide users through the buying and selling process, ensuring a smooth and intuitive experience at every step.',
    stack: ['nextjs', 'TanStack Query', 'nest.js', 'prisma', 'typescript', 'tailwind'],
    categories: ['web'],
    uri: 'lumber-marketplace',
    href: 'https://www.lumbermarketplace.com',
    twColor: 'group-hover:text-yellow-500',
    twFade: 'from-[#7d6c57]',
    media: [
      {
        src: '/video/lm-video-2.mp4',
        alt: 'lm-1',
        type: 'video',
      },
      {
        src: '/video/lm-video.mp4',
        alt: 'lm-2',
        type: 'video',
      },
    ],
  },
  panasonic: {
    title: 'Panasonic',
    tagline: 'Universal Lighting Technologies',
    summary:
      'Universal Lighting Technologies (ULT), a subsidiary of Panasonic Corporation, specializes in designing and manufacturing lighting ballasts and LED drivers for commercial and industrial use. Triptych was tasked with modernizing ULT’s client-facing website and creating a portal that allows engineers, developers, and construction planners to access and search a real-time inventory database.',
    shortDescription: 'Website for Universal Lighting Technologies, Inc.',
    contributions:
      'As a Front-End Developer, I was responsible for creating dynamic data structures and templates for content within Craft CMS, used to populate the website. I also developed modular UI components and page templates using Nuxt.js, ensuring seamless integration with the CMS data. Additionally, I implemented UI animations using the GSAP animation library, bringing the design team’s motion concepts to life and enhancing the user experience wholistically.',
    stack: ['nuxt.js', 'gsap', 'craft CMS', 'sass'],
    categories: ['web'],
    uri: 'panasonic',
    twColor: 'group-hover:text-blue-500',
    twFade: 'from-[#6994b8]',
    media: [{ src: '/video/ult.mp4', alt: 'panasonic-1', type: 'video' }],
  },
  epb: {
    title: 'EPB',
    tagline: 'Customer Portal',
    summary:
      'EPB (Electric Power Board), based in Chattanooga, Tennessee, is renowned for providing electricity and pioneering a citywide fiber-optic network that delivers high-speed internet, TV, and phone services. Triptych was tasked with redesigning EPB’s website and customer-facing dashboard, enabling users to easily manage their accounts and services for both electricity and telecommunications.',
    shortDescription: 'Customer Dashboard for Utility Services',
    contributions:
      'As a Front-End Developer for this project, I built modular components using vanilla JavaScript and created dynamic page templates with Django in Python, serving content driven by real-time customer data via the Wagtail CMS. I also developed REST API endpoints to enable communication between the front-end and back-end, ensuring that customer data and events were accurately reflected in the dashboard. This project allowed me to work on integrating real-time data and improving the user experience through streamlined service management.',
    stack: ['vanilla js', 'python', 'django', 'wagtail CMS', 'tailwind'],
    categories: ['web'],
    uri: 'epb',
    href: 'https://www.epb.com',
    twColor: 'group-hover:text-blue-500',
    // media: [{ src: '/video/epb.mp4', alt: 'epb-1', type: 'video' }],
  },
  'spare-teeth': {
    title: 'Spare Teeth',
    tagline: 'A Surreal VR Gaming Experience',
    summary:
      'Spare Teeth is an independent VR video game built in-house by the 3D artists and developers at Triptych (formerly L2D). Set in a strange “dental fever dream” universe, players navigate bowling balls through winding paths filled with bizarre landscapes and quirky characters. Released on the Steam platform, Spare Teeth offers a unique and surreal gaming experience.',
    shortDescription: 'Virtual Reality Video Game',
    contributions:
      'As a Game Developer, I implemented core gameplay functionality and game state logic using C# within the Unity Engine, all in a virtual 3D space. This included creating a scoring system, triggering events based on interactions with NPCs, and managing peripheral interactions within each level. Additionally, I integrated the Steam API to handle achievements, awards, and user data tracking, enabling the game to interact with the Steam platform beyond the in-game experience.',
    stack: ['Unity', 'C#', 'Steam API'],
    categories: ['xr', '3d'],
    uri: 'spare-teeth',
    href: 'https://store.steampowered.com/app/1028340/Spare_Teeth_VR/',
    twColor: 'group-hover:text-cyan-500',
    media: [{ src: '/video/st.mp4', alt: 'spare-teeth-1', type: 'video' }],
  },
  // volkswagen: {
  //   title: 'Volkswagen',
  //   tagline: ' Interactive Museum Experience on Fuel Efficiency',
  //   summary:
  //     'Volkswagen, in partnership with the Creative Discovery Museum in Chattanooga, TN, collaborated with Triptych to create an interactive installation aimed at educating children about fuel emissions and vehicle efficiency. The project, a web application displayed on a large touch-screen device, allows visitors to explore different vehicle types and their environmental impacts in a fun and engaging way.',
  //   shortDescription: 'Car Configurator Museum Installation',
  //   contributions:
  //     'For this project, built using Babylon.js and Next.js, I was responsible for staging the 3D scenes, including setting up controls and static camera views for the intro and outro cut scenes. I also configured the meshes within the scene, allowing for toggling mesh transparency and visibility based on user selections. Additionally, I developed the UI, animations, and functionality, ensuring the entire application was optimally scaled for the large touch-screen monitor used in the museum installation.',
  //   stack: ['babylonjs', 'nextjs'],
  //   categories: ['xr'],
  //   uri: 'vw',
  //   twColor: 'group-hover:text-blue-500',
  // },
  jradio: {
    title: 'JRadio',
    tagline: 'Music Streaming Platform',
    summary:
      'JRadio, part of Partners for Christian Media, Inc., the parent company of J103 FM Christian radio, sought to expand its reach by developing a web-based music streaming platform to serve a broader international audience. Triptych was tasked with designing and developing both a Progressive Web Application (PWA) and a mobile app to provide streaming services and fresh music content to users worldwide.',
    shortDescription: 'Music Streaming Website and Mobile App',
    contributions:
      'As a Front-End Developer, I integrated an audio web interface and managed the global state of streaming data from a custom backend API. This integration powered both the React Native mobile app (built with Expo for cross-platform functionality) and the PWA, which offers a seamless experience on both web browsers and desktop devices. I developed key features such as playlist creation, playlist shuffling, and filtering suggestions based on user preferences, genres, and categories. Additionally, I focused on building a clean, functional UI that maintained consistency across both the web and mobile platforms, ensuring a cohesive user experience.',
    stack: ['react-native', 'expo', 'nuxt.js', 'sass'],
    categories: ['web', 'mobile'],
    uri: 'jradio',
    href: 'https://www.jradio.com',
    twColor: 'group-hover:text-purple-500',
  },
}
