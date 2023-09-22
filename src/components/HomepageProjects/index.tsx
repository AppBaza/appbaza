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
                ready-to-use backend for your mobile, web, and game applications.
                It aims to simplify the development process and reduce the time
                to market.
            </>
        ),
        productLink: "https://www.appbaza.com/nest",
        documentationLink: "/docs/nest",
    },
];

function Project({title, description, productLink, documentationLink}: ProjectItem) {
    return (
        <div className={styles.project}>
            <div className={clsx("col col--12")}>
                <div className="text--center padding-horiz--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="text--center">
                    <Link
                        className="button button--secondary button--info"
                        to={documentationLink}
                        target="">
                        Read Documentation
                    </Link>
                </div>
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
