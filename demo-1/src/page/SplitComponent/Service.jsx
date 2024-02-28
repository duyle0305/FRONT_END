import React from "react";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        {/* Page Features*/}
        <div className="row gx-lg-5">
          <ServiceItem title="Title 1" description="Description 1" />
          <ServiceItem title="Title 2" description="Description 2" />
          <ServiceItem title="Title 3" description="Description 3" />
          <ServiceItem title="Title 4" description="Description 4" />
          <ServiceItem title="Title 5" description="Description 5" />
          <ServiceItem title="Title 6" description="Description 6" />
          <ServiceItem
            title="Title 7"
            description="Description 7"
          >12345</ServiceItem>
        </div>
      </div>
    </section>
  );
};

export default Service;
