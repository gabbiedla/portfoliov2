import './Timeline.css';

function Timeline() {
  return (
    <div>
      {/* <h2>Wins</h2> */}
      <div className="timelineContainer">
        <div className="container left">
          <div className="content">
            <p className="Joined">
              Joined <strong>Epson</strong> as <strong>Product Manager</strong>
            </p>
            <p className="date">Jan 2021</p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">Led Landing Page Revamp</h3>
            <p className="description">Contributed Digital Media expertise</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p className="date">Current</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p>
              Joined <strong>Bird</strong> as{' '}
              <strong>Operations Specialist</strong> on{' '}
              <strong>Marketplace</strong> team
            </p>
            <p className="date">Mar 2018</p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">
              Strategically Identified Vehicle Deployment Locations for Market
              Launches and Expansions
            </h3>
            <p className="description">testing</p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">
              Managed Product Requests for the Marketplace Team
            </h3>
            <p className="description">testing</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p>
              Promoted to <strong>Global Vendor Associate</strong>
            </p>
            <p className="date">Oct 2018</p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">
              Responsible for Outsourcing and Managing Global Support
            </h3>
            <p className="description">testing</p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">
              Responsible for Managing Image Review Internal Tooling
            </h3>
            <p className="description">testing</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p className="date">Apr 2020</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p>
              Joined <strong>Uber</strong> as{' '}
              <strong>Account Specialist</strong>
            </p>
            <p className="date">Apr 2017</p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">
              Produced Top Numbers for Pilot Projects
            </h3>
            <p className="description">testing</p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <p className="date">Mar 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
