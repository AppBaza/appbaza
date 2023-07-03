import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Simple and Streamlined',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Experience the effortless setup and usability of our APIs, mobile apps, and admin dashboards. Our projects are engineered from the outset to simplify your journey, getting your website operational in no time.
            </>
        ),
    },
    {
        title: 'Make Your Vision a Priority',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                The purpose of all projects is to help you focus on what matters - your product and business. Do not
                reinvent the wheel, use provided features and build your idea on top of them.
            </>
        ),
    },
    {
        title: 'Modern Tech Stack',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                All projects use modern tech stack like Next.js, React, Expo and React Native. For our backend projects
                we mainly rely on proven by time technologies like Spring Boot.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
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
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
