// Golang Developer Roadmap Application
class GolangRoadmap {
  constructor() {
    this.roadmapData = null;
    this.userProgress = new Map(); // In-memory progress tracking
    this.searchIndex = [];
    this.init();
  }

  async init() {
    try {
      // Load roadmap data from embedded JSON
      this.roadmapData = {
        "title": "Golang Developer Roadmap 2025",
        "subtitle": "From Beginner to Intermediate Level",
        "sections": [
          {
            "id": "fundamentals",
            "title": "Programming Fundamentals",
            "level": "Beginner",
            "description": "Build a strong foundation with these essentials",
            "icon": "📚",
            "color": "#4CAF50",
            "topics": [
              {
                "title": "How the Internet Works",
                "description": "Understand HTTP/HTTPS, APIs, and web communication",
                "items": [
                  "HTTP methods (GET, POST, PUT, DELETE)",
                  "Status codes (200, 404, 500, etc.)",
                  "Headers and cookies",
                  "REST API principles",
                  "JSON data format"
                ]
              },
              {
                "title": "Programming Basics",
                "description": "Core programming concepts and problem-solving skills",
                "items": [
                  "Variables and data types",
                  "Control structures (if/else, loops)",
                  "Functions and scope",
                  "Basic algorithms and data structures",
                  "Problem-solving techniques"
                ]
              },
              {
                "title": "Version Control",
                "description": "Master Git for collaborative development",
                "items": [
                  "Git basics (init, add, commit, push, pull)",
                  "Branching and merging",
                  "GitHub/GitLab workflow",
                  "Pull requests and code reviews",
                  "Git best practices"
                ]
              },
              {
                "title": "Command Line",
                "description": "Navigate and operate efficiently via terminal",
                "items": [
                  "Basic terminal commands",
                  "File system navigation",
                  "Environment variables",
                  "Package managers",
                  "Shell scripting basics"
                ]
              }
            ]
          },
          {
            "id": "go-basics",
            "title": "Go Language Fundamentals",
            "level": "Beginner",
            "description": "Learn Go syntax, concepts, and basic programming",
            "icon": "🐹",
            "color": "#00ADD8",
            "topics": [
              {
                "title": "Go Installation & Setup",
                "description": "Get Go running on your system",
                "items": [
                  "Download and install Go",
                  "Set up GOPATH and GOROOT",
                  "Configure IDE (VS Code, GoLand)",
                  "Install Go extensions",
                  "First 'Hello World' program"
                ]
              },
              {
                "title": "Basic Syntax",
                "description": "Master Go's fundamental syntax",
                "items": [
                  "Package declaration and imports",
                  "Variables and constants",
                  "Data types (int, string, bool, etc.)",
                  "Functions and return values",
                  "Comments and documentation"
                ]
              },
              {
                "title": "Control Structures",
                "description": "Flow control in Go programs",
                "items": [
                  "If/else statements",
                  "Switch statements",
                  "For loops (all variations)",
                  "Range keyword",
                  "Break and continue"
                ]
              },
              {
                "title": "Data Structures",
                "description": "Organize and store data effectively",
                "items": [
                  "Arrays and slices",
                  "Maps (hash tables)",
                  "Structs and methods",
                  "Pointers basics",
                  "Make and new functions"
                ]
              }
            ]
          },
          {
            "id": "intermediate-go",
            "title": "Intermediate Go Concepts",
            "level": "Intermediate",
            "description": "Dive deeper into Go's powerful features",
            "icon": "⚡",
            "color": "#FFC107",
            "topics": [
              {
                "title": "Interfaces & Polymorphism",
                "description": "Write flexible and reusable code",
                "items": [
                  "Interface definition and implementation",
                  "Empty interface (interface{})",
                  "Type assertions and switches",
                  "Interface composition",
                  "Common interfaces (io.Reader, io.Writer)"
                ]
              },
              {
                "title": "Error Handling",
                "description": "Handle errors gracefully and effectively",
                "items": [
                  "Error interface and custom errors",
                  "Error wrapping and unwrapping",
                  "Panic and recover",
                  "Best practices for error handling",
                  "Error handling patterns"
                ]
              },
              {
                "title": "Packages & Modules",
                "description": "Organize code and manage dependencies",
                "items": [
                  "Creating and using packages",
                  "Go modules (go.mod, go.sum)",
                  "Importing packages",
                  "Package visibility (public/private)",
                  "Dependency management"
                ]
              },
              {
                "title": "File I/O & JSON",
                "description": "Work with files and data formats",
                "items": [
                  "Reading and writing files",
                  "JSON marshaling/unmarshaling",
                  "Working with buffers",
                  "File path manipulation",
                  "Configuration file handling"
                ]
              }
            ]
          },
          {
            "id": "concurrency",
            "title": "Concurrency & Goroutines",
            "level": "Intermediate",
            "description": "Master Go's powerful concurrency model",
            "icon": "🚀",
            "color": "#9C27B0",
            "topics": [
              {
                "title": "Goroutines",
                "description": "Lightweight concurrent execution",
                "items": [
                  "Creating and running goroutines",
                  "Goroutine lifecycle",
                  "WaitGroups for synchronization",
                  "Best practices with goroutines",
                  "Avoiding goroutine leaks"
                ]
              },
              {
                "title": "Channels",
                "description": "Communication between goroutines",
                "items": [
                  "Channel creation and usage",
                  "Buffered vs unbuffered channels",
                  "Channel directions",
                  "Select statement",
                  "Channel patterns and idioms"
                ]
              },
              {
                "title": "Synchronization",
                "description": "Coordinate concurrent operations",
                "items": [
                  "Mutexes and RWMutex",
                  "Atomic operations",
                  "Once synchronization",
                  "Context package",
                  "Race condition prevention"
                ]
              }
            ]
          },
          {
            "id": "web-development",
            "title": "Web Development with Go",
            "level": "Intermediate",
            "description": "Build web applications and APIs",
            "icon": "🌐",
            "color": "#2196F3",
            "topics": [
              {
                "title": "HTTP Server Basics",
                "description": "Build HTTP servers with standard library",
                "items": [
                  "net/http package",
                  "Creating HTTP handlers",
                  "URL routing and parameters",
                  "Serving static files",
                  "HTTP middleware patterns"
                ]
              },
              {
                "title": "Web Frameworks",
                "description": "Popular frameworks for web development",
                "items": [
                  "Gin framework basics",
                  "Echo framework overview",
                  "Fiber for high performance",
                  "Chi router for simplicity",
                  "Choosing the right framework"
                ]
              },
              {
                "title": "RESTful APIs",
                "description": "Design and implement REST APIs",
                "items": [
                  "REST principles and conventions",
                  "CRUD operations",
                  "API versioning",
                  "Request/response handling",
                  "API documentation"
                ]
              },
              {
                "title": "Templates & Static Files",
                "description": "Render HTML and serve assets",
                "items": [
                  "html/template package",
                  "Template syntax and functions",
                  "Static file serving",
                  "CSS and JavaScript integration",
                  "Template inheritance"
                ]
              }
            ]
          },
          {
            "id": "database",
            "title": "Database Integration",
            "level": "Intermediate",
            "description": "Connect Go applications to databases",
            "icon": "🗄️",
            "color": "#FF5722",
            "topics": [
              {
                "title": "Database/SQL Package",
                "description": "Standard library database interface",
                "items": [
                  "Opening database connections",
                  "Executing queries (Query, QueryRow, Exec)",
                  "Prepared statements",
                  "Connection pooling",
                  "Transaction handling"
                ]
              },
              {
                "title": "Popular Databases",
                "description": "Work with different database systems",
                "items": [
                  "PostgreSQL with pq driver",
                  "MySQL with go-sql-driver",
                  "SQLite for lightweight apps",
                  "MongoDB with official driver",
                  "Redis for caching and sessions"
                ]
              },
              {
                "title": "ORM Libraries",
                "description": "Object-Relational Mapping tools",
                "items": [
                  "GORM basics and setup",
                  "Model definitions and relationships",
                  "Migrations and schema management",
                  "Query building and associations",
                  "Alternative ORMs (Ent, SQLBoiler)"
                ]
              }
            ]
          },
          {
            "id": "testing",
            "title": "Testing & Quality Assurance",
            "level": "Intermediate",
            "description": "Ensure code quality and reliability",
            "icon": "✅",
            "color": "#4CAF50",
            "topics": [
              {
                "title": "Unit Testing",
                "description": "Test individual components",
                "items": [
                  "testing package basics",
                  "Writing test functions",
                  "Table-driven tests",
                  "Test helpers and utilities",
                  "Mocking and test doubles"
                ]
              },
              {
                "title": "Benchmarking",
                "description": "Measure and optimize performance",
                "items": [
                  "Writing benchmark functions",
                  "Running and analyzing benchmarks",
                  "Memory profiling",
                  "CPU profiling",
                  "Performance optimization tips"
                ]
              },
              {
                "title": "Integration Testing",
                "description": "Test component interactions",
                "items": [
                  "HTTP testing with httptest",
                  "Database testing strategies",
                  "Test containers and fixtures",
                  "End-to-end testing approaches",
                  "CI/CD integration"
                ]
              }
            ]
          },
          {
            "id": "tools-practices",
            "title": "Tools & Best Practices",
            "level": "Intermediate",
            "description": "Essential tools and development practices",
            "icon": "🛠️",
            "color": "#607D8B",
            "topics": [
              {
                "title": "Go Tools",
                "description": "Built-in and essential external tools",
                "items": [
                  "gofmt for code formatting",
                  "goimports for import management",
                  "go vet for code analysis",
                  "golint and golangci-lint",
                  "go generate for code generation"
                ]
              },
              {
                "title": "Project Structure",
                "description": "Organize Go projects effectively",
                "items": [
                  "Standard Go project layout",
                  "cmd, pkg, internal directories",
                  "Module organization",
                  "Configuration management",
                  "Documentation practices"
                ]
              },
              {
                "title": "Dependency Management",
                "description": "Manage external packages",
                "items": [
                  "go mod commands",
                  "Semantic versioning",
                  "Vendor directory",
                  "Private modules",
                  "Dependency updates and security"
                ]
              }
            ]
          },
          {
            "id": "deployment",
            "title": "Deployment & Production",
            "level": "Intermediate",
            "description": "Deploy Go applications to production",
            "icon": "🚀",
            "color": "#FF9800",
            "topics": [
              {
                "title": "Building & Deployment",
                "description": "Compile and deploy Go applications",
                "items": [
                  "Cross-platform compilation",
                  "Building for different architectures",
                  "Binary optimization",
                  "Environment configuration",
                  "Process management"
                ]
              },
              {
                "title": "Containerization",
                "description": "Package apps with Docker",
                "items": [
                  "Docker basics and Dockerfile",
                  "Multi-stage builds",
                  "Image optimization",
                  "Docker Compose",
                  "Container best practices"
                ]
              },
              {
                "title": "CI/CD Basics",
                "description": "Automated testing and deployment",
                "items": [
                  "GitHub Actions for Go",
                  "GitLab CI pipelines",
                  "Automated testing",
                  "Build and deploy workflows",
                  "Environment management"
                ]
              }
            ]
          },
          {
            "id": "next-steps",
            "title": "Next Steps & Resources",
            "level": "Beyond Intermediate",
            "description": "Continue your Go journey",
            "icon": "🎯",
            "color": "#8BC34A",
            "topics": [
              {
                "title": "Advanced Topics to Explore",
                "description": "Areas for further learning",
                "items": [
                  "Microservices architecture",
                  "gRPC and Protocol Buffers",
                  "Advanced concurrency patterns",
                  "Performance optimization",
                  "Security best practices"
                ]
              },
              {
                "title": "Ecosystem & Community",
                "description": "Engage with the Go community",
                "items": [
                  "Go conferences and meetups",
                  "Open source contributions",
                  "Go blog and documentation",
                  "Reddit r/golang community",
                  "Stack Overflow and forums"
                ]
              },
              {
                "title": "Learning Resources",
                "description": "Books, courses, and tutorials",
                "items": [
                  "The Go Programming Language book",
                  "Effective Go documentation",
                  "Go by Example website",
                  "Online courses and tutorials",
                  "Practice coding challenges"
                ]
              }
            ]
          }
        ],
        "projects": [
          {
            "title": "Hello World CLI",
            "level": "Beginner",
            "description": "Build a simple command-line application",
            "skills": ["Basic syntax", "Functions", "Command-line arguments"]
          },
          {
            "title": "Todo List API",
            "level": "Beginner-Intermediate",
            "description": "Create a RESTful API for managing tasks",
            "skills": ["HTTP servers", "JSON", "Data structures", "Error handling"]
          },
          {
            "title": "File Processor",
            "level": "Intermediate",
            "description": "Process files concurrently with goroutines",
            "skills": ["Concurrency", "File I/O", "Channels", "Error handling"]
          },
          {
            "title": "Web Scraper",
            "level": "Intermediate",
            "description": "Build a concurrent web scraper",
            "skills": ["HTTP client", "HTML parsing", "Concurrency", "Rate limiting"]
          },
          {
            "title": "Blog Application",
            "level": "Intermediate",
            "description": "Full-stack blog with database integration",
            "skills": ["Web frameworks", "Database", "Templates", "Authentication"]
          }
        ]
      };

      this.buildSearchIndex();
      this.renderRoadmap();
      this.renderProjects();
      this.setupEventListeners();
      this.setupProgressCircle();
      this.updateProgress();
    } catch (error) {
      console.error('Error initializing roadmap:', error);
    }
  }

  buildSearchIndex() {
    this.searchIndex = [];
    this.roadmapData.sections.forEach(section => {
      // Index section
      this.searchIndex.push({
        type: 'section',
        title: section.title,
        description: section.description,
        sectionId: section.id,
        content: `${section.title} ${section.description}`.toLowerCase()
      });

      // Index topics and items
      section.topics.forEach((topic, topicIndex) => {
        this.searchIndex.push({
          type: 'topic',
          title: topic.title,
          description: topic.description,
          sectionId: section.id,
          topicIndex: topicIndex,
          content: `${topic.title} ${topic.description}`.toLowerCase()
        });

        topic.items.forEach((item, itemIndex) => {
          this.searchIndex.push({
            type: 'item',
            title: item,
            sectionId: section.id,
            topicIndex: topicIndex,
            itemIndex: itemIndex,
            content: item.toLowerCase()
          });
        });
      });
    });
  }

  renderRoadmap() {
    const roadmapGrid = document.getElementById('roadmapGrid');
    const quickNavItems = document.getElementById('quickNavItems');
    
    roadmapGrid.innerHTML = '';
    quickNavItems.innerHTML = '';

    this.roadmapData.sections.forEach(section => {
      // Render section card
      const sectionCard = this.createSectionCard(section);
      roadmapGrid.appendChild(sectionCard);

      // Add to quick navigation
      const navItem = document.createElement('a');
      navItem.href = `#section-${section.id}`;
      navItem.className = 'quick-nav-item';
      navItem.innerHTML = `${section.icon} ${section.title}`;
      navItem.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(`section-${section.id}`).scrollIntoView({ behavior: 'smooth' });
      });
      quickNavItems.appendChild(navItem);
    });
  }

  createSectionCard(section) {
    const card = document.createElement('div');
    card.className = `section-card level-${section.level.toLowerCase().replace(' ', '-')}`;
    card.id = `section-${section.id}`;

    const totalItems = section.topics.reduce((sum, topic) => sum + topic.items.length, 0);
    const completedItems = section.topics.reduce((sum, topic) => {
      return sum + topic.items.filter((_, itemIndex) => 
        this.userProgress.get(`${section.id}-${section.topics.indexOf(topic)}-${itemIndex}`)
      ).length;
    }, 0);
    const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    card.innerHTML = `
      <div class="section-header" data-section-id="${section.id}">
        <div class="section-title-row">
          <div class="section-title-left">
            <span class="section-icon">${section.icon}</span>
            <h3 class="section-title">${section.title}</h3>
          </div>
          <button class="section-toggle" data-section-id="${section.id}">+</button>
        </div>
        <span class="section-level">${section.level}</span>
        <p class="section-description">${section.description}</p>
        <div class="section-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
          </div>
          <span class="progress-stats">${completedItems}/${totalItems}</span>
        </div>
      </div>
      <div class="section-content" data-section-id="${section.id}">
        <div class="topics-list">
          ${section.topics.map((topic, topicIndex) => this.createTopicCard(topic, section.id, topicIndex)).join('')}
        </div>
      </div>
    `;

    return card;
  }

  createTopicCard(topic, sectionId, topicIndex) {
    return `
      <div class="topic-card">
        <div class="topic-header" data-section-id="${sectionId}" data-topic-index="${topicIndex}">
          <div class="topic-info">
            <h4 class="topic-title">${topic.title}</h4>
            <p class="topic-description">${topic.description}</p>
          </div>
          <button class="topic-expand" data-section-id="${sectionId}" data-topic-index="${topicIndex}">+</button>
        </div>
        <div class="topic-items" data-section-id="${sectionId}" data-topic-index="${topicIndex}">
          <div class="topic-items-list">
            ${topic.items.map((item, itemIndex) => this.createTopicItem(item, sectionId, topicIndex, itemIndex)).join('')}
          </div>
        </div>
      </div>
    `;
  }

  createTopicItem(item, sectionId, topicIndex, itemIndex) {
    const itemId = `${sectionId}-${topicIndex}-${itemIndex}`;
    const isCompleted = this.userProgress.get(itemId) || false;

    return `
      <div class="topic-item ${isCompleted ? 'completed' : ''}">
        <input type="checkbox" class="topic-checkbox" data-item-id="${itemId}" ${isCompleted ? 'checked' : ''}>
        <span class="topic-item-text">${item}</span>
      </div>
    `;
  }

  renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    this.roadmapData.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';

      projectCard.innerHTML = `
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-level ${project.level.toLowerCase().replace(/[^a-z]/g, '-')}">${project.level}</span>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-skills">
          ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      `;

      projectsGrid.appendChild(projectCard);
    });
  }

  setupEventListeners() {
    // Section expand/collapse functionality
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('section-header') || e.target.closest('.section-header')) {
        const sectionHeader = e.target.classList.contains('section-header') ? e.target : e.target.closest('.section-header');
        const sectionId = sectionHeader.getAttribute('data-section-id');
        const sectionContent = document.querySelector(`[data-section-id="${sectionId}"].section-content`);
        const toggleButton = sectionHeader.querySelector('.section-toggle');
        
        if (sectionContent) {
          sectionContent.classList.toggle('expanded');
          toggleButton.textContent = sectionContent.classList.contains('expanded') ? '−' : '+';
        }
      }

      if (e.target.classList.contains('section-toggle')) {
        e.stopPropagation();
        const sectionId = e.target.getAttribute('data-section-id');
        const sectionContent = document.querySelector(`[data-section-id="${sectionId}"].section-content`);
        
        if (sectionContent) {
          sectionContent.classList.toggle('expanded');
          e.target.textContent = sectionContent.classList.contains('expanded') ? '−' : '+';
        }
      }

      // Topic expand/collapse functionality
      if (e.target.classList.contains('topic-header') || e.target.closest('.topic-header')) {
        const topicHeader = e.target.classList.contains('topic-header') ? e.target : e.target.closest('.topic-header');
        const sectionId = topicHeader.getAttribute('data-section-id');
        const topicIndex = topicHeader.getAttribute('data-topic-index');
        const topicItems = document.querySelector(`[data-section-id="${sectionId}"][data-topic-index="${topicIndex}"].topic-items`);
        const expandButton = topicHeader.querySelector('.topic-expand');
        
        if (topicItems) {
          topicItems.classList.toggle('expanded');
          expandButton.textContent = topicItems.classList.contains('expanded') ? '−' : '+';
        }
      }

      if (e.target.classList.contains('topic-expand')) {
        e.stopPropagation();
        const sectionId = e.target.getAttribute('data-section-id');
        const topicIndex = e.target.getAttribute('data-topic-index');
        const topicItems = document.querySelector(`[data-section-id="${sectionId}"][data-topic-index="${topicIndex}"].topic-items`);
        
        if (topicItems) {
          topicItems.classList.toggle('expanded');
          e.target.textContent = topicItems.classList.contains('expanded') ? '−' : '+';
        }
      }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length < 2) {
          searchResults.style.display = 'none';
          return;
        }

        const results = this.searchIndex.filter(item => 
          item.content.includes(query)
        ).slice(0, 10);

        if (results.length > 0) {
          searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" data-section-id="${result.sectionId}" data-topic-index="${result.topicIndex || -1}" data-item-index="${result.itemIndex || -1}">
              <div class="search-result-title">${this.highlightText(result.title, query)}</div>
              <div class="search-result-section">${result.type} in ${this.roadmapData.sections.find(s => s.id === result.sectionId).title}</div>
            </div>
          `).join('');
          searchResults.style.display = 'block';
        } else {
          searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
          searchResults.style.display = 'block';
        }
      });
    }

    // Search results click handling
    document.addEventListener('click', (e) => {
      if (e.target.closest('.search-result-item')) {
        const item = e.target.closest('.search-result-item');
        const sectionId = item.getAttribute('data-section-id');
        const topicIndex = parseInt(item.getAttribute('data-topic-index'));
        const itemIndex = parseInt(item.getAttribute('data-item-index'));
        
        this.jumpToSearchResult(sectionId, topicIndex, itemIndex);
      }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });

    // Expand/Collapse All buttons
    const expandAllBtn = document.getElementById('expandAllBtn');
    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.section-content').forEach(content => {
          content.classList.add('expanded');
          const sectionId = content.getAttribute('data-section-id');
          const toggleButton = document.querySelector(`[data-section-id="${sectionId}"].section-toggle`);
          if (toggleButton) toggleButton.textContent = '−';
        });
        document.querySelectorAll('.topic-items').forEach(items => {
          items.classList.add('expanded');
          const sectionId = items.getAttribute('data-section-id');
          const topicIndex = items.getAttribute('data-topic-index');
          const expandButton = document.querySelector(`[data-section-id="${sectionId}"][data-topic-index="${topicIndex}"].topic-expand`);
          if (expandButton) expandButton.textContent = '−';
        });
      });
    }

    const collapseAllBtn = document.getElementById('collapseAllBtn');
    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.section-content').forEach(content => {
          content.classList.remove('expanded');
          const sectionId = content.getAttribute('data-section-id');
          const toggleButton = document.querySelector(`[data-section-id="${sectionId}"].section-toggle`);
          if (toggleButton) toggleButton.textContent = '+';
        });
        document.querySelectorAll('.topic-items').forEach(items => {
          items.classList.remove('expanded');
          const sectionId = items.getAttribute('data-section-id');
          const topicIndex = items.getAttribute('data-topic-index');
          const expandButton = document.querySelector(`[data-section-id="${sectionId}"][data-topic-index="${topicIndex}"].topic-expand`);
          if (expandButton) expandButton.textContent = '+';
        });
      });
    }

    // Export Progress button
    const exportProgressBtn = document.getElementById('exportProgressBtn');
    if (exportProgressBtn) {
      exportProgressBtn.addEventListener('click', () => {
        this.exportProgress();
      });
    }

    // Checkbox handling
    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('topic-checkbox')) {
        const itemId = e.target.getAttribute('data-item-id');
        this.userProgress.set(itemId, e.target.checked);
        
        const topicItem = e.target.closest('.topic-item');
        topicItem.classList.toggle('completed', e.target.checked);
        
        this.updateProgress();
      }
    });

    // Modal handling
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('show');
      });
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          modalOverlay.classList.remove('show');
        }
      });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('show')) {
        modalOverlay.classList.remove('show');
      }
    });
  }

  setupProgressCircle() {
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;
    }
  }

  updateProgress() {
    // Calculate overall progress
    const totalItems = this.roadmapData.sections.reduce((sum, section) => 
      sum + section.topics.reduce((topicSum, topic) => topicSum + topic.items.length, 0), 0
    );

    const completedItems = Array.from(this.userProgress.values()).filter(Boolean).length;
    const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    // Update progress circle
    const circle = document.querySelector('.progress-ring-circle');
    const progressText = document.querySelector('.progress-text');
    
    if (circle && progressText) {
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      const offset = circumference - (progressPercent / 100) * circumference;

      circle.style.strokeDashoffset = offset;
      progressText.textContent = `${progressPercent}%`;
    }

    // Update section progress bars
    this.roadmapData.sections.forEach(section => {
      const sectionCard = document.getElementById(`section-${section.id}`);
      if (!sectionCard) return;

      const totalSectionItems = section.topics.reduce((sum, topic) => sum + topic.items.length, 0);
      const completedSectionItems = section.topics.reduce((sum, topic) => {
        return sum + topic.items.filter((_, itemIndex) => 
          this.userProgress.get(`${section.id}-${section.topics.indexOf(topic)}-${itemIndex}`)
        ).length;
      }, 0);
      
      const sectionProgressPercent = totalSectionItems > 0 ? Math.round((completedSectionItems / totalSectionItems) * 100) : 0;
      
      const progressFill = sectionCard.querySelector('.progress-fill');
      const progressStats = sectionCard.querySelector('.progress-stats');
      
      if (progressFill) progressFill.style.width = `${sectionProgressPercent}%`;
      if (progressStats) progressStats.textContent = `${completedSectionItems}/${totalSectionItems}`;
      
      // Update section completion status
      if (sectionProgressPercent === 100) {
        sectionCard.classList.add('completed');
      } else {
        sectionCard.classList.remove('completed');
      }
    });

    // Update quick navigation
    document.querySelectorAll('.quick-nav-item').forEach((navItem, index) => {
      const section = this.roadmapData.sections[index];
      if (!section) return;

      const totalSectionItems = section.topics.reduce((sum, topic) => sum + topic.items.length, 0);
      const completedSectionItems = section.topics.reduce((sum, topic) => {
        return sum + topic.items.filter((_, itemIndex) => 
          this.userProgress.get(`${section.id}-${section.topics.indexOf(topic)}-${itemIndex}`)
        ).length;
      }, 0);
      
      if (completedSectionItems === totalSectionItems && totalSectionItems > 0) {
        navItem.classList.add('completed');
      } else {
        navItem.classList.remove('completed');
      }
    });
  }

  highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }

  jumpToSearchResult(sectionId, topicIndex = -1, itemIndex = -1) {
    const searchResults = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    
    if (searchResults) searchResults.style.display = 'none';
    if (searchInput) searchInput.value = '';

    // Scroll to section
    const sectionCard = document.getElementById(`section-${sectionId}`);
    if (sectionCard) {
      sectionCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Expand section if needed
      const sectionContent = sectionCard.querySelector('.section-content');
      const sectionToggle = sectionCard.querySelector('.section-toggle');
      
      if (sectionContent && !sectionContent.classList.contains('expanded')) {
        sectionContent.classList.add('expanded');
        if (sectionToggle) sectionToggle.textContent = '−';
      }

      // If specific topic, expand that too
      if (topicIndex >= 0) {
        setTimeout(() => {
          const topicItems = document.querySelector(`[data-section-id="${sectionId}"][data-topic-index="${topicIndex}"].topic-items`);
          const topicExpand = document.querySelector(`[data-section-id="${sectionId}"][data-topic-index="${topicIndex}"].topic-expand`);
          
          if (topicItems && !topicItems.classList.contains('expanded')) {
            topicItems.classList.add('expanded');
            if (topicExpand) topicExpand.textContent = '−';
          }
        }, 300);
      }
    }
  }

  exportProgress() {
    const totalItems = this.roadmapData.sections.reduce((sum, section) => 
      sum + section.topics.reduce((topicSum, topic) => topicSum + topic.items.length, 0), 0
    );
    const completedItems = Array.from(this.userProgress.values()).filter(Boolean).length;
    const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    let exportText = `# Golang Developer Roadmap Progress\n\n`;
    exportText += `**Overall Progress:** ${completedItems}/${totalItems} (${progressPercent}%)\n\n`;

    this.roadmapData.sections.forEach(section => {
      const totalSectionItems = section.topics.reduce((sum, topic) => sum + topic.items.length, 0);
      const completedSectionItems = section.topics.reduce((sum, topic) => {
        return sum + topic.items.filter((_, itemIndex) => 
          this.userProgress.get(`${section.id}-${section.topics.indexOf(topic)}-${itemIndex}`)
        ).length;
      }, 0);
      
      const sectionProgressPercent = totalSectionItems > 0 ? Math.round((completedSectionItems / totalSectionItems) * 100) : 0;
      
      exportText += `## ${section.icon} ${section.title} (${section.level})\n`;
      exportText += `Progress: ${completedSectionItems}/${totalSectionItems} (${sectionProgressPercent}%)\n\n`;

      section.topics.forEach((topic, topicIndex) => {
        exportText += `### ${topic.title}\n`;
        topic.items.forEach((item, itemIndex) => {
          const isCompleted = this.userProgress.get(`${section.id}-${topicIndex}-${itemIndex}`);
          exportText += `- [${isCompleted ? 'x' : ' '}] ${item}\n`;
        });
        exportText += '\n';
      });
    });

    // Create and trigger download
    const blob = new Blob([exportText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'golang-roadmap-progress.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new GolangRoadmap();
});