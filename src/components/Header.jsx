import React from 'react';

function Header({ currentSection, setCurrentSection }) {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <header>
      <h1>William Hoenig</h1>
      <nav>
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className={currentSection === section ? 'active' : ''}
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;