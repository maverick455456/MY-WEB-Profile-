'use client';

export default function Page() {
  return (
    <main className="container">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">MR NIPUN OFC / TECH-WEB</div>
          <nav className="menu">
            <button className="btn btn-primary">Home</button>
            <button className="btn">About</button>
            <button className="btn">Projects</button>
            <button className="btn">Skills</button>
            <button className="btn">Social</button>
            <button className="btn">Contact</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <h1>MR NIPUN OFC / TECH-WEB</h1>
        <p>Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
      </section>

      <section className="section">
        <h2 className="section-title">Personal Information</h2>
        <p><strong>Name:</strong> H.M. NIPUN DHANUJAYA</p>
        <p><strong>Age:</strong> 18</p>
        <p><strong>From:</strong> Sri Lanka</p>
        <p><strong>Contact:</strong> <a href="https://wa.me/+94757255903" style={{color:'#e63946',textDecoration:'none'}}>+94 75 725 5903</a></p>
      </section>

      <section className="section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {[
            ['fab fa-java','Java','Backend Development'],
            ['fab fa-python','Python','Scripting & Automation'],
            ['fas fa-server','Web Server','Server Management'],
            ['fas fa-microchip','Arduino Micro Devices','IoT Development'],
            ['fab fa-html5','HTML/CSS','Frontend Development'],
            ['fab fa-react','NextJS','React Framework'],
            ['fas fa-camera','Photography','Creative Photography'],
            ['fas fa-film','Animation','Motion Graphics'],
            ['fas fa-palette','Logo Design','Brand Identity'],
          ].map(([icon, title, sub]) => (
            <div key={title as string} className="skill-card">
              <i className={icon as string} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{sub}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{textAlign:'center',padding:'24px 0',borderTop:'1px solid rgba(255,255,255,.18)'}}>
        © {new Date().getFullYear()} MR NIPUN OFC / TECH-WEB. All Rights Reserved.
      </footer>
    </main>
  );
}
