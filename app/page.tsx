import Image from "next/image";
import HeroScroll from "@/components/HeroScroll";
import team from "@/public/team.jpg";

const software = [
  { name: "Data analysis", text: "Every metre of pipe is logged with position, slope, flow and pipe condition, then searchable by street, asset or date." },
  { name: "Image processing", text: "Footage is stitched into an unrolled view of the pipe wall, so inspectors review one image instead of hours of video." },
  { name: "Deterioration detection", text: "Machine learning flags cracks, corrosion, root intrusion and joint displacement, and ranks each by severity for your repair plan." },
];

const parts = [
  { name: "Camera head", text: "A wide-angle camera with its own lighting records the full pipe wall." },
  { name: "Sensor module", text: "Sonar and laser profiling measure pipe shape and water depth." },
  { name: "Sealed body", text: "A watertight housing keeps the electronics dry in water and sewage." },
  { name: "Control board", text: "Onboard compute tags footage with position as it is captured." },
  { name: "Drive tracks", text: "Tracks grip wet pipe floors and carry the crawler over debris." },
  { name: "Tether", text: "Carries power and data between the crawler and the surface." },
];

const steps = [
  { name: "Deploy", text: "Lower the crawler through a manhole. It drives the pipe on its own, tethered for power and data." },
  { name: "Capture", text: "Cameras and sensors record the full pipe wall as it moves." },
  { name: "Analyse", text: "Our software processes the data and flags defects, ranked by severity." },
  { name: "Report", text: "Export a condition report your team can use for repair and replacement planning." },
];

export default function Home() {
  return (
    <>
      <header className="bar">
        <a href="#top" className="logo">Ksp Solutions</a>
        <nav aria-label="Primary">
          <a href="#product">Product</a>
          <a href="#software">Software</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn">Contact us</a>
        </nav>
      </header>

      <main id="top">
        <HeroScroll />

        <section id="product" className="section">
          <h2>A pipe inspection robot</h2>
          <p className="lead">
            Our first product replaces digging and guesswork. The crawler travels inside live-sized water and sewage
            lines and records their condition end to end.
          </p>
          <h3 className="sub">Inside the crawler</h3>
          <dl className="parts">
            {parts.map((p) => (
              <div key={p.name}>
                <dt>{p.name}</dt>
                <dd>{p.text}</dd>
              </div>
            ))}
          </dl>
          <h3 className="sub">How an inspection runs</h3>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="software" className="section">
          <h2>Software that reads the pipe for you</h2>
          <ul className="rows">
            {software.map((s) => (
              <li key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section">
          <h2>About Ksp Solutions</h2>
          <div className="about">
            <div className="prose">
              <p>
                Cities depend on pipes they can rarely see. Most inspection today is slow, manual and done only after
                something breaks. We are building tools that make routine inspection fast enough to plan repairs
                before failures happen.
              </p>
              <p>
                We are a small team of robotics, software and machine learning engineers. We develop the robot and the
                analysis software together, so the data the robot collects is the data the models need.
              </p>
            </div>
            <figure>
              <Image src={team} alt="The Ksp Solutions team on a sports field at sunset" placeholder="blur" />
            </figure>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Want to see it in your network?</h2>
          <p className="lead">Tell us about your pipes. An engineer replies within two working days.</p>
          <a href="mailto:hello@kspsolutions.example" className="btn">hello@kspsolutions.example</a>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} Ksp Solutions</span>
        <span>Placeholder copy: replace with your details.</span>
      </footer>
    </>
  );
}
