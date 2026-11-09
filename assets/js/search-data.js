// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications in reverse chronological order. Full list on Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected projects in trustworthy AI, security and forensics, and multilingual language technology.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Code, datasets, and tools.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-speaker-and-panellist-on-the-foundations-theory-and-practice-of-e-voting-at-an-event-organised-by-the-electoral-commission-of-south-africa",
          title: 'Speaker and panellist on the Foundations, Theory and Practice of E-Voting, at an...',
          description: "",
          section: "News",},{id: "news-all-you-need-is-community-presented-at-the-ai-in-science-and-engineering-symposium-ann-arbor-michigan",
          title: 'All You Need is Community presented at the AI in Science and Engineering...',
          description: "",
          section: "News",},{id: "news-our-paper-afriscience-mt-towards-decolonizing-science-in-africa-through-text-translation-with-idris-abdulmumin-vukosi-marivate-and-colleagues-appears-in-the-proceedings-of-emnlp-2026",
          title: 'Our paper AfriScience-MT: Towards Decolonizing Science in Africa through Text Translation, with Idris...',
          description: "",
          section: "News",},{id: "projects-afirka-llm",
          title: 'Afirka LLM',
          description: "Open data and models for African languages (Co-PI).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/afirka-llm/";
            },},{id: "projects-afrigemma",
          title: 'AfriGemma',
          description: "A multilingual, multimodal Pan-African large language model (Co-PI).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/afrigemma/";
            },},{id: "projects-afriscience-mt",
          title: 'AfriScience-MT',
          description: "Decolonising science in Africa through machine translation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/afriscience-mt/";
            },},{id: "projects-secure-agentic-ai",
          title: 'Secure Agentic AI',
          description: "Live demonstrations and evaluation of LLM-based agents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agentic-ai/";
            },},{id: "projects-authorship-attribution-for-digital-forensics",
          title: 'Authorship Attribution for Digital Forensics',
          description: "Deep-learning methods to identify who wrote a piece of online text.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/authorship-attribution/";
            },},{id: "projects-fraud-spam-amp-cybercrime-detection",
          title: 'Fraud, Spam &amp;amp; Cybercrime Detection',
          description: "Machine learning against advance-fee fraud, spam, and malicious messaging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fraud-spam-detection/";
            },},{id: "projects-mafoko",
          title: 'Mafoko',
          description: "Open multilingual terminologies for South African NLP.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mafoko/";
            },},{id: "projects-misinformation-amp-hate-speech-detection",
          title: 'Misinformation &amp;amp; Hate-Speech Detection',
          description: "Detecting harmful and misleading content online, including in low-resource languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/misinformation-hate-speech/";
            },},{id: "projects-reliable-llms-amp-retrieval-augmented-generation",
          title: 'Reliable LLMs &amp;amp; Retrieval-Augmented Generation',
          description: "Evaluating when LLMs can be trusted as annotators and analysts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reliable-llm-annotation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%69%6F%64%75%6E%6D%6F%64%75%70%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dupsys", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/abiodunmodupe", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9732-6466", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sdwzJUcAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/duppeabbey", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
