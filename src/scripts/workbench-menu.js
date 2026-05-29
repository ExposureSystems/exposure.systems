const menuButton = document.querySelector("[data-workbench-menu]");
const closeButton = document.querySelector("[data-workbench-close]");
const drawer = document.querySelector("[data-workbench-drawer]");
const backdrop = document.querySelector("[data-workbench-backdrop]");

function setWorkbenchDrawerOpen(isOpen) {
  if (!menuButton || !drawer || !backdrop) return;

  menuButton.setAttribute("aria-expanded", String(isOpen));
  drawer.setAttribute("aria-hidden", String(!isOpen));
  backdrop.hidden = !isOpen;
  document.documentElement.classList.toggle("wb-drawer-open", isOpen);
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setWorkbenchDrawerOpen(!isOpen);
});

closeButton?.addEventListener("click", () => {
  setWorkbenchDrawerOpen(false);
});

backdrop?.addEventListener("click", () => {
  setWorkbenchDrawerOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setWorkbenchDrawerOpen(false);
  }
});
