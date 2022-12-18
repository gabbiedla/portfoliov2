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
        <div className="container left dates">
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
            <p className="description">
              Determined vehicle deployment locations using internal and
              external data for new market launches (i.e., San Francisco,
              Austin, San Diego) helping the company surpass 1 million rides
              nationwide by April 2018 and 10 million rides by Sept 2018.
            </p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">
              Influenced the Functionality of Marketplace Tools
            </h3>
            <p className="description">
              Documented deployment location identification and creation
              processes along with feature product requests. This knowledge and
              product improvements were later used to improve our teams
              efficiency and eventually automating 50% of the process with a new
              tool called the drop engine. This engine was created to improve
              market profitability and # of rides.
            </p>
          </div>
        </div>
        <div className="container left dates">
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
            <p className="description">
              Helped reduce headcount costs by outsourcing customer support.
              Researched and implemented learning management tools to improve
              ticket resolution time, training, store documentation, and track
              knowledge retention.
            </p>
          </div>
        </div>
        <div className="sub-container sub-right">
          <div className="sub-content">
            <h3 className="sub-title">
              Responsible for Managing Image Review Internal Tooling
            </h3>
            <p className="description">
              Managed legal required global GovTech image processing tools used
              for QA, identity verification, and vehicle deployment in order to
              remain operational in all markets.
            </p>
            <p>
              Succesfully improved verification identification process by
              advocating for product improvements, which helped reduce 25k image
              backlog in two weeks. As a result we gained 25k new rides.
            </p>
          </div>
        </div>
        <div className="container left dates">
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
            <p className="description">
              Doubled the AVG number of user signups for Getaround Uber
              Partnership and UberEats Virtual Restaurants. As a result, the
              UberEats team was given the green-light to begin expansion
              efforts.
            </p>
          </div>
        </div>
        <div className="container left dates">
          <div className="content">
            <p className="date">Mar 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
