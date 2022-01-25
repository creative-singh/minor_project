import React from 'react';

const AboutCard = (props) => {
  return (
    <div class="card mb-3" style={{ maxWidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={props.imgsrc} class="img-fluid rounded-start" alt={props.mame} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.title}</p>
            <p class="card-text"><small class="text-muted">{props.text}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
