import * as React from "react";

import NavBar from "../NavBar/NavBar";

import Icon from "../Icon/Icon";

interface Props {
  children: any;
}

export default function Layout(props: Props) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{props.children}</main>
      <footer>
        <div className="container max-w-3xl p-5 text-center">
          <p>&copy; {new Date().getFullYear()} - Present.</p>
          <p>
            Made by <span className="font-bold">JustBrandonLim</span>.
          </p>
        </div>
      </footer>
    </>
  );
}
