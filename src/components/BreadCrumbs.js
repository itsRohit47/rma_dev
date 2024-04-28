"use client";
import { useRouter } from "next/router";

const Breadcrumb = () => {
  const router = useRouter({ optional: true });
  const path = router.asPath.split("/");
  const crumbs = [];

  path.forEach((segment, index) => {
    const href = path.slice(0, index + 1).join("/");
    crumbs.push(
      <li key={index}>
        <a href={href}>{segment}</a>
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumb">
      <ol>{crumbs}</ol>
    </nav>
  );
};

export default Breadcrumb;
