import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Simple and Streamlined",
        Svg: require("@site/static/img/appbaza-simple-and-streamlined-icon.svg")
            .default,
        description: (
            <>
                Experience the effortless setup and usability of our APIs, mobile apps,
                and admin dashboards. Our projects are engineered to simplify your
                journey, getting you started and operational in no time.
            </>
        ),
    },
    {
        title: "Make Your Vision a Priority",
        Svg: require("@site/static/img/appbaza-your-vision-icon.svg").default,
        description: (
            <>
                AppBaza projects aim to help you focus on what matters - your product
                and business. Do not reinvent the wheel; use provided features and build
                your idea on top of them.
            </>
        ),
    },
    {
        title: "Modern Tech Stack",
        Svg: require("@site/static/img/appbaza-tech-stack-icon.svg").default,
        description: (
            <>
                All projects use modern technologies and are built with the usability
                and scalability in mind. We provide you with the best tools to build
                your product.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="text--center">
                    <h2>Our Approach</h2>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
