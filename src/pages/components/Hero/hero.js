import React from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div className={classnames('hero hero--primary')}>
      <div className={classnames('container', styles.hero__container)}>
        <div className="row">
          <div className="col col--6">
            <h1 className={styles.hero__titile}>Establish a Single Source of Truth</h1>
            <p className={styles.hero__subtitile}>{siteConfig.tagline}</p>
            <div className="row">
              <div className="col col--12">
                <Link
                  className={classnames('button button--outline button--lg', styles.button__developer)}
                  to={useBaseUrl('docs/examples-dev')}>
                  I'm a developer
                </Link>
                <Link
                  className={classnames('button button--outline button--lg', styles.button__non_developer)}
                  to={useBaseUrl('docs/examples-nondev')}>
                  I'm not a developer
                  </Link>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.avatar__container}>
              {/* logo */}
              <img src='img/logo-white.png' className={styles.logo__white}></img>
              {/* circles */}
              <div className={classnames(styles.avatar__item, styles.avatar__item__architects)}>
                <img src='img/icon/Architects.svg' className={styles.logo__icon}></img>
                <div className={styles.line__item__architects}></div>
                <span className={styles.avatar__line}>Architects</span>
              </div>
              <div className={classnames(styles.avatar__item, styles.avatar__item__security)}>
                <img src='img/icon/Security.svg' className={styles.logo__icon}></img>
                <div className={styles.line__item__security}></div>
                <span className={styles.avatar__line, styles.avatar__line_security}>Security</span>
              </div>
              <div className={classnames(styles.avatar__item, styles.avatar__item__testers)}>
                <img src='img/icon/Testers.svg' className={styles.logo__icon}></img>
                <div className={styles.line__item__testers}></div>
                <span className={styles.avatar__line, styles.avatar__line_testers}>Testers</span>
              </div>
              <div className={classnames(styles.avatar__item, styles.avatar__item__developers)}>
                <img src='img/icon/Developers.svg' className={styles.logo__icon}></img>
                <div className={styles.line__item__developers}></div>
                <span className={styles.avatar__line, styles.avatar__line_developers}>Developers</span>
              </div>
              <div className={classnames(styles.avatar__item, styles.avatar__item__analysts)}>
                <img src='img/icon/Analysts.svg' className={styles.logo__icon}></img>
                <div className={styles.line__item__analysts}></div>
                <span className={styles.avatar__line}>Analysts</span>
              </div>
              <div className={classnames(styles.avatar__item, styles.avatar__item__dataengineers)}>
                <img src='img/icon/Data_engineers.svg' className={styles.logo__icon}></img>
                <div className={styles.line__item__dataengineers}></div>
                <span className={styles.avatar__line}>Data Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero;
