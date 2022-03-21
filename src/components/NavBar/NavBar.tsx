import * as React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  const [mobileNavBarOpened, setMobileNavBarOpened] = React.useState(false);

  return (
    <nav className="container flex items-center justify-between p-5 text-slate-900">
      <Link to="/" className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <h1 className="font-dm-mono">brandon;</h1>
      </Link>
      <div className="md:hidden">
        <button onClick={() => setMobileNavBarOpened(true)} className={`${mobileNavBarOpened ? "hidden" : "block"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button onClick={() => setMobileNavBarOpened(false)} className={`${mobileNavBarOpened ? "block" : "hidden"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul className="items-center hidden gap-5 text-base font-bold md:flex">
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        <li>
          <NavItem to="/#about">About</NavItem>
        </li>
        <li>
          <NavItem to="/#works">Works</NavItem>
        </li>
        <li>
          <NavItem to="/contact">Contact</NavItem>
        </li>
        <li>
          <NavItem to="/blog">Blog</NavItem>
        </li>
      </ul>
    </nav>
  );
}

interface Props {
  to: string;
  children: any;
}

function NavItem(props: Props) {
  return (
    <Link to={props.to} className="hover:text-purple">
      {props.children}
    </Link>
  );
}
