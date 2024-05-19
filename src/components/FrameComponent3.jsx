import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.image131Parent}>
      <img
        className={styles.image131Icon}
        loading="lazy"
        alt=""
        src="/image-131@2x.png"
      />
      <div className={styles.rollParent}>
        <img
          className={styles.rollIcon}
          loading="lazy"
          alt=""
          src="/roll@2x.png"
        />
        <div className={styles.artistLineupWrapper}>
          <h3 className={styles.artistLineup}>Artist Lineup</h3>
        </div>
      </div>
      <img
        className={styles.frameChild}
        alt=""
        src="/frame-1261154686@2x.png"
      />
      <img className={styles.frameItem} alt="" src="/frame-1261154684@2x.png" />
    </div>
  );
};

export default FrameComponent3;
