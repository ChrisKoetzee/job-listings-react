import React from "react";

const DisplayData = ({ array }) => {
  return (
    <div>
      <div className="root">
        {array.map(({ id, company, logo, postedAt, contract, location, languages, featured, New }) => {
            return (
              <div key={id} className="card--container">
                <div className="card--logo"><img src={logo} alt="logo"/></div>
                <div className="card--logo--header">
                  <div className="company">{company}</div>
                  <div className="card--buttons">
                    {New===true ? <button className="btn--new">NEW!</button> : null}
                    {featured===true ? <button className="btn--featured">FEATURED</button> : null}
                  </div>
                </div>
                <div className="card--details">
                  <span> . {postedAt}</span>
                  <span> . {contract}</span>
                  <span> . {location}</span>
                </div>
                <div className="card--languages">
                  {languages.map((lang, index) => {
                    return (
                      <button key={index} className="lang">
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default DisplayData;
