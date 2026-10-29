const PROFILE = {
  name: "Md. Yousuf",
  short: "Yousuf",
  headline: "Computer Science and Engineering · Software Development · Deep Learning Research",
  location: "Bangladesh",
  university: "Independent University, Bangladesh (IUB)",
  github: "https://github.com/yousufhasany",
  linkedin: "https://www.linkedin.com/in/md-yousufhasan/",
  website: "https://www.mdyousufhasan.com",
  email: "hyousuf266@gmail.com",
  phone: "+8801732231661",
  phoneLabel: "+880 1732-231661",
  ieee: "https://ieeexplore.ieee.org/document/11545645/",
  thesis: "https://ar.iub.edu.bd/handle/11348/1204",
  cv: "files/Md_Yousuf_CV.pdf"
};

const PROJECTS = [
  {
    id: "lung-ct",
    level: "Research",
    title: "Pulmonary nodule segmentation",
    category: "Deep learning · Medical imaging",
    org: "Undergraduate thesis, IUB",
    stack: "PyTorch Lightning · U-Net · ResNet-18",
    href: "research.html",
    tone: "navy",
    image: "images/ct-slice-082.png",
    imageAlt: "Axial thoracic CT slice from the lung segmentation research",
    imageFit: "contain",
    overview: "Undergraduate thesis at Independent University, Bangladesh, prepared with Abbas Yasin and Muaaz Mohammad. The IUB institutional record and an IEEE Xplore document are linked from the research page.",
    scope: [
      "Multi-class segmentation of background, left lung, right lung, and pulmonary nodules.",
      "CT preprocessing with a Hounsfield Unit window centered at −600 and a width of 1500.",
      "Images resized to 224 × 224 grayscale, with channel replication when a model required it.",
      "U-Net architecture with a ResNet-18 encoder."
    ],
    approach: [
      "Model development in PyTorch Lightning with GPU computing.",
      "Dice loss for segmentation optimization.",
      "Adam optimizer with a cosine learning-rate schedule.",
      "Evaluation planned around Dice coefficient, IoU, precision, and recall.",
      "Datasets used in the described workflow: LUNA16 and LIDC-IDRI."
    ],
    note: "Thesis authors, supervisor, and term are taken from the IUB cover page. Dice scores below, where shown, are quoted from the IUB thesis abstract, not invented here, and not copied onto the IEEE record.",
    linkLabel: "IUB thesis record",
    link: "https://ar.iub.edu.bd/handle/11348/1204"
  },
  {
    id: "noor-al-salam",
    level: "Live site",
    title: "Noor Al Salam Hotel",
    category: "Hotel website · Booking",
    org: "Noor Al Salam Hotel",
    stack: "Public hotel website",
    tone: "teal",
    image: "images/noor-al-salam.jpg",
    imageAlt: "Noor Al Salam Hotel homepage with booking search",
    imageCaption: "Public homepage at nooralsalamhotel.com, including the booking search bar.",
    overview: "A live hotel website for Noor Al Salam Hotel. The public homepage presents the property and a direct way to check availability and manage a stay.",
    scope: [
      "Public navigation for Home, Rooms & Suites, Facilities, About, Gallery, and Contact.",
      "English language option, plus Book now and Manage booking.",
      "Availability search with check-in, check-out, adults, children, and rooms.",
      "Homepage message that guests can book directly to manage a stay."
    ],
    approach: [
      "The live public site is https://www.nooralsalamhotel.com/.",
      "PostgreSQL was previously specified as the database for hotel operations work connected to this project.",
      "Inventory, housekeeping, and room-cleaning photo uploads were previously listed as operational scope. They are not claimed from the homepage screenshot alone."
    ],
    note: "What is shown here follows the public homepage and the live URL. Operational modules not visible on that page stay labeled as previously specified scope.",
    linkLabel: "Open nooralsalamhotel.com",
    link: "https://www.nooralsalamhotel.com/"
  },
  {
    id: "property",
    level: "Live site",
    title: "Property management system",
    category: "Property · Office · Finance",
    org: "Tasfiq PMS",
    stack: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB · Firebase Hosting",
    tone: "navy",
    image: "images/tasfiq-pms.jpg",
    imageAlt: "Tasfiq property management system sign-in screen",
    imageCaption: "Public sign-in screen at tasfiqpms.web.app. Typed login values from the source screenshot were cleared before publishing.",
    overview: "A live property management workspace. The public URL is a sign-in page. The login screen describes property, office, and finance in one place, for rent, tenants, and collection.",
    scope: [
      "Public sign-in with username or email and password.",
      "Login-screen positioning: property, office, and finance in one place.",
      "Login-screen labels for rent collection, projects, and accounts."
    ],
    approach: [
      "The live sign-in URL is https://tasfiqpms.web.app/login.",
      "Frontend was previously specified as React, Vite, and Tailwind CSS.",
      "Backend was previously specified as Node.js, Express, and MongoDB.",
      "Rental workflows, tenant documentation, rent management, and financial approval were previously listed as product requirements. They are not claimed from the login screenshot alone."
    ],
    note: "This listing does not publish account names or passwords. Modules not visible on the sign-in page stay labeled as previously specified scope.",
    linkLabel: "Open tasfiqpms.web.app",
    link: "https://tasfiqpms.web.app/login"
  },
  {
    id: "street-lighting",
    level: "Community",
    title: "Street lighting in Akanagor",
    category: "Community problem solving",
    org: "Manus Kahon",
    slogan: "CREATE YOUR SELF AND MAKE THE WORLD TO SMILE.",
    stack: "Field work · Problem mapping",
    tone: "teal",
    image: "images/streetlight-group.jpg",
    imageAlt: "Manus Kahon volunteer group in front of the Upazila Parishad building in Bancharampur, Brahmanbaria",
    overview: "Street lighting in Akanagor, Bancharampur, Brahmanbaria, my own area, carried out with Manus Kahon. Slogan: CREATE YOUR SELF AND MAKE THE WORLD TO SMILE. A mindmap was used to plan how to address village darkness, then the work was carried out locally. The field video shows electrical wire being prepared and the street at night. The project PDF records the funding, electricity, timing, and an output slide.",
    link: "files/street-lighting-project.pdf",
    linkLabel: "Open the project PDF",
    gallery: [
      {
        src: "images/streetlight-mindmap.png",
        alt: "Street lighting mindmap covering Where, How, Why, What, and When",
        caption: "Planning mindmap from the project PDF. The questions below are taken from this diagram.",
        fit: "contain"
      },
      {
        type: "video",
        src: "videos/manush-kahon.mp4",
        poster: "images/manush-kahon-poster.jpg",
        alt: "Manus Kahon field video of street lighting work in Akanagor, from electrical wire to the street at night",
        caption: "Manus Kahon field video of the street lighting work in Akanagor. It shows electrical wire being prepared and the street at night after the lights are on.",
        fit: "contain"
      },
      {
        src: "images/streetlight-group.jpg",
        alt: "Manus Kahon volunteer group in front of the Upazila Parishad building in Bancharampur, Brahmanbaria",
        caption: "Manus Kahon group photograph at the Upazila Parishad building, Bancharampur, Brahmanbaria."
      }
    ],
    map: [
      {
        heading: "Where",
        items: [
          "Where in the village should we start with streetlights?",
          "Where are the most critical problems in the village?",
          "Where are streetlights needed most?"
        ]
      },
      {
        heading: "How",
        items: [
          "How can we implement the streetlight?",
          "How to manage our fund?",
          "How will we manage the electrician?",
          "How to manage electricity?"
        ]
      },
      {
        heading: "Why",
        items: [
          "Why do we need this?",
          "Why should villagers support this project?",
          "Why are streetlights important?"
        ]
      },
      {
        heading: "What",
        items: [
          "What is the primary objective of this project?",
          "What is the source of fund?",
          "What is our main problem with build this project?"
        ]
      },
      {
        heading: "When",
        items: [
          "When will we start our work?",
          "When will the project officially launch?",
          "When we communicate our local people?"
        ]
      }
    ],
    plan: [
      {
        heading: "How to manage the fund",
        items: [
          "Self-funding, described as limited capacity.",
          "Social media fundraising, described as the primary focus.",
          "Local donations from businessmen and expatriates."
        ]
      },
      {
        heading: "How to manage electricity",
        items: [
          "Electricity from existing electric poles, written in the PDF as electrics trees.",
          "Community-based sharing as the primary approach.",
          "An initial step of seeking permission, with a note if permission is denied."
        ]
      },
      {
        heading: "When the work would start",
        items: [
          "Capital named as the problem.",
          "Immediate action: self-funding.",
          "Visit local shops for support.",
          "After collecting the initial funds and materials, the team would be ready to start."
        ]
      },
      {
        heading: "After setup",
        items: [
          "Collect donations from the community.",
          "Use that money to pay the remaining bill to the shop."
        ]
      }
    ],
    scope: [
      "Address the darkness problem in Akanagor, Bancharampur, Brahmanbaria.",
      "Ask whether a streetlight can be installed on the street, and how to implement it.",
      "A mindmap covering Where, How, Why, What, and When.",
      "Field video of preparing electrical wire and the street at night in Akanagor.",
      "Group field activity with Manus Kahon at the Upazila Parishad building in Bancharampur."
    ],
    approach: [
      "The project PDF frames this as putting the mindmap into real life.",
      "Funding, electricity, shop support, and the post-setup bill plan follow that PDF.",
      "This page does not add a light count, a cost, or a date. Those figures are not in the PDF.",
      "Leadership titles stay off the page until they are confirmed."
    ],
    note: "Organization: Manus Kahon. Slogan: CREATE YOUR SELF AND MAKE THE WORLD TO SMILE. The area is Akanagor, Bancharampur, Brahmanbaria. Planning and implementation details follow the project PDF. This listing is not merged with the IUB Live in Field Experience in Sreemangal."
  },
  {
    id: "bridge-institute",
    level: "Web",
    title: "The Bridge Institute website",
    category: "Institutional website · Education technology",
    org: "The Bridge Institute / UIT concept",
    stack: "Full-stack web development",
    tone: "teal",
    overview: "A bilingual institutional website concept for The Bridge Institute under the University of Integrated Thought (UIT). Tagline: Learn Skills. Build Confidence. Shape Your Future.",
    scope: [
      "Institutional information and landing pages.",
      "Course listings and course details.",
      "Student application workflows.",
      "Alumni section and an education-to-employment pathway.",
      "English and Bangla language support."
    ],
    approach: [
      "Treat the items above as planned product scope unless a live codebase shows they are shipped.",
      "This listing does not claim a completed public launch."
    ],
    note: "Presented as development work and product scope, not as a finished production system."
  },
  {
    id: "qbl",
    level: "EdTech",
    title: "Question-Based Learning platform",
    category: "Educational technology · Learning management",
    org: "QBL methodology",
    stack: "Web application concept",
    tone: "sand",
    overview: "An education platform concept based on Question-Based Learning. Student and teacher roles, course workflows, and assessment support sit at the center of the design.",
    scope: [
      "Student and teacher roles.",
      "Course creation and administrative approval.",
      "Learning materials and educational resources.",
      "Assessments and practical activities.",
      "Course management, with certificate functionality described as future work."
    ],
    approach: [
      "Keep implemented features separate from planned ones.",
      "Certificate functionality is listed as future work, not a completed module."
    ],
    note: "Planned capabilities are listed as such. They are not described here as a finished LMS."
  }
];

const CONCEPTS = [
  "University management systems",
  "Showroom inventory management",
  "Agricultural disease detection",
  "Browser-based assistance for official visa appointment workflows"
];

const EXPERIENCE = [
  {
    org: "BIIT",
    title: "Web and System Developer",
    field: "Web development · System development",
    text: "Web and system development work, including website development, system implementation, and related technical work. From 1 October 2026."
  },
  {
    org: "Bosttopus.com",
    title: "Senior Web Developer",
    field: "Web development",
    text: "Senior web developer role, remote, from 10 November 2025. Specific project names and achievements are omitted until they can be verified."
  },
  {
    org: "Independent University, Bangladesh",
    title: "Teacher Assistant",
    field: "Academic support",
    text: "Teacher Assistant for Introduction to Computer Science at IUB."
  },
  {
    org: "Prof. Yusuf Mahbubul Islam, PhD, Vice Chancellor and Professor, Southeast University",
    title: "Personal Assistant",
    field: "Academic support · Teacher training",
    text: "Personal assistant for approximately two years. Foundation-course work was supervised by Prof. Yusuf Mahbubul Islam. During this period I conducted 40+ teacher-training workshops."
  },
  {
    org: "BIIT Foundation Skill Development Certification Program",
    title: "Course Developer and Supervisor",
    field: "Curriculum development · Question-Based Learning",
    text: "Review of lesson plans, teacher guides, slides, and practical exercises under the supervision of Prof. Yusuf Mahbubul Islam, PhD. Checking alignment between learning objectives, lesson content, and assessments. Coordinating curriculum review and feedback under QBL methodology."
  },
  {
    org: "IUB Live in Field Experience",
    title: "Venue monitoring · Sreemangal",
    field: "Student coordination · Community engagement",
    text: "Venue monitoring in Sreemangal, student communication, coordination with other monitors, workshop support, and participation in community development activities. Program-level figures are not presented as personal service counts."
  },
  {
    org: "Manus Kahon, Akanagor, Bancharampur, Brahmanbaria",
    title: "Street lighting in Akanagor",
    field: "Community problem solving",
    text: "Street lighting work with Manus Kahon in Akanagor, my own area in Bancharampur, Brahmanbaria. Slogan: CREATE YOUR SELF AND MAKE THE WORLD TO SMILE. A mindmap, local fundraising, shop support, and field implementation were used to address village darkness. Details follow the project PDF."
  }
];
