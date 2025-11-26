//Λίστα με όλες τις κατηγορίες μαθημάτων

const categories = [
    "Data Science & Applied Math",
    "Operations Research",
    "Applied Mathematics",
    "Theoretical Computer Science",
    "Systems & Networks",
    "Software Systems",
    "Data & Knowledge Management",
    "Cybersecurity"
];

//Κεντρικός πίνακας "courses" με όλα τα μαθήματα και τις λεπτομέρειές τους 

const courses = [
    // 1. Data Science & Applied Math
    {
        id: 101,
        title: "Statistics in Computer Science",
        description: "Fundamental methods for statistical data analysis.",
        ects: 7,
        category: "Data Science & Applied Math"
    },
    {
        id: 102,
        title: "Machine Learning",
        description: "Introduction to supervised and unsupervised learning.",
        ects: 7,
        category: "Data Science & Applied Math"
    },
    {
        id: 103,
        title: "Data Analysis",
        description: "Techniques for processing and analyzing large datasets.",
        ects: 8,
        category: "Data Science & Applied Math"
    },

    // 2. Operations Research
    {
        id: 201,
        title: "Game Theory",
        description: "Strategic decision-making in competitive environments.",
        ects: 6,
        category: "Operations Research"
    },
    {
        id: 202,
        title: "Optimization",
        description: "Methods for solving optimization problems.",
        ects: 7,
        category: "Operations Research"
    },
    {
        id: 203,
        title: "Business Strategy",
        description: "Introduction to strategic planning models.",
        ects: 6,
        category: "Operations Research"
    },

    // 3. Applied Mathematics
    {
        id: 301,
        title: "Discrete Mathematics",
        description: "Combinatorics, logic, and graph theory.",
        ects: 6,
        category: "Applied Mathematics"
    },
    {
        id: 302,
        title: "Probability Theory",
        description: "Fundamental principles of probability.",
        ects: 6,
        category: "Applied Mathematics"
    },
    {
        id: 303,
        title: "Calculus II",
        description: "Continuation of Calculus I with differentiation & integration.",
        ects: 6,
        category: "Applied Mathematics"
    },

    // 4. Theoretical Computer Science
    {
        id: 401,
        title: "Introduction to Computer Science",
        description: "Core foundations of computing and information science.",
        ects: 6,
        category: "Theoretical Computer Science"
    },
    {
        id: 402,
        title: "Theory of Computation",
        description: "Automata, formal languages, Turing machines & computability.",
        ects: 7,
        category: "Theoretical Computer Science"
    },
    {
        id: 403,
        title: "Algorithms",
        description: "Design, analysis, and performance of algorithms.",
        ects: 7,
        category: "Theoretical Computer Science"
    },

    // 5. Systems & Networks
    {
        id: 501,
        title: "Communication Networks",
        description: "Network models, protocols and communication systems.",
        ects: 8,
        category: "Systems & Networks"
    },
    {
        id: 502,
        title: "Computer Systems Organization",
        description: "Hardware architecture and system-level design.",
        ects: 7,
        category: "Systems & Networks"
    },
    {
        id: 503,
        title: "Operating Systems",
        description: "Processes, memory, file systems and concurrency.",
        ects: 8,
        category: "Systems & Networks"
    },

    // 6. Software Systems
    {
        id: 601,
        title: "Introduction to Programming (Python)",
        description: "Programming fundamentals and Python applications.",
        ects: 6,
        category: "Software Systems"
    },
    {
        id: 602,
        title: "Object-Oriented Programming (Java)",
        description: "OOP principles and Java programming.",
        ects: 6,
        category: "Software Systems"
    },
    {
        id: 603,
        title: "Software Engineering",
        description: "Development models, testing, and engineering practices.",
        ects: 8,
        category: "Software Systems"
    },

    // 7. Data & Knowledge Management
    {
        id: 701,
        title: "Databases",
        description: "SQL, ER models, schemas and data management.",
        ects: 8,
        category: "Data & Knowledge Management"
    },
    {
        id: 702,
        title: "Knowledge Discovery",
        description: "Association rules, clustering and pattern mining.",
        ects: 6,
        category: "Data & Knowledge Management"
    },
    {
        id: 703,
        title: "Information Retrieval",
        description: "Search engines, indexing and ranking techniques.",
        ects: 6,
        category: "Data & Knowledge Management"
    },

    // 8. Cybersecurity
    {
        id: 801,
        title: "Cybersecurity",
        description: "Information system security and best practices.",
        ects: 7,
        category: "Cybersecurity"
    },
    {
        id: 802,
        title: "Network Security",
        description: "Firewalls, VPNs, cryptography and network attacks.",
        ects: 6,
        category: "Cybersecurity"
    },
    {
        id: 803,
        title: "Cryptography",
        description: "Cryptosystems, AES, RSA, and digital signatures.",
        ects: 6,
        category: "Cybersecurity"
    }
];
