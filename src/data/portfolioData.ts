// ALL CONTENT COMES FROM YOUR RESUME. Edit text here; the UI updates automatically.
export const profile = {
  name: 'Diksha Kore',
  roles: 'QA Engineer | Software Tester | Manual QA | QA Analyst',
  headline: 'Building Better Software Through Better Testing.',
  summary: '2026 B.Tech Computer Science Engineering graduate (CGPA 8.9) with hands-on QA internship experience across web, API and performance testing.',
  about: 'Skilled in functional, regression, smoke, sanity and exploratory testing, with practical exposure to Postman, Apache JMeter, Jira and Git/GitHub. I validate role-based workflows, payment and billing modules, and business logic across real-world client platforms. Seeking an entry-level QA Engineer / Software Tester role.',
  email: 'korediksha30@gmail.com', location: 'Nagpur, India',
  linkedin: 'https://linkedin.com/in/dikshakore21', github: 'https://github.com/Dikshakore12',
  photo: '/profile.jpg',   // REPLACE PHOTO: overwrite public/profile.jpg
  resume: '/resume.pdf',   // REPLACE RESUME: overwrite public/resume.pdf
}
export const stats = [{ v: '8.9', l: 'B.Tech CGPA' }, { v: '2026', l: 'Graduation year' }, { v: '4', l: 'Client platforms tested' }, { v: '2', l: 'Personal projects' }]
export const skills = [
  { group: 'Testing', items: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'Exploratory Testing', 'UI Testing', 'Test Case Design', 'Bug Reporting'] },
  { group: 'API Testing', items: ['Postman'] },
  { group: 'Performance Testing', items: ['Apache JMeter'] },
  { group: 'Tools', items: ['Jira', 'Git/GitHub', 'SQL', 'MS Office'] },
  { group: 'Programming', items: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
]
export const experience = {
  role: 'QA Intern', company: 'BotMartz AI Solutions Pvt. Ltd.', period: 'June 2026 – Present',
  projects: [
    { name: 'HOAConnect Hub', sub: 'US-based HOA / Property Management platform', link: 'https://innovaihoa.com/', image: '/innovaihoa.png', points: [
      'On a live production platform (Communities, Buildings, Units, Residents), performed end-to-end functional, regression, UI/responsive, cross-browser and API testing (Postman) to catch defects before release, improving stability.',
      'Validated payment/invoice/billing workflows and role-based access control while running performance/load testing in Apache JMeter, ensuring dependable financial workflows under load.'] },
    { name: 'BotMartz Academy', sub: 'Learning Management Platform', link: 'https://academy.botmartz.com/', image: '/botmartz.png', points: [
      'Tested login, authentication, session handling and role-based access through functional, regression and exploratory testing, ensuring secure and reliable access control.',
      'Performed smoke, sanity, UI/responsive testing and form validation, logging detailed bug reports that enabled faster fixes and a stable release.'] },
    { name: 'IIFFCA', sub: 'Client platform', link: 'https://www.iiffca.com/', image: '/iiffca.png', points: [
      'Verified core platform workflows and business logic through functional, regression, UI and form/input validation testing across major features.',
      'Tested role-based workflows across user types and tracked defects through to fix verification, contributing to a stable pre-release build.'] },
    { name: 'Virtual Try-On Application', sub: 'Client application', link: 'https://virtualtryon.online/', image: '/virtualtryon.png', points: [
      'Tested the image upload, product selection and try-on workflow end-to-end through functional and exploratory testing, uncovering edge-case failures before release.',
      'Performed UI/responsive and regression testing across devices and screen sizes, helping deliver a consistent, bug-free release.'] },
  ],
}
export const projects = [
  { name: 'Dynamic NoteMate Bot', category: 'Personal project: AI, Voice Input, PDF Processing', period: '01/2025 – 05/2025',
    desc: 'An AI-powered notes chatbot where users create and retrieve notes through natural conversation.',
    tags: ['AI', 'Voice input', 'PDF processing', 'Real-time web data'],
    points: ['Integrated voice input and PDF processing.', 'Integrated real-time web data fetching so the bot answers with up-to-date information.'], link: '' /* add a real repo URL to show a GitHub button */ },
  { name: 'Paper-Leak Proof Protection Model', category: 'Personal project: 3DES Encryption', period: '01/2025 – 05/2025',
    desc: 'An encrypted file-sharing system that prevents unauthorized access to sensitive question papers.',
    tags: ['3DES encryption', 'Secure file sharing', 'Access testing'],
    points: ['Designed and implemented the system using 3DES encryption.', 'Tested against unauthorized access attempts, validating a working proof-of-concept for leak prevention.'], link: '' },
]
export const certs = [
  { t: 'Java Programming', o: 'NPTEL', y: '2024' }, { t: 'Python Programming', o: 'NPTEL', y: '2024' },
  { t: 'Website Design & Development Internship', o: 'iStudio', y: '2025' },
  { t: 'Employability Skill Training', o: 'Mahindra Pride Classroom, Naandi Foundation', y: '2025' },
]
export const education = [
  { t: 'B.Tech, Computer Science Engineering', s: 'Priyadarshini J.L. College of Engineering, Nagpur', y: '2022 – 2026', r: 'CGPA: 8.9' },
  { t: 'Intermediate', s: 'Z.P. Highschool and Junior College, Soundad', y: '2020 – 2022', r: '89.5%' },
  { t: 'High School', s: 'Navjeevan Vidhyalaya, Raka', y: '2020', r: '92.4%' },
]
export const workflow = ['Requirement', 'Test Planning', 'Test Case Design', 'Functional Testing', 'API Validation', 'Regression Testing', 'Performance Testing', 'Bug Reporting', 'Retesting', 'Release Confidence']
export const coverage = [
  { l: 'Functional', s: 'Validated' }, { l: 'Regression', s: 'Verified' }, { l: 'API (Postman)', s: 'Tested' },
  { l: 'UI / Responsive', s: 'Covered' }, { l: 'Performance (JMeter)', s: 'Tested' },
]
export const nav = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Education', 'Contact']
