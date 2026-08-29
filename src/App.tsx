import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  FileText,
  Github,
  GraduationCap,
  House,
  Link2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  UserRound,
  X,
} from 'lucide-react';
import { type FormEvent, useState } from 'react';

type Project = {
  title: string;
  url: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  { title: 'Imtihon Figma', url: 'https://maryam12-dev.github.io/imtihon-figma/', image: '/images/image.png', description: 'Figma design turned into a responsive website.' },
  { title: 'Countrice', url: 'https://maryam12-dev.github.io/countrice/', image: '/images/image copy.png', description: 'Clean country discovery interface.' },
  { title: 'Trafalgar', url: 'https://maryam12-dev.github.io/trafalgar/', image: '/images/image copy 2.png', description: 'Modern landing page for a digital product.' },
  { title: 'Coffee Figma', url: 'https://maryam12-dev.github.io/coffe-figma/', image: '/images/image copy 3.png', description: 'Warm and welcoming coffee shop layout.' },
  { title: 'Market Place', url: 'https://maryam12-dev.github.io/market-plece/', image: '/images/image copy 4.png', description: 'A product-focused marketplace concept.' },
  { title: 'Pokémon', url: 'https://maryam12-dev.github.io/pokemon/', image: '/images/image copy.png', description: 'Interactive Pokémon project built with JavaScript.' },
  { title: 'Animals', url: 'https://maryam12-dev.github.io/animals/', image: '/images/image copy 2.png', description: 'A friendly animal showcase page.' },
  { title: 'Massage Text', url: 'https://maryam12-dev.github.io/massage_text/', image: '/images/image copy 3.png', description: 'Small utility project with a playful interface.' },
  { title: 'Colors', url: 'https://maryam12-dev.github.io/colors/', image: '/images/image copy 4.png', description: 'A colorful experiment for exploring palettes.' },
];

const skills = [
  { name: 'HTML', value: 20 },
  { name: 'CSS', value: 20 },
  { name: 'JavaScript', value: 20 },
  { name: 'React', value: 20 },
];

type ContactStatus = 'idle' | 'sending' | 'success' | 'error';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<ContactStatus>('idle');

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus('sending');

    const formData = new FormData(event.currentTarget);
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        phone: formData.get('phone'),
        message: formData.get('message'),
      }),
    });

    setContactStatus(response.ok ? 'success' : 'error');
    if (response.ok) event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
          <X size={22} />
        </button>
        <div className="profile-block">
          <div className="profile-mark">S</div>
          <h1>Shabnam Kadirova</h1>
          <p>Frontend developer</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/maryam12-dev" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://t.me/Shabnam2012" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18} /></a>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}><House size={19} />Home</a>
          <a href="#about" onClick={closeMenu}><UserRound size={19} />About</a>
          <a href="#resume" onClick={closeMenu}><FileText size={19} />Resume</a>
          <a href="#portfolio" onClick={closeMenu}><BriefcaseBusiness size={19} />Portfolio</a>
          <a href="#skills" onClick={closeMenu}><Code2 size={19} />Skills</a>
          <a href="#contact" onClick={closeMenu}><Mail size={19} />Contact</a>
        </nav>
        <div className="sidebar-footer">© 2026 Shabnam</div>
      </header>

      <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
      {menuOpen && <button className="menu-backdrop" onClick={closeMenu} aria-label="Close navigation" />}

      <main className="content">
        <section id="home" className="hero section-padding">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
            <h2>Hi, I’m <span>Shabnam.</span></h2>
            <p className="hero-role">I’m a <strong>Frontend Developer</strong></p>
            <p className="hero-copy">I create simple, thoughtful and responsive websites with clean code and a strong eye for detail.</p>
            <a className="button button-primary" href="#portfolio">View my work <ArrowUpRight size={17} /></a>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <section id="about" className="section section-padding">
          <div className="section-heading"><p className="eyebrow">GET TO KNOW ME</p><h2>About me</h2><span className="heading-line" /></div>
          <div className="about-grid">
            <div className="about-intro">
              <div className="about-avatar">SK</div>
              <h3>Informatics teacher &amp; web developer.</h3>
              <p>I’m Shabnam, a starter frontend developer from Tashkent region. I enjoy turning ideas and designs into clear, useful web pages.</p>
              <a className="text-link" href="https://github.com/maryam12-dev" target="_blank" rel="noreferrer">See my GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="details-card">
              <div className="detail-row"><span><CalendarDays size={18} />Birthday</span><strong>14 July 2012</strong></div>
              <div className="detail-row"><span><Github size={18} />Website</span><a href="https://github.com/maryam12-dev" target="_blank" rel="noreferrer">GitHub</a></div>
              <div className="detail-row"><span><Phone size={18} />Phone</span><strong>+998 99 796 4007</strong></div>
              <div className="detail-row"><span><MapPin size={18} />City</span><strong>Tashkent region, Uzbekistan</strong></div>
              <div className="detail-row"><span><GraduationCap size={18} />Degree</span><strong>Starter</strong></div>
              <div className="detail-row"><span><Mail size={18} />Email</span><strong>qodirovarobiya588@gmail.com</strong></div>
              <div className="detail-row"><span><CheckCircle2 size={18} />Freelance</span><strong className="available">Available</strong></div>
              <div className="detail-row"><span><UserRound size={18} />Age</span><strong>14</strong></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted section-padding">
          <div className="section-heading"><p className="eyebrow">WHAT I WORK WITH</p><h2>My skills</h2><span className="heading-line" /></div>
          <p className="section-lead">I’m learning every day and building a strong foundation in modern frontend development.</p>
          <div className="skills-grid">
            {skills.map((skill) => <div className="skill" key={skill.name}><div className="skill-label"><span>{skill.name}</span><strong>{skill.value}%</strong></div><div className="progress"><span style={{ width: `${skill.value}%` }} /></div></div>)}
          </div>
        </section>

        <section id="resume" className="section section-padding">
          <div className="section-heading"><p className="eyebrow">MY JOURNEY</p><h2>Resume</h2><span className="heading-line" /></div>
          <p className="section-lead">A short overview of my learning path and the direction I’m building toward.</p>
          <div className="resume-grid">
            <div className="timeline-card"><div className="timeline-dot" /><p className="timeline-date">2024 — Present</p><h3>Informatics teacher</h3><p>Learning the fundamentals of technology and sharing my curiosity about computers and digital tools.</p></div>
            <div className="timeline-card"><div className="timeline-dot" /><p className="timeline-date">2025 — Present</p><h3>Frontend developer</h3><p>Practicing HTML, CSS, JavaScript and React through personal projects and design-based challenges.</p></div>
          </div>
        </section>

        <section id="portfolio" className="section section-muted section-padding">
          <div className="section-heading"><p className="eyebrow">SELECTED WORK</p><h2>Portfolio</h2><span className="heading-line" /></div>
          <p className="section-lead">Here are some of the projects I have created so far. Click a project to open it in a new browser tab.</p>
          <div className="portfolio-grid">
            {projects.map((project) => <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><div className="project-overlay"><span><Link2 size={22} /></span></div></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><ArrowUpRight size={19} /></div></a>)}
          </div>
        </section>

        <section id="contact" className="section contact-section section-padding">
          <div className="section-heading"><p className="eyebrow">LET’S TALK</p><h2>Contact me</h2><span className="heading-line" /></div>
          <div className="contact-grid">
            <div className="contact-copy">
              <h3>Have a project in mind?</h3>
              <p>Send me a message and I will get back to you as soon as possible.</p>
              <div className="contact-details">
                <a href="mailto:qodirovarobiya588@gmail.com"><Mail size={19} /><span>qodirovarobiya588@gmail.com</span></a>
                <a href="tel:+998997964007"><Phone size={19} /><span>+998 99 796 4007</span></a>
                <a href="https://t.me/Shabnam2012" target="_blank" rel="noreferrer"><Send size={19} /><span>Telegram</span></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-row"><label>Your name<input name="name" type="text" placeholder="Your name" minLength={2} maxLength={80} required /></label><label>Your number<input name="phone" type="tel" placeholder="+998 90 000 00 00" maxLength={30} required /></label></div>
              <label>Your message<textarea name="message" placeholder="Write your message..." minLength={5} maxLength={1000} required /></label>
              <button className="button button-primary" type="submit" disabled={contactStatus === 'sending'}>{contactStatus === 'sending' ? 'Sending...' : 'Send message'} <Send size={16} /></button>
              {contactStatus === 'success' && <p className="form-feedback success-message">Your message was sent successfully.</p>}
              {contactStatus === 'error' && <p className="form-feedback error-message">Message could not be sent right now. Please try Telegram directly.</p>}
            </form>
          </div>
        </section>

        <footer className="footer"><div><strong>Shabnam Kadirova</strong><span>Building my skills, one project at a time.</span></div><div className="footer-social"><a href="https://github.com/maryam12-dev" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://t.me/Shabnam2012" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18} /></a></div></footer>
      </main>
    </div>
  );
}

export default App;
