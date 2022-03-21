import * as React from "react";
import { Link } from "gatsby";

interface Props {
  category: string;
  date: string;
  description: string;
  to: string;
  title: string;
}

export default function BlogCard(props: Props) {
  return (
    <div className="flex flex-col items-start flex-1 gap-5 p-5 text-left rounded-md shadow-lg bg-light-gray md:flex-row">
      <div className="basis-1/3">
        <p>📅 {props.date}</p>
        <p>🏷️ {props.category}</p>
      </div>
      <div className="basis-2/3">
        <h3>
          <Link to={props.to}>{props.title}</Link>
        </h3>
        <p>{props.description}</p>
        <Link to={props.to}>
          <button className="p-2 mt-20 text-white transition-all duration-300 rounded-md shadow-lg bg-purple hover:bg-purple/80 hover:scale-125">Read More</button>
        </Link>
      </div>
    </div>
  );
}
