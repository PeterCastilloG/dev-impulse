import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

export default function Timer({
  initialHours,
  label,
  children,
}: {
  initialHours: number;
  label: string;
  children: React.ReactNode;
}) {
  const [time, setTime] = useState(initialHours * 3600);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    setTime(initialHours * 3600);
  }, [children, initialHours]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <p className={styles.counter}>{formatTime(time)}</p>
      {children}
    </div>
  );
}
