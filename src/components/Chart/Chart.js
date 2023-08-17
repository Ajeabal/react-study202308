import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  // 1년치 지출총액을 구해야 한다.
  // 지출액들만 월별로 추출
  const dataPointValues = dataPoints.map((dp) => dp.value);
  console.log(dataPointValues);
  // 1년치 총합
  // reduce accum는 어떤 패턴의 리턴 결과에 대한 누적값, cur는 배열에서 하나씩 꺼낸 값
  const maximumValue = dataPointValues.reduce((accum, cur) => {
    return accum + cur;
  }, 0);
  console.log(maximumValue);
  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => (
        <ChartBar
          key={label}
          label={label}
          currentValue={value}
          maxValue={maximumValue}
        />
      ))}
    </div>
  );
};

export default Chart;
