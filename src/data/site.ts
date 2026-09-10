export const site = {
  name: "Nehal Choudhary",
  shortName: "Nehal",
  title: "Software Engineer · Applied ML",
  tagline:
    "I build reliable software systems, AI-powered developer tools, and applied ML products — from device automation to recommendation and forecasting systems.",
  location: "San Diego, CA",
  email: "nechoudhary@ucsd.edu",
  links: {
    github: "https://github.com/ncdev06",
    linkedin: "https://linkedin.com/in/nehal-choudhary-7a3516202/",
    devpost: "https://devpost.com/nechoudhary",
  },
  education: {
    school: "University of California San Diego",
    degrees: [
      "B.S. Mathematics–Computer Science",
      "B.S. Cognitive Science–Machine Learning",
    ],
    graduation: "December 2027",
    gpa: "3.9/4.0",
    coursework: [
      "Design & Analysis of Algorithms",
      "Advanced Data Structures",
      "Mathematics of Machine Learning",
      "Systems Programming",
      "Probability & Inference",
      "Theory of Computation",
    ],
  },
  resumes: [
    {
      label: "View resume",
      href: "/resumes/NehalChoudhary_Resume.pdf",
      description: "Experience, projects, technical skills, and leadership in one page",
    },
  ],
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "C++", "Java", "Go", "SQL"],
    frameworks: ["React", "Next.js", "FastAPI", "PyTorch", "scikit-learn"],
    tools: ["Docker", "MongoDB", "AWS / Bedrock", "MCP", "Appium", "Hugging Face", "Git"],
  },
};

export type Experience = {
  id: string;
  role: string;
  org: string;
  period: string;
  location?: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "echostar",
    role: "AI & ML Device Engineering Intern",
    org: "EchoStar / Boost Mobile",
    period: "June 2026 – August 2026",
    highlights: [
      "Built a full-stack Android test automation platform with Python, FastAPI, React/TypeScript, and Appium, reducing manual test effort by 80%+.",
      "Developed an MCP service layer connecting Claude Sonnet to device-control tools with workflow validation, caching, and repeatable execution.",
      "Scaled concurrent scheduling across 32+ phones and 110+ scenarios, uncovered a critical RTT interoperability defect, and placed 2nd at EchoStar’s AI Demo Fair.",
    ],
    tags: ["Python", "FastAPI", "React", "MCP", "Appium", "AWS Bedrock"],
  },
  {
    id: "cogdev",
    role: "Undergraduate Researcher, Multimodal AI",
    org: "Cognitive Development Lab · UCSD",
    period: "December 2025 – June 2026",
    highlights: [
      "Built a reusable Python evaluation pipeline for Whisper and YOLOv8 across 12 infant–caregiver recordings with standardized metrics and experiment tracking.",
      "Processed 2,665 multilingual speech segments and 10 video sessions, automated failure analysis, and measured 0.912 mean face-detection precision.",
    ],
    tags: ["Whisper", "YOLOv8", "Python", "Model Evaluation"],
  },
  {
    id: "netcracker",
    role: "LLM Evaluation Intern",
    org: "Netcracker Technology",
    period: "July 2025 – September 2025",
    highlights: [
      "Developed an automated LLM testing framework covering 120+ scenarios and 6 reliability metrics, replacing manual reviews with repeatable regression tests.",
      "Ran configurable A/B tests across 20+ prompt variants to identify hallucination, scope-drift, and schema failures and translate findings into engineering recommendations.",
    ],
    tags: ["LLM Evaluation", "Python", "A/B Testing"],
  },
  {
    id: "csforeach",
    role: "President",
    org: "CS Foreach · UCSD",
    period: "January 2025 – Present",
    highlights: [
      "Lead a 10+ member mentor team designing and delivering Python, ML/AI, data analytics, and computational modeling workshops for 100+ K–12 students.",
      "Own curriculum strategy and mentor operations, standardizing lesson plans, coding activities, and onboarding into reusable workshop materials.",
      "Coordinate with K–12 schools and administrators to expand technical programming through workshops, mentorship, tutoring, and classroom support.",
    ],
    tags: ["Leadership", "Curriculum", "Outreach", "Python", "ML/AI"],
  },
];

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  summary: string;
  award?: string;
  focus: ("SWE" | "ML")[];
  stack: string[];
  links: {
    demo?: string;
    demoLabel?: string;
    video?: string;
    competition?: string;
    github?: string;
    devpost?: string;
  };
  highlights: string[];
  contribution: string;
  demoNote?: string;
};

export const projects: Project[] = [
  {
    slug: "classgraph",
    title: "ClassGraph",
    blurb: "Explore UCSD prerequisites as interactive graphs across 1,000+ courses and 100+ prerequisite chains.",
    summary:
      "ClassGraph helps UCSD students understand prerequisite structures through interactive directed graphs. Students can search courses, explore OR-grouped requirement trees, and upload academic-history PDFs to see completed requirements in context.",
    award: "1st Place",
    focus: ["SWE"],
    stack: ["React", "Go", "Python", "Tailwind", "Vite"],
    links: {
      demo: "https://classgraph-black.vercel.app/",
      github: "https://github.com/ncdev06/classgraph",
    },
    highlights: [
      "Modeled 1,000+ courses and 100+ prerequisite chains as directed graphs with recursive validation.",
      "Added academic-history PDF uploads, flexible course search, OR-grouping, and duplicate-node handling.",
      "Merged catalog and schedule data with Go concurrency and Python processing pipelines.",
    ],
    contribution:
      "Built core graph and product logic including recursive prerequisite validation, course search, PDF uploads, OR grouping, and duplicate-node handling.",
  },
  {
    slug: "create-similar-playlist",
    title: "Create Similar Playlist",
    blurb: "Turn a few favorite songs into an explainable, diversity-aware playlist with a live hybrid recommender.",
    summary:
      "A live music recommender that combines collaborative similarity, music-tag content signals, multi-seed evidence, and diversity-aware reranking to generate playlists from a small set of favorite tracks.",
    focus: ["ML", "SWE"],
    stack: ["Python", "Streamlit", "Last.fm API", "Spotify Web API", "TF-IDF", "RRF / MMR"],
    links: {
      demo: "https://create-similar-playlist.streamlit.app/",
      github: "https://github.com/ncdev06/create-similar-playlist",
    },
    highlights: [
      "Combines Last.fm collaborative similarity with TF-IDF-style music-tag similarity and evidence across multiple seed tracks.",
      "Uses reciprocal-rank fusion and MMR-style reranking to balance relevance with playlist diversity.",
      "Exposes interpretable recommendation signals and optional Spotify matching, previews, playlist import, and playlist export.",
    ],
    contribution:
      "Designed and shipped the end-to-end recommendation pipeline, ranking logic, Streamlit experience, and Spotify integration.",
  },
  {
    slug: "techtonic",
    title: "TECHTonic",
    blurb: "Simulate earthquake wave propagation, explore regional risk, and deploy resources on an interactive map.",
    summary:
      "TECHTonic combines a reduced-order seismic model, geospatial visualization, and generative AI in an interactive earthquake simulation. Users place an epicenter, watch wave propagation, deploy emergency resources, and explore location-specific risk insights.",
    focus: ["ML", "SWE"],
    stack: ["React", "TypeScript", "FastAPI", "SciPy", "Mapbox", "Gemini"],
    links: {
      demo: "https://datahacks-2026.vercel.app/",
      github: "https://github.com/ncdev06/techtonic",
      devpost: "https://devpost.com/software/seismicstabilize",
    },
    highlights: [
      "Built a reduced-order seismic surrogate from Scripps data for 16-receiver, 600-step waveforms.",
      "Retained 99.95% variance in the reduced representation and served real-time predictions through FastAPI.",
      "Connected Gemini-powered regional insights into the Mapbox interaction flow.",
    ],
    contribution:
      "Contributed backend and product integration, including the Gemini region-insight endpoint, frontend map wiring, simulation state, and FastAPI–React integration.",
  },
  {
    slug: "wildscan",
    title: "WildScan",
    blurb: "Identify wildlife from images or audio and surface contextual safety guidance in a multimodal app.",
    summary:
      "WildScan identifies animals, plants, and fungi from a photo or sound, then generates species context and a threat assessment. Image uploads are routed across taxon classifiers while audio uses wildlife-call models.",
    award: "2nd Place",
    focus: ["ML", "SWE"],
    stack: ["PyTorch", "FastAPI", "React", "CNNs", "Llama", "Docker"],
    links: {
      demo: "https://sho16-wildscan.hf.space/",
      github: "https://github.com/ncdev06/WildScan",
    },
    highlights: [
      "Trained and evaluated five CNN classifiers using ResNet, EfficientNet, ConvNeXt, and audio CNN architectures at 71–90% test accuracy.",
      "Achieved 100–300 ms image latency with FastAPI routing and multi-model inference.",
      "Containerized the full stack for Hugging Face Spaces deployment.",
    ],
    contribution:
      "Worked on multimodal classification routing, model evaluation, FastAPI inference endpoints, and the mobile-friendly React experience.",
  },
  {
    slug: "neural-forecasting",
    title: "Neural Time-Series Forecasting",
    blurb: "Compare recurrent and convolutional models for 10-step multichannel neural forecasting.",
    summary:
      "For the UCSD SMASH & NSF HDR Neural Forecasting Hackathon, we predicted the next 10 timesteps of multichannel neural activity from the previous 10 and compared LSTM, GRU, and TCN architectures.",
    award: "2nd Place",
    focus: ["ML"],
    stack: ["PyTorch", "LSTM", "GRU", "TCN", "NumPy"],
    links: {
      competition: "https://www.codabench.org/competitions/9806/#/pages-tab",
      github: "https://github.com/ncdev06/Neural-Forecasting-Hackathon",
    },
    demoNote: "Model code, experiments, and challenge details are available through the repository and competition page.",
    highlights: [
      "Compared GRU, LSTM, and TCN models for 10-step forecasting across 80–240-channel datasets.",
      "Improved an LSTM pipeline with delta supervision, teacher forcing, and normalization, reducing MSE from ~300K to ~50K.",
      "Selected a tuned GRU as the final architecture after model comparison and evaluation.",
    ],
    contribution:
      "Focused on model experimentation, architecture comparison, tuning, and evaluation across LSTM, GRU, and TCN approaches.",
  },
  {
    slug: "otterx",
    title: "OtteRx",
    blurb: "An accessibility-first medication assistant for identification, refill guidance, and voice reminders.",
    summary:
      "OtteRx helps older adults identify prescriptions from typed input or bottle photos, navigate trusted pharmacy refill pages, and use voice guidance and reminders through an accessibility-first interface.",
    focus: ["SWE", "ML"],
    stack: ["React", "TypeScript", "Python", "MongoDB", "Gemini", "ElevenLabs", "Browser-Use"],
    links: {
      demo: "https://diamondhacks2026.vercel.app/",
      github: "https://github.com/ncdev06/otterx",
      devpost: "https://devpost.com/software/otterx",
    },
    highlights: [
      "Supports medication identification from typed names or prescription-label photos.",
      "Guides users through pharmacy refill workflows with browser automation.",
      "Adds voice assistance and reminder flows designed for accessibility.",
    ],
    contribution:
      "Worked on accessibility-focused product flows and integrations connecting the frontend, backend, and external services.",
  },
  {
    slug: "loanline",
    title: "LoanLine",
    blurb: "An interactive simulation showing how biased human lending decisions can be amplified by a learned model.",
    summary:
      "LoanLine turns algorithmic bias into an interactive experiment. Players approve or deny applicants, a logistic-regression model learns from those decisions, and a fairness audit shows how decision patterns scale.",
    focus: ["ML", "SWE"],
    stack: ["React", "FastAPI", "scikit-learn", "pandas", "NumPy"],
    links: {
      video: "https://www.youtube.com/watch?v=eNAN_5cDCp0",
      github: "https://github.com/ncdev06/loanline",
    },
    highlights: [
      "Built FastAPI endpoints for training applicants, model-stage predictions, and audit results.",
      "Implemented applicant generation with hidden repayment likelihood as evaluation ground truth.",
      "Built fairness metrics comparing approval and false-denial gaps across groups.",
    ],
    contribution:
      "Built much of the backend and fairness pipeline, including data generation, logistic-regression training, metrics, and API wiring.",
  },
  {
    slug: "spy-long-flat",
    title: "SPY Long/Flat ML",
    blurb: "A leak-free walk-forward ML pipeline for daily SPY trend signals with realistic backtesting assumptions.",
    summary:
      "A modular time-series ML project that forecasts SPY daily trends and evaluates long/flat signals under transaction-cost and slippage assumptions, covering feature engineering, calibrated classification, and regime-aware backtesting.",
    focus: ["ML"],
    stack: ["Python", "pandas", "scikit-learn", "yfinance", "Jupyter"],
    links: {
      github: "https://github.com/ncdev06/spy-long-flat-ml",
    },
    demoNote: "Notebooks, backtest plots, and implementation details are available in the repository.",
    highlights: [
      "Built a leak-free walk-forward pipeline with lagged SMA, EMA, RSI, ATR, and momentum features.",
      "Trained a calibrated logistic-regression model with TimeSeriesSplit validation.",
      "Backtested with fees and slippage and reported equity curve, drawdown, and Sharpe metrics.",
    ],
    contribution:
      "Built the data, feature, modeling, backtesting, and evaluation pipeline end to end.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
