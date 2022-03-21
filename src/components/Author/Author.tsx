import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Author() {
  return (
    <div className="flex flex-col items-center gap-5 mt-5 md:text-left md:flex-row">
      <StaticImage src="../../images/brandon-lim.png" placeholder="blurred" width={350} quality={100} alt="Brandon Lim" className="rounded-full shadow-lg" imgClassName="rounded-full shadow-lg" />
      <p>
        This blog post was written by <span className="font-bold">Brandon Lim</span>. He is currently a student studying at Singapore Institute of Technology, majoring in BE in Information and Communications Technology (Software Engineering).
      </p>
    </div>
  );
}
