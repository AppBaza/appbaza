import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type ProjectItem = {
    title: string;
    description: JSX.Element;
    productLink: string;
    documentationLink: string;
};

const ProjectList: ProjectItem[] = [
  {
    title: "NEST: Backend-as-a-Service",
    description: (
      <>
        NEST is a backend-as-a-service (BaaS) project that provides a
        ready-to-use backend for your mobile, web, and game applications. It
        aims to simplify the development process and reduce the time to market.
      </>
    ),
    productLink: "https://www.appbaza.com/nest",
    documentationLink: "/docs/nest",
  },
  {
    title: "Dev Kit for AI: Launch Production-Ready AI SaaS Applications",
    description: (
      <>
        Complete platform for building AI-powered SaaS: Next.js starter kit,
        hosted backend, AI-integrations, admin console, and user dashboards.
        Ship in hours with authentication, AI generations, and rich components
        library.
      </>
    ),
    productLink: "https://devkit4ai.com/",
    documentationLink: "https://docs.devkit4ai.com/",
  },
];

function Project({title, description, productLink, documentationLink}: ProjectItem) {
    return (
        <div className={clsx("col col--6")}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="text--center">
                <Link
                    className="button button--primary"
                    to={productLink}
                    target="">
                    Product
                </Link>
                <Link
                    className="button button--secondary"
                    to={documentationLink}
                    target="">
                    Documentation
                </Link>
            </div>
        </div>
    );
}

export default function HomepageProjects(): JSX.Element {
    return (
        <section className={styles.projects}>
            <div className="container">
                <div className="text--center">
                    <h2>Projects</h2>
                </div>
                <div className="row">
                    {ProjectList.map((props, idx) => (
                        <Project key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
