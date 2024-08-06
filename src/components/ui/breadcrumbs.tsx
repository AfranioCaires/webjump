import React from "react";
import { useMatches } from "react-router-dom";

interface HandleObject {
  crumb: (data: any) => React.ReactNode;
}

interface MatchObject {
  handle?: HandleObject;
  data: any;
}

function Breadcrumbs() {
  const matches = useMatches() as MatchObject[];
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle!.crumb(match.data));

  return (
    <nav>
      <ol className="flex text-sm">
        {crumbs.map((crumb, index) => (
          <li
            className={index == crumbs.length - 1 ? "text-red1" : "text-teal1"}
            key={index}
          >
            {crumb}
            {index < crumbs.length - 1 && (
              <span className="mx-1 text-gray4">&gt;</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
