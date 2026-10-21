document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const message = document.querySelector("#message");
      if (!name.value.trim() || !email.validity.valid || !message.value.trim()) {
        alert("Please enter your name, a valid email address, and a message.");
        if (!name.value.trim()) name.focus();
        else if (!email.validity.valid) email.focus();
        else message.focus();
        return;
      }
      alert("Thank you! Your message has passed validation (demo only). ");
      contactForm.reset();
    });
  }

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? "0px" : answer.scrollHeight + "px";
      button.classList.toggle("is-open", !isOpen);
      const sign = button.querySelector("span");
      if (sign) sign.textContent = isOpen ? "+" : "−";
    });
  });

  const overlay = document.querySelector("#signup-overlay");
  const openButton = document.querySelector("#open-signup");
  const closeButton = document.querySelector("#close-signup");
  const closeModal = () => { if (overlay) { overlay.classList.remove("is-visible"); overlay.setAttribute("aria-hidden", "true"); } };
  if (openButton && overlay) openButton.addEventListener("click", () => { overlay.classList.add("is-visible"); overlay.setAttribute("aria-hidden", "false"); document.querySelector("#signup-name").focus(); });
  if (closeButton) closeButton.addEventListener("click", closeModal);
  if (overlay) {
    overlay.addEventListener("click", (event) => { if (event.target === overlay) closeModal(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });
  }
  
  const signupForm = document.querySelector("#signup-form");
  if (signupForm) signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#signup-name");
    const email = document.querySelector("#signup-email");
    const password = document.querySelector("#signup-password");
    const confirm = document.querySelector("#signup-confirm");
    const feedback = document.querySelector("#signup-feedback");
    if (!name.value.trim() || name.value.trim().length < 2) feedback.textContent = "Please enter a name with at least 2 characters.";
    else if (!email.validity.valid || !email.value.trim()) feedback.textContent = "Please enter a valid email address.";
    else if (password.value.length < 8) feedback.textContent = "Password must contain at least 8 characters.";
    else if (password.value !== confirm.value) feedback.textContent = "Passwords do not match.";
    else { feedback.textContent = "Success! The form is valid (demo only; no account is created)."; signupForm.reset(); }
  });

  const colors = ["#fffaf3", "#f0f8f6", "#f5f2ff", "#fff4f0"];
  let colorIndex = 0;
  const colorButton = document.querySelector("#change-bg");
  if (colorButton) colorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;
  });

  const clock = document.querySelector("#live-clock");
  const updateClock = () => { if (clock) clock.textContent = new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "medium" }); };
  updateClock();
  window.setInterval(updateClock, 1000);
});
