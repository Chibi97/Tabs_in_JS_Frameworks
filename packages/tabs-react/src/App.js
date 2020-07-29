import React, { useState } from "react";

// 1.
function Tab({ title, active, click }) {
  return (
    <li className={active ? "is-active" : ""}>
      <a href="#" onClick={() => click()}>
        {title}
      </a>
    </li>
  );
}
// 2.
// props.actives
function Tabs({ active, children }) {
  const [activeTab, setActiveTab] = useState(active); // stanje

  // imutabilno je pa moramo novi niz da mu dodelimo , za korisnika da ne mora on
  const toRender = children.map((child, idx) =>
    React.cloneElement(child, {
      ...child.props,
      key: idx,
      active: activeTab === child.props.id,
      click: () => {
        setActiveTab(child.props.id);
      },
    })
  );

  const activeTabChildren = toRender.find(child => child.props.id === activeTab).props.children;

  return (
    <>
      <div className="tabs">
        <ul>{toRender}</ul>
      </div>
      {activeTabChildren}
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Tabs active={7}>
        <Tab id={5} title="Vue">
          <img alt="Vue logo" src="vue.png" />
          <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.
            Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
            The core library is focused on the view layer only, and is easy to pick up and integrate with other
            libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated
            Single-Page Applications when used in combination with modern tooling and supporting libraries.
          </p>
        </Tab>
        <Tab id={6} title="Angular">
          <img alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==" />
          <p>Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
            Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries
            that you import into your apps. The architecture of an Angular application relies on certain fundamental concepts.
            The basic building blocks are NgModules, which provide a compilation context for components. NgModules collect
            related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least
            a root module that enables bootstrapping, and typically has many more feature modules.
          </p>
        </Tab>
        <Tab id={7} title="React">
          <img alt="React logo" src="logo192.png" />
          <p>React has been designed from the start for gradual adoption, and you can use as little or as much React
            as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or
            start a complex React-powered app, the links in this section will help you get started
            Declarative views make your code more predictable and easier to debug. React can also render on the
            server using Node and power mobile apps using React Native.
          </p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
