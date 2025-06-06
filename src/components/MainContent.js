import React from "react";
import MyCarousel from "./MyCarousel";
function MainContent() {
  const softwareProjects = [
    {
      name: "Fundsy",
      date: "May 2020 – July 2023",
      tools: ["React Native", "Firebase", "Redux"],
      desc: "Developed a fintech app for nonprofits, integrating banking APIs. Built with React Native and Firebase.",
      img: "/fundsy.png",
      link: "https://fundsy.io/",
    },
    {
      name: "TypeRevive",
      date: "May 2023 - Present",
      tools: ["JS", "Postgres", "Django"],
      desc: "A Chrome extension that auto-saves text. Backend implemented with Django and Postgres SQL.",
      img: "/typerevive.png",
      link: "https://chromewebstore.google.com/detail/typerevive/bkidcolofoninodfpfjgalpgdphmmjkf",
    },
    {
      name: "Edufy",
      date: "August 2023 - September 2023",
      tools: ["JS", "Postgres", "Django"],
      desc: "NLP application that converts lectures into study materials, using Django and React.",
      img: "edufy.png",
      link: "https://edupork-2b1e34edc290.herokuapp.com/",
    },
    {
      name: "NohPT",
      date: "February 2024",
      tools: ["JS", "Postgres", "Django"],
      desc: "Full stack application using text-to-speech and text-to-image AI api's using Django and React",
      img: "/nohpt.png",
      link: "https://github.com/ericslee1207/NohPT",
    },
    {
      name: "LC4 Interpreter",
      date: "September 2023",
      tools: ["C", "Assembly"],
      desc: "A C program that implements ElsieFour (LC4) encryption, working directly with CPU and memory",
      img: "LC4.png",
      link: "https://github.com/ericslee1207/Refactored-computing-machine",
    },
    {
      name: "Irvine High Mobile",
      date: "May 2020 - June 2022",
      tools: ["JS", "Firebase"],
      desc: "School app providing information access, developed using React Native and Firebase.",
      img: "irvinehighmobile.png",
      link: "https://apps.apple.com/us/app/irvine-high-mobile/id1577135222",
    },
  ];
  const experiences = [
    {
      name: "Amazon",
      date: "May 2025 - Present",
      desc: "Generative AI, CI/CD Pipelines, AWS Lambda",
      title: "Software Development Engineer Intern",
      img: "/amazonlogo.jpg",
    },
    {
      name: "NASA",
      date: "Jan 2025 - May 2025",
      desc: "Integrating internal tools (e.g. MagicDraw, Jama, Power BI) with Python and Java. Engineering model based systems with SysML",
      title: "Software Engineer Intern",
      img: "/nasalogo.png",
    },
    {
      name: "University of Pennsylvania",
      date: "August 2024 - December 2024",
      desc: "Conducting weekly office hours, assisting students with conceptual systems knowledge and leading bi-weekly recitations to review core topics like memory hierarchy and CPU operations",
      title: "Computer Systems Teaching Assistant",
      img: "/pennlogo.png",
    },
    {
      name: "Penn Spark",
      date: "Jan 2024 - Present",
      desc: "Leading the execution of a new mobile app with a group of eight students. Responsible for overseeing progress, delegating tasks, and develop full stack code.",
      title: "Project Lead/Full Stack Developer",
      img: "/pennspark_logo.jpeg",
    },
    {
      name: "Southern California Edison",
      date: "May 2024 - Aug 2024",
      desc: "Pioneered a new large language model for extacting features from emails and automated the process using Python and Google Cloud Platform",
      title: "Software Engineer Intern",
      img: "/scelogo.png",
    },
    {
      name: "Southern California Edison",
      date: "May 2023 - Aug 2023",
      desc: "Optimized data processes and transitioned large datasets, improving efficiency and accessibility of data management systems.",
      title: "Data Engineer Intern",
      img: "/scelogo.png",
    },
    {
      name: "Fundsy LLC",
      date: "May 2020 – Jul 2023",
      desc: "Co-founded and developed a fintech platform for non-profits, integrating banking APIs and focusing on secure, efficient financial transactions. Processed over $100,000 in transactions",
      title: "Co-Founder/Software Engineer",
      img: "/fundsylogo.png",
    },
    
  ];
  return (
    <main>
      <section className="content">
        <div className="text-avatar-container">
          <div className="text-container">
            <h2>software developer and data engineer</h2>
            <p>
              Hey there! I'm Eric, a third year student at the
              University of Pennsylvania pursuing Master's and Bachelor's of
              Engineering in Computer Science. I love to build and test new ideas 
              through full stack development, machine learning, and model based system engineering
            </p>
          </div>
          <div className="avatar-container">
            <img src="/thinkingnotion.png" alt="Eric's avatar" />
          </div>
        </div>
        <div className="text-avatar-container2">
          <div className="avatar-container2">
            <img src="/headshotPFP.jpg" alt="Eric's avatar" />
          </div>
          <div className="text-container2">
            <h2>about me</h2>
            <p>
              My main interests are in low level software development, but I'm open
              to learning new things! I have built many full stack apps as a leader and
              a team member, and I'm currently building IoT devices using Raspberry Pi.
              Feel free to reach out if you have any questions!
            </p>
          </div>
        </div>
        <div id="experiences" className="mint-card">
          <span className="emoji-spacing">🎯</span> below are some of my
          experiences!
        </div>
      </section>
      <h2>experiences</h2>
      <div className="grid-container">
        {experiences.map((exp) => (
          <div className="experience-box">
            <h3
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                src={exp.img}
                alt={exp.name}
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              {exp.name}
            </h3>
            <p className="jobtitle">{exp.title}</p>
            <p className="dates">{exp.date}</p>
            <p className="description">{exp.desc}</p>
          </div>
        ))}
      </div>
      <h2 id="projects">software projects</h2>
      <MyCarousel data={softwareProjects} />
      <div id="experience" className="mint-card">
        <span className="emoji-spacing">📈</span> here are some of my data
        science notebooks!
      </div>
      <div className="text-avatar-container">
        <div className="avatar-container">
          <img src="/learningnotion.png" alt="Eric's avatar" />
        </div>
        <div className="text-container">
          <ul className="project-list">
            <div className="tools-used">
              <span>Skills: </span>
              <span className="tool">PyTorch</span>
              <span className="tool">Pandas</span>
              <span className="tool">Python</span>
            </div>
            <div className="ds-container">
              <li className="project-item">
                <a
                  href="https://www.youtube.com/watch?v=LUHK_dMdJMA"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "normal",
                    fontStyle: "normal",
                    fontSize: "inherit",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  🔍 Credit Card Transaction Fraud Detection (96% Accuracy)
                </a>
              </li>
              <li className="project-item">
                📊 Ovarian Cancer Detection Using Deep Learning on MRI
              </li>
              <li className="project-item">🧮 More to come!</li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
