import self from "../img/self.png";
import ai_quiz_image from "../img/ai-quiz-image.png";
import billing_management_image from "../img/billing-management-system.png";
import payroll_management_image from "../img/payroll-maangement-system.png";
import text_2_sql_image from "../img/text-2-sql.png";
import heart_disease_prediction_image from "../img/heart-disease-prediction.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Sandeep",
  lastName: "Kumar Gupta",
  initials: "SKG", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Engineer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  resume: "https://drive.google.com/file/d/1DVYGPHQmGf1Lsz5k14_giZSDeFFc4G-U/view?usp=sharing", // Google Drive link to your resume
  miniBio: [
    {
      emoji: "💼",
      text: "Software Engineer at CSG International",
    },
    {
      emoji: "📧",
      text: "skg2636@gmail.com",
    },
    {
      emoji: "📱",
      text: "+91 8820019008",
    },
    {
      emoji: "🌎",
      text: "based in Howrah, India",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/sandeepgupta.gupta.27",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/sandeep__gupta27/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/skg2636",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/skg2636/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Hello! I'm Sandeep, a Software Engineer with 3 years of experience building backend platforms, enterprise automation systems, and AI-powered applications. I specialize in Python, FastAPI, Flask, Generative AI, RAG pipelines, and cloud deployment workflows. I'm passionate about designing scalable REST APIs, semantic search systems, and context-aware AI assistants that drive real operational impact.",
  skills: {
    proficientWith: [
      "Python",
      "FastAPI",
      "Flask",
      "React",
      "JavaScript",
      "REST APIs",
      "Generative AI",
      "RAG Pipelines",
      "AWS Bedrock",
      "OpenSearch",
      "Elasticsearch",
      "ELK Stack",
      "PostgreSQL",
      "SQL",
      "CI/CD Pipelines",
      "Azure DevOps",
      "AWS",
      "Linux",
      "NGINX",
      "Git",
      "HTML/CSS",
      "JWT Authentication",
      "SSO",
    ],
    exposedTo: [
      "Vector Search",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "MCP Integrations",
      "SSE",
      "Async Processing",
      "Kibana Dashboards",
      "Incident Management",
      "Agile Methodologies",
    ],
  },
  hobbies: [
    {
      label: "cricket",
      emoji: "🏏",
    },
    {
      label: "movies/series",
      emoji: "🎥",
    },
  ],
  education: [
    {
      school: "KIIT University",
      degree: "B.Tech. in Computer Science and Engineering | CGPA: 9.17",
      year: "2019-2023",
    },
    {
      school: "South End Centre E.M. School",
      degree: "Higher Secondary Education(XII)",
      year: "2017-2019",
    },
    {
      school: "South End Centre E.M. School",
      degree: "Secondary Education(X)",
      year: "2016-2017",
    },
  ],
  experience: [
    {
      role: "Software Engineer – Backend & AI Platforms",
      company: "CSG International",
      period: "June 2023 – Present",
      description:
        "Designed and developed AI-powered enterprise platforms for operations, incident management, and requirement analysis using Python, FastAPI, OpenSearch, and AWS Bedrock. Built RAG pipelines and semantic retrieval workflows that accelerated enterprise response generation by ~70%. Engineered incident resolution workflows across 1.5M+ tickets, automated ~250–300 hours of monthly manual effort, and designed ELK-based observability dashboards detecting ~90% of production incidents early.",
    },
    {
      role: "Software Developer Intern",
      company: "CSG International",
      period: "January 2023 – March 2023",
      description:
        "Trained in enterprise product configuration, testing workflows, and Agile development methodologies. Contributed to telecom domain projects and internal engineering workflows.",
    },
  ],
  portfolio: [
    {
      title: "AI-Quiz Application",
      live: "https://ai-quiz-app-gamma.vercel.app/",
      source: "https://github.com/skg2636/Quiz-App",
      image: ai_quiz_image,
      description:
        "An interactive full-stack quiz app with AI-generated questions using Gemini API, JWT auth, scoring, leaderboards, and RBAC.",
      techStack: [
        "React",
        "Flask",
        "PostgreSQL",
        "Gemini API",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "Billing Management System",
      // live: "", // live link not provided
    //   source: "https://github.com/skg2636/Billing-Management-System", // replace with actual if available
      image: billing_management_image,
      description:
        "A GST-ready billing platform for small businesses with invoice generation, customer & credit management, and dashboard reporting.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Amazon Q",
      ],
    },
    {
      title: "Payroll Application",
      // live: "", // live link not provided
      source: "https://github.com/skg2636/Payroll-System",
      image: payroll_management_image,
      description:
        "A Java-based payroll management system with features for salary, leave, and department management tailored for HR teams.",
      techStack: ["Java", "MySQL", "JDBC", "Swing"],
    },
    {
      title: "Heart Disease Prediction",
      // live: "", // live link not provided
      source: "https://github.com/skg2636/Heart-Disease-Prediction", // if not yet uploaded, leave as is
      image: heart_disease_prediction_image,
      description:
        "A web application that predicts the risk of heart disease using ML algorithms with an accuracy of 89%.",
      techStack: ["Python", "Flask", "Scikit-learn", "HTML/CSS", "JavaScript"],
    },
    {
      title: "Text 2 SQL",
      // live: "", // live link not provided
    //   source: "https://github.com/skg2636/Text2SQL", // replace with actual if available
      image: text_2_sql_image,
      description:
        "A natural language interface that translates English queries into executable SQL statements using NLP models.",
      techStack: ["Python", "Google Gemini API", "React"],
    },
  ],
};
