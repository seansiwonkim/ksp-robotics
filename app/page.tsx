import RobotArm from "@/components/RobotArm";

const solutions = [
  { name: "Warehouse automation", text: "Autonomous mobile robots and picking cells that move stock from dock to shipping without added headcount." },
  { name: "Manufacturing cells", text: "Collaborative arms for welding, assembly and machine tending, fitted around your existing line." },
  { name: "Inspection and testing", text: "Vision-guided systems that check every part and log the result, so quality data is complete." },
  { name: "Lab and research", text: "Repeatable liquid handling and sample logistics, built to your protocols and validated before handover." },
];

const steps = [
  { name: "Assess", text: "We walk your site, time the current process and agree a target cycle time and budget." },
  { name: "Prototype", text: "A working cell on our test floor, run with your parts, before anything ships." },
  { name: "Install", text: "On-site integration scheduled around your shifts, with operator training included." },
  { name: "Support", text: "Remote monitoring, spare parts and a named engineer for the life of the system." },
];

export default function Home() {
  return (
    <>
      <header className="bar">
        <a href="#top" className="logo">KSP Robotics</a>
        <nav aria-label="Primary">
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#contact" className="btn">Talk to an engineer</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div>
            <h1>Automation that your team can run, fix and trust.</h1>
            <p className="lead">
              KSP Robotics designs, builds and maintains robotic systems for warehouses, factories and labs.
              One team from first site visit to year-ten service.
            </p>
            <div className="actions">
              <a href="#contact" className="btn">Request a site assessment</a>
              <a href="#solutions" className="link">See what we build</a>
            </div>
          </div>
          <RobotArm />
        </section>

        <section id="solutions" className="section">
          <h2>What we build</h2>
          <ul className="rows">
            {solutions.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="process" className="section">
          <h2>How a project runs</h2>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section contact">
          <h2>Tell us what you want to automate.</h2>
          <p className="lead">Send a short description. An engineer replies within two working days.</p>
          <a href="mailto:hello@ksprobotics.example" className="btn">hello@ksprobotics.example</a>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} KSP Robotics</span>
        <span>Placeholder copy: replace with your details.</span>
      </footer>
    </>
  );
}
