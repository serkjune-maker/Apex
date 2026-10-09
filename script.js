const fields = [
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

renderFields();
