const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
  mainNav.classList.remove("is-open");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
    mainNav.classList.toggle("is-open", !isExpanded);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) closeMenu();
  });
}

const servicePrices = {
  diagnostico: { compacto: 650, suv: 850, label: "Diagnóstico electrónico" },
  electrico: { compacto: 500, suv: 650, label: "Revisión de sistema eléctrico" },
  fusibles: { compacto: 250, suv: 350, label: "Revisión de fusibles y conexiones" },
  mantenimiento: { compacto: 900, suv: 1200, label: "Mantenimiento general" },
};

const quoteForm = document.querySelector("#quote-form");
const serviceSelect = document.querySelector("#service-select");
const vehicleSelect = document.querySelector("#vehicle-select");
const estimate = document.querySelector("#estimate");
const estimateValue = document.querySelector("#estimate-value");
const estimateNote = document.querySelector("#estimate-note");

if (quoteForm && serviceSelect && vehicleSelect && estimate && estimateValue && estimateNote) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!quoteForm.reportValidity()) return;

    const service = servicePrices[serviceSelect.value];
    const price = service?.[vehicleSelect.value];

    if (!service || typeof price !== "number") {
      estimate.hidden = true;
      return;
    }

    estimateValue.textContent = `Desde $${price.toLocaleString("es-MX")} MXN`;
    estimateNote.textContent = `${service.label}. Importe de ejemplo; el costo final depende de la revisión del vehículo.`;
    estimate.hidden = false;
  });

  [serviceSelect, vehicleSelect].forEach((select) => {
    select.addEventListener("change", () => {
      estimate.hidden = true;
    });
  });

  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      const requestedService = link.dataset.service;
      if (Object.hasOwn(servicePrices, requestedService)) {
        serviceSelect.value = requestedService;
        estimate.hidden = true;
      }
    });
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();
