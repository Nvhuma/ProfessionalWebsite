import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import resumePDF from '../assets/Nhlayiseko Vhuma - AI Engineer CV (1).pdf';
import profileImage from '../assets/WhatsApp Image 2026-01-15 at 12.44.24 PM (1).jpeg';

const experiences = [
  {
    period: '2019 - Present',
    role: 'Software Engineer',
    company: 'Singular Systems | South Africa',
    description: [
      'Architected backend systems for education platforms serving 5,000+ students.',
      'Built and optimized RESTful APIs with JWT authentication for high-concurrency usage.',
      'Developed machine learning features for personalization and predictive student analytics.',
      'Improved SQL performance and data pipelines for real-time decision support.'
    ]
  },
  {
    period: '2015 - 2019',
    role: 'Bachelor of Technology in Information Technology',
    company: 'Rosebank College, South Africa',
    description: [
      'Relevant coursework: Machine Learning, Data Structures and Algorithms, Database Systems, and NLP Fundamentals.'
    ]
  },
  {
    period: 'Ongoing',
    role: 'Technical Certifications',
    company: 'Machine Learning Specialization | Advanced ASP.NET Core Development | Prompt Engineering and LLM Applications'
  }
];

const coreSkills = [
  'LLM Integration',
  'Prompt Engineering',
  'Supervised and Unsupervised Learning',
  'Neural Networks (ANN, CNN)',
  'NLP',
  'Reinforcement Learning',
  'ASP.NET Core (.NET 8)',
  'Microservices',
  'SQL Server Optimization',
  'TensorFlow/Keras',
  'Scikit-learn',
  'React'
];

const socialLinks = [
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/nhlayiseko-vhuma-a20177258/' },
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Nvhuma' },
  { name: 'Resume', icon: 'fas fa-file-download', url: resumePDF, download: 'Nhlayiseko_Vhuma_AI_Engineer_CV.pdf' }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-16 bg-bg-light min-h-screen ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      } transition-all duration-1000 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative lg:col-span-1">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg">
              <img 
                className="object-cover w-full h-full" 
                src={profileImage}
                alt="Nhlayiseko Vhuma - Professional portrait" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-10"></div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
              About Me
            </h2>
            <div className="mt-6 text-gray-medium space-y-4">
              <p>
                I am Nhlayiseko Vhuma, an AI/ML Engineer and Backend Systems Architect focused on building practical, scalable digital products.
              </p>
              <p>
                My work combines machine learning, API engineering, and data architecture to deliver end-to-end solutions, especially in education technology and analytics-driven systems.
              </p>
              <p>
                I enjoy turning business goals into production-ready systems using Python and C#, with strengths in model development, optimization, and modern AI workflows.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-dark mb-4">Core Skill Set</h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-gray-medium border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-dark mb-4">Experience, Education & Certifications</h3>
              <ul className="space-y-6">
                {experiences.map((exp, index) => (
                  <li key={index} className="border-l-2 border-primary pl-4 py-1">
                    <span className="block text-sm text-primary font-medium">{exp.period}</span>
                    <span className="block text-base font-bold text-dark">{exp.role}</span>
                    <span className="block text-sm text-gray-medium mb-2">{exp.company}</span>
                    {exp.description && (
                      <ul className="list-disc ml-5 mt-2 space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-gray-medium">{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="text-primary hover:text-blue-700 transition-colors duration-200" 
                  title={`${link.name} ${link.download ? 'Download' : 'Profile'}`}
                  target={link.download ? '_self' : '_blank'}
                  rel={link.download ? undefined : 'noreferrer'}
                  download={link.download}
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
