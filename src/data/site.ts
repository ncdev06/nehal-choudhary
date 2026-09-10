export const site = {
  name: "Nehal Choudhary",
  shortName: "Nehal",
  title: "Software & Machine Learning Engineer",
  tagline:
    "UCSD student building full-stack products and ML systems — usually somewhere between clean engineering and messy real-world data.",
  location: "San Diego, CA",
  email: "nechoudhary@ucsd.edu",
  phone: "(720) 377-5333",
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
    graduation: "June 2027",
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
      label: "Resume",
      href: "/resumes/NehalChoudhary_Resume.pdf",
      description: "One-pager covering SWE, ML, research, and outreach",
    },
  ],
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "C++", "Java", "Go", "SQL"],
    frameworks: ["React", "FastAPI", "PyTorch", "scikit-learn", "Next.js"],
    tools: [
      "Docker",
      "MongoDB",
      "AWS / Bedrock",
      "MCP",
      "Appium",
      "Hugging Face",
      "Git",
    ],
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
      "Designed a full-stack Android test automation platform (Python, FastAPI, React/TypeScript, Appium) that turns plain-English telecom tests into reusable workflows — cutting manual effort by 80%+.",
      "Built an MCP service layer connecting Claude Sonnet to device-control tools, with validation and caching for reliable execution across devices and chipsets.",
      "Scaled concurrent scheduling across 32+ phones and 110+ scenarios; uncovered a critical RTT interoperability defect and earned 2nd place at EchoStar’s AI Demo Fair.",
    ],
    tags: ["Python", "FastAPI", "React", "MCP", "Appium", "Bedrock"],
  },
  {
    id: "cogdev",
    role: "Undergraduate Researcher, Multimodal AI",
    org: "Cognitive Development Lab @ UCSD",
    period: "December 2025 – June 2026",
    highlights: [
      "Built a reusable Python evaluation pipeline for Whisper and YOLOv8 across 12 infant–caregiver recordings with standardized metrics and experiment tracking.",
      "Processed 2,665 multilingual speech segments and 10 video sessions, automating failure analysis and reaching 0.912 mean face-detection precision.",
    ],
    tags: ["Whisper", "YOLOv8", "Python", "Evaluation"],
  },
  {
    id: "netcracker",
    role: "LLM Evaluation Intern",
    org: "Netcracker Technology",
    period: "July 2025 – September 2025",
    highlights: [
      "Developed an automated LLM testing framework covering 120+ scenarios and 6 reliability metrics, replacing manual reviews with repeatable regression tests.",
      "Ran configurable A/B tests across 20+ prompt variants to catch hallucination, scope drift, and schema failures — then translated findings into engineering recommendations.",
    ],
    tags: ["LLM Eval", "Python", "A/B Testing"],
  },
  {
    id: "csforeach",
    role: "President",
    org: "CS Foreach @ UCSD",
    period: "January 2025 – Present",
    highlights: [
      "Lead a 10+ member mentor team designing and delivering Python, ML/AI, data analytics, and computational modeling workshops for 100+ K–12 students, translating technical concepts into hands-on coding projects and reusable curriculum.",
      "Own curriculum strategy and mentor operations across CS Foreach, standardizing lesson plans, slides, coding activities, and onboarding for workshop leads to improve consistency and reduce duplicated preparation across outreach programs.",
      "Coordinate directly with K–12 schools and administrators to plan technical programming, maintain long-term outreach relationships, and expand access to computer science education through workshops, mentorship, tutoring, and classroom support.",
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
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  demoNote?: string;
};

export const projects: Project[] = [
  {
    slug: "classgraph",
    title: "ClassGraph",
    blurb:
      "Interactive graphs for 1,000+ UCSD courses — search prereqs, check paths, upload your academic history.",
    summary:
      "ClassGraph helps UCSD students untangle complicated prerequisite structures through interactive directed graphs built from live course catalog and schedule data. Students can search courses, explore OR-grouped requirement trees, and upload academic-history PDFs to see what they’ve completed.",
    award: "1st Place",
    focus: ["SWE"],
    stack: ["Python", "React", "Go", "Tailwind", "Vite", "Vercel"],
    links: {
      demo: "https://classgraph-black.vercel.app/",
      github: "https://github.com/ncdev06/classgraph",
    },
    highlights: [
      "Modeled 1,000+ courses and 100+ prerequisite chains as directed graphs with recursive validation.",
      "Added academic-history PDF uploads, flexible course search, OR-grouping, and duplicate-node handling.",
      "Scraped and merged catalog + schedule data with Go concurrency and Python processing pipelines.",
    ],
    contribution:
      "Focused on graph and product logic: recursive prerequisite validation, course search, PDF uploads, OR grouping, and duplicate-node handling.",
    codeSnippet: {
      language: "python",
      filename: "prereq_traversal.py",
      code: `def validate_path(course, completed, graph):
    """Recursively verify prerequisite chains, including OR groups."""
    reqs = graph[course].get("prereqs", [])
    if not reqs:
        return True
    for group in reqs:  # OR within group, AND across groups
        if not any(c in completed or validate_path(c, completed, graph)
                   for c in group):
            return False
    return True`,
    },
  },
  {
    slug: "otterx",
    title: "OtteRx",
    blurb:
      "Helps older adults ID meds from a photo, refill through pharmacy sites, and get voice reminders.",
    summary:
      "OtteRx helps older adults identify prescriptions from typed input or bottle photos, open trusted pharmacy refill pages, and complete refill workflows with voice guidance, reminders, and an accessibility-first interface.",
    focus: ["SWE", "ML"],
    stack: [
      "React",
      "TypeScript",
      "Python",
      "MongoDB",
      "Gemini",
      "ElevenLabs",
      "Browser-Use",
    ],
    links: {
      demo: "https://diamondhacks2026.vercel.app/",
      github: "https://github.com/ncdev06/otterx",
      devpost: "https://devpost.com/software/otterx",
    },
    highlights: [
      "Identifies medications from typed names or prescription-label photos via Gemini.",
      "Guides users through official pharmacy refill portals with Browser-Use automation.",
      "Adds ElevenLabs voice assistance and reminder scheduling for dosage and refills.",
    ],
    contribution:
      "Worked on accessibility-focused workflows and integrations — including ElevenLabs voice assistance and connecting frontend, backend, and external APIs.",
    codeSnippet: {
      language: "typescript",
      filename: "voice-guide.ts",
      code: `async function guideRefill(rx: Prescription) {
  await speak(\`Opening refill for \${rx.name}.\`);
  const session = await browserUse.start({
    url: pharmacyPortal(rx.pharmacy),
    steps: ["locate-rx", "confirm-refill", "submit"],
  });
  return session.followAlong();
}`,
    },
  },
  {
    slug: "techtonic",
    title: "TECHTonic",
    blurb:
      "Drop an epicenter, watch seismic waves roll out, and explore risk with Mapbox + a ML surrogate model.",
    summary:
      "TECHTonic is an interactive earthquake-simulation platform that combines a reduced-order seismic model, geospatial visualization, and generative AI. Users place an epicenter, watch wave propagation, deploy emergency resources, and explore location-specific risk insights.",
    focus: ["ML", "SWE"],
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "scikit-learn",
      "SciPy",
      "Mapbox",
      "Gemini",
    ],
    links: {
      demo: "https://datahacks-2026.vercel.app/",
      github: "https://github.com/ncdev06/techtonic",
      devpost: "https://devpost.com/software/seismicstabilize",
    },
    highlights: [
      "Built a reduced-order seismic surrogate from Scripps data using PCA/RBF interpolation for 16-receiver, 600-step waveforms.",
      "Retained 99.95% variance and served real-time predictions through FastAPI.",
      "Connected Gemini-powered region insights into the Mapbox interaction flow.",
    ],
    contribution:
      "Contributed backend and product integration: Gemini /region-insight endpoint, frontend map wiring, simulation/game-state polish, and FastAPI–React integration.",
    codeSnippet: {
      language: "python",
      filename: "waveform_surrogate.py",
      code: `def reconstruct(epicenter, pca, rbf):
    """Reconstruct multi-receiver waveforms for an unseen epicenter."""
    latent = rbf(epicenter)           # interpolate in reduced space
    waves = pca.inverse_transform(latent)
    return waves.reshape(n_receivers, n_steps)`,
    },
  },
  {
    slug: "wildscan",
    title: "WildScan",
    blurb:
      "Snap a photo or record a call — CNNs ID the species, then an LLM tells you if it’s safe.",
    summary:
      "WildScan helps outdoor explorers identify animals, plants, and fungi from a photo or sound, then generates species context and a threat assessment with an LLM. Image uploads are auto-routed across taxon classifiers; audio uses wildlife-call models.",
    award: "2nd Place",
    focus: ["ML", "SWE"],
    stack: ["PyTorch", "FastAPI", "React", "CNNs", "Llama", "Docker"],
    links: {
      demo: "https://sho16-wildscan.hf.space/",
      github: "https://github.com/ncdev06/WildScan",
    },
    highlights: [
      "Trained and evaluated five CNN classifiers (ResNet, EfficientNet, ConvNeXt, audio CNNs) at 71–90% test accuracy.",
      "Achieved 100–300 ms image latency with FastAPI routing and multi-model inference.",
      "Containerized the full stack for Hugging Face Spaces deployment.",
    ],
    contribution:
      "Built multimodal classification routing, model evaluation, FastAPI inference endpoints, and the mobile-friendly React experience.",
    codeSnippet: {
      language: "python",
      filename: "classify_image.py",
      code: `@app.post("/classify/image")
async def classify_image(file: UploadFile):
    img = load_image(await file.read())
    scores = [model.predict(img) for model in image_models]
    best = max(scores, key=lambda s: s.confidence)
    return {"species": best.label, "confidence": best.confidence}`,
    },
  },
  {
    slug: "loanline",
    title: "LoanLine",
    blurb:
      "A short game about how biased lending decisions get amplified once you hand them to a model.",
    summary:
      "LoanLine turns algorithmic bias into something you can feel. Players approve or deny loan applicants under time pressure; a logistic-regression model then learns from those choices and a fairness audit reveals how biased patterns scale.",
    focus: ["ML", "SWE"],
    stack: ["React", "FastAPI", "scikit-learn", "pandas", "NumPy"],
    links: {
      video: "https://www.youtube.com/watch?v=eNAN_5cDCp0",
      github: "https://github.com/ncdev06/loanline",
    },
    highlights: [
      "Built FastAPI endpoints for training applicants, AI-stage predictions, and audit results.",
      "Implemented applicant generation with hidden repayment likelihood as evaluation ground truth.",
      "Shipped fairness metrics comparing approval and false-denial gaps across groups.",
    ],
    contribution:
      "Owned much of the backend and fairness pipeline: data generation, logistic-regression training, metrics, and API wiring for manual and automated decision stages.",
    codeSnippet: {
      language: "python",
      filename: "fairness_audit.py",
      code: `def approval_gap(y_pred, groups):
    rates = {
        g: (y_pred[groups == g] == 1).mean()
        for g in np.unique(groups)
    }
    return max(rates.values()) - min(rates.values())`,
    },
  },
  {
    slug: "neural-forecasting",
    title: "Neural Time-Series Forecasting",
    blurb:
      "Compared LSTM, GRU, and TCN for multi-step motor-neuron forecasting — took 2nd place.",
    summary:
      "For the UCSD SMASH & NSF HDR Neural Forecasting Hackathon, the goal was to predict the next 10 timesteps of multichannel neural activity from the previous 10. We compared LSTM, GRU, and TCN architectures and placed 2nd in the track.",
    award: "2nd Place",
    focus: ["ML"],
    stack: ["PyTorch", "LSTM", "GRU", "TCN", "NumPy"],
    links: {
      competition: "https://www.codabench.org/competitions/9806/#/pages-tab",
      github: "https://github.com/ncdev06/Neural-Forecasting-Hackathon",
    },
    demoNote:
      "No hosted demo — code is in the repo, and the competition page has the challenge details.",
    highlights: [
      "Compared GRU, LSTM, and TCN for 10-step forecasting across 80–240-channel datasets.",
      "Optimized an LSTM pipeline with delta supervision, teacher forcing, and normalization — cutting MSE from ~300K to ~50K.",
      "Selected a tuned GRU as the final architecture after weekend experimentation.",
    ],
    contribution:
      "Worked on model experimentation and evaluation across LSTM, GRU, and TCN approaches under the hackathon time constraint.",
    codeSnippet: {
      language: "python",
      filename: "lstm_forecast.py",
      code: `class ForecastLSTM(nn.Module):
    def forward(self, x):
        # x: (batch, 10, channels) -> predict next 10 steps
        out, _ = self.lstm(x)
        delta = self.head(out[:, -1])
        return x[:, -1] + delta  # delta-based supervision`,
    },
  },
  {
    slug: "create-similar-playlist",
    title: "Create Similar Playlist",
    blurb:
      "Hybrid music recommender — seed a few tracks, get explainable similar songs without deprecated Spotify APIs.",
    summary:
      "A Streamlit music recommender rebuilt for the 2026 API landscape. It drops deprecated Spotify recommendation endpoints and instead blends Last.fm collaborative similarity, TF-IDF tag vectors, reciprocal-rank fusion, and MMR-style diversification — with optional Spotify lookup and playlist export.",
    focus: ["ML", "SWE"],
    stack: ["Python", "Streamlit", "scikit-learn", "Last.fm", "Spotipy", "TF-IDF"],
    links: {
      demo: "https://create-similar-playlist.streamlit.app/",
      github: "https://github.com/ncdev06/create-similar-playlist",
    },
    highlights: [
      "Rebuilt recommendation quality around Last.fm similarity and tag-based content vectors instead of deprecated Spotify Audio Features / Recommendations APIs.",
      "Fuses multi-seed evidence with reciprocal-rank fusion and MMR-style reranking for diversity.",
      "Surfaces explainable scores in the UI — collaborative similarity, tag similarity, and seed coverage.",
    ],
    contribution:
      "Designed and shipped the full hybrid recommender pipeline and Streamlit app, including ranking, diversification, and optional Spotify export.",
    codeSnippet: {
      language: "python",
      filename: "hybrid_rank.py",
      code: `def hybrid_score(collab, tag, coverage, w=(0.5, 0.3, 0.2)):
    """Blend collaborative, content, and multi-seed evidence."""
    return w[0] * collab + w[1] * tag + w[2] * coverage`,
    },
  },
  {
    slug: "spy-long-flat",
    title: "SPY Long/Flat ML",
    blurb:
      "Walk-forward SPY trend model with leak-free features, calibrated signals, and cost-aware backtests.",
    summary:
      "A modular time-series ML project that forecasts SPY daily trends and evaluates long/flat trading signals under realistic transaction-cost and slippage assumptions. The pipeline covers data cleaning, technical feature engineering, calibrated logistic regression, and regime-aware backtesting.",
    focus: ["ML"],
    stack: ["Python", "pandas", "scikit-learn", "yfinance", "Jupyter"],
    links: {
      github: "https://github.com/ncdev06/spy-long-flat-ml",
    },
    demoNote:
      "No interactive demo yet — notebooks and backtest plots live in the repo. A dashboard may land later.",
    highlights: [
      "Built a leak-free walk-forward pipeline with lagged technical indicators (SMA, EMA, RSI, ATR, momentum).",
      "Trained a calibrated logistic regression model with TimeSeriesSplit validation.",
      "Backtested with fees/slippage and reported equity curve, drawdown, and Sharpe (~0.45–0.52).",
    ],
    contribution:
      "End-to-end owner of the data, feature, modeling, backtesting, and metrics notebooks for the SPY long/flat strategy.",
    codeSnippet: {
      language: "python",
      filename: "signal.py",
      code: `def long_flat(prob, threshold=0.55):
    """Hold SPY only when calibrated confidence clears the bar."""
    return np.where(prob >= threshold, 1, 0)`,
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
