import IMG_Schellman from "../../images/Schellman.svg";
import IMG_EY from "../../images/EY.svg";
import IMG_CAI from "../../images/CAI.jpg";
import IMG_MORSE from "../../images/dragon.svg";
import ibm_logo from "../../images/ibm_logo.jpg";

export const experience = [
    {
      company: "IBM",
      image: ibm_logo,
      job_title: "Advisory Software Engineer",
      time: "April 2020 - Present",
      description: "I have worked on the Apps@Research team within IBM Research where we build internal web applications for Researchers. During this time I have worked on multiple projects with different tech stacks. I have always been good at learning new technology on the fly so that I can quickly start contributing to new projects. \n\nWhile I have worked with many different languages and tools, my main experience the past few years has revolved around backend development in Python/Flask, TypeScript, Node.js, GraphQL, REST APIs, GoLang and PostgreSQL. I have also been a key contributor to our CI/CD pipeline implementation using Kuberenetes, Red Hat OpenShift, IBM Cloud, and Travis. On the frontend I have mainly worked with React, TypeScript, CSS, and SCSS. \n\nI've been the tech lead on multiple epics which includes working with the Product Manager and Designers through the planning and implementation stages. I led our ElasticSearch implementation for a Python/Flask application to improve user search and application performance. I also led the implemenation of a customized Gantt Chart tool used by Researchers to track project milestones.",
      website_link: "https://www.ibm.com",
      website_link_text: "www.ibm.com",
    },
    {
      company: "MORSE Corp",
      image: IMG_MORSE,
      job_title: "Software Engineer Co-op",
      time: "June - December 2019",
      description:
        "As a software engineer at MORSE, I performed many different tasks on a team of aerospace and software engineers. Mainly, I programmed and integrated multiple python modules with an open source python library to develop new simulation capabilities. Additionally, I parallelized our application using multiprocessing in python, allowing it to run faster and more frequently. I automated part of our analysis process by gathering and plotting data from thousands of simulations using multiple python libraries like scikit-learn for linear regression, numpy for linear algebra, and matplotlib and plotly for graphing. I was also responsible for designing and implementing a SQLite database using SQLAlchemy and Alembic and project setup using Docker, Jenkins Continuous Integration, and BitBucket.",
      website_link: "https://www.morsecorp.com",
      website_link_text: "www.morsecorp.com",
    },
    {
      company: "Schellman & Company LLC",
      image: IMG_Schellman,
      job_title: "Senior IT Auditor",
      time: "May 2016 - August 2017",
      description:
        "At Schellman & Company I worked on teams that performed various audits for a broad range of clients in different industries. I primarily worked with clients and evaluated the companies against SOC 1, SOC 2, HIPAA, and ISO compliance requirements. I was responsible for all aspects of the audit including process meetings, testing internal controls, document preparation, and delivering the consolidated audit findings report.",
      website_link: "http://www.schellmanco.com",
      website_link_text: "www.schellmanco.com",
    },
    {
      company: "Ernst and Young, LLP",
      image: IMG_EY,
      job_title: "IT Risk Assurance Staff",
      time: "July 2014 - May 2016",
      description:
        "I worked as an IT Risk and Assurance consultant for Ernst and Young in New York, NY. Primarily, I performed reviews and testing of IT general and application controls for SOX (Sarbanes-Oxley) audits. I worked with many clients in the financial services industry. I was also part of a team that prepared quarterly reconciliations of clients' general ledger and trial balances using a scripting language called Audit Command Language (ACL).",
      website_link: "http://www.ey.com",
      website_link_text: "www.ey.com",
    },
    {
      company: "Computer Aid Inc.",
      image: IMG_CAI,
      job_title: "Web Development Intern",
      time: "June - August 2013",
      description:
        "I helped Computer Aid transition from an old and outdated intranet, to a new, more responsive intranet. The intranet is used company-wide by employees and contains general information about the company. I worked in a team of 3 to complete this task. We used HTML and CSS and setup the new intranet using DotNetNuke, a content management tool.",
      website_link: "http://www.compaid.com",
      website_link_text: "www.compaid.com",
    },
  ];