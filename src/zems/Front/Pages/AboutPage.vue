<template>
  <section class="about">
    <!-- Our Journey -->
    <div class="journey section">
      <h2 class="section-title">Our Journey</h2>
      <ul class="timeline">
        <li><span>2018</span> – Founded with a small but passionate team.</li>
        <li><span>2020</span> – Expanded into mobile app and cloud solutions.</li>
        <li><span>2022</span> – Partnered with international clients.</li>
        <li><span>Today</span> – Delivering innovation worldwide.</li>
      </ul>
    </div>

    <!-- Meet Our Team & Culture -->
    <div class="team section">
      <h2 class="section-title">Meet Our Team & Culture</h2>
      <p class="intro">
        Behind every successful project is a team that truly cares.
      </p>
      <div class="culture-grid">
        <div class="culture-card">
          <h3>🤝 Collaboration</h3>
          <p>The best ideas are born when great minds work together.</p>
        </div>
        <div class="culture-card">
          <h3>📈 Growth</h3>
          <p>Continuous learning and improvement drive us forward.</p>
        </div>
        <div class="culture-card">
          <h3>🔒 Trust</h3>
          <p>Transparency and reliability are at the heart of our work.</p>
        </div>
      </div>
    </div>

    <!-- Mission & Vision -->
    <div class="mission section">
      <h2 class="section-title">Mission & Vision</h2>
      <div class="mission-box">
        <h3>Our Mission</h3>
        <p>
          To empower businesses with reliable, scalable, and future-ready software that drives growth and innovation.
        </p>
      </div>
      <div class="mission-box">
        <h3>Our Vision</h3>
        <p>
          To become a global leader in digital solutions, helping industries transform through technology.
        </p>
      </div>

      <div class="values">
        <h3>Core Values</h3>
        <ul>
          <li>💡 Innovation – Always seeking smarter solutions.</li>
          <li>🏆 Excellence – Delivering quality beyond expectations.</li>
          <li>🤝 Integrity – Building trust through transparency.</li>
          <li>🚀 Customer Success – Your growth is our success.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static About page, unless you want dynamic data later
</script>

<style scoped>
.about {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1rem;
  line-height: 1.6;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Section Styling */
.section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.section-title::after {
  content: "";
  width: 50px;
  height: 3px;
  background: #4f46e5; /* Indigo accent */
  position: absolute;
  bottom: -8px;
  left: 0;
  border-radius: 2px;
}

/* Timeline */
.timeline {
  list-style: none;
  padding-left: 1rem;
  border-left: 3px solid #4f46e5;
}

.timeline li {
  margin: 1.5rem 0;
  padding-left: 1rem;
  position: relative;
}

.timeline li span {
  font-weight: bold;
  color: #4f46e5;
}

/* Culture Grid */
.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.culture-card {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.culture-card:hover {
  transform: translateY(-5px);
}

/* Mission & Vision */
.mission-box {
  background: #eef2ff;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
}

.values ul {
  margin-top: 1rem;
  padding-left: 1.2rem;
}

.values li {
  margin: 0.5rem 0;
}
</style>
