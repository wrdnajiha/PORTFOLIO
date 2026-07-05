// ============================================================
// ===== TYPING EFFECT =====
// ============================================================
const texts = [
  'Interactive Media Student',
  'Creative Designer',
  'Digital Storyteller',
  'Future Developer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingElement = document.querySelector('.typing-text');

function typeEffect() {
  const currentText = texts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
    return;
  }

  const speed = isDeleting ? 50 : 80;
  setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 500);
});

// ============================================================
// ===== NAV ACTIVE STATE =====
// ============================================================
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// ============================================================
// ===== PARALLAX EFFECT ON SHAPES =====
// ============================================================
document.addEventListener('mousemove', function(e) {
  const shapes = document.querySelectorAll('.shape');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.3;
    const moveX = (x - 0.5) * speed * 10;
    const moveY = (y - 0.5) * speed * 10;
    shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

document.addEventListener('mousemove', function(e) {
  const rings = document.querySelectorAll('.ring');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  rings.forEach((ring, index) => {
    const speed = (index + 1) * 0.2;
    const moveX = (x - 0.5) * speed * 15;
    const moveY = (y - 0.5) * speed * 15;
    ring.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

// ============================================================
// ===== POPUP FUNCTIONS - COMPLETE DATA =====
// ============================================================

const projectData = {
  fyp: {
    title: 'K-CustomAR: Interactive AR Korean Food Customization System',
    subtitle: 'Final Year Project | Mobile AR Application',
    description: 'Developed an Augmented Reality (AR) mobile application that allows users to visualize and customize Korean food dishes in real-time. Users can select ingredients, adjust portion sizes, customize spice levels, and view dynamic price updates through an interactive AR experience.',
    
    // ===== 3 GALLERY IMAGES =====
    gallery: [
      'image/ar1.jpg',
      'image/ar2.jpg',
      'image/ar3.jpg'
    ],
    
    // ===== GALLERY CAPTIONS =====
    galleryCaptions: [
      '📱 AR Food Visualization',
      '🍱 Customization Interface',
      '📋 Order Summary'
    ],
    
    // ===== KEY FEATURES =====
    features: [
      'Marker-Based AR Food Visualization - Scan menu marker to display 3D Korean food models, Real-time AR food preview',
      'Food Customization System - Rice portion selection (Small, Medium, Large), Vegetable selection, Protein selection, Topping customization, Sauce/spice level customization',
      'Dynamic Menu Interaction - Interactive UI panels, Real-time food model updates, Price calculation based on selected ingredients',
      'Order Summary Module - Display selected ingredients, Display selected drink, Calculate total order price'
    ],
    
    // ===== TECHNOLOGIES USED =====
    technologies: ['Unity 6', 'Vuforia Engine', 'C#', 'Blender', 'Meshy AI', 'Android Studio', 'GitHub'],
    
    // ===== MY RESPONSIBILITIES =====
    responsibilities: [
      'Designed application workflow and wireframes',
      'Developed AR marker detection system',
      'Integrated 3D food models into Unity',
      'Implemented food customization logic',
      'Developed UI navigation and interaction system',
      'Conducted testing and debugging'
    ],
    
    // ===== SKILLS DEMONSTRATED =====
    skills: [
      'Augmented Reality Development',
      'Unity Development',
      'C# Programming',
      'UI/UX Design',
      '3D Asset Integration',
      'Mobile Application Development',
      'Software Testing'
    ],
    
    // ===== PROJECT OUTCOME =====
    outcome: 'Successfully developed a functional AR food customization prototype that enhances user engagement and decision confidence by allowing customers to visualize and customize Korean food dishes before ordering.',
    
    tags: ['Unity', 'AR', 'C#', 'Mobile App', 'Vuforia'],
    details: {
      'Duration': '6 months',
      'Role': 'Lead Developer',
      'Tools': 'Unity 6, Vuforia, Blender, Android Studio',
      'Team': 'Individual'
    },
    
    // ===== BUTTONS =====
    fypLinks: {
      github: 'https://github.com/your-username/k-customar',
      report: 'https://drive.google.com/file/d/YOUR_REPORT_ID/view?usp=sharing',
      demo: 'https://www.youtube.com/watch?v=YOUR_DEMO_VIDEO_ID',
      apk: 'https://drive.google.com/file/d/YOUR_APK_ID/view?usp=sharing'
    }
  },
  
  workshop1: {
    title: 'Workshop I · Hostel Maintenance System',
    subtitle: 'C++ · System Design',
    description: 'Workshop I focuses on fundamental programming and system development. This project involves the development of a Hostel Maintenance System using C++, designed to manage maintenance requests, records, and basic system operations. The project emphasizes logical thinking, problem-solving, and structured coding.',
    image: 'images/workshop1.png',
    tags: ['C++', 'System Design', 'OOP', 'File Handling', 'Problem Solving'],
    details: {
      'Duration': '5 months',
      'Role': 'System Developer',
      'Tools': 'C++, Visual Studio',
      'Team': 'Individual Project'
    },
    pdfLink: 'files/workshop1-report.pdf'
  },
  
  workshop2: {
    title: 'Workshop II · RETAK',
    subtitle: 'Psychological Short Film',
    description: 'RETAK is a psychological short film that explores the inner conflict of an individual living with schizophrenia through visual and sound-driven narrative techniques. The film uses minimal dialogue, environmental sound, and visual description to reflect internal conflict and fragmented perception.',
    image: 'image/retak-poster.png',
    tags: ['Scriptwriting', 'Storyboard', 'Poster Design', 'Sound Design', 'Video Production'],
    
    
    
    details: {
      'Duration': '5 months',
      'Role': 'Storyboard Designer, Creative Director, Production Team Poster Designer, Merchandise Designer, Sound Editor',
      'Tools': 'Adobe Premiere Pro, After Effects, Adobe Photoshop, Adobe Illustrator, Audacity',
      'Team': '4 members'
    },
    
    gallery: [
      'image/retak-showcase1.jpg',
      'image/retak-showcase2.jpg',
      'image/retak-showcase3.jpg',
      'image/retak-behind1.jpg',
      'image/retak-behind2.jpg',
      'image/retak-behind3.jpg'
    ],
    
    retakLinks: {
      script: 'files/retak-script.pdf',
      storyboard: 'files/retak-storyboard.pdf',
      poster: 'files/retak-poster.pdf',
      merch: 'files/retak-merchandise.pdf',
      report: 'files/retak-report.pdf',
      logbook: 'files/retak-logbook.pdf',
      promoVideo: 'https://vt.tiktok.com/ZSQG16eyk/',
      fullVideo: 'https://drive.google.com/file/d/1T8e7k9ysTD9_12Ukd2IaTO8Z-46p-MxL/view?usp=sharing'
    }
  },  // <--- ADDED COMMA HERE!
  
motion1: {
  title: 'Motion Graphics I',
  subtitle: 'Final Assessment Documentation · The Lost Giant',
  description: 'The Lost Giants: Secrets Buried Beneath Time is a motion graphics documentary that explores the final moments of the dinosaurs before their disappearance from Earth. Through cinematic visuals, AI-generated content, visual effects, sound design, and storytelling, the project recreates a prehistoric world and the mysterious event that changed life on Earth forever. The documentary follows the journey from a thriving dinosaur era to a dark and silent world covered in ash, uncovering a story buried beneath time.',
  
  // ===== GALLERY IMAGES (5 images) =====
  gallery: [
    'image/motion1-image1.jpg',
    'image/motion1-image2.jpg',
    'image/motion1-image3.jpg',
    'image/motion1-image4.jpg',
    'image/motion1-image5.jpg'
  ],
  
  // ===== GALLERY CAPTIONS =====
  galleryCaptions: [
    '🎨 ',
    '🎬 ',
    '🎞️ ',
    '📽️ ',
    '✨ '
  ],
  
  tags: ['After Effects', 'Motion Design', 'Animation', 'Visual Effects', 'Typography'],
  details: {
    'Duration': '1 months',
    'Role': 'Motion Designer, Sound Editor, Poster Editor',
    'Tools': 'After Effects, Illustrator, Photoshop',
    'Team': 'Individual Project'
  },
  
  // ===== DRIVE LINK BUTTON =====
  videoLink: 'https://drive.google.com/file/d/14DWYvY6Wllpy6t0b8CTNou76T_O_hMsw/view?usp=sharing'
},
  
 motion2: {
  title: 'Motion Graphics II',
  subtitle: 'Weather Play · Raya Advertisement',
  description: 'Developed motion graphics projects utilizing green screen compositing, kinetic typography, visual effects, and video editing techniques to create engaging visual storytelling experiences and enhance audience communication through creative digital media production.',
  
  // ===== 6 GALLERY IMAGES (3 for each project) =====
  gallery: [
    // Weather Play (3 images)
    'image/motion2-weather1.jpg',
    'image/motion2-weather2.png',
    'image/motion2-weather3.jpg',
    // Raya Advertisement (3 images)
    'image/motion2-raya1.png',
    'image/motion2-raya2.jpg'
  ],
  
  // ===== GALLERY CAPTIONS =====
  galleryCaptions: [
    '🌤️ Weather Play',
    '🌤️ Weather Play',
    '🌤️ Weather Play',
    '🌙 Raya Ad',
    '🌙 Raya Ad',

  ],
  
  tags: ['After Effects', 'Motion Design', 'Broadcast', 'Visual Effects', 'Typography'],
  details: {
    'Duration': '2 months',
    'Role': 'Motion Designer, Animator',
    'Tools': 'After Effects, Illustrator, Premiere Pro',
    'Team': 'Individual Project'
  },
  
  // ===== TWO VIDEO LINKS =====
  videoLinks: {
    weather: 'https://youtu.be/d6Qpfzbjlzc',
    raya: 'https://www.youtube.com/watch?v=your-raya-video-id'
  }
},
  
  interactive: {
    title: 'Interactive Media Project Management',
    subtitle: 'Making Game Using Unity',
    description: 'A game development project using Unity focusing on game mechanics, interface design, and project management workflow. Strengthened skills in interactive media production, teamwork, and structured game development.',
    videoLink: 'https://drive.google.com/file/d/1fpc8Dd_F50k-U2zkQtcOVUyvdXzCZUUq/view?usp=drive_link',
    tags: ['Unity', 'Game Design', 'C#', 'Teamwork', 'Project Management'],
    details: {
      'Duration': '1 months',
      'Role': 'Game Developer',
      'Tools': 'Unity, C#, Visual Studio',
      'Team': '4 members'
    }
  },
  
graphic: {
  title: 'Interactive Computer Graphic',
  subtitle: 'Faculty Building (C++)',
  description: 'Developed an interactive 3D environment using C++ to visualize a faculty building and surrounding spaces. Demonstrated understanding of 3D object modeling, camera control, perspective view, and basic interaction.',
  
  // ===== IMAGE =====
  image: 'image/faculty-building.jpg',  // Change to your image path
  
  tags: ['C++', '3D Modeling', 'OpenGL', 'Graphics', 'Camera Control'],
  details: {
    'Duration': '1 months',
    'Role': '3D Developer',
    'Tools': 'C++, OpenGL, Visual Studio',
    'Team': '4 members'
  }
},
  
imaging: {
  title: 'Digital Imaging',
  subtitle: 'Best Picture & Booklet',
  description: 'This digital imaging project explored the integration of technical photography and visual communication. Through careful application of composition techniques, lighting strategies, and post-production editing using Adobe Photoshop and Illustrator, a compelling visual portfolio and booklet were created. The project was awarded the Best Composition Picture Award, demonstrating strong proficiency in photography, design, and visual storytelling.',
  
  // ===== GALLERY IMAGES =====
  gallery: [
    'image/imaging-achievement1.jpg',
    'image/imaging-achievement2.jpg',
    'image/imagingextra.jpg',
    'image/imaging-adobe.jpg',
    'image/imaging-learning1.jpg',
    'image/imaging-learning2.jpg'
  ],
  
  // ===== GALLERY CAPTIONS =====
  galleryCaptions: [
    '',  // No caption for first achievement
    '',
    'Exhibition Showcase',
    'Adobe Photoshop & Illustrator',
    'Learning Process',
    'Learning Process'
  ],
  
  tags: ['Photography', 'Photoshop', 'Illustrator', 'Composition', 'Visual Storytelling'],
  details: {
    'Duration': '5 months',
    'Role': 'Photographer, Designer',
    'Tools': 'Camera, Adobe Photoshop, Adbobe Illustrator',
    'Team': 'Individual Project'
  }
},
  
animation: {
  title: 'Computer Animation',
  subtitle: '3D Character Introduction Animation',
  description: 'A 3D character introduction created using Blender, focusing on character modelling, keyframing, camera movement, lighting, and scene presentation. This individual work demonstrates my skills in 3D animation production including modelling, rigging, animation, camera work, lighting, and scene composition.',
  video: 'videos/character-animation.mov',
  gallery: [
    'image/anim1.jpg',
    'image/anim2.jpg',
    'image/anim3.jpg'
  ],
  galleryCaptions: [
    '🎨 Modelling Process',
    '🦴 Rigging & Setup',
    '🎬 Animation & Lighting'
  ],
  tags: ['Blender', '3D Animation', 'Modelling', 'Rigging', 'Lighting', 'Keyframing'],
  details: {
    'Duration': '5 months',
    'Role': '3D Animator, Character Designer',
    'Tools': 'Blender',
    'Team': 'Group Project'
  },
  extraLinks: {
    part1: 'https://drive.google.com/file/d/160psx7y5_6AgiUFagktttGkUwtK0S5_i/view?usp=sharing',
    part2: 'https://drive.google.com/file/d/1OduU18LJ8EYCITgliHkjbJvT43KHgxus/view?usp=sharing'
  },
  // ===== VIDEO GALLERY (AT THE BOTTOM) =====
  videoGallery: [
    {
      link: 'https://youtu.be/EBBqX1Td-fI',
      title: 'Bicycle Animation',
      description: 'Basic 3D modeling and object animation.'
    },
    {
      link: 'https://youtu.be/vPRkxBan_ok',
      title: 'Facial Rigging',
      description: 'Character rigging and facial control setup.'
    },
    {
      link: 'https://youtu.be/GNy7Sf8etEI',
      title: 'Bouncing Ball Animation',
      description: 'Animation principles and motion path practice.'
    }
  ]
},

audio: {
  title: 'Digital Audio & Video',
  subtitle: 'Project High Council',
  description: 'Recreated selected scenes from the short film High Council focusing on editing, sound design, and visual composition. Used Audacity for audio editing, CapCut for video editing, and Adobe Photoshop for visual elements to understand cinematic pacing and audiovisual storytelling.',
  
   posterImage: 'image/audio-poster.jpg',
  // ===== GALLERY IMAGES (Poster first, then 4 others) =====
  gallery: [
    'image/audio-editing1.jpg',        // <-- POSTER FULL (FIRST)
    'image/audio-editing2.jpg',
    'image/audio-editing3.jpg',
    'image/audio-editing4.jpg',
    'image/audio-editing5.jpg'
  ],
  
  // ===== GALLERY CAPTIONS =====
  galleryCaptions: [
    '📽️ ',              // <-- Poster caption
    '🎬 ',
    '🎞️ ',
    '📽️ ',
    '🎵 '

  ],
  
  tags: ['Audacity', 'CapCut', 'Photoshop', 'Sound Design', 'Video Editing'],
  details: {
    'Duration': '2 months',
    'Role': 'Editor, Sound Designer, Actor',
    'Tools': 'Audacity, CapCut, Photoshop',
    'Team': '4 members'
  },
  
  videoLink: 'https://youtu.be/QJ8pOyLCwJ4'
},
  security: {
    title: 'Attendance & Leave Management System (ALMS)',
    subtitle: 'Secure Web Application | Network & System Security',
    description: 'Developed a secure Attendance & Leave Management System using a two-tier architecture with separate web and database servers. Implemented multiple security controls including HTTPS, UFW Firewall, bcrypt password hashing, prepared statements, role-based access control, and SFTP Chroot Jail to protect the application from common web security threats.',
    
    // ===== KEY FEATURES =====
    features: [
      '🔒 Two-VM Architecture (Web Server & Database Server)',
      '🔒 HTTPS with SSL Certificate',
      '🔒 bcrypt Password Hashing',
      '🔒 Prepared Statements (SQL Injection Prevention)',
      '🔒 XSS Protection (htmlspecialchars())',
      '🔒 Role-Based Access Control (RBAC)',
      '🔒 UFW Firewall Configuration',
      '🔒 SFTP Chroot Jail',
      '🔒 Attendance & Leave Management Module'
    ],
    
    // ===== TECHNOLOGIES USED =====
    technologies: ['Ubuntu Server', 'Apache2', 'PHP', 'MySQL', 'VirtualBox', 'UFW Firewall', 'OpenSSL', 'SSH/SFTP'],
    
    tags: ['Web Security', 'Network Security', 'Linux', 'PHP', 'MySQL', 'OWASP', 'VirtualBox'],
    details: {
      'Duration': '3 months',
      'Role': 'Security Analyst & Backend Developer',
      'Tools': 'Ubuntu Server, Apache2, PHP, MySQL, VirtualBox, UFW Firewall, OpenSSL, SSH/SFTP',
      'Team': 'Group Project (3 Members)'
    },
    
    // ===== DEMO VIDEO LINK =====
    videoLink: 'https://youtube.com/shorts/sJNBUCZAkqM?si=v1iIJ0rNp0Hm5hCM'
  },
  
    vr: {
    title: 'Virtual Reality · Malaysian Food Heritage Gallery',
    subtitle: 'Third-Person 3D Virtual Gallery | Unity · VR',
    description: 'Developed a third-person 3D virtual gallery in Unity where players explore traditional and modern Malaysian cuisine through interactive environments connected by portals. The project promotes awareness of Malaysian food heritage by allowing players to compare traditional and modern cuisine in an interactive virtual experience.',
    sdg: 'SDG 11 – Sustainable Cities and Communities',

    gallery: [
      'image/vr-gallery.png',
      'image/traditional-house.png',
      'image/modern-house.png',
      'image/traditional-food.png',
      'image/modern-food.png'
    ],

    galleryCaptions: [
      'Virtual Gallery',
      'Traditional House',
      'Modern House',
      'Traditional Cuisine',
      'Modern Cuisine'
    ],
    // ===== KEY FEATURES =====
    features: [
      'Third-person character controller',
      'Portal transition system',
      'Interactive food information panels',
      'Traditional Malay house environment',
      'Modern house environment',
      'Simple objective GUI'
    ],
    
    // ===== MY CONTRIBUTION =====
    contributions: [
      'Designed the gallery layout',
      'Built the environments',
      'Arranged 3D assets',
      'Created interactive exhibits'
    ],
    
    tags: ['VR', 'Unity', 'C#', '3D Environment', 'Cultural Heritage'],
    details: {
      'Duration': '1 months',
      'Role': 'VR Developer, Environment Designer',
      'Tools': 'Unity, C#',
      'Team': '4 members'
    },
    
    // ===== DEMO VIDEO LINK =====
    videoLink: 'https://www.youtube.com/watch?v=F_EQRIhuF3Y',
    
    // ===== OTHER LAB ACTIVITIES (YouTube Links) =====
    labActivities: [
      {
        title: 'Assignment 1: Third Controller',
        description: 'Collecting coins, sound effects, and UI integration',
        link: 'https://youtu.be/3CIyprMfMKU'
      },
      {
        title: 'Lab Test: Voice Command',
        description: 'Voice-controlled interaction system',
        link: 'https://youtu.be/Vk5uBUB6EPo'
      },
      {
        title: 'Lab Class: VR Environment',
        description: 'Virtual reality environment setup and exploration',
        link: 'https://youtu.be/cOOfsLHuDCc'
      }
    ]
  },
};

// ============================================================
// ===== GALLERY SCROLL FUNCTION =====
// ============================================================
let galleryIndex = 0;

function scrollGallery(direction) {
  const track = document.querySelector('.gallery-track');
  if (!track) return;
  
  const items = track.querySelectorAll('.gallery-item');
  const totalItems = items.length;
  const itemWidth = items[0]?.offsetWidth || 300;
  const gap = 20;
  const scrollAmount = itemWidth + gap;
  
  galleryIndex = Math.max(0, Math.min(galleryIndex + direction, totalItems - 1));
  
  track.scrollTo({
    left: galleryIndex * scrollAmount,
    behavior: 'smooth'
  });
  
  updateGalleryIndicator();
}

function updateGalleryIndicator() {
  const track = document.querySelector('.gallery-track');
  if (!track) return;
  
  const items = track.querySelectorAll('.gallery-item');
  const totalItems = items.length;
  const currentIndex = Math.round(track.scrollLeft / (items[0]?.offsetWidth + 20 || 320));
  
  const currentEl = document.getElementById('galleryCurrent');
  const totalEl = document.getElementById('galleryTotal');
  
  if (currentEl) currentEl.textContent = Math.min(currentIndex + 1, totalItems);
  if (totalEl) totalEl.textContent = totalItems;
}

// ============================================================
// ===== OPEN POPUP FUNCTION =====
// ============================================================
function openPopup(projectId) {
  const popup = document.getElementById('projectPopup');
  const body = document.getElementById('popupBody');
  
  const data = projectData[projectId];
  if (!data) {
    console.error('Project not found:', projectId);
    return;
  }
  
  const hasImage = data.image && data.image !== '';
  const hasPdf = data.pdfLink && data.pdfLink !== '';
  const isFyp = projectId === 'fyp';
  const isRetak = projectId === 'workshop2';
  const isImaging = projectId === 'imaging';
  const isAnimation = projectId === 'animation';
  const isAudio = projectId === 'audio';
  const isMotion1 = projectId === 'motion1';  // <-- ADD THIS
  const isMotion2 = projectId === 'motion2';
  const isVR = projectId === 'vr';
  const hasGallery = (isFyp || isRetak || isImaging || isAnimation || isAudio || isMotion1 || isMotion2 || isVR) && data.gallery && data.gallery.length > 0;
  const hasSoftware = data.software && data.software.length > 0;
  const hasVideo = data.video && data.video !== '';
  const hasExtraLinks = data.extraLinks && (data.extraLinks.part1 || data.extraLinks.part2);
  const hasYoutube = data.youtubeLink && data.youtubeLink !== '';
  
  let html = `
    <h2>${data.title}</h2>
    <p class="popup-subtitle">${data.subtitle}</p>
  `;
    // ===== FYP DETAILED SECTION =====
  if (projectId === 'fyp') {
    
    // ===== KEY FEATURES =====
    if (data.features && data.features.length > 0) {
      html += `
        <div class="fyp-section">
          <h4 class="fyp-title"><i class="fas fa-list-check"></i> Key Features</h4>
          <div class="fyp-features-grid">
      `;
      
      data.features.forEach(feature => {
        html += `
          <div class="fyp-feature-item">
            <span>${feature}</span>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== TECHNOLOGIES USED =====
    if (data.technologies && data.technologies.length > 0) {
      html += `
        <div class="fyp-section">
          <h4 class="fyp-title"><i class="fas fa-code"></i> Technologies Used</h4>
          <div class="fyp-tech-tags">
      `;
      
      data.technologies.forEach(tech => {
        html += `
          <span class="fyp-tech-tag">${tech}</span>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== MY RESPONSIBILITIES =====
    if (data.responsibilities && data.responsibilities.length > 0) {
      html += `
        <div class="fyp-section">
          <h4 class="fyp-title"><i class="fas fa-user-check"></i> My Responsibilities</h4>
          <div class="fyp-list">
      `;
      
      data.responsibilities.forEach(item => {
        html += `
          <div class="fyp-list-item">
            <i class="fas fa-chevron-right"></i>
            <span>${item}</span>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== SKILLS DEMONSTRATED =====
    if (data.skills && data.skills.length > 0) {
      html += `
        <div class="fyp-section">
          <h4 class="fyp-title"><i class="fas fa-star"></i> Skills Demonstrated</h4>
          <div class="fyp-skills-tags">
      `;
      
      data.skills.forEach(skill => {
        html += `
          <span class="fyp-skill-tag">${skill}</span>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== PROJECT OUTCOME =====
    if (data.outcome) {
      html += `
        <div class="fyp-section">
          <h4 class="fyp-title"><i class="fas fa-trophy"></i> Project Outcome</h4>
          <p class="fyp-outcome">${data.outcome}</p>
        </div>
      `;
    }
    
    // ===== FYP BUTTONS =====
    if (data.fypLinks) {
      const links = data.fypLinks;
      
      html += `
        <div class="fyp-buttons-section">
          <h4 class="fyp-title"><i class="fas fa-link"></i> Resources</h4>
          <div class="fyp-buttons-grid">
      `;
      
      if (links.github) {
        html += `
          <a href="${links.github}" target="_blank" class="fyp-btn github-btn">
            <i class="fab fa-github"></i> GitHub Repository
          </a>
        `;
      }
      
      if (links.report) {
        html += `
          <a href="${links.report}" target="_blank" class="fyp-btn report-btn">
            <i class="fas fa-file-pdf"></i> Project Report
          </a>
        `;
      }
      
      if (links.demo) {
        html += `
          <a href="${links.demo}" target="_blank" class="fyp-btn demo-btn">
            <i class="fas fa-play-circle"></i> Demo Video
          </a>
        `;
      }
      
      if (links.apk) {
        html += `
          <a href="${links.apk}" target="_blank" class="fyp-btn apk-btn">
            <i class="fas fa-download"></i> APK Download
          </a>
        `;
      }
      
      html += `
          </div>
        </div>
      `;
    }
  }

  // ===== VIDEO SECTION =====
  if (hasVideo) {
    html += `
      <div class="popup-video-section auto-height">
        <video class="popup-video" controls preload="metadata" playsinline>
          <source src="${data.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  }
  
  // ===== GALLERY SECTION (for RETAK, Imaging, Animation & Audio) =====
  if (hasGallery) {
    const hasCaptions = data.galleryCaptions && data.galleryCaptions.length > 0;
    
    html += `
      <div class="gallery-section">
        <div class="gallery-scroll">
          <div class="gallery-track">
    `;
    
    data.gallery.forEach((img, index) => {
      let label = '';
      if (isRetak) {
        label = index < 3 ? 'Showcase' : 'Behind the Scene';
      } else if (hasCaptions && data.galleryCaptions[index]) {
        label = data.galleryCaptions[index];
      }
      
      html += `
        <div class="gallery-item">
          <img src="${img}" alt="${data.title} ${index + 1}" />
          ${label ? `<div class="gallery-label">${label}</div>` : ''}
        </div>
      `;
    });
    
    html += `
          </div>
        </div>
        <div class="gallery-nav">
          <button class="gallery-btn prev-btn" onclick="scrollGallery(-1)"><i class="fas fa-chevron-left"></i></button>
          <span class="gallery-indicator"><span id="galleryCurrent">1</span> / <span id="galleryTotal">${data.gallery.length}</span></span>
          <button class="gallery-btn next-btn" onclick="scrollGallery(1)"><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    `;
  }
  // ===== POSTER FULL IMAGE (for Audio project) =====
if (isAudio && data.posterImage) {
  html += `
    <div class="poster-full-section">
      <h4 class="poster-title"><i class="fas fa-image"></i> Project Poster</h4>
      <div class="poster-full-image">
        <img src="${data.posterImage}" alt="${data.title} Poster" />
      </div>
    </div>
  `;
}

  // ===== MAIN IMAGE =====
  if (hasImage && !isFyp && !isRetak && !isImaging && !isAnimation && !isAudio && !isMotion1 && !isMotion2) {
    html += `
      <div class="popup-image">
        <img src="${data.image}" alt="${data.title}" />
      </div>
    `;
  }
  
  html += `
    <p class="popup-description">${data.description}</p>
    <div class="popup-tags">
  `;
  
  data.tags.forEach(tag => {
    html += `<span>${tag}</span>`;
  });
  
  html += `</div><div class="popup-details">`;
  
  for (const [key, value] of Object.entries(data.details)) {
    html += `
      <div class="popup-detail-item">
        <strong>${key}</strong>
        <span>${value}</span>
      </div>
    `;
  }
  
  html += `</div>`;
  
  // ===== SOFTWARE USED SECTION =====
  if (hasSoftware) {
    html += `
      <div class="software-section">
        <h4 class="software-title"><i class="fas fa-laptop-code"></i> Software Used</h4>
        <div class="software-grid">
    `;
    
    data.software.forEach(soft => {
      html += `
        <div class="software-item" style="--soft-color: ${soft.color || '#b88ad4'}">
          <div class="software-icon" style="background: ${soft.color || '#b88ad4'}20">
            <i class="fas ${soft.icon}" style="color: ${soft.color || '#b88ad4'}"></i>
          </div>
          <span class="software-name">${soft.name}</span>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
  }
  
  // ===== RETAK RESOURCES =====
  if (isRetak && data.retakLinks) {
    const links = data.retakLinks;
    
    html += `
      <div class="retak-resources">
        <h4 class="retak-title"><i class="fas fa-film"></i> RETAK Resources</h4>
        <div class="retak-grid">
    `;
    
    const resources = [
      { key: 'script', icon: 'fa-file-alt', label: 'Script', color: '#b88ad4' },
      { key: 'storyboard', icon: 'fa-pencil-alt', label: 'Storyboard', color: '#e8aad6' },
      { key: 'poster', icon: 'fa-image', label: 'Poster', color: '#d9c4f0' },
      { key: 'merch', icon: 'fa-tshirt', label: 'Merchandise', color: '#f0c4d4' },
      { key: 'report', icon: 'fa-file-pdf', label: 'Report', color: '#c4a0d4' },
      { key: 'logbook', icon: 'fa-book', label: 'Logbook', color: '#b4c4e0' }
    ];
    
    resources.forEach(res => {
      if (links[res.key]) {
        html += `
          <a href="${links[res.key]}" target="_blank" class="retak-resource-btn" style="--btn-color: ${res.color}">
            <i class="fas ${res.icon}"></i>
            <span>${res.label}</span>
            <i class="fas fa-arrow-right btn-arrow"></i>
          </a>
        `;
      }
    });
    
    html += `
        </div>
      </div>
    `;
    
    // ===== VIDEO LINKS =====
    html += `
      <div class="retak-videos">
        <h4 class="retak-title"><i class="fas fa-video"></i> Videos</h4>
        <div class="retak-video-grid">
    `;
    
    if (links.promoVideo) {
      html += `
        <a href="${links.promoVideo}" target="_blank" class="retak-video-btn promo-btn">
          <div class="video-icon"><i class="fas fa-play-circle"></i></div>
          <div class="video-info">
            <span class="video-label">View Promo Video</span>
            <span class="video-desc">Watch the teaser</span>
          </div>
          <i class="fas fa-arrow-right video-arrow"></i>
        </a>
      `;
    }
    
    if (links.fullVideo) {
      html += `
        <a href="${links.fullVideo}" target="_blank" class="retak-video-btn full-btn">
          <div class="video-icon"><i class="fas fa-film"></i></div>
          <div class="video-info">
            <span class="video-label">Watch Full Video</span>
            <span class="video-desc">Complete short film</span>
          </div>
          <i class="fas fa-arrow-right video-arrow"></i>
        </a>
      `;
    }
    
    html += `
        </div>
      </div>
    `;
  }
  
  // ===== EXTRA LINKS SECTION (for Animation project) =====
  if (isAnimation && hasExtraLinks) {
    const links = data.extraLinks;
    
    html += `
      <div class="extra-links-section">
        <h4 class="extra-links-title"><i class="fas fa-link"></i> Additional Resources</h4>
        <div class="extra-links-grid">
    `;
    
    if (links.part1) {
      html += `
        <a href="${links.part1}" target="_blank" class="extra-link-btn part1-btn">
          <i class="fas fa-film"></i>
          <span>Full Animation Project (Code of Unity)</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      `;
    }
    
    if (links.part2) {
      html += `
        <a href="${links.part2}" target="_blank" class="extra-link-btn part2-btn">
          <i class="fas fa-film"></i>
          <span>Full Animation Project (Other project)</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      `;
    }
    
    html += `
        </div>
        <p class="extra-links-desc">View the complete group animation project showcasing collaborative storytelling, scene development, and animation production.</p>
      </div>
    `;
  }

  // ===== VIDEO GALLERY (for Animation project - at the bottom) =====
if (isAnimation && data.videoGallery && data.videoGallery.length > 0) {
  html += `
    <div class="video-gallery-section">
      <h4 class="video-gallery-title"><i class="fas fa-video"></i> Animation Exercises</h4>
      <div class="video-gallery-grid">
  `;
  
  data.videoGallery.forEach((video, index) => {
    html += `
      <div class="video-gallery-item">
        <a href="${video.link}" target="_blank" class="video-gallery-link">
          <div class="video-gallery-icon"><i class="fas fa-play-circle"></i></div>
          <div class="video-gallery-info">
            <span class="video-gallery-name">${index + 1}. ${video.title}</span>
            <span class="video-gallery-desc">${video.description}</span>
          </div>
          <i class="fas fa-arrow-right video-gallery-arrow"></i>
        </a>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
  `;
}

// ===== INSERT INTO POPUP =====
body.innerHTML = html;
popup.classList.add('active');
document.body.style.overflow = 'hidden';
  
  // ===== WORKSHOP I PDF =====
  if (hasPdf && !isRetak) {
    html += `
      <div class="popup-pdf-section">
        <a href="${data.pdfLink}" target="_blank" class="popup-pdf-link">
          <i class="fas fa-file-pdf"></i> View Report (PDF)
        </a>
      </div>
    `;
  }
  
  // ===== YOUTUBE LINK (AT THE BOTTOM - for Audio project) =====
  if (hasYoutube) {
    html += `
      <div class="youtube-section">
        <a href="${data.youtubeLink}" target="_blank" class="youtube-btn">
          <i class="fab fa-youtube"></i>
          <span>Watch Full Project on YouTube</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
  }

    // ===== DRIVE LINK BUTTON (for Motion Graphics I) =====
  if (data.driveLink) {
    html += `
      <div class="drive-section">
        <a href="${data.driveLink}" target="_blank" class="drive-btn">
          <i class="fab fa-google-drive"></i>
          <span>View Full Project on Google Drive</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
  }

  // ===== SINGLE VIDEO LINK BUTTON (for Audio & Motion Graphics I) =====
  if (data.videoLink) {
    html += `
      <div class="single-video-section">
        <a href="${data.videoLink}" target="_blank" class="single-video-btn">
          <div class="video-icon"><i class="fas fa-play-circle"></i></div>
          <div class="video-info">
            <span class="video-label">Watch Project Video</span>
            <span class="video-desc">Click to view full project</span>
          </div>
          <i class="fas fa-arrow-right video-arrow"></i>
        </a>
      </div>
    `;
  }

    // ===== TWO VIDEO LINKS (for Motion Graphics II) =====
  if (isMotion2 && data.videoLinks) {
    const links = data.videoLinks;
    
    html += `
      <div class="motion2-videos-section">
        <h4 class="motion2-title"><i class="fas fa-video"></i> Project Videos</h4>
        <div class="motion2-video-grid">
    `;
    
    if (links.weather) {
      html += `
        <a href="${links.weather}" target="_blank" class="motion2-video-btn weather-btn">
          <div class="video-icon"><i class="fas fa-cloud-sun"></i></div>
          <div class="video-info">
            <span class="video-label">Weather Play</span>
            <span class="video-desc">Broadcast Motion Design</span>
          </div>
          <i class="fas fa-arrow-right video-arrow"></i>
        </a>
      `;
    }
    
    if (links.raya) {
      html += `
        <a href="${links.raya}" target="_blank" class="motion2-video-btn raya-btn">
          <div class="video-icon"><i class="fas fa-moon"></i></div>
          <div class="video-info">
            <span class="video-label">Raya Advertisement</span>
            <span class="video-desc">Festive Motion Graphics</span>
          </div>
          <i class="fas fa-arrow-right video-arrow"></i>
        </a>
      `;
    }
    
    html += `
        </div>
      </div>
    `;
  }

    // ===== IT SECURITY DETAILED SECTION =====
  if (projectId === 'security') {
    
    // ===== KEY FEATURES =====
    if (data.features && data.features.length > 0) {
      html += `
        <div class="fyp-section">
          <h4 class="fyp-title"><i class="fas fa-shield-alt"></i> Key Features</h4>
          <div class="fyp-features-grid">
      `;
      
      data.features.forEach(feature => {
        html += `
          <div class="fyp-feature-item">
            <span>${feature}</span>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== TECHNOLOGIES USED =====
    if (data.technologies && data.technologies.length > 0) {
      html += `
        <div class="fyp-section">
          <h4 class="fyp-title"><i class="fas fa-code"></i> Technologies Used</h4>
          <div class="fyp-tech-tags">
      `;
      
      data.technologies.forEach(tech => {
        html += `
          <span class="fyp-tech-tag">${tech}</span>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== SINGLE VIDEO LINK (Demo Video) =====
    if (data.videoLink) {
      html += `
        <div class="single-video-section">
          <a href="${data.videoLink}" target="_blank" class="single-video-btn">
            <div class="video-icon"><i class="fas fa-play-circle"></i></div>
            <div class="video-info">
              <span class="video-label">Watch Demo Video</span>
              <span class="video-desc">Timelapse demo of ALMS</span>
            </div>
            <i class="fas fa-arrow-right video-arrow"></i>
          </a>
        </div>
      `;
    }
  }
    // ===== VR DETAILED SECTION =====
  if (projectId === 'vr') {
    
    // ===== SDG =====
    if (data.sdg) {
      html += `
        <div class="vr-section">
          <h4 class="vr-title"><i class="fas fa-globe-asia"></i> SDG</h4>
          <p class="vr-sdg">${data.sdg}</p>
        </div>
      `;
    }
    
    // ===== KEY FEATURES =====
    if (data.features && data.features.length > 0) {
      html += `
        <div class="vr-section">
          <h4 class="vr-title"><i class="fas fa-list-check"></i> Features</h4>
          <div class="vr-features-grid">
      `;
      
      data.features.forEach(feature => {
        html += `
          <div class="vr-feature-item">
            <span>${feature}</span>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== MY CONTRIBUTION =====
    if (data.contributions && data.contributions.length > 0) {
      html += `
        <div class="vr-section">
          <h4 class="vr-title"><i class="fas fa-user-check"></i> My Contribution</h4>
          <div class="vr-list">
      `;
      
      data.contributions.forEach(item => {
        html += `
          <div class="vr-list-item">
            <i class="fas fa-chevron-right"></i>
            <span>${item}</span>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
    
    // ===== OTHER LAB ACTIVITIES =====
    if (data.labActivities && data.labActivities.length > 0) {
      html += `
        <div class="vr-lab-section">
          <h4 class="vr-title"><i class="fas fa-flask"></i> Other Lab Activities</h4>
          <div class="vr-lab-grid">
      `;
      
      data.labActivities.forEach((activity, index) => {
        html += `
          <a href="${activity.link}" target="_blank" class="vr-lab-item">
            <div class="vr-lab-icon"><i class="fas fa-play-circle"></i></div>
            <div class="vr-lab-info">
              <span class="vr-lab-name">${index + 1}. ${activity.title}</span>
              <span class="vr-lab-desc">${activity.description}</span>
            </div>
            <i class="fas fa-arrow-right vr-lab-arrow"></i>
          </a>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    }
  }

  // ===== INSERT INTO POPUP =====
  body.innerHTML = html;
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  if (hasGallery) {
    const track = document.querySelector('.gallery-track');
    if (track) {
      track.scrollLeft = 0;
      updateGalleryIndicator();
    }
  }
}

// ============================================================
// ===== CLOSE POPUP FUNCTIONS =====
// ============================================================
function closePopup() {
  const popup = document.getElementById('projectPopup');
  popup.classList.remove('active');
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePopup();
  }
});

document.getElementById('projectPopup').addEventListener('click', function(e) {
  if (e.target === this) {
    closePopup();
  }
});

console.log('✨ WARDINA NAJIHAH Portfolio loaded!');


// ===== CONTACT FORM =====
function sendMessage(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value || 'No subject';
  const message = document.getElementById('message').value;
  
  // Create mailto link
  const mailtoLink = `mailto:njhhrsmdi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
  
  window.location.href = mailtoLink;
  
  // Show success message
  alert('📧 Your message is being sent via email!');
}
