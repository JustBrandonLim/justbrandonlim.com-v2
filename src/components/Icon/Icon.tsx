import * as React from "react";

interface Props {
  children: any;
  href: string;
}

export default function Icon(props: Props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className="fill-slate-900 hover:fill-purple">
      {props.children}
    </a>
  );
}
