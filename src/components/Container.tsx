import { ReactElement } from "react";
import styles from "../styles/Container.module.scss";

interface ContainerTypes {
  children: ReactElement;
}

export default function Container({ children }: ContainerTypes) {
  return <div className={styles.container}>{children}</div>;
}
