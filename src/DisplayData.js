import React from "react";

const DisplayData = ({ array }) => {
  return (
    <div>
      <div className="root">
        {array.map(({id, company, logo, postedAt, contract, location, languages }) => {
          return (
            <div key={id} className="card--container">
              <div className="card--logo">{logo}</div>
              <div className="card--logo--header">
                <div className="company">{company}</div>
                <button className="btn--new"
                        // {new===true ? "btn--new" : null}
                        >NEW!</button>
                <button className="btn--featured"
                        // {featured===true ? "btn--featured" : null}
                        >FEATURED</button>
              </div>
              <div className="card--details">
                <ul>
                  <li>{postedAt}</li>
                  <li>{contract}</li>
                  <li>{location}</li>
                </ul>
              </div>
              <div className="card--languages">
                  {languages.map((index)=>{
                    return (
                    <button key={index} className="lang">{languages}</button>
                    )
                  })}
        
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayData;
