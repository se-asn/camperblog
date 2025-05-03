document.addEventListener("DOMContentLoaded", function () {
  // Find all download links
  const downloadLinks = document.querySelectorAll("a[download]");

  // Add click event listeners to track downloads
  downloadLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // If you have Google Analytics or another analytics tool
      if (typeof gtag === "function") {
        gtag("event", "download", {
          event_category: "Downloads",
          event_label: "Checkliste Camping mit Hund",
          value: 1,
        });
      }

      // You could also log to console for testing
      console.log("Checkliste downloaded!");

      // Optional: Show a thank you message or popup
      setTimeout(() => {
        alert(
          "Danke für den Download! Wir wünschen dir einen wunderbaren Campingurlaub mit deinem Vierbeiner!"
        );
      }, 1000);
    });
  });
});
