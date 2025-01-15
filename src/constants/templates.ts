export const templates = [
  { 
    id: "blank", 
    label: "Blank Document", 
    imageUrl: "/blank-document.svg",
    initialContent: ""
  },
  { 
    id: "software-proposal", 
    label: "Software Proposal", 
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the proposed software development project.</p>

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule.</p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `
  },
  { 
    id: "project-proposal", 
    label: "Project Proposal", 
    imageUrl: "/project-proposal.svg", 
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Introduction</h2>
      <p>Overview of the project goals and objectives.</p>

      <h2>Project Scope</h2>
      <p>Key components and boundaries of the project.</p>

      <h2>Implementation Plan</h2>
      <p>Phases and steps for successful project execution.</p>

      <h2>Expected Outcomes</h2>
      <p>Detailed summary of the project's expected results and impacts.</p>
    `
  },
  { 
    id: "business-letter", 
    label: "Business Letter", 
    imageUrl: "/business-letter.svg", 
    initialContent: `
      <h1>Business Letter</h1>
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[Date]</p>

      <p>[Recipient Name]</p>
      <p>[Recipient Address]</p>

      <p>Dear [Recipient Name],</p>

      <p>Body of the letter explaining the purpose and details of the correspondence.</p>

      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `
  },
  { 
    id: "resume", 
    label: "Resume", 
    imageUrl: "/resume.svg", 
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Contact Information]</p>

      <h2>Professional Summary</h2>
      <p>Brief summary of your skills and experience.</p>

      <h2>Work Experience</h2>
      <p>Details of previous positions, achievements, and responsibilities.</p>

      <h2>Education</h2>
      <p>Information about your academic background and degrees earned.</p>

      <h2>Skills</h2>
      <p>Relevant technical and soft skills.</p>
    `
  },
  { 
    id: "cover-letter", 
    label: "Cover Letter", 
    imageUrl: "/cover-letter.svg", 
    initialContent: `
      <h1>Cover Letter</h1>
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[Date]</p>

      <p>[Recipient Name]</p>
      <p>[Recipient Address]</p>

      <p>Dear [Recipient Name],</p>

      <p>Introduction explaining the position you are applying for and your interest.</p>
      <p>Body of the letter detailing your relevant experience and qualifications.</p>
      <p>Conclusion with a call to action and your contact information.</p>

      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `
  },
  { 
    id: "letter", 
    label: "Letter", 
    imageUrl: "/letter.svg", 
    initialContent: `
      <h1>General Letter</h1>
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[Date]</p>

      <p>[Recipient Name]</p>
      <p>[Recipient Address]</p>

      <p>Dear [Recipient Name],</p>

      <p>Main content of the letter covering the subject you wish to communicate.</p>

      <p>Best regards,</p>
      <p>[Your Name]</p>
    `
  }
]
