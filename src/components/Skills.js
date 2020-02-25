import React from 'react';
import GaugeChart from 'react-gauge-chart';

export default (props) => {

  return (
    <div id="Skills">
      <div className='skillsTitle'>
        <h1>
          Skills
        </h1>
      </div>
      <div className="skillsBox">
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart1"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.85}
          />
          <div>HTML</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart2"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.85}
          />
          <div>CSS、SASS、SCSS</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart3"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.85}
          />
          <div>Javascript</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart4"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.85}
          />
          <div>React、Redux、Next.js</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart5"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.75}
          />
          <div>Jquery</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart6"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.75}
          />
          <div>Node.js (Express)</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart7"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.6}
          />
          <div>MongoDB、Mongoose</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart8"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.6}
          />
          <div>MySQL</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart9"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.7}
          />
          <div>Docker</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart10"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.65}
          />
          <div>AWS、GCP、DigitalOcean</div>
        </div>
        <div className="skillChartBox">
          <GaugeChart id="gauge-chart11"
            nrOfLevels={30}
            colors={["#FF5F6D", "#FFC371"]}
            textColor="#ECF5FF"
            arcWidth={0.3}
            percent={0.7}
          />
          <div>Shell Script</div>
        </div>
      </div>
    </div>
  );
}
