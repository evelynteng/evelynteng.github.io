if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to update view count for clicked links
  function trackClicks(event) {
      let link = event.target.closest("a");
      if (!link || !link.href.includes(window.location.origin)) return;

      let page = new URL(link.href).pathname;
      let views = JSON.parse(localStorage.getItem("pageViews")) || {};
      
      // Increment view count
      views[page] = (views[page] || 0) + 1;
      localStorage.setItem("pageViews", JSON.stringify(views));
  }

  // Attach click event to all internal links
  document.querySelectorAll("a[href]").forEach(link => {
      if (link.href.includes(window.location.origin)) {
          link.addEventListener("click", trackClicks);
      }
  });

  // Function to display view counts on project pages
  function displayViewCount() {
      let page = window.location.pathname;
      let views = JSON.parse(localStorage.getItem("pageViews")) || {};
      let count = views[page] || 0;

      let counterDiv = document.createElement("div");
      counterDiv.innerHTML = `<p style="font-size: 14px; color: gray;">Views: ${count}</p>`;
      counterDiv.style.marginTop = "10px";

      let container = document.getElementById("main-content") || document.body;
      container.appendChild(counterDiv);
  }

  displayViewCount();
});

