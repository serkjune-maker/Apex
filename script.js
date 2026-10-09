justconst fields = [
  // ─── TECHNOLOGY ───
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    category: "technology",
    description: "Machines that learn, reason, and make decisions.",
    topics: ["Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
    details: "AI spans symbolic reasoning and modern deep learning. Key subfields include machine learning (supervised, unsupervised, reinforcement), natural language processing, computer vision, and generative models like transformers.",
    learn: "Start with Python, then Andrew Ng's ML course, then build small projects with scikit-learn and PyTorch."
  },
  {
    title: "Cybersecurity",
    icon: "🔐",
    category: "technology",
    description: "Protecting systems, networks, and data from attacks.",
    topics: ["Cryptography", "Pen Testing", "Networks", "Forensics"],
    details: "Covers encryption, authentication, network defense, ethical hacking, malware analysis, and incident response. Huge demand across banking, government, and cloud providers.",
    learn: "Learn Linux, networking (TCP/IP), then TryHackMe or Hack The Box for hands-on labs."
  },
  {
    title: "Web Development",
    icon: "🌐",
    category: "technology",
    description: "Building websites and web apps from front to back.",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "Databases"],
    details: "Frontend (UI), backend (servers, APIs, databases), and DevOps (deployment). You already built this site with HTML/CSS/JS — same foundations power the whole web.",
    learn: "FreeCodeCamp, The Odin Project, then build 5 real projects."
  },
  {
    title: "Robotics & Automation",
    icon: "🦾",
    category: "technology",
    description: "Machines that sense, think, and act in the physical world.",
    topics: ["Sensors", "Actuators", "ROS", "Kinematics"],
    details: "Combines mechanical engineering, electronics, and software. Applications in manufacturing, surgery, drones, and self-driving cars.",
    learn: "Start with Arduino, then ROS 2, then simulate with Gazebo."
  },
  {
    title: "Cloud Computing",
    icon: "☁️",
    category: "technology",
    description: "Renting computing power, storage, and services online.",
    topics: ["AWS", "Azure", "Docker", "Kubernetes", "DevOps"],
    details: "Businesses rent servers, databases, and AI services instead of owning hardware. Includes virtualization, containers, serverless, and CI/CD pipelines.",
    learn: "AWS Cloud Practitioner, then Docker, then a personal project hosted on the cloud."
  },
  {
    title: "Quantum Computing",
    icon: "⚛️",
    category: "technology",
    description: "Computing with qubits — superposition and entanglement.",
    topics: ["Qubits", "Shor", "Grover", "Qiskit"],
    details: "Quantum computers exploit quantum mechanics for certain problems. Potential to break RSA and speed up chemistry simulations. Still early — but fast growing.",
    learn: "Qiskit tutorials, then 'Quantum Computing for the Very Curious'."
  },

  // ─── SCIENCE ───
  {
    title: "Physics",
    icon: "🌌",
    category: "science",
    description: "The fundamental laws governing matter and energy.",
    topics: ["Mechanics", "Thermodynamics", "Quantum", "Relativity"],
    details: "Classical (Newton) and modern (quantum, relativity) physics form the base of all engineering. Applications from semiconductors to GPS to particle accelerators.",
    learn: "MIT OCW 8.01, then Feynman Lectures, then 3Blue1Brown for intuition."
  },
  {
    title: "Chemistry",
    icon: "🧪",
    category: "science",
    description: "Atoms, molecules, and the reactions between them.",
    topics: ["Organic", "Inorganic", "Physical", "Biochemistry"],
    details: "Central science — links physics to biology. Critical to medicine, materials, energy, and agriculture.",
    learn: "Khan Academy Chemistry, then MIT OCW 5.111."
  },
  {
    title: "Biology",
    icon: "🧬",
    category: "science",
    description: "The study of life, from cells to ecosystems.",
    topics: ["Genetics", "Cell Biology", "Evolution", "Ecology"],
    details: "Modern biology is heavily data-driven — genomics, CRISPR, and bioinformatics. Overlaps with chemistry and medicine.",
    learn: "Crash Course Biology, then Molecular Biology of the Cell."
  },
  {
    title: "Astronomy & Astrophysics",
    icon: "🔭",
    category: "science",
    description: "Stars, galaxies, black holes, and the universe itself.",
    topics: ["Cosmology", "Stellar Physics", "Black Holes", "Exoplanets"],
    details: "Uses physics to explain cosmic phenomena. Combines observation (telescopes) with theory (relativity, quantum).",
    learn: "Crash Course Astronomy, then 'Cosmos' by Carl Sagan."
  },
  {
    title: "Neuroscience",
    icon: "🧠",
    category: "science",
    description: "How the brain and nervous system produce mind and behavior.",
    topics: ["Neurons", "Cognition", "Brain Imaging", "Neuroplasticity"],
    details: "Interdisciplinary — biology, psychology, chemistry, computer science. Drives AI research and mental health treatments.",
    learn: "MIT OCW 9.13, then 'The Brain' by Eagleman."
  },
  {
    title: "Materials Science",
    icon: "⚗️",
    category: "science",
    description: "How atomic structure determines material properties.",
    topics: ["Metals", "Polymers", "Semiconductors", "Nanomaterials"],
    details: "Underpins electronics, aerospace, and energy tech. Explains why silicon chips work and why some metals bend or shatter.",
    learn: "MIT OCW 3.091, then 'Materials Science and Engineering' by Callister."
  },

  // ─── INTERDISCIPLINARY ───
  {
    title: "Bioinformatics",
    icon: "💻",
    category: "interdisciplinary",
    description: "Using computation to understand biological data.",
    topics: ["Genomics", "Python", "Sequence Alignment", "R"],
    details: "Where biology meets computer science. Sequences DNA, models proteins, and analyzes huge datasets to fight disease.",
    learn: "Rosalind.info problems, then Biopython."
  },
  {
    title: "Nanotechnology",
    icon: "🔬",
    category: "interdisciplinary",
    description: "Engineering at the scale of atoms and molecules.",
    topics: ["Nanoparticles", "Carbon Nanotubes", "Graphene", "Quantum Dots"],
    details: "Combines physics, chemistry, and materials science to build devices under 100 nanometers. Used in medicine, electronics, and energy.",
    learn: "Nanohub.org courses, then research papers on graphene."
  },
  {
    title: "Data Science",
    icon: "📊",
    category: "interdisciplinary",
    description: "Extracting insight from data using statistics and code.",
    topics: ["Statistics", "Python", "Pandas", "Visualization", "ML"],
    details: "Blend of statistics, programming, and domain knowledge. Drives decisions in business, science, health, and sports.",
    learn: "Python, Pandas, then Kaggle competitions."
  },
  {
    title: "Environmental Science",
    icon: "🌍",
    category: "interdisciplinary",
    description: "Understanding and protecting Earth's systems.",
    topics: ["Climate", "Ecology", "Sustainability", "Renewables"],
    details: "Combines biology, chemistry, physics, and policy. Focus areas: climate change, pollution, conservation, and clean energy.",
    learn: "edX 'Climate Change' course, then IPCC reports."
  }
];

const fieldList = document.getElementById('fieldList');
const searchBar = document.getElementById('searchBar');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';
let currentSearch = '';

function renderFields() {
  const filtered = fields.filter(field => {
    const matchesCategory = currentCategory === 'all' || field.category === currentCategory;
    const matchesSearch =
      field.title.toLowerCase().includes(currentSearch) ||
      field.description.toLowerCase().includes(currentSearch) ||
      field.topics.some(t => t.toLowerCase().includes(currentSearch));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    fieldList.innerHTML = '<div class="no-results">No fields found. Try a different search.</div>';
    return;
  }

  fieldList.innerHTML = filtered.map(field => `
    <div class="field-card">
      <span class="icon">${field.icon}</span>
      <span class="category">${field.category}</span>
      <h2>${field.title}</h2>
      <p class="description">${field.description}</p>
      <ul class="topics">
        ${field.topics.map(t => `<li>${t}</li>`).join('')}
      </ul>
      <div class="details">
        <p>${field.details}</p>
        <h3>📚 How to start learning</h3>
        <p>${field.learn}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.field-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('expanded'));
  });
}

searchBar.addEventListener('input', (e) => {
  currentSearch = e.target.value.toLowerCase();
  renderFields();
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderFields();
  });
});
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 400);
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

renderFields();
// ═══════════════════════════════════════════
//           DATA — FIELDS
// ═══════════════════════════════════════════
const fields = [
  // ─── TECHNOLOGY ───
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: "🤖",
    category: "technology",
    description: "Machines that learn, reason, and make decisions.",
    topics: ["Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
    details: "AI spans symbolic reasoning and modern deep learning. Key subfields include machine learning (supervised, unsupervised, reinforcement), natural language processing, computer vision, and generative models like transformers.",
    careers: ["ML Engineer", "Data Scientist", "AI Researcher", "Robotics Engineer"],
    resources: [
      { name: "Andrew Ng — ML Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction" },
      { name: "Fast.ai — Practical Deep Learning", url: "https://course.fast.ai" },
      { name: "3Blue1Brown — Neural Networks", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" }
    ]
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    icon: "🔐",
    category: "technology",
    description: "Protecting systems, networks, and data from attacks.",
    topics: ["Cryptography", "Pen Testing", "Networks", "Forensics"],
    details: "Covers encryption, authentication, network defense, ethical hacking, malware analysis, and incident response. Huge demand across banking, government, and cloud providers.",
    careers: ["Security Analyst", "Pen Tester", "SOC Engineer", "Cryptographer"],
    resources: [
      { name: "TryHackMe", url: "https://tryhackme.com" },
      { name: "Hack The Box", url: "https://www.hackthebox.com" },
      { name: "Professor Messer — Security+", url: "https://www.professormesser.com" }
    ]
  },
  {
    id: "web",
    title: "Web Development",
    icon: "🌐",
    category: "technology",
    description: "Building websites and web apps from front to back.",
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js"],
    details: "Frontend (UI), backend (servers, APIs, databases), and DevOps (deployment). You already built this site with HTML/CSS/JS — same foundations power the whole web.",
    careers: ["Frontend Dev", "Full-Stack Dev", "DevOps Engineer", "UI Engineer"],
    resources: [
      { name: "FreeCodeCamp", url: "https://www.freecodecamp.org" },
      { name: "The Odin Project", url: "https://www.theodinproject.com" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" }
    ]
  },
  {
    id: "robotics",
    title: "Robotics & Automation",
    icon: "🦾",
    category: "technology",
    description: "Machines that sense, think, and act in the physical world.",
    topics: ["Sensors", "Actuators", "ROS", "Kinematics"],
    details: "Combines mechanical engineering, electronics, and software. Applications in manufacturing, surgery, drones, and self-driving cars.",
    careers: ["Robotics Engineer", "Automation Engineer", "Mechatronics Engineer"],
    resources: [
      { name: "ROS 2 Tutorials", url: "https://docs.ros.org" },
      { name: "Arduino Start Guide", url: "https://www.arduino.cc/en/Guide" },
      { name: "Modern Robotics (Northwestern)", url: "https://modernrobotics.northwestern.edu" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: "☁️",
    category: "technology",
    description: "Renting computing power, storage, and services online.",
    topics: ["AWS", "Docker", "Kubernetes", "DevOps"],
    details: "Businesses rent servers, databases, and AI services instead of owning hardware. Includes virtualization, containers, serverless, and CI/CD pipelines.",
    careers: ["Cloud Engineer", "DevOps Engineer", "SRE", "Solutions Architect"],
    resources: [
      { name: "AWS Skill Builder", url: "https://skillbuilder.aws" },
      { name: "Docker Getting Started", url: "https://docs.docker.com/get-started" },
      { name: "Kubernetes Docs", url: "https://kubernetes.io/docs/tutorials" }
    ]
  },
  {
    id: "quantum",
    title: "Quantum Computing",
    icon: "⚛️",
    category: "technology",
    description: "Computing with qubits — superposition and entanglement.",
    topics: ["Qubits", "Shor", "Grover", "Qiskit"],
    details: "Quantum computers exploit quantum mechanics for certain problems. Potential to break RSA and speed up chemistry simulations. Still early — but fast growing.",
    careers: ["Quantum Researcher", "Quantum Software Engineer", "Physicist"],
    resources: [
      { name: "Qiskit Textbook", url: "https://qiskit.org/learn" },
      { name: "Quantum Country", url: "https://quantum.country" }
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain & Crypto",
    icon: "⛓️",
    category: "technology",
    description: "Decentralized ledgers, smart contracts, and Web3.",
    topics: ["Bitcoin", "Ethereum", "Smart Contracts", "Solidity"],
    details: "Distributed ledger technology enabling trustless transactions. Used in finance, supply chain, identity, and decentralized apps (dApps).",
    careers: ["Blockchain Developer", "Smart Contract Auditor", "Web3 Engineer"],
    resources: [
      { name: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs" },
      { name: "CryptoZombies", url: "https://cryptozombies.io" }
    ]
  },

  // ─── SCIENCE ───
  {
    id: "physics",
    title: "Physics",
    icon: "🌌",
    category: "science",
    description: "The fundamental laws governing matter and energy.",
    topics: ["Mechanics", "Thermodynamics", "Quantum", "Relativity"],
    details: "Classical (Newton) and modern (quantum, relativity) physics form the base of all engineering. Applications from semiconductors to GPS to particle accelerators.",
    careers: ["Physicist", "Research Scientist", "Engineer", "Data Scientist"],
    resources: [
      { name: "MIT OCW 8.01", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016" },
      { name: "Feynman Lectures (free)", url: "https://www.feynmanlectures.caltech.edu" },
      { name: "3Blue1Brown Physics", url: "https://www.youtube.com/c/3blue1brown" }
    ]
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: "🧪",
    category: "science",
    description: "Atoms, molecules, and the reactions between them.",
    topics: ["Organic", "Inorganic", "Physical", "Biochemistry"],
    details: "Central science — links physics to biology. Critical to medicine, materials, energy, and agriculture.",
    careers: ["Chemist", "Pharmacist", "Materials Scientist", "Chemical Engineer"],
    resources: [
      { name: "Khan Academy Chemistry", url: "https://www.khanacademy.org/science/chemistry" },
      { name: "MIT OCW 5.111", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014" }
    ]
  },
  {
    id: "biology",
    title: "Biology",
    icon: "🧬",
    category: "science",
    description: "The study of life, from cells to ecosystems.",
    topics: ["Genetics", "Cell Biology", "Evolution", "Ecology"],
    details: "Modern biology is heavily data-driven — genomics, CRISPR, and bioinformatics. Overlaps with chemistry and medicine.",
    careers: ["Biologist", "Geneticist", "Biotech Researcher", "Doctor"],
    resources: [
      { name: "Crash Course Biology", url: "https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF" },
      { name: "Khan Academy Biology", url: "https://www.khanacademy.org/science/biology" }
    ]
  },
  {
    id: "astronomy",
    title: "Astronomy & Astrophysics",
    icon: "🔭",
    category: "science",
    description: "Stars, galaxies, black holes, and the universe itself.",
    topics: ["Cosmology", "Stellar Physics", "Black Holes", "Exoplanets"],
    details: "Uses physics to explain cosmic phenomena. Combines observation (telescopes) with theory (relativity, quantum).",
    careers: ["Astronomer", "Astrophysicist", "Space Scientist", "Data Scientist"],
    resources: [
      { name: "Crash Course Astronomy", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtO u8RgQGGvFvBOwLXB0RsnW" },
      { name: "NASA Education", url: "https://www.nasa.gov/learning-resources" }
    ]
  },
  {
    id: "neuro",
    title: "Neuroscience",
    icon: "🧠",
    category: "science",
    description: "How the brain and nervous system produce mind and behavior.",
    topics: ["Neurons", "Cognition", "Brain Imaging", "Neuroplasticity"],
    details: "Interdisciplinary — biology, psychology, chemistry, computer science. Drives AI research and mental health treatments.",
    careers: ["Neuroscientist", "Neurologist", "Psychologist", "BCI Engineer"],
    resources: [
      { name: "MIT OCW 9.13", url: "https://ocw.mit.edu/courses/9-13-the-human-brain-spring-2019" },
      { name: "The Brain (Eagleman)", url: "https://www.coursera.org/learn/the-brain" }
    ]
  },
  {
    id: "materials",
    title: "Materials Science",
    icon: "⚗️",
    category: "science",
    description: "How atomic structure determines material properties.",
    topics: ["Metals", "Polymers", "Semiconductors", "Nanomaterials"],
    details: "Underpins electronics, aerospace, and energy tech. Explains why silicon chips work and why some metals bend or shatter.",
    careers: ["Materials Engineer", "Metallurgist", "R&D Scientist"],
    resources: [
      { name: "MIT OCW 3.091", url: "https://ocw.mit.edu/courses/3-091sc-introduction-to-solid-state-chemistry-fall-2010" }
    ]
  },
  {
    id: "math",
    title: "Mathematics",
    icon: "📐",
    category: "science",
    description: "The language of patterns, structure, and change.",
    topics: ["Calculus", "Linear Algebra", "Probability", "Discrete Math"],
    details: "Foundation for physics, computer science, engineering, and data science. From proofs to applied modeling.",
    careers: ["Mathematician", "Statistician", "Quant", "Cryptographer"],
    resources: [
      { name: "Khan Academy Math", url: "https://www.khanacademy.org/math" },
      { name: "3Blue1Brown", url: "https://www.youtube.com/c/3blue1brown" },
      { name: "MIT OCW 18.01", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010" }
    ]
  },

  // ─── INTERDISCIPLINARY ───
  {
    id: "bioinformatics",
    title: "Bioinformatics",
    icon: "💻",
    category: "interdisciplinary",
    description: "Using computation to understand biological data.",
    topics: ["Genomics", "Python", "Sequence Alignment", "R"],
    details: "Where biology meets computer science. Sequences DNA, models proteins, and analyzes huge datasets to fight disease.",
    careers: ["Bioinformatician", "Computational Biologist", "Genomics Analyst"],
    resources: [
      { name: "Rosalind Problems", url: "https://rosalind.info" },
      { name: "Biopython Tutorial", url: "https://biopython.org/wiki/Documentation" }
    ]
  },
  {
    id: "nanotech",
    title: "Nanotechnology",
    icon: "🔬",
    category: "interdisciplinary",
    description: "Engineering at the scale of atoms and molecules.",
    topics: ["Nanoparticles", "Graphene", "Quantum Dots"],
    details: "Combines physics, chemistry, and materials science to build devices under 100 nanometers. Used in medicine, electronics, and energy.",
    careers: ["Nanotech Engineer", "Materials Researcher", "Biomedical Engineer"],
    resources: [
      { name: "NanoHub Courses", url: "https://nanohub.org" }
    ]
  },
  {
    id: "datasci",
    title: "Data Science",
    icon: "📊",
    category: "interdisciplinary",
    description: "Extracting insight from data using statistics and code.",
    topics: ["Statistics", "Python", "Pandas", "Visualization"],
    details: "Blend of statistics, programming, and domain knowledge. Drives decisions in business, science, health, and sports.",
    careers: ["Data Scientist", "Data Analyst", "ML Engineer", "BI Developer"],
    resources: [
      { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { name: "Python for Data Analysis (free)", url: "https://wesmckinney.com/book" }
    ]
  },
  {
    id: "environment",
    title: "Environmental Science",
    icon: "🌍",
    category: "interdisciplinary",
    description: "Understanding and protecting Earth's systems.",
    topics: ["Climate", "Ecology", "Sustainability", "Renewables"],
    details: "Combines biology, chemistry, physics, and policy. Focus areas: climate change, pollution, conservation, and clean energy.",
    careers: ["Environmental Scientist", "Climate Analyst", "Conservationist"],
    resources: [
      { name: "edX Climate Change", url: "https://www.edx.org/course/climate-change-the-science-and-global-impact" },
      { name: "NASA Climate", url: "https://climate.nasa.gov" }
    ]
  },
  {
    id: "space",
    title: "Space Technology",
    icon: "🚀",
    category: "interdisciplinary",
    description: "Rockets, satellites, and exploration of the cosmos.",
    topics: ["Propulsion", "Satellites", "Orbital Mechanics", "SpaceX"],
    details: "Combines aerospace, materials, computing, and physics. A booming private sector — SpaceX, Blue Origin, and more.",
    careers: ["Aerospace Engineer", "Satellite Engineer", "Mission Specialist"],
    resources: [
      { name: "NASA STEM", url: "https://www.nasa.gov/stem" },
      { name: "SpaceX Starship Updates", url: "https://www.spacex.com/vehicles/starship" }
    ]
  }
];

// ═══════════════════════════════════════════
//           THEME TOGGLE
// ═══════════════════════════════════════════
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.body.classList.add('light');
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      btn.textContent = isLight ? '☀️' : '🌙';
    });
  });
})();

// ═══════════════════════════════════════════
//           BOOKMARKS
// ═══════════════════════════════════════════
function getBookmarks() {
  try { return JSON.parse(localStorage.getItem('bookmarks') || '[]'); }
  catch { return []; }
}
function toggleBookmark(id) {
  const list = getBookmarks();
  const idx = list.indexOf(id);
  if (idx > -1) list.splice(idx, 1);
  else list.push(id);
  localStorage.setItem('bookmarks', JSON.stringify(list));
}
function isBookmarked(id) {
  return getBookmarks().includes(id);
  }
// ═══════════════════════════════════════════
//           FIELD DETAIL PAGE
// ═══════════════════════════════════════════
if (document.getElementById('fieldDetail')) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const field = fields.find(f => f.id === id);
  const container = document.getElementById('fieldDetail');
  const titleEl = document.getElementById('fieldTitle');

  if (!field) {
    titleEl.textContent = "Field not found";
    container.innerHTML = '<p>Sorry, that field doesn\'t exist. <a href="index.html" style="color:var(--accent)">Go back home</a>.</p>';
  } else {
    document.title = field.title + " — Tech & Science Hub";
    titleEl.innerHTML = `${field.icon} ${field.title}`;

    container.innerHTML = `
      <span class="category">${field.category}</span>
      <p class="lead">${field.description}</p>

      <h2>📖 Overview</h2>
      <p>${field.details}</p>

      <h2>🔑 Key Topics</h2>
      <ul class="topics">
        ${field.topics.map(t => `<li>${t}</li>`).join('')}
      </ul>

      <h2>💼 Career Paths</h2>
      <ul>
        ${field.careers.map(c => `<li>${c}</li>`).join('')}
      </ul>

      <h2>📚 Learning Resources</h2>
      <div>
        ${field.resources.map(r => `<a class="resource-link" href="${r.url}" target="_blank" rel="noopener">🔗 ${r.name}</a>`).join('')}
      </div>
    `;
  }
}
