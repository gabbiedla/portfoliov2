import './Timeline.css';

function Timeline() {
  return (
    <div>
      <h2>Wins</h2>
      <div className="timelineContainer">
        <div className="container left">
          <div className="content">
            <h3>2022</h3>
            <p>Testing</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h3>2019</h3>
            <p>Testing</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h3>2018</h3>
            <p>Testing</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h3>2017</h3>
            <p>Testing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
