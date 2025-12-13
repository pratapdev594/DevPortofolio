(function () {
  var projects = [
    {
      id: 'exldata-ai',
      title: 'EXLData.ai',
      badge: 'GenAI',
      status: 'Completed',
      timeline: 'Jul 2024 – Nov 2024',
      role: 'AI Engineer',
      client: 'EXL Service',
      image: 'Image/exldata.jpg',
      description:
        'An AI-powered platform that transforms unstructured data into structured formats using advanced GenAI techniques, enabling seamless data processing and analysis.',
      stacks: ['Python', 'Langgraph', 'PostgreSQL', 'Snowflake', 'Databricks', 'Azure', 'Langfuse', 'OpenAI'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'talentpulse',
      title: 'TalentPulse',
      badge: 'GenAI',
      status: 'Completed',
      timeline: 'Aug 2024 – Oct 2024',
      role: 'Solo Developer',
      client: 'Personal Project',
      image: 'Image/talentpulse.jpg',
      description:
        'An AI-powered recruitment platform that enables recruiters to efficiently identify and screen candidate resumes using GenAI technology. Automates resume analysis, skill matching, and candidate ranking for streamlined hiring workflows.',
      stacks: ['Python', 'Langgraph', 'Langchain', 'ReactJS'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'talent-screen',
      title: 'Talent Screen',
      badge: 'Featured',
      status: 'Completed',
      timeline: 'Jan 2020 – Mar 2021',
      role: 'Java Developer',
      client: 'WhiteBox',
      image: 'Image/talentscreen.jpg',
      description:
        'A hiring workflow project focused on candidate screening with a clean UI and scalable backend integrations.',
      stacks: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'AWS'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'credit-decision-system',
      title: 'Credit Decision System',
      badge: 'ETL Pipeline',
      status: 'In Production',
      timeline: 'Oct 2023 – Feb 2024',
      role: 'Data Engineer',
      client: 'Financial Services',
      image: 'Image/cds.png',
      description:
        'A decisioning pipeline that evaluates applicant data to produce explainable credit outcomes with monitoring and auditability.',
      stacks: ['Python', 'PySpark', 'AWS', 'SQL', 'Hadoop', 'Hive', 'Linux', 'RestAPI'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'avatar',
      title: 'Avatar',
      badge: 'CRM',
      status: 'Completed',
      timeline: 'Aug 2023 – Oct 2023',
      role: 'Java Developer',
      client: 'WhiteBox',
      image: 'Image/avatar.jpg',
      description:
        'A CRM-based system designed to track and monitor employee activities, performance metrics, and engagement with intuitive dashboards and real-time analytics.',
      stacks: ['Java', 'SpringBoot', 'REST APIs', 'MySQL', 'AWS'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'social-listener',
      title: 'Social Listener',
      badge: 'GenAI',
      status: 'Completed',
      timeline: 'May 2024 – Jul 2024',
      role: 'AI Engineer',
      client: '',
      image: 'Image/social.png',
      description:
        'An AI-powered social listening workflow that extracts insights and trends from content streams.',
      stacks: ['Python', 'Langgraph', 'OpenAI', 'Vector DB', 'FastAPI'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'youtube-summarizer',
      title: 'YouTube Summarizer',
      badge: 'GenAI',
      status: 'Completed',
      timeline: 'Apr 2024 – May 2024',
      role: 'Solo Developer',
      client: 'Personal Project',
      image: 'Image/youtube.JPG',
      description:
        'Summarizes long-form video content into structured notes and highlights with a user-friendly interface.',
      stacks: ['Python', 'OpenAI', 'Whisper', 'FastAPI', 'Langchain'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'doc-verifier',
      title: 'Document Verifier',
      badge: 'AI',
      status: 'Completed',
      timeline: 'Feb 2024 – Apr 2024',
      role: 'AI Engineer',
      client: 'FinTech Company',
      image: 'Image/doc.jpeg',
      description:
        'Validates documents and detects inconsistencies using AI-assisted extraction and rules.',
      stacks: ['Python', 'OCR', 'OpenAI', 'AWS', 'RAG', 'Langchain'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'performance-monitoring-pipeline',
      title: 'Performance Monitor Pipeline',
      badge: 'Platform',
      status: 'In Production',
      timeline: 'Nov 2023 – Jan 2024',
      role: 'SDET',
      client: 'Enterprise Client',
      image: 'Image/pipeline.png',
      description:
        'A monitoring pipeline focused on performance metrics, dashboards, and alerting for platform workloads.',
      stacks: ['Python', 'AWS','Jenkins', 'Grafana', 'DataDog', 'JMeter'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'caspian',
      title: 'Caspian',
      badge: 'Data',
      status: 'Completed',
      timeline: 'Jun 2023 – Sep 2023',
      role: 'Data Engineer',
      client: 'Analytics Platform',
      image: 'Image/caspian.png',
      description:
        'A data-centric project emphasizing ingestion, transformations, and reliable batch processing.',
      stacks: ['Spark', 'Hadoop', 'Hive', 'SQL', 'Java'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'odp-ingestion',
      title: 'ODP Ingestion',
      badge: 'Data',
      status: 'In Production',
      timeline: 'Mar 2024 – Jun 2024',
      role: 'Data Engineer',
      client: 'Data Platform',
      image: 'Image/odp.png',
      description:
        'An ingestion workflow that standardizes datasets and prepares them for downstream analytics and reporting.',
      stacks: ['Python', 'AWS Glue', 'S3', 'Redshift', 'Pyspark'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'beyondlife-club',
      title: 'BeyondLife.Club',
      badge: 'Blockchain',
      status: 'Completed',
      timeline: 'Jan 2023 – May 2023',
      role: 'SDET',
      client: 'BeyondLife',
      image: 'Image/beyondlife.jpg',
      description:
        'A blockchain-based NFT marketplace built on Ethereum technology. The platform enables users to bid and sell digital assets including paintings, Ponks, cartoon characters, and animations with secure smart contract integration.',
      stacks: ['Java', 'JMeter', 'AWS', 'Jenkins'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    },
    {
      id: 'wac',
      title: 'WAC',
      badge: 'Mobile App',
      status: 'Completed',
      timeline: 'Sep 2022 – Dec 2022',
      role: 'SDET',
      client: 'Workforce Solutions',
      image: 'Image/wac.jpg',
      description:
        'A work and money management mobile application for shift workers. Manages irregular shift patterns, rota scheduling, overtime tracking, and financial planning with detailed insights into earnings, spending, and savings.',
      stacks: ['JMeter', 'Python', 'Android Studio', 'Jenkins', 'AWS'],
      links: [{ label: 'Blog', href: '', icon: 'fas fa-external-link-alt' }]
    }
  ];

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  function setActive(project) {
    var preview = document.getElementById('projectPreviewImg');
    var badge = document.getElementById('projectBadge');
    var title = document.getElementById('projectTitle');
    var desc = document.getElementById('projectDesc');
    var meta = document.getElementById('projectMeta');
    var stacks = document.getElementById('projectStacks');
    var links = document.getElementById('projectLinks');
    var card = document.getElementById('projectCard');

    if (!preview || !badge || !title || !desc || !stacks || !links || !card) return;

    preview.src = project.image;
    preview.alt = project.title;

    badge.textContent = project.badge || 'Project';
    badge.className = 'project-badge';
    if (project.status) {
      badge.className = 'project-badge badge-' + project.status.toLowerCase().replace(/\s+/g, '-');
    }

    title.textContent = project.title;
    desc.textContent = project.description;

    if (meta && project.role) {
      meta.innerHTML = '';
      var roleItem = el('div', 'meta-item');
      var roleLabel = el('span', 'meta-label');
      roleLabel.textContent = 'Role';
      var roleValue = el('span', 'meta-value');
      roleValue.textContent = project.role;
      roleItem.appendChild(roleLabel);
      roleItem.appendChild(roleValue);
      meta.appendChild(roleItem);
    }

    stacks.innerHTML = '';
    (project.stacks || []).forEach(function (s) {
      var chip = el('span', 'stack-chip');
      chip.textContent = s;
      stacks.appendChild(chip);
    });

    links.innerHTML = '';
    (project.links || []).forEach(function (l) {
      if (!l.href || l.href.trim() === '') return;
      
      var a = el('a', 'project-link');
      a.href = l.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      if (l.icon) {
        var i = el('i', l.icon);
        a.appendChild(i);
        a.appendChild(document.createTextNode(' '));
      }

      a.appendChild(document.createTextNode(l.label));
      links.appendChild(a);
    });

    card.classList.remove('swap');
    void card.offsetWidth;
    card.classList.add('swap');
  }

  function renderThumbs() {
    var container = document.getElementById('projectThumbs');
    if (!container) return;

    container.innerHTML = '';

    projects.forEach(function (p, idx) {
      var btn = el('button', 'project-thumb');
      btn.type = 'button';
      btn.setAttribute('data-project-id', p.id);
      btn.setAttribute('aria-label', p.title);

      var img = el('img');
      img.src = p.image;
      img.alt = p.title;
      btn.appendChild(img);

      var label = el('div', 'project-thumb-label');
      label.textContent = p.title;
      btn.appendChild(label);

      function activate() {
        document.querySelectorAll('.project-thumb').forEach(function (n) {
          n.classList.remove('is-active');
        });
        btn.classList.add('is-active');
        setActive(p);
      }

      btn.addEventListener('mouseenter', activate);
      btn.addEventListener('focus', activate);
      btn.addEventListener('click', activate);

      container.appendChild(btn);

      if (idx === 0) {
        btn.classList.add('is-active');
      }
    });

    setActive(projects[0]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderThumbs);
  } else {
    renderThumbs();
  }
})();
