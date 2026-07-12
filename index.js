let flag = 0;
function shownavbar() {
  if (flag == 0) {
    flag = 1;
    document.getElementsByClassName("nav")[0].setAttribute("id", "shownavbar");
  } else {
    flag = 0;
    document.getElementsByClassName("nav")[0].removeAttribute("id");
  }
}

// Typed.js configuration
let string = new Typed("#element", {
  strings: [
    '<span class="name"> JSON.parse(\'{"role": "Backend Engineer"}\')</span>;',
    '<span class="name"> new NestJs Developer()</span>;',
    '<span class="name"> "Node Programmer"</span>;',
    '<span class="name"> "Data Structures & Algorithms"</span>;',
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// Floating Labels configuration
document.querySelectorAll("input,textarea").forEach((element) => {
  const label = element.nextElementSibling;
  if (!label || label.tagName !== "LABEL") return;

  const class_adder = () => {
    if (element.value == "") {
      label.removeAttribute("class");
    } else {
      label.setAttribute("class", "label-active");
    }
  };
  element.addEventListener("input", class_adder);
});

// Send Mail logic
function SendMail() {
  var elementdata = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    message: document.getElementById("message").value,
  };
  console.log(elementdata);
  emailjs
    .send("service_hdggm94", "template_b7smqjj", elementdata)
    .then(function (res) {
      alert("Success !" + res.status);
    })
    .catch(function (error) {
      console.error("Failed to send email:", error);
    });
}

// Interactive Terminal shell simulator logic
const terminalInput = document.getElementById("terminal-input");
const terminalHistory = document.getElementById("terminal-history");

function focusTerminal() {
  if (terminalInput) {
    terminalInput.focus();
  }
}

if (terminalInput) {
  terminalInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const command = terminalInput.value.trim().toLowerCase();
      terminalInput.value = "";
      executeTerminalCommand(command);
    }
  });
}

function executeTerminalCommand(cmd) {
  // Append the entered command to history
  const commandLine = document.createElement("p");
  commandLine.className = "cmd";
  commandLine.textContent = cmd;
  terminalHistory.appendChild(commandLine);

  const output = document.createElement("div");
  output.className = "terminal-output-block";

  switch (cmd) {
    case "help":
      output.innerHTML = `
                <p>Available commands:</p>
                <p>  <span class="key">about</span>      - Print summary details about Parmeet</p>
                <p>  <span class="key">skills</span>     - View structured technical competence</p>
                <p>  <span class="key">projects</span>   - Show top backend codebases</p>
                <p>  <span class="key">experience</span> - View timeline history</p>
                <p>  <span class="key">contact</span>    - Show contact and social links</p>
                <p>  <span class="key">clear</span>      - Clear terminal logs</p>
            `;
      break;
    case "about":
      output.innerHTML = `
                <p>I am a Backend Engineer specializing in building scale-ready server systems, distributed microservice architectures, and high-performance server pipelines. My professional engineering focus is on server-side architecture, performance optimization, and robust distributed domains.</p>
                <p style="margin-top: 10px;">I specialize in creating decoupled microservices using Domain-Driven Design (DDD) and CQRS patterns, real-time message queuing pipelines with RabbitMQ/BullMQ, custom Database systems, and robust AI integrations.</p>
            `;
      break;
    case "skills":
      output.innerHTML = `
                <p>Domain Driven Design, CQRS, Event Driven Architecture, NestJS, RabbitMQ, BullMQ, Node.js, Express, MySQL, PostgreSQL, MongoDB, Python, Django, C++, Java, Docker, Linux, Next.js, React Native.</p>
            `;
      break;
    case "projects":
      output.innerHTML = `
                <p>• Modular Monolith E-Commerce (Monolith, DDD, Postgres)</p>
                <p>• RabbitMQ Event Broker Integration (amqplib routing patterns)</p>
                <p>• LangChain LLM Integration POC (Generative AI pipeline)</p>
                <p>• Micro ORM Framework POC (Direct SQL mapping engine)</p>
                <p>• AI Resume Builder / Digital Document Signature / Web Crawler</p>
            `;
      break;
    case "experience":
      output.innerHTML = `
                <p>1. <b>Zenmonk</b> (Full Stack Developer Intern): Sept 2025 - Present</p>
                <p>2. <b>CodeQuotient</b> (Software Engineer Intern): May 2025 - Sept 2025</p>
            `;
      break;
    case "contact":
      output.innerHTML = `
                <p>• <b>Location:</b> Panipat, India</p>
                <p>• <b>Email:</b> parmeetkumarg90@gmail.com</p>
                <p>• <b>Phone:</b> +91 90680 57560</p>
            `;
      break;
    case "clear":
      terminalHistory.innerHTML = "";
      return;
    default:
      output.innerHTML = `<p class="terminal-error">Command not found: '${cmd}'. Type 'help' for options.</p>`;
  }

  terminalHistory.appendChild(output);

  // Auto scroll to bottom
  const body = document.querySelector(".terminal-body");
  if (body) {
    body.scrollTop = body.scrollHeight;
  }
}

const gitaQuotes = [
  {
    text: '"You have the right to perform your actions, but not to claim the results."',
    ref: "– Bhagavad Gita 2.47",
  },
  {
    text: '"Man is made by his belief. As he believes, so he is."',
    ref: "– Bhagavad Gita 17.3",
  },
  {
    text: '"Delusion arises from anger. The mind is bewildered by anger."',
    ref: "– Bhagavad Gita 2.63",
  },
  {
    text: '"A man is disciplined when he keeps his sensory organs under control."',
    ref: "– Bhagavad Gita 5.2",
  },
];

let currentQuoteIndex = 0;
let quoteInterval;

function updateQuoteDisplay() {
  const quoteEl = document.getElementById("gita-quote");
  const authorEl = document.getElementById("gita-author");
  if (!quoteEl || !authorEl) return;

  quoteEl.style.opacity = 0;
  authorEl.style.opacity = 0;

  setTimeout(() => {
    quoteEl.textContent = gitaQuotes[currentQuoteIndex].text;
    authorEl.textContent = gitaQuotes[currentQuoteIndex].ref;
    quoteEl.style.opacity = 1;
    authorEl.style.opacity = 1;
  }, 200);
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % gitaQuotes.length;
  updateQuoteDisplay();
  resetQuoteTimer();
}

function prevQuote() {
  currentQuoteIndex =
    (currentQuoteIndex - 1 + gitaQuotes.length) % gitaQuotes.length;
  updateQuoteDisplay();
  resetQuoteTimer();
}

function startQuoteTimer() {
  quoteInterval = setInterval(() => {
    nextQuote();
  }, 6000);
}

function resetQuoteTimer() {
  clearInterval(quoteInterval);
  startQuoteTimer();
}

document.addEventListener("DOMContentLoaded", () => {
  startQuoteTimer();
});
