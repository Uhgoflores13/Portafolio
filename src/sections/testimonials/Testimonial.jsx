import React from "react";
import Card from "../../components/Card";
function Testimonial({ testimonial }) {
  return (
    <Card className="light">
      <p>{testimonial.quote}</p>
    <div className="testimonial__client">
      <div className="testimonial__client-avatar">
        <img src={testimonial.avatar} alt="testimonial avatar" />
      </div>
      <div className="testimonial__client">
        <h6>{testimonial.name}</h6>
        <small>{testimonial.profession}</small>
      </div>
      </div>
    </Card>
  );
}

export default Testimonial;
