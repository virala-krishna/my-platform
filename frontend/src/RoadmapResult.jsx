import { generateRoadmapPDF } from './PdfGenerator';
import './app.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function RoadmapResult() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const selections = {
    level: searchParams.get('level'),
    field: searchParams.get('field'),
    role: searchParams.get('role'),
    language: searchParams.get('language')
  };

  // Hyper-specific roadmap generator
  const generateDetailedRoadmap = () => {
    const { level, field, role, language } = selections;
    
    const detailedRoadmaps = {
      web: {
        beginner: {
          frontend: {
            javascript: {
              title: "Frontend JavaScript Developer Roadmap",
              totalDuration: "6-8 months",
              weeklyHours: "15-20 hours",
              phases: [
                {
                  phase: "Month 1-2: Foundation & Basics",
                  duration: "8 weeks",
                  weeks: [
                    {
                      week: "Week 1-2: HTML & CSS Mastery",
                      topics: [
                        "HTML5 Semantic Elements & Accessibility",
                        "CSS Flexbox & Grid Layouts",
                        "Responsive Design with Media Queries",
                        "CSS Variables and Custom Properties",
                        "Build: Personal Portfolio Page"
                      ],
                      resources: ["MDN Web Docs", "CSS-Tricks", "FreeCodeCamp HTML/CSS"],
                      projects: ["Responsive Restaurant Website", "CSS Art Gallery"]
                    },
                    {
                      week: "Week 3-4: JavaScript Fundamentals",
                      topics: [
                        "Variables, Data Types, and Operators",
                        "Functions, Scope, and Closures",
                        "DOM Manipulation and Events",
                        "ES6+ Features: Arrow functions, Destructuring",
                        "Build: Interactive Quiz App"
                      ],
                      resources: ["JavaScript.info", "Eloquent JavaScript", "MDN JavaScript"],
                      projects: ["Todo List App", "Calculator", "Weather App UI"]
                    },
                    {
                      week: "Week 5-6: Advanced JavaScript",
                      topics: [
                        "Asynchronous JavaScript (Promises, Async/Await)",
                        "Array Methods: map, filter, reduce",
                        "Error Handling and Debugging",
                        "Local Storage and Session Storage",
                        "Build: Notes App with Local Storage"
                      ],
                      resources: ["You Don't Know JS", "JavaScript30", "Frontend Masters"],
                      projects: ["Budget Tracker", "Bookmark Manager"]
                    },
                    {
                      week: "Week 7-8: Git & Development Tools",
                      topics: [
                        "Git Fundamentals: add, commit, push, branch",
                        "GitHub Workflow and Collaboration",
                        "Chrome DevTools Mastery",
                        "Basic Command Line Usage",
                        "Build: Collaborative Project on GitHub"
                      ],
                      resources: ["Git Handbook", "Atlassian Git Tutorial", "DevTools Documentation"],
                      projects: ["Team Portfolio Website", "Open Source Contribution"]
                    }
                  ]
                },
                {
                  phase: "Month 3-4: React Ecosystem",
                  duration: "8 weeks",
                  weeks: [
                    {
                      week: "Week 9-10: React Fundamentals",
                      topics: [
                        "React Components and JSX Syntax",
                        "Props and State Management",
                        "Event Handling and Conditional Rendering",
                        "Lists and Keys",
                        "Build: E-commerce Product Listing"
                      ],
                      resources: ["React Official Docs", "Scrimba React Course", "Epic React"],
                      projects: ["Movie Database App", "Recipe Finder"]
                    },
                    {
                      week: "Week 11-12: Advanced React",
                      topics: [
                        "Hooks: useState, useEffect, useContext",
                        "Custom Hooks and Composition",
                        "React Router for Navigation",
                        "Context API for State Management",
                        "Build: Blog Platform with Routing"
                      ],
                      resources: ["React Patterns", "Testing JavaScript", "Frontend Masters React"],
                      projects: ["Social Media Dashboard", "Project Management Tool"]
                    },
                    {
                      week: "Week 13-14: Modern React Tools",
                      topics: [
                        "Vite Build Tool Setup",
                        "Component Libraries: Material-UI or Chakra UI",
                        "Form Handling with React Hook Form",
                        "API Integration with Axios",
                        "Build: CRM System with CRUD Operations"
                      ],
                      resources: ["Vite Docs", "Material-UI Docs", "React Hook Form Docs"],
                      projects: ["Customer Management System", "API Dashboard"]
                    },
                    {
                      week: "Week 15-16: Testing & Deployment",
                      topics: [
                        "Jest and React Testing Library",
                        "Component Testing Strategies",
                        "Vercel/Netlify Deployment",
                        "Performance Optimization",
                        "Build: Full-stack Application Deployment"
                      ],
                      resources: ["Testing Library Docs", "Jest Documentation", "Vercel Guide"],
                      projects: ["Deployed Portfolio", "Production-ready App"]
                    }
                  ]
                },
                {
                  phase: "Month 5-6: Advanced Topics & Job Ready",
                  duration: "8 weeks",
                  weeks: [
                    {
                      week: "Week 17-18: State Management",
                      topics: [
                        "Redux Toolkit for Complex State",
                        "RTK Query for Data Fetching",
                        "Zustand for Lightweight State",
                        "State Management Patterns",
                        "Build: E-commerce Cart System"
                      ],
                      resources: ["Redux Toolkit Docs", "Zustand GitHub", "State Management Patterns"],
                      projects: ["Shopping Cart", "Real-time Dashboard"]
                    },
                    {
                      week: "Week 19-20: TypeScript Integration",
                      topics: [
                        "TypeScript Basics and Types",
                        "React with TypeScript",
                        "Type Safety and Interfaces",
                        "Gradual Migration Strategies",
                        "Build: Type-safe React Application"
                      ],
                      resources: ["TypeScript Handbook", "React TypeScript Cheatsheet", "Total TypeScript"],
                      projects: ["Type-safe Todo App", "API Client Library"]
                    },
                    {
                      week: "Week 21-22: Advanced Patterns",
                      topics: [
                        "Component Design Patterns",
                        "Performance Optimization Techniques",
                        "Code Splitting and Lazy Loading",
                        "Progressive Web App Features",
                        "Build: High-performance Application"
                      ],
                      resources: ["Patterns.dev", "Web.dev", "Google PWA Guide"],
                      projects: ["Offline-capable App", "Performance-optimized Site"]
                    },
                    {
                      week: "Week 23-24: Portfolio & Job Prep",
                      topics: [
                        "Portfolio Website Polish",
                        "Resume Building for Frontend Roles",
                        "Technical Interview Preparation",
                        "Networking and LinkedIn Optimization",
                        "Build: Comprehensive Portfolio"
                      ],
                      resources: ["Frontend Interview Handbook", "LeetCode", "Tech Interview Handbook"],
                      projects: ["Final Portfolio", "Interview Project"]
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    };

    // Default detailed roadmap if specific combination not found
    const defaultDetailedRoadmap = {
      title: "Comprehensive Learning Roadmap",
      totalDuration: "6-9 months",
      weeklyHours: "15-25 hours",
      phases: [
        {
          phase: "Foundation Phase",
          duration: "8-12 weeks",
          weeks: [
            {
              week: "Weeks 1-4: Core Fundamentals",
              topics: ["Programming Basics", "Language Syntax", "Development Environment Setup"],
              resources: ["Official Documentation", "Beginner Courses", "Practice Platforms"],
              projects: ["Basic Applications", "Simple Games", "Utility Tools"]
            }
          ]
        }
      ]
    };

    return detailedRoadmaps[field]?.[level]?.[role]?.[language] || defaultDetailedRoadmap;
  };

  const roadmap = generateDetailedRoadmap();

  const getLabel = (category, value) => {
    const options = {
      level: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
      field: { web: 'Web Development', mobile: 'Mobile Development', data: 'Data Science', ai: 'AI/ML', devops: 'DevOps', game: 'Game Development' },
      role: { frontend: 'Frontend Developer', backend: 'Backend Developer', fullstack: 'Fullstack Developer', 'data-scientist': 'Data Scientist', 'devops-engineer': 'DevOps Engineer', 'mobile-developer': 'Mobile Developer' },
      language: { javascript: 'JavaScript', python: 'Python', java: 'Java', csharp: 'C#', php: 'PHP', ruby: 'Ruby', go: 'Go', rust: 'Rust' }
    };
    
    return options[category]?.[value] || value;
  };

  const downloadRoadmap = async () => {
    setIsDownloading(true);
    
    try {
      await generateRoadmapPDF(roadmap, selections, getLabel);
    } catch (error) {
      console.error('Download error:', error);
      alert('Error generating roadmap. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="wrap">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">CodeCraf</Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/roadmap-filter" className="nav-link">Learn</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/community" className="nav-link">Community</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎯</div>
          <h1>{roadmap.title}</h1>
          <p>Your hyper-specific learning path to become a {getLabel('role', selections.role)}</p>
          <div style={{ 
            background: 'var(--card)', 
            padding: '15px', 
            borderRadius: '12px', 
            margin: '20px auto',
            maxWidth: '400px',
            border: '1px solid var(--brand)'
          }}>
            <strong>📅 Timeline:</strong> {roadmap.totalDuration} • <strong>⏰ Weekly:</strong> {roadmap.weeklyHours}
          </div>
        </div>
      </section>

      {/* Detailed Roadmap Display */}
      <div style={{ maxWidth: '1000px', margin: '40px auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Comprehensive Learning Plan</h2>
        
        {roadmap.phases.map((phase, phaseIndex) => (
          <div key={phaseIndex} style={{ marginBottom: '50px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, var(--brand), var(--ok))',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <h2 style={{ margin: 0, color: 'var(--brand-ink)' }}>{phase.phase}</h2>
              <p style={{ margin: '5px 0 0 0', color: 'var(--brand-ink)', opacity: 0.9 }}>
                Duration: {phase.duration}
              </p>
            </div>

            <div style={{ display: 'grid', gap: '25px' }}>
              {phase.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="card">
                  <h3 style={{ color: 'var(--brand)', margin: '0 0 15px 0' }}>{week.week}</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {/* Topics */}
                    <div>
                      <h4 style={{ color: 'var(--muted)', margin: '0 0 10px 0' }}>📚 Topics to Master</h4>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {week.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} style={{
                            background: 'var(--bg)',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #22263b',
                            fontSize: '0.9rem'
                          }}>
                            • {topic}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div>
                      <h4 style={{ color: 'var(--muted)', margin: '0 0 10px 0' }}>🔗 Recommended Resources</h4>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {week.resources.map((resource, resourceIndex) => (
                          <div key={resourceIndex} style={{
                            background: 'var(--bg)',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #22263b',
                            fontSize: '0.9rem',
                            color: 'var(--brand)'
                          }}>
                            • {resource}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 style={{ color: 'var(--muted)', margin: '0 0 10px 0' }}>🛠️ Practice Projects</h4>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        {week.projects.map((project, projectIndex) => (
                          <div key={projectIndex} style={{
                            background: 'var(--bg)',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #22263b',
                            fontSize: '0.9rem',
                            color: 'var(--ok)'
                          }}>
                            • {project}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Download Button */}
      <div style={{ textAlign: 'center', margin: '50px 0' }}>
        <button 
          className="btn primary" 
          style={{ 
            padding: '16px 40px', 
            fontSize: '1.2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            opacity: isDownloading ? 0.7 : 1
          }}
          onClick={downloadRoadmap}
          disabled={isDownloading}
        >
          {isDownloading ? '⏳ Generating Beautiful PDF...' : '📊 Download PDF Roadmap'}
        </button>
        
        <p style={{ color: 'var(--muted)', marginTop: '15px' }}>
          Professional PDF with weekly breakdowns, resources, and projects
        </p>
      </div>

      {/* Next Steps */}
      <div style={{ textAlign: 'center', margin: '60px 0', padding: '40px', background: 'var(--card)', borderRadius: '20px' }}>
        <h2>Ready to Start Your Journey?</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '30px' }}>
          Begin with Week 1 and track your progress regularly
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/learn" className="btn primary">Start Learning Now</Link>
          <Link to="/projects" className="btn">Practice Projects</Link>
          <Link to="/community" className="btn">Join Community</Link>
          <Link to="/roadmap-filter" className="btn ghost">Adjust Roadmap</Link>
        </div>
      </div>
    </div>
  );
}