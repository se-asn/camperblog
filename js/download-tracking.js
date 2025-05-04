document.addEventListener("DOMContentLoaded", function () {
  // Find all download links
  const downloadLinks = document.querySelectorAll("a[download]");

  // Add click event listeners to track downloads
  downloadLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Get download filename from the href attribute
      const downloadPath = link.getAttribute("href");
      const fileName = downloadPath.split("/").pop();

      // Get the page URL to track download source
      const pageURL = window.location.pathname;
      const pageName = pageURL.split("/").pop() || "homepage";

      // Track with Google Analytics
      if (typeof gtag === "function") {
        gtag("event", "download", {
          event_category: "Downloads",
          event_label: fileName,
          event_source: pageName,
          value: 1,
          send_to: "G-9HHXJ9XTX9", // Ersetzen Sie dies mit Ihrer tatsächlichen Google Analytics ID
        });
      }

      // Track with Cloudflare Analytics if available
      if (typeof _cf_analytics !== "undefined") {
        _cf_analytics.trackEvent("download", {
          category: "Downloads",
          action: "PDF Download",
          label: fileName,
        });
      }

      // Log to console for testing
      console.log(`Download erfasst: ${fileName} von Seite ${pageName}`);

      // Show thank you message with delay
      setTimeout(() => {
        alert(
          "Danke für den Download! Wir wünschen dir einen wunderbaren Campingurlaub mit deinem Vierbeiner!"
        );
      }, 1000);
    });
  });
});
