import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const main = [ {
  title: <>Onboarding Support</>,
  imageUrl: 'img/onboarding.svg',
  description: (
    <>
      Get in touch with us with any questions or to discuss new business requirements 
       <a target="_blank" href="https://www.geckogovernance.io/"><b> here</b></a> 
    </>
  ),
},]

const features = [
 
  {
    title: <>Rapid Development Cycle</>,
    imageUrl: 'img/gecko_Docs.svg',
    description: (
      <>
        Our docs are continuously updated in line with new feature releases 🚀
      </>
    ),
  },
  {
    title: <>Need help or have any feedback?</>,
    imageUrl: 'img/active_Support.svg',
    description: (
      <>
        Use the search bar to help find what you are looking for or get in touch with us 
        <Link
          to={'https://geckogovernance.io/index.html#contact'}>&nbsp;here</Link>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const Main = ({imageUrl, title, description}) =>{
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--12', styles.main)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.main} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Welcome to the GECKO Documentation. You will find manual, APIs, docs and all support here">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <img alt="GECKO" class="gecko" src="img/gecko-white.png"></img>
          {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
          <h1 className="hero__title">  
          GECKO Docs
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline primary button button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting_started')}>
              get started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
                 {main.map((props,idx) =>(
                  <Main key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
