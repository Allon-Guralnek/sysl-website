import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

function Tryout() {
  return (
    <div className={styles.tryout}>
      <h1
        className={classnames(
          "text--center text--secondary",
          styles.tryout__title
        )}
      >
        Try it out
      </h1>
      <div className="col col-12">
        <a
          href="https://anz-bank.github.io/sysl-playground/"
          target="_blank"
          className={classnames(
            "button button-primary button--lg",
            styles.tryout__link
          )}
        >
          Open in playground
        </a>
        <div style={{ clear: "both" }}></div>
      </div>
    </div>
  );
}

export default Tryout;
