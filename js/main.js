function startModule(){
    window.location.href = "dashboard.html";
}

function setActiveMenu(element) {
  document.querySelectorAll(".menu-item").forEach(item => {
    item.classList.remove("active");
  });

  element.classList.add("active");
}

// LOAD DASHBOARD CONTENT (WEBSITE HIDUP)
function loadContent(section) {

  const content = document.getElementById("content");
  const homeBtn = document.querySelector(".home-btn");

  if(section === "dashboard") {
    homeBtn.style.display = "none";
  } else {
    homeBtn.style.display = "flex";
  }

  // 🔥 reset dulu setiap kali tukar menu
  content.classList.remove("simulation-mode");

  if (section === "dashboard") {
  content.innerHTML = `

  <div class="dashboard-home">

    <div class="hero-section">

      <div class="hero-left">

        <h1>Welcome to Dashboard</h1>

        <h2>Hello, Student! 👋</h2>

        <p>
          Explore interactive materials and activities designed to help
          you master the concepts of Sampling Distribution and the
          Law of Large Numbers (LLN).
        </p>

      </div>

      <div class="hero-right">
        <img src="images/dashboard.png">
      </div>

    </div>

    
    <div class="dashboard-grid">

      <div class="dashboard-card" onclick="loadContent('notes')">
        <div class="icon-box blue">
        <i class="fa-solid fa-book-open"></i>
        </div>

        <div class="card-text">
          <h3>Notes</h3>
          <p>Access structured notes and key concepts with examples.</p>
        </div>

        <div class="arrow blue">→</div>
      </div>

      <div class="dashboard-card" onclick="loadContent('videos')">
        <div class="icon-box purple">
        <i class="fa-solid fa-circle-play"></i>
        </div>

        <div class="card-text">
          <h3>Videos</h3>
          <p>Watch video lessons and explanations to build your understanding.</p>
        </div>

        <div class="arrow purple">→</div>
      </div>

      <div class="dashboard-card" onclick="loadContent('simulations')">
        <div class="icon-box green">
          <i class="fa-solid fa-sliders"></i>
        </div>

        <div class="card-text">
          <h3>Simulations</h3>
          <p>Run interactive simulations and explore concepts.</p>
        </div>

        <div class="arrow green">→</div>
      </div>

        <div class="dashboard-card" onclick="loadContent('worksheets')">
        <div class="icon-box pink">
          <i class="fa-solid fa-file-lines"></i>
        </div>

        <div class="card-text">
          <h3>Worksheets</h3>
          <p>Complete exercises and activities to strengthen key statistical concepts.</p>
        </div>

        <div class="arrow pink">→</div>
      </div>

      <div class="dashboard-card" onclick="loadContent('Quizzes')">
        <div class="icon-box yellow">
          <i class="fa-solid fa-puzzle-piece"></i>
        </div>

        <div class="card-text">
          <h3>Quizzes</h3>
          <p>Test your knowledge through quizzes.</p>
        </div>

        <div class="arrow yellow">→</div>
      </div>

    </div>

  </div>
  `;
}

if (section === "notes") {
  content.innerHTML = `
    <div class="notes-top-section">
      <div class="notes-text">
        <h2>Notes</h2>
        <p class="notes-section-description">
          Explore the slides below to review key concepts on sampling distribution and the Law of Large Numbers (LLN). Click on each title to view the slides.
        </p>
      </div>
      <img src="images/study.png" class="notes-hero-image">
    </div>

      <div class="accordion">

      <!-- Notes 1 -->
      <div class="notes-card">

    <div class="notes-card-header">

        <div class="notes-header-left">

          <div class="topic-icon blue">
            <i class="fa-solid fa-chart-pie"></i>
          </div>

          <div class="topic-info">
            <h3>Topic 1: Introduction to Sampling Distribution</h3>
            <p>📑 11 Slides</p>
          </div>
        </div>

        <div class="notes-header-right">
          <div class="slides-badge open status-text blue"
             onclick="handleNotesCard(this.parentElement.parentElement, 'notes/notes1.pdf')">
            Open
          </div>
        </div>
      </div>

      <div class="notes-content">
        <iframe src="notes/notes1.pdf" style="width:100%; height:500px; border:none;"></iframe>
        </div>
      </div>

      <!-- Notes 2 -->
      <div class="notes-card">

    <div class="notes-card-header">

        <div class="notes-header-left">

          <div class="topic-icon purple">
            <i class="fa-solid fa-chart-column"></i>
          </div>

          <div class="topic-info">
            <h3>Topic 2: Understanding Sampling Distribution</h3>
            <p>📑 8 Slides</p>
          </div>
        </div>

        <div class="notes-header-right">
          <div class="slides-badge open status-text purple"
          onclick="handleNotesCard(this.parentElement.parentElement, 'notes/notes2.pdf')">
            Open
          </div>
        </div>
      </div>

      <div class="notes-content">
        <iframe src="notes/notes2.pdf" style="width:100%; height:500px; border:none;"></iframe>
      </div>
      </div>

      <!-- Notes 3 -->
      <div class="notes-card">

    <div class="notes-card-header">

        <div class="notes-header-left">
          <div class="topic-icon green">
            <i class="fa-solid fa-arrow-trend-up"></i>
          </div>

          <div class="topic-info">
            <h3>Topic 3: Law of Large Numbers (LLN)</h3>
            <p>📑 6 Slides</p>
          </div>
        </div>

        <div class="notes-header-right">
          <div class="slides-badge open status-text green"
            onclick="handleNotesCard(this.parentElement.parentElement, 'notes/notes3.pdf')">
            Open
          </div>
        </div>
      </div>

      <div class="notes-content">
        <iframe src="notes/notes3.pdf" style="width:100%; height:500px; border:none;"></iframe>
      </div>
      </div>

      <!-- Notes 4 -->
      <div class="notes-card">

    <div class="notes-card-header">

        <div class="notes-header-left">
          <div class="topic-icon pink">
            <i class="fa-solid fa-code-compare"></i>
          </div>

          <div class="topic-info">
            <h3>Topic 4: Relationship Between LLN and Sampling Distribution</h3>
            <p>📑 6 Slides</p>
          </div>
        </div>

        <div class="notes-header-right">
          <div class="slides-badge open status-text pink"
            onclick="handleNotesCard(this.parentElement.parentElement, 'notes/notes4.pdf')">
            Open
          </div>
        </div>
      </div>

      <div class="notes-content">
        <iframe src="notes/notes4.pdf" style="width:100%; height:500px; border:none;"></iframe>
      </div>
      </div>

      <!-- Notes 5 -->
      <div class="notes-card">

    <div class="notes-card-header">

        <div class="notes-header-left">
          <div class="topic-icon yellow">
            <i class="fa-solid fa-bullseye"></i>
          </div>

          <div class="topic-info">
            <h3>Topic 5: Central Limit Theorem (CLT)</h3>
            <p>📑 6 Slides</p>
          </div>
        </div>

        <div class="notes-header-right">
          <div class="slides-badge open status-text yellow"
            onclick="handleNotesCard(this.parentElement.parentElement, 'notes/notes5.pdf')">
            Open
          </div>
        </div>
      </div>

      <div class="notes-content">
        <iframe src="notes/notes5.pdf" style="width:100%; height:500px; border:none;"></iframe>
      </div>
      </div>
      `;
  }

if (section === "videos") {
  content.innerHTML = `

    <div class="videos-hero">

      <div class="videos-hero-left">
        <h2 class="video-page-title">Videos</h2>

      <p class="video-description">
        Learn key statistical concepts through engaging video lessons on Sampling
        Distribution, the Law of Large Numbers (LLN), and the Central Limit Theorem (CLT).
      </p>

      </div>

      <img src="images/video-banner.png" class="video-banner-img">

    </div>

    <div class="videos-list">

      <!-- VIDEO 1 -->
      <div class="video-card">
        <div class="video-left">

          <div class="video-icon blue">
            <i class="fa-solid fa-circle-play"></i>
          </div>

          <div class="video-info">
            <h3>Video 1</h3>
            <p>Introduction to Sampling Distribution</p>
          </div>
        </div>

        <div class="video-right">
          <button class="watch-btn blue-btn"
            onclick="openVideo('video1.mp4','Introduction to Sampling Distribution')">
            Watch
          </button>
        </div>

      </div>

      <!-- VIDEO 2 -->
      <div class="video-card">
        <div class="video-left">

          <div class="video-icon purple">
            <i class="fa-solid fa-circle-play"></i>
          </div>

          <div class="video-info">
            <h3>Video 2</h3>
            <p>Understanding Sampling Distribution</p>
          </div>
        </div>

        <div class="video-right">
          <button class="watch-btn purple-btn"
            onclick="openVideo('video2.mp4','Understanding Sampling Distribution')">
            Watch
          </button>
        </div>

      </div>

      <!-- VIDEO 3 -->
      <div class="video-card">
        <div class="video-left">

          <div class="video-icon green">
            <i class="fa-solid fa-circle-play"></i>
          </div>

          <div class="video-info">
            <h3>Video 3</h3>
            <p>Law of Large Numbers (LLN)</p>
          </div>
        </div>

        <div class="video-right">
          <button class="watch-btn green-btn"
            onclick="openVideo('video3.mp4','Law of Large Numbers (LLN)')">
            Watch
          </button>
        </div>

      </div>

      <!-- VIDEO 4 -->
      <div class="video-card">
        <div class="video-left">

          <div class="video-icon pink">
            <i class="fa-solid fa-circle-play"></i>
          </div>

          <div class="video-info">
            <h3>Video 4</h3>
            <p>Relationship Between LLN and Sampling Distribution</p>
          </div>

        </div>

        <div class="video-right">
          <button class="watch-btn pink-btn"
            onclick="openVideo('video4.mp4','Relationship Between LLN and Sampling Distribution')">
            Watch
          </button>
        </div>

      </div>

      <!-- VIDEO 5 -->
      <div class="video-card">
        <div class="video-left">

          <div class="video-icon yellow">
            <i class="fa-solid fa-circle-play"></i>
          </div>

          <div class="video-info">
            <h3>Video 5</h3>
            <p>Central Limit Theorem (CLT)</p>
          </div>
        </div>

        <div class="video-right">
          <button class="watch-btn yellow-btn"
            onclick="openVideo('video5.mp4','Central Limit Theorem (CLT)')">
            Watch
          </button>
        </div>
      </div>
    </div>
  `;
}

if (section === "simulations") {

content.innerHTML = `

<div class="simulation-page">

    <div class="simulation-header">

        <h1>Interactive Simulations</h1>

        <p>
            Choose a simulation to explore statistical concepts interactively.
        </p>

        <div class="title-line"></div>

    </div>

    <div class="simulation-grid">

        <!-- Sampling Replacement -->

        <div class="simulation-card-option">

            <div class="preview-wrapper">

                <img src="images/replacement-preview.png"
                     class="simulation-preview">

                <div class="interactive-badge">
                    ⚡ Interactive
                </div>

            </div>

            <div class="simulation-content">

                <div class="simulation-icon">
                    🎲
                </div>

                <div>
                <div class="simulation-wording">

                    <h3>Sampling Replacement</h3>

                    <p>
                        Explore sampling with and without replacement
                        and compare the results.
                    </p>
                </div>
                </div>

            </div>

            <div class="simulation-features">

                <span>
                    <i class="fa-solid fa-check"></i>
                    With & Without Replacement
                </span>

                <span>
                    <i class="fa-solid fa-check"></i>
                    Real-time Sampling Results
                </span>

                <span>
                    <i class="fa-solid fa-check"></i>
                    Visual Comparison
                </span>
            </div>

            <button class="launch-btn green-launch-btn"
                    onclick="event.stopPropagation(); loadContent('replacement')">

                Launch Simulation

                <span>➜</span>

            </button>

        </div>


        <!-- LLN -->

        <div class="simulation-card-option">
        
            <div class="preview-wrapper">

                <img src="images/lln-preview.PNG"
                     class="simulation-preview">

                <div class="interactive-badge blue">
                    ⚡ Interactive
                </div>

            </div>

            <div class="simulation-content">

                <div class="simulation-icon blue-icon">
                    📈
                </div>

                <div>
                <div class="simulation-wording">
                    <h3>LLN Simulator</h3>

                    <p>
                        Explore the Law of Large Numbers and observe
                        how sample mean stabilizes.
                    </p>
                </div>
                </div>

            </div>

            <div class="simulation-features">

                <span>
                    <i class="fa-solid fa-check check-blue"></i>
                    Dynamic Graph
                </span>

                <span>
                    <i class="fa-solid fa-check check-blue"></i>
                    Adjustable Sample Size
                </span>

                <span>
                    <i class="fa-solid fa-check check-blue"></i>
                    Multiple Distributions
                </span>
                
                <span>
                    <i class="fa-solid fa-check check-blue"></i>
                    Real-time Visualization
                </span>                

            </div>

            <button class="launch-btn blue-launch-btn"
                    onclick="event.stopPropagation(); loadContent('LLN')">

                Launch Simulation

                <span>➜</span>

            </button>

        </div>

    </div>

</div>

`;
}

else if (section === "replacement") {

   content.classList.add("simulation-mode");

   content.innerHTML = `
      <iframe
      src="simulations/replacement/index.html"
      style="width:100%;height:100%;border:none;">
      </iframe>
   `;
}
else if (section === "LLN") {

   content.classList.add("simulation-mode");

   content.innerHTML = `
      <iframe
      src="simulations/index.html"
      style="width:100%;height:100%;border:none;">
      </iframe>
   `;
}

if (section === "worksheets") {
  content.innerHTML = `

    <div class="notes-top-section">

      <div class="notes-text">

        <h2>Worksheets</h2>

        <p class="notes-section-description">
          Explore the worksheets below to strengthen your understanding of sampling distribution and the Law of Large Numbers (LLN). Click on each worksheet to view it.
        </p>

      </div>

      <img src="images/worksheet.png" class="worksheet-hero-image">
    </div>


    <div class="worksheet-grid">

      <!-- WORKSHEET 1 -->
      <div class="worksheet-card">

      <div class="worksheet-card-header">

          <div class="worksheet-header-left">

            <div class="worksheet-icon blue">
              <i class='bx bxs-file'></i>
            </div>

            <div class="worksheet-left">
              <h3>Worksheet 1</h3>
              <p>Introduction to Sampling Distribution</p>
            </div>

          </div>

          <div class="worksheet-header-right">

            <div class="worksheet-badge open status-text blue-btn"
              onclick="window.open('worksheets/worksheet1.pdf', '_blank')">
              Open
            </div>
          </div>
        </div>
      </div>


      <!-- WORKSHEET 2 -->
      <div class="worksheet-card">

      <div class="worksheet-card-header">

          <div class="worksheet-header-left">

            <div class="worksheet-icon purple">
              <i class='bx bxs-file'></i>
            </div>

            <div class="worksheet-left">
              <h3>Worksheet 2</h3>
              <p>Understanding Sampling Distribution</p>
            </div>

          </div>

          <div class="worksheet-header-right">

            <div class="worksheet-badge open status-text purple-btn"
              onclick="window.open('worksheets/worksheet2.pdf', '_blank')">
              Open
            </div>
          </div>
        </div>
      </div>


      <!-- WORKSHEET 3 -->
      <div class="worksheet-card">

      <div class="worksheet-card-header">

          <div class="worksheet-header-left">

            <div class="worksheet-icon green">
              <i class='bx bxs-file'></i>
            </div>

            <div class="worksheet-left">
              <h3>Worksheet 3</h3>
              <p>Law of Large Numbers (LLN)</p>
            </div>

          </div>

          <div class="worksheet-header-right">

            <div class="worksheet-badge open status-text green-btn"
              onclick="window.open('worksheets/worksheet3.pdf', '_blank')">
              Open
            </div>
          </div>
        </div>
      </div>


      <!-- WORKSHEET 4 -->
      <div class="worksheet-card">

      <div class="worksheet-card-header">

          <div class="worksheet-header-left">

            <div class="worksheet-icon pink">
              <i class='bx bxs-file'></i>
            </div>

            <div class="worksheet-left">
              <h3>Worksheet 4</h3>
              <p>Relationship Between LLN and Sampling Distribution</p>
            </div>

          </div>

          <div class="worksheet-header-right">

            <div class="worksheet-badge open status-text pink-btn"
              onclick="window.open('worksheets/worksheet4.pdf', '_blank')">
              Open
            </div>
          </div>
        </div>
      </div>


      <!-- WORKSHEET 5 -->
      <div class="worksheet-card">

      <div class="worksheet-card-header">

          <div class="worksheet-header-left">

            <div class="worksheet-icon yellow">
              <i class='bx bxs-file'></i>
            </div>

            <div class="worksheet-left">
              <h3>Worksheet 5</h3>
              <p>Central Limit Theorem (CLT)</p>
            </div>

          </div>

          <div class="worksheet-header-right">

            <div class="worksheet-badge open status-text yellow-btn"
              onclick="window.open('worksheets/worksheet5.pdf', '_blank')">
              Open
            </div>
          </div>
        </div>
      </div>
    </div>

  `;
}

if (section === "Quizzes") {
content.innerHTML = `
<div class="quiz-top-section">

  <div class="quiz-text-section">
    <h2 class="quiz-title">Quizzes</h2>

    <p class="quiz-section-description">
      Complete the quizzes below to assess your understanding of sampling distribution and improve your statistics skills.    </p>
  </div>

<div class="quiz-banner-wrapper">
  <img src="images/quiz-banner.png" class="quiz-banner">
</div>
</div>

<div class="quiz-grid">

      <div class="quiz-dashboard-card full-width">
      <div class="quiz-icon green">
        <i class="fa-regular fa-lightbulb"></i>      
      </div>

      <div class="quiz-text">
        <h3>Quiz 1</h3>
        <p>Introduction to Sampling Distribution</p>
      </div>

      <div class="quiz-status green-btn"
        onclick="window.open('https://wayground.com/join?gc=39518778', '_blank')">
        Start 
      </div>
    </div>

      <div class="quiz-dashboard-card full-width">
      <div class="quiz-icon purple">
        <i class="fa-regular fa-lightbulb"></i>
      </div>

      <div class="quiz-text">
        <h3>Quiz 2</h3>
        <p>Understanding Sampling Distribution</p>
      </div>

      <div class="quiz-status purple-btn"
        onclick="window.open('https://wayground.com/join?gc=42846985', '_blank')">
        Start 
      </div>
    </div>

      <div class="quiz-dashboard-card">
      <div class="quiz-icon blue">
        <i class="fa-regular fa-lightbulb"></i>
      </div>

      <div class="quiz-text">
        <h3>Quiz 3</h3>
        <p>Law of Large Numbers (LLN)</p>
      </div>

      <div class="quiz-status blue-btn"
        onclick="window.open('https://wayground.com/join?gc=43895561', '_blank')">
        Start 
      </div>
    </div>

      <div class="quiz-dashboard-card">
      <div class="quiz-icon pink">
        <i class="fa-regular fa-lightbulb"></i>
      </div>

      <div class="quiz-text">
        <h3>Quiz 4</h3>
        <p>Relationship Between LLN and Sampling Distribution</p>
      </div>

      <div class="quiz-status pink-btn"
        onclick="window.open('https://wayground.com/join?gc=37997321', '_blank')">
        Start 
      </div>
    </div>

      <div class="quiz-dashboard-card">
      <div class="quiz-icon yellow">
        <i class="fa-regular fa-lightbulb"></i>
      </div>

      <div class="quiz-text">
        <h3>Quiz 5</h3>
        <p>Central Limit Theorem (CLT)</p>
      </div>

      <div class="quiz-status yellow-btn"
        onclick="window.open('https://wayground.com/join?gc=18074377', '_blank')">
        Start 
      </div>
    </div>
  `;
}
}

function handleNotesCard(element, pdfPath){

    // TABLET AND PHONE ONLY
    if(window.innerWidth < 1190){

        window.open(pdfPath, "_blank");
        return;
    }

    // LAPTOP
    toggleCard(element);
}

function openVideo(file,title) {
  const content = document.getElementById("content");

  content.innerHTML = `

    <h2 class="video-title">${title}</h2>

    <div class="video-container">
      <video controls>
        <source src="videos/${file}" type="video/mp4">
      </video>
    </div>

    <div class= "back-btn-wrapper">
    <div class="back-btn" onclick="loadContent('videos')">
      Back to Videos
    </div>
    </div>
  `;
}

function toggleVideo(id) {
  const content = document.getElementById(id);
  const card = content.previousElementSibling;

  // Tutup semua video-content lain
  document.querySelectorAll('.video-content').forEach(vc => {
    if(vc !== content) {
      vc.classList.remove('open');
      vc.previousElementSibling.classList.remove('active');
    }
  });

  // Toggle current
  if(content.classList.contains('open')) {
    content.classList.remove('open');
    card.classList.remove('active');
  } else {
    content.classList.add('open');
    card.classList.add('active');
  }
}

function toggleCard(header) {

  const card = header.parentElement;

  const content = card.querySelector('.notes-content');

  const badge = card.querySelector(".status-text");

  // tutup semua card lain
  document.querySelectorAll('.accordion .notes-card').forEach(c => {

    if (c !== card) {

      c.classList.remove('active');

      const otherContent = c.querySelector('.notes-content');

      if(otherContent){
        otherContent.style.maxHeight = "0px";
      }

      const otherBadge = c.querySelector(".status-text");

      if(otherBadge){

        otherBadge.textContent = "Open";

        otherBadge.classList.remove("close");

        otherBadge.classList.add("open");
      }
    }
  });

  // kalau dah active → tutup
  if(card.classList.contains("active")){

    card.classList.remove("active");

    content.style.maxHeight = "0px";

    badge.textContent = "Open";

    badge.classList.remove("close");

    badge.classList.add("open");

  } else {

    // buka current
    card.classList.add("active");

    content.style.maxHeight = content.scrollHeight + "px";

    badge.textContent = "Close";

    badge.classList.remove("open");

    badge.classList.add("close");
  }
}

function setupAutoCloseSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const toggleBtn = document.querySelector(".toggle-btn");

  // Klik toggle button
  console.log(toggleBtn); // confirm element wujud
  toggleBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("open") || sidebar.classList.contains("collapsed")) {
    sidebar.classList.toggle("open");
    sidebar.classList.toggle("collapsed");
  } else {
    sidebar.classList.add("open"); // default open
  }

  // overlay only for small screens
  if (window.innerWidth <= 992) {
    overlay.classList.toggle("active");
  }
});

  // Klik overlay -> tutup sidebar
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });

  // 🔥 FIXED: auto close bila klik menu (MUST BE HERE)
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      if(window.innerWidth <= 992){
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
      }
    });
  });
}

window.addEventListener("resize", () => {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (window.innerWidth > 992) {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");

  } 
});

document.addEventListener("DOMContentLoaded", setupAutoCloseSidebar);

window.addEventListener("DOMContentLoaded", () => {
  loadContent("dashboard");
});

document.addEventListener("DOMContentLoaded", () => {

const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

/* FOR TABLET */
if(window.innerWidth <= 1440){

    sidebar.classList.add("collapsed");

}

content.addEventListener("click", () => {

    if(
        window.innerWidth <= 1190 &&
        !sidebar.classList.contains("collapsed")
    ){

        sidebar.classList.add("collapsed");

    }
})
})

function toggleSimulationMenu(){

    const submenu =
        document.getElementById("simulationSubmenu");

    const simulationMenu =
        document.getElementById("simulationMenu");

    submenu.classList.toggle("show");

    simulationMenu.classList.toggle("active");

    loadContent("simulations");
}

function setActiveMenu(element) {

    // reset menu utama
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });

    // reset submenu sekali
    document.querySelectorAll(".submenu-item").forEach(item => {
        item.classList.remove("active");
    });

    // tutup submenu simulations
    document.getElementById("simulationSubmenu")
            .classList.remove("show");

    element.classList.add("active");
}

function setActiveSubmenu(element){

    document.querySelectorAll(".submenu-item").forEach(item => {
        item.classList.remove("active");
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });

    element.classList.add("active");

    document.querySelector(".menu-item:nth-of-type(3)")
        .classList.add("active");
}

window.addEventListener("message", (event) => {

    if(event.data !== "simulationClicked") return;

    const sidebar = document.getElementById("sidebar");

    if(
        window.innerWidth <= 1190 &&
        !sidebar.classList.contains("collapsed")
    ){
        sidebar.classList.add("collapsed");
    }

});