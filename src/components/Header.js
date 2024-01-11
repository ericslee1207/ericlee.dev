import React from "react";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="brand-name">ericslee.dev</div>
          <section className="hero">
            <h1>hey, i'm eric 👋🏻 </h1>
          </section>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#experiences">experience</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <li>
                <a
                  href="https://github.com/ericslee1207"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </li>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
