import FrameComponent7 from "./FrameComponent7";
import styles from "./CollectionLanding2.module.css";

const CollectionLanding2 = () => {
  return (
    <div className={styles.collectionLanding}>
      <div className={styles.rollParent}>
        <img
          className={styles.rollIcon}
          loading="lazy"
          alt=""
          src="/roll@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-1261154678.svg"
              />
            </div>
            <b className={styles.kPeopleInterested}>22k people interested</b>
          </div>
        </div>
      </div>
      <div className={styles.collectionLandingInner}>
        <div className={styles.frameGroup}>
          <div className={styles.astrixBrandingParent}>
            <img
              className={styles.astrixBrandingIcon}
              loading="lazy"
              alt=""
              src="/astrix-branding2@2x.png"
            />
            <div className={styles.astrixWrapper}>
              <h1 className={styles.astrix}>Astrix.</h1>
            </div>
          </div>
          <div className={styles.events}>
            <div className={styles.cardSmallByPabloInstanceWrapper}>
              <img
                className={styles.cardSmallByPabloInstance}
                loading="lazy"
                alt=""
                src="/frame-12611546701@2x.png"
              />
            </div>
            <div className={styles.astrixEventsWrapper}>
              <div className={styles.astrixEvents}>
                <h1 className={styles.astrixEvents1}>
                  <p className={styles.astrix1}>ASTRIX</p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.events1}>EVENTS</p>
                </h1>
              </div>
            </div>
            <img
              className={styles.eventsChild}
              loading="lazy"
              alt=""
              src="/dropdown@2x.png"
            />
            <img
              className={styles.eventsItem}
              loading="lazy"
              alt=""
              src="/frame-1261154672@2x.png"
            />
            <b className={styles.lunarPalaceFtContainer}>
              <p className={styles.lunarPalace}>{`Lunar Palace: `}</p>
              <p className={styles.ftKanyeWest}>(ft. Kanye west)</p>
            </b>
            <div className={styles.lunarPalaceFtKanyeWestParent}>
              <b className={styles.lunarPalaceFtContainer1}>
                <p className={styles.lunarPalace1}>{`Lunar Palace: `}</p>
                <p className={styles.ftKanyeWest1}>(ft. Kanye west)</p>
              </b>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/frame-1261154671-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.toggleLandingPage}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameInner} />
              <b className={styles.events2}>Events</b>
              <div className={styles.rectangleDiv} />
              <b className={styles.collections}>Collections</b>
            </div>
            <div className={styles.toggleLandingPageChild} />
          </div>
        </div>
      </div>
      <FrameComponent7 />
    </div>
  );
};

export default CollectionLanding2;
