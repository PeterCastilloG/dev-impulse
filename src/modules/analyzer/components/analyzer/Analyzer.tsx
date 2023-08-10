import { IAnalyzer, IPageMessage } from "../../interfaces/analyzer.interfaces";
import React, { memo } from "react";
import styles from "./Analyzer.module.scss";
import Rules from "../rules/Rules";
import Resume from "../resume-challenge-order/Resume-challenge-order";
import Chart from "../chart/Chart";
import Days from "../status-days/Status-days";
import MessagePage from "../page-message/Page-Message";


function Analyzer({
  challengeOrderAnalyzer,
  pageMessage,
}: {
  challengeOrderAnalyzer: IAnalyzer;
  pageMessage: IPageMessage;
}) {
  return (
    <div className={styles.container}>
      <Resume resume={challengeOrderAnalyzer.resume} />
      <Chart progress={challengeOrderAnalyzer.progress.data} labels={challengeOrderAnalyzer.progress.labels} />
      <MessagePage
        title={pageMessage.title}
        content={pageMessage.content}
        reference={pageMessage.reference}
      />
      <div className={styles.info}>
        <Rules rules={challengeOrderAnalyzer.rules} />
        <Days fase={challengeOrderAnalyzer.fase} />
      </div>
    </div>
  );
}

export default memo(Analyzer);

