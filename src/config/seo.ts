export const siteMetadata = {
  url: "https://sparks-web-nu.vercel.app",
  name: "sparks",
  language: "en",
  locale: "en_US",
  authorName: "Juan Carlos Acosta Perabá",
  authorUrl: "https://jcap.tech/",
  repositoryUrl: "https://github.com/JuanCarlosAcostaPeraba/sparks-cli",
  imagePath: "/og.png",
  imageAlt:
    "sparks local-first CLI showing nested ideas in a terminal window",
  imageWidth: 1200,
  imageHeight: 630,
} as const;

export const homeSeo = {
  title: "sparks — Local-first CLI for ideas and tasks",
  description:
    "Capture ideas, tasks, and nested thoughts without leaving the terminal. sparks is a fast, local-first CLI for macOS, Linux, and Windows.",
  path: "/",
} as const;

export const roadmapSeo = {
  title: "Roadmap | sparks local-first CLI",
  description:
    "Explore the sparks roadmap for faster terminal capture, clearer nested ideas, better filtering, exports, and local-first automation workflows.",
  path: "/roadmap",
} as const;

const person = {
  "@type": "Person",
  "@id": `${siteMetadata.authorUrl}#person`,
  name: siteMetadata.authorName,
  url: siteMetadata.authorUrl,
};

const website = {
  "@type": "WebSite",
  "@id": `${siteMetadata.url}/#website`,
  url: `${siteMetadata.url}/`,
  name: siteMetadata.name,
  description: homeSeo.description,
  inLanguage: siteMetadata.language,
  publisher: person,
};

const softwareApplication = {
  "@type": "SoftwareApplication",
  "@id": `${siteMetadata.url}/#software`,
  name: siteMetadata.name,
  url: `${siteMetadata.url}/`,
  description: homeSeo.description,
  applicationCategory: "DeveloperApplication",
  applicationSubCategory: "ProductivityApplication",
  operatingSystem: ["macOS", "Linux", "Windows"],
  downloadUrl: `${siteMetadata.repositoryUrl}/releases/latest`,
  installUrl: `${siteMetadata.url}/#install`,
  isAccessibleForFree: true,
  author: person,
  image: `${siteMetadata.url}${siteMetadata.imagePath}`,
  featureList: [
    "Fast terminal capture",
    "Nested ideas and tasks",
    "Local SQLite storage",
    "JSON output for automation",
    "Interactive terminal interface",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const softwareSourceCode = {
  "@type": "SoftwareSourceCode",
  "@id": `${siteMetadata.repositoryUrl}#source`,
  name: "sparks source code",
  description: homeSeo.description,
  codeRepository: siteMetadata.repositoryUrl,
  programmingLanguage: "Go",
  runtimePlatform: ["macOS", "Linux", "Windows"],
  license: `${siteMetadata.repositoryUrl}/blob/main/LICENSE`,
  author: person,
};

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    website,
    {
      "@type": "WebPage",
      "@id": `${siteMetadata.url}/#webpage`,
      url: `${siteMetadata.url}/`,
      name: homeSeo.title,
      description: homeSeo.description,
      isPartOf: { "@id": website["@id"] },
      mainEntity: { "@id": softwareApplication["@id"] },
      inLanguage: siteMetadata.language,
    },
    softwareApplication,
    softwareSourceCode,
    person,
  ],
};

export const roadmapStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    website,
    {
      "@type": "WebPage",
      "@id": `${siteMetadata.url}${roadmapSeo.path}#webpage`,
      url: `${siteMetadata.url}${roadmapSeo.path}`,
      name: roadmapSeo.title,
      description: roadmapSeo.description,
      isPartOf: { "@id": website["@id"] },
      about: { "@id": softwareApplication["@id"] },
      breadcrumb: { "@id": `${siteMetadata.url}${roadmapSeo.path}#breadcrumb` },
      inLanguage: siteMetadata.language,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteMetadata.url}${roadmapSeo.path}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteMetadata.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Roadmap",
          item: `${siteMetadata.url}${roadmapSeo.path}`,
        },
      ],
    },
  ],
};
