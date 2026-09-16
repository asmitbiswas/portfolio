"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  const skills = [
    ["N", "Next.js"],
    ["⚛", "React"],
    ["JS", "JavaScript"],
    ["〰", "Tailwind CSS"],
    ["◆", "Git"],
    ["F", "Figma"],
    ["⌬", "Node.js"],
    ["◉", "MongoDB"],
  ];

  const projects = [
    {
      title: "YourDevVault",
      description: "A curated hub for developers with useful resources.",
      tags: ["Next.js", "Tailwind", "API"],
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my work and skills.",
      tags: ["Next.js", "Framer Motion"],
    },
    {
      title: "TaskFlow",
      description: "A simple and clean task management app with local storage.",
      tags: ["React", "LocalStorage", "CSS"],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: dark ? "#02080b" : "#f4fafa",
        color: dark ? "#e7ffff" : "#061113",
        fontFamily: "monospace",
        transition: "0.3s",
      }}
    >
      <nav
        style={{
          height: 62,
          borderBottom: `1px solid ${dark ? "#153036" : "#c8dddd"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: dark ? "rgba(2,8,11,.88)" : "rgba(244,250,250,.9)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontWeight: 800,
            fontSize: 16,
          }}
        >
          <span
            style={{
              color: "#00fff0",
              fontSize: 24,
              textShadow: "0 0 15px #00fff0",
            }}
          >
            {"</>"}
          </span>
          Asmit
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 34,
            fontSize: 12,
            color: dark ? "#9aabad" : "#496366",
          }}
        >
          {["Home", "About", "Projects", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: i === 0 ? "#00fff0" : "inherit",
                padding: "22px 4px",
                borderBottom: i === 0 ? "2px solid #00fff0" : "2px solid transparent",
              }}
            >
              {item}
            </a>
          ))}

          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 43,
              height: 24,
              borderRadius: 30,
              border: `1px solid ${dark ? "#16434a" : "#aac4c4"}`,
              background: dark ? "#082126" : "#d8eeee",
              cursor: "pointer",
              color: "#00fff0",
            }}
          >
            {dark ? "☼" : "☾"}
          </button>
        </div>
      </nav>

      <section
        id="home"
        style={{
          maxWidth: 900,
          minHeight: 270,
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 30,
          padding: "30px 0",
          borderBottom: `1px solid ${dark ? "#10272d" : "#d2e3e3"}`,
        }}
      >
        <div>
          <div
            style={{
              letterSpacing: 5,
              fontSize: 13,
              color: dark ? "#d5e1e2" : "#486366",
              marginBottom: 7,
            }}
          >
            HEY, I'M
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(48px,7vw,68px)",
              lineHeight: 0.95,
              color: "#00fff0",
              letterSpacing: -4,
              textShadow: "0 0 22px rgba(0,255,240,.35)",
            }}
          >
            Asmit
          </h1>

          <p
            style={{
              borderLeft: "3px solid #00fff0",
              paddingLeft: 12,
              fontSize: 16,
              lineHeight: 1.45,
              maxWidth: 390,
              color: dark ? "#d5dddd" : "#40595c",
            }}
          >
            I build modern web experiences
            <br />
            that make an <span style={{ color: "#00fff0" }}>impact.</span>
          </p>

          <div style={{ display: "flex", gap: 18, marginTop: 24 }}>
            <a
              href="#projects"
              style={{
                background: "#00eee0",
                color: "#001012",
                padding: "11px 19px",
                borderRadius: 25,
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 800,
                boxShadow: "0 0 22px rgba(0,255,240,.3)",
              }}
            >
              View My Projects →
            </a>

            <a
              href="#contact"
              style={{
                border: "1px solid #607277",
                color: dark ? "#eaffff" : "#243b3d",
                padding: "10px 20px",
                borderRadius: 25,
                textDecoration: "none",
                fontSize: 12,
              }}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            height: 230,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: "1px solid rgba(0,255,240,.22)",
              boxShadow: "0 0 70px rgba(0,255,240,.12)",
            }}
          />

          <div
            style={{
              width: 220,
              height: 130,
              border: "5px solid #607174",
              borderBottom: "10px solid #34464a",
              borderRadius: "8px 8px 3px 3px",
              transform: "perspective(500px) rotateX(-4deg) rotateY(-8deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#061116",
              boxShadow: "0 0 35px rgba(0,255,240,.25)",
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontSize: 35,
                color: "#00fff0",
                textShadow: "0 0 20px #00fff0",
              }}
            >
              {"</>"}
            </span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 20,
              width: 270,
              height: 7,
              background: "#34464a",
              transform: "skewX(-25deg)",
              borderRadius: 20,
            }}
          />
        </div>
      </section>

      <section
        id="about"
        style={{
          maxWidth: 900,
          margin: "auto",
          padding: "24px 0",
          borderBottom: `1px solid ${dark ? "#10272d" : "#d2e3e3"}`,
        }}
      >
        <SectionTitle number="01." title="About Me" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: 35,
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: dark ? "#aebabb" : "#52696b",
                lineHeight: 1.6,
                fontSize: 13,
              }}
            >
              I’m Asmit, a passionate web developer who loves turning creative
              ideas into fast, responsive and beautiful websites.
            </p>

            <button
              style={{
                background: "transparent",
                color: "#00fff0",
                border: "1px solid #00fff0",
                borderRadius: 20,
                padding: "8px 17px",
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              Learn More →
            </button>
          </div>

          <div
            style={{
              border: `1px solid ${dark ? "#193a40" : "#c3dada"}`,
              borderRadius: 8,
              padding: 20,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: dark ? "rgba(6,22,26,.7)" : "#fff",
              boxShadow: dark ? "0 0 30px rgba(0,255,240,.03)" : "none",
            }}
          >
            <div>
              <Info label="♙" title="Name" value="Asmit" />
              <Info label="⌖" title="Location" value="India" />
              <Info label="✉" title="Email" value="yourname@email.com" />
              <Info label="♧" title="Education" value="Student / Self Learner" />
            </div>

            <div
              style={{
                borderLeft: `1px solid ${dark ? "#24454a" : "#d1e2e2"}`,
                paddingLeft: 25,
              }}
            >
              <div style={{ color: "#00fff0", fontSize: 24 }}>“</div>
              <div style={{ lineHeight: 1.5, fontSize: 13 }}>
                Better web.
                <br />
                Brighter future.
              </div>
              <div
                style={{
                  marginTop: 10,
                  color: "#00fff0",
                  fontStyle: "italic",
                  fontSize: 17,
                }}
              >
                Asmit
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        style={{
          maxWidth: 900,
          margin: "auto",
          padding: "24px 0",
          borderBottom: `1px solid ${dark ? "#10272d" : "#d2e3e3"}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SectionTitle number="02." title="My Projects" />

          <a
            href="#projects"
            style={{
              color: "#00fff0",
              fontSize: 11,
              textDecoration: "none",
            }}
          >
            View All Projects →
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                border: `1px solid ${dark ? "#17343a" : "#c8dada"}`,
                borderRadius: 8,
                padding: 12,
                background: dark ? "#061318" : "#fff",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  height: 75,
                  borderRadius: 5,
                  background:
                    "radial-gradient(circle at 50% 50%, #073c3d, #030c10 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                  color: "#eaffff",
                  fontSize: 12,
                }}
              >
                {project.title}
              </div>

              <div style={{ fontSize: 13, marginBottom: 7 }}>
                {project.title}
              </div>

              <div
                style={{
                  color: dark ? "#8ea2a4" : "#637678",
                  fontSize: 10,
                  lineHeight: 1.5,
                  minHeight: 32,
                }}
              >
                {project.description}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 5,
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: dark ? "#122a31" : "#e4eeee",
                      padding: "4px 7px",
                      borderRadius: 3,
                      color: "#75a2a5",
                      fontSize: 8,
                    }}
                  >
                    {tag}
                  </span>
                ))}

                <span
                  style={{
                    marginLeft: "auto",
                    color: "#00fff0",
                    fontSize: 20,
                  }}
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 900,
          margin: "auto",
          padding: "24px 0",
          borderBottom: `1px solid ${dark ? "#10272d" : "#d2e3e3"}`,
        }}
      >
        <SectionTitle number="03." title="Skills" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8,1fr)",
            gap: 10,
            textAlign: "center",
          }}
        >
          {skills.map(([icon, name]) => (
            <div key={name}>
              <div
                style={{
                  color: "#00fff0",
                  fontSize: 24,
                  height: 35,
                  textShadow: "0 0 12px rgba(0,255,240,.35)",
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  color: dark ? "#9aa9aa" : "#627577",
                  fontSize: 9,
                }}
              >
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          maxWidth: 900,
          margin: "auto",
          padding: "24px 0 35px",
        }}
      >
        <SectionTitle number="04." title="Get In Touch" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr auto",
            alignItems: "center",
            gap: 25,
          }}
        >
          <div>
            <div style={{ fontSize: 12, color: dark ? "#a9b7b8" : "#546a6c" }}>
              Have a project in mind or just want
              <br />
              to say hi? I’d love to hear from you.
            </div>
          </div>

          <ContactItem icon="✉" value="yourname@email.com" small="Drop me a line" />
          <ContactItem icon="⌖" value="India" small="Where I'm based" />
          <ContactItem icon="◉" value="github.com/asmit" small="Check out my work" />

          <button
            style={{
              whiteSpace: "nowrap",
              background: "transparent",
              color: "#00fff0",
              border: "1px solid #00fff0",
              borderRadius: 20,
              padding: "9px 17px",
              fontFamily: "inherit",
            }}
          >
            Let’s Talk →
          </button>
        </div>
      </section>

      <footer
        style={{
          borderTop: `1px solid ${dark ? "#153036" : "#cbdede"}`,
          padding: "15px 7%",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 9,
          color: dark ? "#637577" : "#718687",
        }}
      >
        <span>© 2025 Asmit. Built with ♥ Next.js.</span>
        <span style={{ color: "#00a99f" }}>Always learning. Always building.</span>
      </footer>
    </main>
  );
}

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div style={{ marginBottom: 15 }}>
      <div
        style={{
          color: "#00fff0",
          fontSize: 10,
          fontWeight: 700,
          marginBottom: 3,
        }}
      >
        {number}
      </div>

      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {title.split(" ")[0]}{" "}
        <span style={{ color: "#00fff0" }}>
          {title.split(" ").slice(1).join(" ")}
        </span>

        <span
          style={{
            width: 65,
            height: 2,
            background: "#00fff0",
            opacity: 0.4,
            marginLeft: 3,
          }}
        />
      </div>
    </div>
  );
}

function Info({
  label,
  title,
  value,
}: {
  label: string;
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "22px 65px 1fr",
        gap: 5,
        alignItems: "center",
        marginBottom: 11,
        fontSize: 9,
      }}
    >
      <span style={{ color: "#00fff0", fontSize: 16 }}>{label}</span>
      <span style={{ color: "#789092" }}>{title}</span>
      <span>{value}</span>
    </div>
  );
}

function ContactItem({
  icon,
  value,
  small,
}: {
  icon: string;
  value: string;
  small: string;
}) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <span style={{ color: "#00fff0", fontSize: 20 }}>{icon}</span>

      <div>
        <div style={{ fontSize: 9 }}>{value}</div>
        <div style={{ color: "#617578", fontSize: 8 }}>{small}</div>
      </div>
    </div>
  );
}