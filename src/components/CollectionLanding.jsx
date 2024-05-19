import { useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import styles from "./CollectionLanding.module.css";

const CollectionLanding = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/event-landing");
  }, [navigate]);

  return (
    <div className={styles.collectionLanding}>
      <h1 className={styles.astrixCollectible}>
        <span className={styles.astrixCollectibleTxtContainer}>
          <p className={styles.astrix}>ASTRIX</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.collectible}>COLLECTIBLE</p>
        </span>
      </h1>
      <FrameComponent2 />
      <div className={styles.collectionLandingInner}>
        <div className={styles.frameParent}>
          <div className={styles.astrixBrandingParent}>
            <img
              className={styles.astrixBrandingIcon}
              loading="lazy"
              alt=""
              src="/—Pngtree—a logo simple and minimalistic_5009139.png"
            />
            <div className={styles.astrixWrapper}>
              <h1 className={styles.astrix1}>Astrix.</h1>
            </div>
          </div>
          <div className={styles.eventsWrapper}>
            <div className={styles.events}>
              <div className={styles.frameGroup}>
                <FrameComponent1 input="https://i.pinimg.com/564x/04/6e/06/046e064dc1505e9fb984a5c37de4d5b6.jpg" text="BTS"/>
                <FrameComponent1 input="https://i.pinimg.com/564x/e1/e8/d4/e1e8d4114b6cd321303e5ba0e7455424.jpg" text="Taylor Swift"/>
                <FrameComponent1 input="https://i.pinimg.com/564x/94/16/d6/9416d6d82d4ef8d17337c3cbe1e3fc18.jpg" text="ED Sheeran"/>
                <FrameComponent1 input="https://i.pinimg.com/564x/c5/25/5f/c5255f8422395ca3f2fcbb1a038db7a2.jpg" text="Shawn"/>
              </div>
            </div>
          </div>
          <div className={styles.toggleLandingPage}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild}  onClick={onFrameClick}/>
              <b className={styles.events1} onClick={onFrameClick}>Events</b>
              <div className={styles.frameItem} />
              <b className={styles.collections}>Collections</b>
            </div>
            {/* <div
              className={styles.toggleLandingPageChild}
              onClick={onFrameClick}
            /> */}
          </div>
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default CollectionLanding;
