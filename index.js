/* ==========================================================================
   Parmeet Kumar Portfolio — JavaScript Interactions
   ========================================================================== */

// Mobile Navigation Toggle
const mobileToggle = document.getElementById("mobile-toggle");
const navMenu = document.getElementById("nav-menu");

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Close mobile nav when clicking any nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

// Active Nav Link Spy on Scroll
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav a[href*="${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
});

// One-Click Email Copy to Clipboard with Toast Notification
function copyEmailToClipboard(email) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Email copied to clipboard: ${email}`);
    }).catch(() => {
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
    showToast(`Email copied to clipboard: ${text}`);
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

// Gita Quote Rotator
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

// Contact Form Submission via EmailJS
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

  // Visual loading feedback
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
      .then(function (response) {
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
