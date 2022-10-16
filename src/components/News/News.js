import './News.css';
import newsArt from '../../images/news-ART-XC.JPG';
import ReactPlayer from 'react-player';
export default function News() {
  return (
    <section className="news">
      <h2 className="news__title"> News update</h2>
      <ul className="news__list-box">
        <li className="news__list">
          <div>
            <p className="news__text">09/20/2022:</p>
            <p className="news__text">
              Shrey's paper,{' '}
              <a
                className="news__link"
                target="_blank"
                rel="noreferrer"
                href="https://arxiv.org/abs/2209.09913"
              >
                NuSTAR observations of a heavily X-ray obscured AGN in the dwarf
                galaxy J144013+024744
              </a>
              , was accepted for publication at the Astrophysical Journal,
              congrats!
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">09/12-09/16/2022:</p>
            <p className="news__text">
              CTC attended the Origin, growth and feedback of black holes in
              dwarf galaxies meeting in Donostia/San Sebastian, Spain.
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">07/26/2022:</p>
            <p className="news__text">
              Our research proposal, led by UAH professor Ming Sun, to search
              for active black holes in tidally-stripped dwarf galaxies in the
              Virgo Cluster have been approved, we are excited about what we can
              learn from the data from the 100 ks Chandra and 11-orbit
              observations.
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">07/20/2022:</p>
            <p className="news__text">
              Our{' '}
              <a
                className="news__link"
                target="_blank"
                rel="noreferrer"
                href="https://arxiv.org/abs/2207.10165"
              >
                paper
              </a>{' '}
              on a novel method to subtract background in high-energy
              astrophysical images led by MSFC Civil Servant Steven Ehlert has
              been accepted for publication at MNRAS.
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">05/20/2022:</p>
            <p className="news__text">
              Our Palomar proposal for following up ART-XC NEP targets was
              approved, thanks to our colleague Dan Stern@JPL and the IKI ART-XC
              team.
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">03/13/2022:</p>
            <p className="news__text">
              CTC and UAH graduate student Shrey Ansh attended{' '}
              <a
                className="news__link"
                target="_blank"
                rel="noreferrer"
                href="https://arxiv.org/abs/2107.05879"
              >
                the HEAD meeting
              </a>{' '}
              in Pittsburgh to present research results in ART-XC NEP survey and
              the NuSTAR project for obscured AGN in dwarf galaxies, first
              in-person meeting since the pandemic!
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">12/9/2021:</p>
            <p className="news__text">
              <a
                className="news__link"
                target="_blank"
                rel="noreferrer"
                href="https://ixpe.msfc.nasa.gov/"
              >
                The Imaging X-ray Polarimetry Explorer
              </a>{' '}
              led by the MSFC X-ray group was launched successfully into orbit,
              opening a new era for studying the polarization for astrophysical
              X-ray photons.
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">07/13/2021:</p>
            <p className="news__text">
              ART-XC all-sky survey{' '}
              <a
                className="news__link"
                target="_blank"
                rel="noreferrer"
                href="https://arxiv.org/abs/2107.05879"
              >
                catalog paper
              </a>{' '}
              was released, this catalog includes the sources found during the
              first year of the ART-XC all-sky survey, dig in!
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">06/07/2021:</p>
            <p className="news__text">
              Our XMM-Newton Multi-Year Heritage programme, the{' '}
              <a
                className="news__link"
                target="_blank"
                rel="noreferrer"
                href="https://newsroom.usra.edu/new-x-ray-map-reveals-the-growing-supermassive-black-holes-in-next-generation-survey-fields/"
              >
                XMM-SERVS
              </a>{' '}
              project is now complete and publicly available. We are working on
              the multiwavelegth properties of the X-ray sources in preparation
              for the upcoming Rubin Deep-Drilling survey in the XMM-SERVS
              fields.
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">05/20/2020:</p>
            <p className="news__text">
              Our NuSTAR proposal to follow-up SDSS 144013+024744, a Seyfert 2
              dwarf galaxy with strong mid-IR emission lines from its Spitzer
              IRS spectrum, was approved, we are exciting to see what the 100 ks
              NuSTAR will tell us.
            </p>
          </div>
        </li>
        <li className="news__list">
          <div>
            <p className="news__text">05/16/2020:</p>
            <p className="news__text">
              In U.S. Space & Rocket Center interview, Joseph talks with Dr.
              Chien-Ting Chen from NASA-MARSHALL about supermassive black holes,
              how they impact the galaxies they're in and what happens when you
              don't ask questions.
            </p>
          </div>
          <p>
            Go to&nbsp;
            <a
              className="news__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=TiKltavBz1U"
            >
              this&nbsp;youtube video
            </a>{' '}
            for more information.
          </p>
          {/* <div className="news__player-box">
                        <ReactPlayer className="news__player" width="100%" height="60%" url="https://www.youtube.com/watch?v=TiKltavBz1U" />
                    </div> */}
        </li>
        <li className="news__list news__list_flex">
          <div className="news__text-box">
            <p className="news__text">07/13/2019:</p>
            <p className="news__text">
              the Russian-German X-ray space telescope Spektr-RG was recently
              launched on July 13th!
            </p>
            <p>
              {' '}
              See&nbsp;
              <a
                className="news__link"
                target="_blank"
                rel="noreferrer"
                href="https://wwwastro.msfc.nasa.gov/artxc/docs/launch.html"
              >
                this&nbsp;webpage
              </a>{' '}
              for more information.
            </p>
          </div>
          <img src={newsArt} alt="ART-XC" className="news__img" />
        </li>
      </ul>
    </section>
  );
}
