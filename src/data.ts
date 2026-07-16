export const profile = {
  name: "Meghana Nippani",
  status: "Completed 4th Semester (2nd Year) Undergraduate",
  education: {
    program: "Computer Science & Engineering (IoT Specialization)",
    institution: "Private Indian Institute",
    cgpa: "9.66",
    timeline: "Started July 2024, Currently June 2026"
  },
  intro: "Bridging the gap between biological neural networks and artificial computation."
};

export const experiences = [
  {
    id: 1,
    title: "Computational Neuroscience & Data Science Intern",
    period: "Nov 2025 - Present",
    focus: "Out-of-domain behavior in biological neural networks",
    details: [
      "Proposed probabilistic synaptic transmission (PST) as a mechanism to generate out-of-domain behaviour in a simple compartmental spiking neural network.",
      "Refactored a hardcoded metrics pipeline into a generalised, role-based architecture supporting arbitrary N-neuron networks.",
      "Authored the in-domain vs out-of-domain section of the official project tutorial.",
      "Introduced and presented information theoretic metrics to improve interpretation of emulated models compared to ground truth.",
      "Developed The Metrics Archive website that stores all metrics implemented in the benchmark suite.",
      "Authored an explanatory article on Artificial General Intelligence for an internship research series."
    ]
  },
  {
    id: 2,
    title: "Computational Neuroscience and Systems Biology Research Intern",
    period: "April 2026 - June 2026",
    details: [
      "Explained technical concepts on computational neuroscience like Hodgkin-Huxley model, action potential, temporal, and rate coding to engineers to develop a foundational background."
    ]
  },
  {
    id: 3,
    title: "AI and Metacognition Research Intern",
    period: "Sept 2025 - Nov 2025",
    details: [
      "Designed and conducted a survey on Indian adults measuring metacognition in AI usage contexts.",
      "Developed a multidimensional inventory for measuring metacognitive processes during AI interaction.",
      "Co-authored a research paper investigating human-AI interaction dynamics."
    ]
  },
  {
    id: 4,
    title: "Volunteer Teacher",
    period: "March 2026 - April 2026",
    details: [
      "Part of a university-organized outreach initiative bringing underprivileged primary school students to campus.",
      "Taught English and Mathematics to first-grade students (ages 5-8)."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Stochastic Neuron Models — Biological Benchmark",
    date: "Jan - Feb 2026",
    category: "Computational Neuroscience",
    description: "Developed and evaluated stochastic dynamical neuron models by benchmarking their spike train statistics against empirical cortical neuron data.",
    tech: ["Python", "NumPy", "Matplotlib", "SDEs"],
    link: "https://github.com/Nippani-Meghana/stochastic-neuron-models", 
    bullets: [
      "Implemented stochastic versions of the FitzHugh–Nagumo and Leaky integrate-and-fire models.",
      "Benchmarked models against cortical neuron spike train data from the Allen Institute for Brain Science.",
      "Evaluated impact of additive vs multiplicative noise on spike variability."
    ]
  },
  {
    id: 2,
    title: "FitzHugh-Nagumo Phase Plane Analysis",
    date: "Dec 2025",
    category: "Computational Neuroscience",
    description: "Phase plane dynamics visualization, nullcline computation, and vector field representation as foundation for stochastic modeling.",
    tech: ["Python", "NumPy", "Matplotlib", "SymPy"],
    link: "https://github.com/Nippani-Meghana/FitzHugh-Nagumo-Model",
    bullets: []
  },
  {
    id: 3,
    title: "Pospischil RS Cortical Neuron Model",
    date: "Sept - Oct 2025",
    category: "Computational Neuroscience",
    description: "Detailed cortical neuron model with multiple ion channels and drug effect modeling (Valproate and Lamotrigine).",
    tech: ["Python", "NumPy", "Matplotlib", "Biophysics"],
    link: "https://github.com/Nippani-Meghana/pospischil-rs-cortical-neuron",
    bullets: []
  },
  {
    id: 4,
    title: "Morris-Lecar E-I Microcircuit",
    date: "Aug - Sept 2025",
    category: "Computational Neuroscience",
    description: "Modeled schizophrenia dynamics using a two-neuron system exploring NMDA-driven temporal dysregulation.",
    tech: ["Python", "NumPy", "Matplotlib"],
    link: "https://github.com/Nippani-Meghana/temporal-dysregulation-nmda-model",
    bullets: []
  },
  {
    id: 5,
    title: "Classical ML Projects",
    date: "2025",
    category: "Data Science",
    description: "Interactive Python tools for data analysis and ML algorithms.",
    tech: ["Pandas", "Scikit-Learn", "NLP"],
    link: "https://github.com/Nippani-Meghana/data-analysis-ml",
    bullets: ["Supervised classification: compared Random Forest, SVC, and SGD on UCI wine-quality data; built TF–IDF-based text-classification pipeline for Twitter sentiment with regex preprocessing.",
              "Regression and exploratory analysis: linear-regression house price prediction; interactive EDA tools for retail-sales and Google Play Store data with metric dashboards and trend analysis."]
  }
];

export const writings = [
  {
    id: 1,
    title: "Neuron In Perfect Sangfroid", 
    link: "https://open.substack.com/pub/cloudsandtinyspikes/p/a-neuron-in-perfect-sangfroid?r=602ij7&utm_campaign=post-expanded-share&utm_medium=web",
    platform: "Substack",
    description: "Technical documentation of FHN project. Honest documentation of the learning process, including struggles, targeted at other students learning computational neuroscience."
  },
  {
    id: 2,
    title: "Charlie Gordon and The Theories of Intelligence in the age of LLMs",
    link: "https://open.substack.com/pub/cloudsandtinyspikes/p/charlie-gordon-and-the-theories-of?r=602ij7&utm_campaign=post-expanded-share&utm_medium=web",
    platform: "Substack",
    description: "Personal opinion on the parallels between Charlie Gordon from Flowers for Algernon with the rise of LLM usage in articulation."
  },
  {
    id: 3,
    title: "Ground Truth: What We Mean By AGI",
    link: "https://open.substack.com/pub/carboncopiesorg/p/ground-truth-what-do-we-mean-by-agi?r=602ij7&utm_campaign=post-expanded-share&utm_medium=web",
    platform: "Substack",
    description: "A foundational explainer on AGI for a general audience. Argues that the definition of AGI is not just a philosophical question but a practical one — what you define shapes what you build."
  }
];

export const skills = {
  core: ["Python", "NumPy", "SciPy", "Matplotlib", "Pandas", "scikit-learn", "SymPy"],
  specialized: ["SDEs/ODEs Numerical Methods", "Phase Plane Analysis", "Stochastic Processes", "Spike Train Analysis", "Information Theory (Entropy, MI)"],
  neuroscience: ["LIF", "FHN", "Morris-Lecar", "Pospischil RS", "Network Dynamics", "Biological Benchmarking"]
};
