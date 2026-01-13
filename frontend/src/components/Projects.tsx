import { ExternalLink, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Weather Comfort Analytics Dashboard",
      period: "January 5 - January 11, 2026",
      description: "Built a responsive Weather Comfort Analytics Dashboard using React with secure authentication. The application visualizes weather insights and calculates comfort scores based on temperature and other metrics for multiple cities.",
      highlights: [
        "Responsive Weather Comfort Analytics Dashboard with React",
        "Secure authentication with Auth0 and protected backend API access",
        "Weather insights visualized using graphs and charts with city rankings",
        "Comfort score calculation with search and sorting capabilities",
        "Dark/light theme support for enhanced user experience",
        "Clean, intuitive UI with comprehensive data analysis"
      ],
      tech: ["React", "Auth0", "JavaScript", "CSS", "Charts", "API Integration"],
      images: []
    },
    {
      title: "Hotel Stock Management System",
      period: "March 2025 - May 2025",
      description: "Developed AI bot for MERN system to automate inventory tracking with WhatsApp integration for supplier communication featuring Sinhala support.",
      highlights: [
        "AI-powered inventory tracking automation",
        "WhatsApp integration with Sinhala language support",
        "Real-time monitoring capabilities",
        "Sustainable resource management"
      ],
      tech: ["MongoDB", "React", "CSS", "JavaScript", "Node.js", "Express.js"],
      images: []
    },
    {
      title: "SLT PEOTV Sales Reports & Dashboard",
      period: "January 2025 - February 2025",
      description: "Developed a comprehensive MERN web application to manage and analyze PEOtv sales data with interactive dashboards and automated alerts. Single-handedly built and deployed this application, which is currently in production and actively used by the Marketing Department.",
      highlights: [
        "Individually developed full-stack application from concept to deployment",
        "CSV upload and monthly categorized exports",
        "Interactive dashboards with line charts for trend analysis",
        "Automated email alerts for missing sales uploads",
        "Role-based authentication for Admin and User access",
        "Currently in production use by Marketing Department"
      ],
      tech: ["MongoDB", "React", "CSS", "JavaScript", "Node.js", "Express.js"],
      images: ["/images/projects/peotv-sales-dashboard.png", "/images/projects/peotv-sales-daily-report.png", "/images/projects/peotv-sales-overview.png", "/images/projects/peotv-sales-analytics.png"]
    },
    {
      title: "SLT PEOTV Faults Analysis",
      period: "October 2024 - December 2024",
      description: "Built a MERN stack web application to manage and analyze PEO TV faults with comprehensive analytical capabilities.",
      highlights: [
        "Fault logging, searching, filtering, and sorting",
        "Analytical dashboard with charts and heat maps",
        "User authentication and role-based access",
        "Real-time fault tracking system"
      ],
      tech: ["MongoDB", "React", "CSS", "JavaScript", "Node.js", "Express.js"],
      images: ["/images/projects/peotv-faults-analysis.png"]
    },
    {
      title: "Employee Management & Training System",
      period: "March 2024 - May 2024",
      description: "Developed transportation features including shuttle service management for employee and lecturer commutes.",
      highlights: [
        "Shuttle service ride application and scheduling",
        "Admin functionalities to manage services",
        "Employee and lecturer commute management",
        "Integrated booking system"
      ],
      tech: ["MongoDB", "React", "CSS", "JavaScript", "Node.js", "Express.js"],
      images: []
    },
    {
      title: "Life Insurance Management System (Lifeyy)",
      period: "March 2023 - May 2023",
      description: "Contributed to the development of a comprehensive life insurance management system with secure authentication.",
      highlights: [
        "Secure user and admin login functionalities",
        "Smooth user handling and authentication processes",
        "Role-based access control",
        "Insurance policy management"
      ],
      tech: ["JavaScript", "PHP", "HTML", "CSS", "MySQL", "phpMyAdmin"],
      images: []
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float-delay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Real-world applications and systems I've built
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                {/* Card */}
                <div className="relative glass-effect-dark rounded-2xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 bg-slate-800/50 px-3 py-1 rounded-full">
                      <Calendar size={16} className="text-cyan-400" />
                      <span className="text-sm font-medium">{project.period}</span>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                          <img 
                            src={image} 
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-cyan-300">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 hover:text-cyan-300 transition-colors duration-300">
                          <ExternalLink size={16} className="mt-1 flex-shrink-0 text-cyan-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
