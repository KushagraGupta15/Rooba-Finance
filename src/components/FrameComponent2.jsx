import styles from "./FrameComponent2.module.css";
import LogosComponent from "./LogosComponent";

const FrameComponent2 = () => {
  return (
    <div className={styles.rollParent}>
      {/* <img
        className={styles.rollIcon}
        loading="lazy"
        alt=""
        src="https://pngtree.com/freepng/red-strip_4446216.html"
      /> */}
      <div className={styles.rollIcon}>
        <LogosComponent />
      </div>

      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-1261154678.svg"
            />
          </div>
          <div className={styles.kPeopleInterested}>22k people interested</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
