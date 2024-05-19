import FrameComponent2 from "./FrameComponent2";
import styles from "./CollectionLanding1.module.css";

const CollectionLanding1 = () => {
  return (
    <div className={styles.collectionLanding}>
      <FrameComponent2 />
      <section className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.astrixBrandingParent}>
            <div className={styles.astrixBranding}>
              <img
                className={styles.astrixBrandingIcon}
                loading="lazy"
                alt=""
                src="/astrix-branding@2x.png"
              />
              <div className={styles.astrixWrapper}>
                <h1 className={styles.astrix}>Astrix.</h1>
              </div>
            </div>
            <div className={styles.events}>
              <img
                className={styles.eventsChild}
                loading="lazy"
                alt=""
                src="/frame-12611546701@2x.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.lunarPalaceFtKanyeWestWrapper}>
                  <b className={styles.lunarPalaceFtContainer}>
                    <span className={styles.lunarPalaceFtContainer1}>
                      <p className={styles.lunarPalace}>{`Lunar Palace: `}</p>
                      <p className={styles.ftKanyeWest}>(ft. Kanye west)</p>
                    </span>
                  </b>
                </div>
                <div className={styles.eventDetails}>
                  <h1 className={styles.astrixEvents}>
                    <p className={styles.astrix1}>ASTRIX</p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.events1}>EVENTS</p>
                  </h1>
                  <img
                    className={styles.visaIconShape}
                    loading="lazy"
                    alt=""
                    src="/frame-1261154671@2x.png"
                  />
                </div>
              </div>
              <div className={styles.eventRepeat}>
                <div className={styles.lunarPalaceFtKanyeWestContainer}>
                  <b className={styles.lunarPalaceFtContainer2}>
                    <p className={styles.lunarPalace1}>{`Lunar Palace: `}</p>
                    <p className={styles.ftKanyeWest1}>(ft. Kanye west)</p>
                  </b>
                </div>
                <div className={styles.parent}>
                  <img
                    className={styles.icon}
                    alt=""
                    src="/frame-1261154672@2x.png"
                  />
                  <img
                    className={styles.icon1}
                    alt=""
                    src="/frame-1261154671-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.toggleLandingPage}>
            <div className={styles.toggleButtonsParent}>
              <div className={styles.toggleButtons} />
              <b className={styles.events2}>Events</b>
              <div className={styles.toggleButtons1} />
              <b className={styles.collections}>Collections</b>
            </div>
            <div className={styles.toggleLandingPageChild} />
          </div>
        </div>
      </section>
      <div className={styles.exploreYoureFirstCollectiblParent}>
        <h3 className={styles.exploreYoureFirst}>
          Explore Youre First Collectible
        </h3>
        <div className={styles.metaInfo}>
          <h1 className={styles.metaLives}>Meta Lives</h1>
          <b className={styles.liveInAstrix}>Live in Astrix</b>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. `}</div>
        </div>
        <div className={styles.collectiblesParent}>
          <div className={styles.collectibles}>Collectibles</div>
          <div className={styles.fontistoinstagram}>
            <div className={styles.cardSmall}>
              <div className={styles.cardDetails}>
                <div className={styles.cardElements}>
                  <b className={styles.fabrandstiktok}>2024</b>
                </div>
                <div className={styles.byPablo}>
                  <span className={styles.by}>By</span>
                  <span className={styles.span}>{` `}</span>
                  <b>Pablo</b>
                </div>
              </div>
              <div className={styles.collectibleNameWrapper}>
                <div className={styles.collectibleName}>Collectible Name</div>
              </div>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.cardSmall1}>
              <div className={styles.logoParent}>
                <div className={styles.logo}>
                  <b className={styles.b}>2024</b>
                </div>
                <div className={styles.byPablo1}>
                  <span className={styles.by1}>By</span>
                  <span className={styles.span1}>{` `}</span>
                  <b>Pablo</b>
                </div>
              </div>
              <div className={styles.collectibleNameContainer}>
                <div className={styles.collectibleName1}>Collectible Name</div>
              </div>
              <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
            </div>
            <div className={styles.cardSmall2}>
              <div className={styles.group}>
                <div className={styles.div}>
                  <b className={styles.b1}>2024</b>
                </div>
                <div className={styles.byPablo2}>
                  <span className={styles.by2}>By</span>
                  <span className={styles.span2}>{` `}</span>
                  <b>Pablo</b>
                </div>
              </div>
              <div className={styles.collectibleNameFrame}>
                <div className={styles.collectibleName2}>Collectible Name</div>
              </div>
              <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.joinNowWrapper}>
          <div className={styles.joinNow}>
            <b className={styles.joinWaitlist}>Join Waitlist</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionLanding1;
