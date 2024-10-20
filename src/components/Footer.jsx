import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>
        </nav>
        <nav>
        <div className="grid grid-flow-col gap-4">
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/anuj-tiwari-3717a21b4/" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.646c0-1.344-.027-3.071-1.871-3.071-1.874 0-2.162 1.463-2.162 2.972v5.745h-3v-10h2.873v1.367h.041c.399-.757 1.374-1.554 2.832-1.554 3.03 0 3.588 1.994 3.588 4.586v5.601z" />
    </svg>
  </a>

  {/* GitHub */}
  <a href="https://github.com/Linchpin22" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.623-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.292 0 .322.218.694.825.576 4.765-1.59 8.2-6.084 8.2-11.383 0-6.627-5.373-12-12-12z" />
    </svg>
  </a>

  {/* Email */}
  <a href="mailto:tiwarianuj712@gmail.com">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current"
    >
      <path d="M12 12.713l-11.99-7.713h23.978l-11.988 7.713zm-12-9.713v16h24v-16h-24zm12 13.287l12-7.287v14h-24v-14l12 7.287z" />
    </svg>
  </a>
</div>

        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
