/* ==========================================================================
   Parmeet Kumar Portfolio — JavaScript Interactions
   Clera Editorial Ivory Glass & Apple visionOS Frosted Experience
   ========================================================================== */

// 1. ARCHITECTURE PROJECTS DATA DICTIONARY (For Apple-Grade Modal Inspection)
const architectureProjects = {
  ecommerce: {
    kicker: "01 // BACKEND ARCHITECTURE & DOMAIN DESIGN",
    title: "Modular Monolith E-Commerce Backend",
    subtitle: "Domain-Driven Design (DDD) with CQRS event dispatchers, transactional outbox pattern, and sub-15ms cross-module dispatching.",
    flowSteps: [
      { text: "Client HTTP / WebSocket" },
      { text: "API Gateway & Auth Guard" },
      { text: "Domain Modules (Catalog, Order, Payment)" },
      { text: "RabbitMQ Event Dispatcher" },
      { text: "PostgreSQL ACID Cluster" }
    ],
    metrics: [
      { val: "<6.4ms", key: "P99 LATENCY" },
      { val: "100%", key: "DOMAIN ISOLATION" },
      { val: "Zero", key: "DATA DRIFT" },
      { val: "Sub-15ms", key: "EVENT DISPATCH" }
    ],
    techStack: ["NestJS", "TypeScript", "RabbitMQ", "PostgreSQL", "TypeORM", "CQRS", "Docker", "Socket.io"],
    codeUrl: "https://github.com/Parmeetkumarg90/modular-monolith-ecommerce"
  },
  rabbitmq: {
    kicker: "02 // ASYNCHRONOUS EVENT STREAMING",
    title: "RabbitMQ Event Broker Decoupling Pipeline",
    subtitle: "High-throughput message pipeline engineered with amqplib, Dead Letter Exchanges (DLX), exponential backoff retries, and transactional outbox patterns.",
    flowSteps: [
      { text: "Producer Service" },
      { text: "Topic & Fanout Exchanges" },
      { text: "Queue with DLX Routing" },
      { text: "Exponential Retry Worker" },
      { text: "Idempotent Consumer" }
    ],
    metrics: [
      { val: "14.2k", key: "MESSAGES / SEC" },
      { val: "99.99%", key: "DELIVERY GUARANTEE" },
      { val: "DLX", key: "FAULT ISOLATION" },
      { val: "<3ms", key: "ACK LATENCY" }
    ],
    techStack: ["Node.js", "RabbitMQ", "amqplib", "DLX", "Exponential Backoff", "Docker", "Event-Driven"],
    codeUrl: "https://github.com/Parmeetkumarg90/rabbit-mq-using-amqplib"
  },
  signature: {
    kicker: "03 // CRYPTOGRAPHIC PIPELINE",
    title: "Digital Document Signature Service",
    subtitle: "Immutable verification system applying SHA-256 cryptographic hashing to guarantee document integrity, with BullMQ background queue workers over Redis.",
    flowSteps: [
      { text: "Document Ingestion" },
      { text: "SHA-256 Hash Digest" },
      { text: "BullMQ Job Dispatch" },
      { text: "Redis In-Memory State" },
      { text: "Tamper-Proof Audit Trail" }
    ],
    metrics: [
      { val: "SHA-256", key: "CRYPTOGRAPHIC HASH" },
      { val: "100%", key: "TAMPER DETECTION" },
      { val: "BullMQ", key: "ASYNC QUEUING" },
      { val: "<8ms", key: "VERIFY TIME" }
    ],
    techStack: ["Node.js", "Express", "Redis", "BullMQ", "Socket.io", "SHA-256", "Cryptography"],
    codeUrl: "https://github.com/Parmeetkumarg90/Document-Signature"
  },
  "resume-parser": {
    kicker: "04 // AI EXTRACTION PIPELINES",
    title: "AI Resume Builder & Profile Parser",
    subtitle: "High-precision LLM text extraction pipeline converting unstructured resume PDFs into structured, validated JSON schemas with background queue processing.",
    flowSteps: [
      { text: "Raw PDF / Doc Ingestion" },
      { text: "Token Normalization" },
      { text: "Google GenAI Engine" },
      { text: "JSON Schema Validator" },
      { text: "BullMQ Async Cache" }
    ],
    metrics: [
      { val: "99.4%", key: "PARSING ACCURACY" },
      { val: "Sub-2s", key: "EXTRACTION LATENCY" },
      { val: "JSON", key: "SCHEMA CONFORMANCE" },
      { val: "100%", key: "TYPE VALIDATION" }
    ],
    techStack: ["Google GenAI", "Node.js", "Express", "Redis", "BullMQ", "TypeScript", "PDF Parser"],
    codeUrl: "https://github.com/Parmeetkumarg90/AI-Resume-Builder"
  }
};

// 2. ARCHITECTURE MODAL CONTROLLERS (Apple visionOS Frosted Style)
function openArchitectureModal(projectId) {
  const data = architectureProjects[projectId];
  if (!data) return;

  const kickerElem = document.getElementById("modal-kicker");
  const titleElem = document.getElementById("modal-title");
  const subtitleElem = document.getElementById("modal-subtitle");
  const flowStepsElem = document.getElementById("modal-flow-steps");
  const metricsGridElem = document.getElementById("modal-metrics-grid");
  const techRowElem = document.getElementById("modal-tech-row");
  const codebaseBtn = document.getElementById("modal-codebase-btn");
  const backdrop = document.getElementById("arch-modal-backdrop");

  if (kickerElem) kickerElem.textContent = data.kicker;
  if (titleElem) titleElem.textContent = data.title;
  if (subtitleElem) subtitleElem.textContent = data.subtitle;

  if (flowStepsElem) {
    flowStepsElem.innerHTML = data.flowSteps
      .map(
        (step, idx) => `
        <span class="flow-step-box">${step.text}</span>
        ${idx < data.flowSteps.length - 1 ? '<span class="flow-arrow">→</span>' : ''}
      `
      )
      .join("");
  }

  if (metricsGridElem) {
    metricsGridElem.innerHTML = data.metrics
      .map(
        (m) => `
        <div class="metric-cell">
          <span class="metric-val">${m.val}</span>
          <span class="metric-key">${m.key}</span>
        </div>
      `
      )
      .join("");
  }

  if (techRowElem) {
    techRowElem.innerHTML = data.techStack
      .map((tech) => `<span class="tech-chip">${tech}</span>`)
      .join("");
  }

  if (codebaseBtn) {
    codebaseBtn.href = data.codeUrl;
  }

  if (backdrop) {
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeArchitectureModal(event) {
  if (
    event &&
    event.target &&
    event.target.id !== "arch-modal-backdrop" &&
    !event.target.closest(".modal-close-btn") &&
    !event.target.closest(".btn-outline-pill")
  ) {
    return;
  }
  const backdrop = document.getElementById("arch-modal-backdrop");
  if (backdrop) {
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// 3. ARCHITECTURE DROPDOWN POPOVER CONTROLLER
const architectureDropdown = document.getElementById("architecture-dropdown");
const dropdownTrigger = architectureDropdown
  ? architectureDropdown.querySelector(".dropdown-trigger")
  : null;

function closeDropdown() {
  if (architectureDropdown) {
    architectureDropdown.classList.remove("open");
    if (dropdownTrigger) dropdownTrigger.setAttribute("aria-expanded", "false");
  }
}

function toggleDropdown(e) {
  if (e) e.stopPropagation();
  if (!architectureDropdown) return;
  const isOpen = architectureDropdown.classList.contains("open");
  if (isOpen) {
    closeDropdown();
  } else {
    architectureDropdown.classList.add("open");
    if (dropdownTrigger) dropdownTrigger.setAttribute("aria-expanded", "true");
  }
}

if (dropdownTrigger) {
  dropdownTrigger.addEventListener("click", toggleDropdown);
}

// Close dropdown on outside click
document.addEventListener("click", (e) => {
  if (architectureDropdown && !architectureDropdown.contains(e.target)) {
    closeDropdown();
  }
});

// ESC key closes both modal and popover
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeArchitectureModal();
    closeDropdown();
    const mobileDrawer = document.getElementById("mobile-drawer");
    if (mobileDrawer) mobileDrawer.classList.remove("open");
  }
});

// Popover links open modal directly
document.querySelectorAll(".popover-link[data-modal]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const modalId = link.getAttribute("data-modal");
    closeDropdown();
    openArchitectureModal(modalId);
  });
});

// 4. REAL-TIME SEARCH & FILTER CHIPS FOR PROJECTS
const searchInput = document.getElementById("project-search");
const filterChips = document.querySelectorAll(".filter-chip");
const projectCards = document.querySelectorAll("#projects-grid .project-card");
const searchBadge = document.querySelector(".search-badge");

let activeFilter = "all";
let searchQuery = "";

function applyProjectFilters() {
  let visibleCount = 0;
  const query = searchQuery.toLowerCase().trim();

  projectCards.forEach((card) => {
    const title = (card.querySelector(".project-title")?.textContent || "").toLowerCase();
    const summary = (card.querySelector(".project-summary")?.textContent || "").toLowerCase();
    const tags = (card.getAttribute("data-tags") || "").toLowerCase();
    const chips = Array.from(card.querySelectorAll(".tech-chip"))
      .map((c) => c.textContent.toLowerCase())
      .join(" ");
    const fullText = `${title} ${summary} ${tags} ${chips}`;

    const matchesSearch = !query || fullText.includes(query);
    const matchesFilter =
      activeFilter === "all" ||
      tags.includes(activeFilter.toLowerCase()) ||
      chips.includes(activeFilter.toLowerCase());

    if (matchesSearch && matchesFilter) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (searchBadge) {
    searchBadge.textContent = `${visibleCount} Project${visibleCount === 1 ? "" : "s"}`;
  }
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    applyProjectFilters();
  });
}

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.getAttribute("data-filter") || "all";
    applyProjectFilters();
  });
});

// 5. MOBILE DRAWER NAVIGATION
const mobileToggle = document.getElementById("mobile-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");

if (mobileToggle && mobileDrawer) {
  mobileToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileDrawer.classList.toggle("open");
  });

  // Close mobile drawer when clicking any link
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
    });
  });

  // Close mobile drawer when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
      mobileDrawer.classList.remove("open");
    }
  });
}

// 6. ACTIVE NAV LINK SCROLLSPY
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 140;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-desktop a[href*="${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
});

// 7. ONE-CLICK EMAIL COPY WITH TOAST NOTIFICATION
function copyEmailToClipboard(email) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showToast(`Email copied: ${email}`);
      })
      .catch(() => {
        fallbackCopy(email);
      });
  } else {
    fallbackCopy(email);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(`Email copied: ${text}`);
  } catch (err) {
    showToast(`Email: ${text}`);
  }
  textArea.remove();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// 8. BHAGAVAD GITA QUOTE ROTATOR
const gitaQuotes = [
  "You have the right to perform your prescribed actions, but not to claim the results.",
  "Set thy heart upon thy work, but never on its reward.",
  "Yoga is the journey of the self, through the self, to the self.",
  "A person is made by that which they have faith in. As that faith is, so they are."
];

let quoteIndex = 0;
const quoteElem = document.getElementById("gita-quote");
if (quoteElem) {
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % gitaQuotes.length;
    quoteElem.style.opacity = 0;
    setTimeout(() => {
      quoteElem.textContent = `"${gitaQuotes[quoteIndex]}"`;
      quoteElem.style.opacity = 1;
    }, 300);
  }, 8000);
}

// 9. CONTACT FORM SUBMISSION VIA EMAILJS
function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();
  const submitBtn = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");

  if (!name || !email || !message) {
    showToast("Please fill in all required fields.");
    return;
  }

  btnText.textContent = "Sending...";
  submitBtn.disabled = true;

  const templateParams = {
    from_name: name,
    email_id: email,
    mobile: mobile || "N/A",
    message: message,
  };

  if (typeof emailjs !== "undefined") {
    emailjs
      .send("service_hdggm94", "template_b7smqjj", templateParams)
      .then(function () {
        btnText.textContent = "Message Sent!";
        showToast("Message sent successfully! Parmeet will get back to you soon.");
        document.getElementById("contact-form").reset();
        setTimeout(() => {
          btnText.textContent = "Send Message";
          submitBtn.disabled = false;
        }, 3000);
      })
      .catch(function (error) {
        console.error("EmailJS Error:", error);
        btnText.textContent = "Send Message";
        submitBtn.disabled = false;
        showToast("Unable to send message via EmailJS. Please email parmeetkumarg90@gmail.com directly.");
      });
  } else {
    btnText.textContent = "Send Message";
    submitBtn.disabled = false;
    showToast("EmailJS service not loaded. Please email directly.");
  }
}
