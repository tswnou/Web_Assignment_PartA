//Λίστα με όλες τις κατηγοριες των βιβλιων και των βιντεο

const categories = [
    "Computer Science",
    "Mathematics",
    "Algorithms",
    "Machine Learning",
    "Networks",
    "Cybersecurity"
];

//Κεντρικός πίνακας "books" με όλα τα βιβλια και τις λεπτομέρειές τους 

const books = [
    // 1. Computer Science
    {
        id: 1001,
        title: "Computer Science Illuminated",
        description: "Complete overview of fundamental CS concepts.",
        pages: 720,
        category: "Computer Science",
        image: "assets/img/books/book1.jpg",
    },
    {
        id: 1002,
        title: "Code: The Hidden Language of Computer Hardware and Software",
        description: "How computers work from the ground up.",
        pages: 400,
        category: "Computer Science",
        image: "assets/img/books/book2.jpg",
        
    },

    // 2. Mathematics
    {
        id: 2001,
        title: "Linear Algebra Done Right",
        description: "Clear introduction to linear algebra theory.",
        pages: 350,
        category: "Mathematics",
        image: "assets/img/books/book3.jpg",

    },
    {
        id: 2002,
        title: "Calculus",
        description: "The classic textbook for multivariable calculus.",
        pages: 1200,
        category: "Mathematics",
        image: "assets/img/books/book4.jpg",
        
    },

    // 3. Algorithms
    {
        id: 3001,
        title: "Introduction to Algorithms (CLRS)",
        description: "The standard reference for algorithms.",
        pages: 1320,
        category: "Algorithms",
        image: "assets/img/books/book5.jpg",
        
    },
    {
        id: 3002,
        title: "Algorithms (Sedgewick & Wayne)",
        description: "Algorithm analysis and practical implementations.",
        pages: 992,
        category: "Algorithms",
        image: "assets/img/books/book6.jpg",
        
    },
    // 4. Machine Learning
    {
        id: 4001,
        title: "Pattern Recognition and Machine Learning",
        description: "Mathematical foundations of ML.",
        pages: 750,
        category: "Machine Learning",
        image: "assets/img/books/book7.jpg",
        
    },
    {
        id: 4002,
        title: "Deep Learning (Goodfellow et al.)",
        description: "The definitive book on deep learning.",
        pages: 800,
        category: "Machine Learning",
        image: "assets/img/books/book8.jpg",
        
    },


    // 5. Cybersecurity
    {
        id: 5001,
        title: "Serious Cryptography",
        description: "Modern practical introduction to cryptography.",
        pages: 450,
        category: "Cybersecurity",
        image: "assets/img/books/book9.jpg",
        
    },
    {
        id: 5002,
        title: "The Web Application Hacker’s Handbook",
        description: "The bible of practical web security.",
        pages: 912,
        category: "Cybersecurity",
        image: "assets/img/books/book10.jpg",
       
    },

    // 6. Networks
    {
        id: 6001,
        title: "Computer Networking: A Top-Down Approach",
        description: "Networking principles from application layer to hardware.",
        pages: 864,
        category: "Networks",
        image: "assets/img/books/book11.jpg",
        
    },
    {
        id: 6002,
        title: "TCP/IP Illustrated",
        description: "Detailed explanation of Internet protocols.",
        pages: 576,
        category: "Networks",
        image: "assets/img/books/book12.jpg",
        
    }

    
];


//Κεντρικός πίνακας "videos" με όλα τα video και τις λεπτομέρειές τους 

const videos = [
    // 1. Computer Science
    {
        id: 8001,
        title: "Introducing How Computers Work - Crash Course",
        description: "A beginner-friendly explanation of how computers operate. Bill Gates kicks off an introduction to the series How Computers Work.",
        duration: "1:20",
        category: "Computer Science",
        youtubeLink: "https://www.youtube.com/watch?v=OAx_6-wdslM"
    },
    {
        id: 8002,
        title: "Harvard CS50 – Full Computer Science University Course",
        description: "Harvard’s CS50 course introduction to computer basics.Learn the basics of computer science from Harvard University. This is CS50, an introduction to the intellectual enterprises of computer science and the art of programming.",
        duration: "1:00:51:37",
        category: "Computer Science",
        youtubeLink: "https://www.youtube.com/watch?v=8mAITcNt710"
    },

    // 2. Mathematics
    {
        id: 8101,
        title: "Linear Algebra Full Course",
        description: "MIT's famous linear algebra course by Gilbert Strang. This is the first lecture of the course and the professor focuses specifically in the Geometry of Linear Equations.",
        duration: "39:48",
        category: "Mathematics",
        youtubeLink: "https://www.youtube.com/watch?v=ZK3O402wf1c"
    },
    {
        id: 8102,
        title: "Calculus for Beginners",
        description: "Understanding basic concepts of calculus with examples.",
        duration: "22:19",
        category: "Mathematics",
        youtubeLink: "https://www.youtube.com/watch?v=3d6DsjIBzJ4"
    },

    // 3. Algorithms
    {
        id: 8201,
        title: "Algorithms and Data Structures Tutorial - Full Course for Beginners",
        description: "In this course you will learn about algorithms and data structures, two of the fundamental topics in computer science. There are three main parts to this course: algorithms, data structures, and a deep dive into sorting and searching algorithms.By the end, you will understand what algorithms and data structures are, how they are measured and evaluated, and how they are used to solve problems.",
        duration: "5:22:08",
        category: "Algorithms",
        youtubeLink: "https://www.youtube.com/watch?v=8hly31xKli0"
    },
    {
        id: 8202,
        title: "Dijkstra's Algorithm Visualization",
        description: "Graph pathfinding explained with animation. Dijkstra's Algorithm finds the shortest path between two points. Dr Mike Pound explains how it works.",
        duration: "10:42",
        category: "Algorithms",
        youtubeLink: "https://www.youtube.com/watch?v=GazC3A4OQTE"
    },

    // 4. Machine Learning
    {
        id: 8301,
        title: "But what is a neural network? ",
        description: "Simple and visual explanation of neural networks.What are the neurons, why are there layers, and what is the math underlying it?",
        duration: "18:39",
        category: "Machine Learning",
        youtubeLink: "https://www.youtube.com/watch?v=aircAruvnKk"
    },
    {
        id: 8302,
        title: "Machine Learning Basics - Coursera",
        description: "Lecture by Professor Andrew Ng for Machine Learning (CS 229) in the Stanford Computer Science department.  Professor Ng provides an overview of the course in this introductory meeting. This course provides a broad introduction to machine learning and statistical pattern recognition. Topics include supervised learning, unsupervised learning, learning theory, reinforcement learning and adaptive control.   Recent applications of machine learning, such as to robotic control, data mining, autonomous navigation, bioinformatics, speech recognition, and text and web data processing are also discussed.",
        duration: "1:08:39",
        category: "Machine Learning",
        youtubeLink: "https://www.youtube.com/watch?v=UzxYlbK2c7E"
    },

    // 5. Cybersecurity
    {
        id: 8401,
        title: "What is Symmetric Encryption?",
        description: "How modern encryption works and why it matters. How does public-key cryptography work? What is the private key and the public key? Why is asymmetric encryption different from symmetric encryption?",
        duration: "4:40",
        category: "Cybersecurity",
        youtubeLink: "https://www.youtube.com/watch?v=AQDCe585Lnc"
    },
    {
        id: 8402,
        title: "Introduction to Cybersecurity",
        description: "This is CS50's Introduction to Cybersecurity, with Professor David J. Malan. An introduction to Сybersecurity for technical and non-technical audiences alike. Learn how to secure your accounts, data, systems, and software against today’s threats and how to recognize and evaluate tomorrow’s as well, both at home and at work in a course of 6 lectures.",
        duration: "2:21",
        category: "Cybersecurity",
        youtubeLink: "https://www.youtube.com/watch?v=kmJlnUfMd7I&list=PLhQjrBD2T383Cqo5I1oRrbC1EKRAKGKUE"
    },

    // 6. Networks
    {
        id: 8501,
        title: "How the Internet Works",
        description: "A visual explanation of the fundamental Internet concepts. The internet is not a fuzzy cloud. The internet is a wire, actually buried in the ground. Computers connected directly to the internet are called Servers,while the computers you and I use are clients, because they are not connected directly to the internet, but through an Internet Service Provider. Routers shuttle packets of information across the internet, and transmit e-mail, pictures, and web pages.",
        duration: "4:48",
        category: "Networks",
        youtubeLink: "https://www.youtube.com/watch?v=7_LPdttKXPc"
    },
    {
        id: 8502,
        title: "TCP/IP Explained",
        description: "Understand IP, TCP, packets, and routing. Many of us have seen mysterious TCP/IP options in our network settings, but what is TCP/IP, and how does it enable the Internet to operate as it does?",
        duration: "6:10",
        category: "Networks",
        youtubeLink: "https://www.youtube.com/watch?v=PpsEaqJV_A0"
    },
];
