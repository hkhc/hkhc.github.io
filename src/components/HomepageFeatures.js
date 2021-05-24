import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Jarbird',
    Jpeg: '/static/img/nature-3907046_640.jpeg',
    description: (
      <>
        Publish Java components without boilerplate code.
      </>
    ),
    link: 'https://hkhc.github.io/jarbird'
  },
  {
    title: 'IHLog',
    Jpeg: require('../../static/img/log_480.jpeg').default,
    description: (
      <>
        Testing friendly Kotlin logging library.
      </>
    ),
    link: '/docs/ihlog/index'
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, Jpeg, title, description, link}) {
  return (
    <div className={clsx('col col--4')} onClick={(e) => {
        window.location=link
    }}>
      <div className="text--center">
          {
              (Svg!=null) ? <Svg className={styles.featureSvg} alt={title} /> :
                  (Jpeg!=null) ? <img src={Jpeg} className={styles.featureJpeg} alt={title}/> : <span/>
          }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
