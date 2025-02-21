const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      const hangUpButton = document.querySelector('button[aria-label="Leave call"]');
      if (hangUpButton) {
        hangUpButton.remove();
        observer.disconnect(); // Stop observing after the button is removed
      }
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });
