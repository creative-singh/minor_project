import React from 'react';
import cloudApp from "../../images/s5.jpg";
import subCloudApp from "../../images/subPagesImgs/sub-cloud-dev.png";

const CloudApp = () => {
  return (
    <div className="container pb-5">
      <img src={cloudApp} alt="cloud dev" className="pt-4" style={{ width: "100%", maxHeight: "340px", objectFit: "cover" }} />

      <h1 className="my-5">Cloud Application</h1>

      <p><b>Cloud Application</b> simply refers to any software application that is deployed in a cloud environment rather than being hosted on a local server or machine. The term "cloud environment" describes how an IT organization has configured its IT infrastructure to support cloud applications.</p>

      <div className="text-center py-4">
        <img src={subCloudApp} alt="sub page of cloud app dev" width="50%" />
      </div>

      <p>Cloud Application  Development</p>

      <ol>
        <li><b>Know what Applications are Good Candidates for Cloud Deployment</b> -
          <br />
          Older legacy applications running on mainframes simply aren't meant to be moved into the cloud, and for some complex applications, migrating them to a cloud-based model might necessitate a complete rewrite of the application. Organizations need to accept that not all of their existing infrastructure can be easily deployed to the cloud, but there are times when the effort of re-architecting an existing application can be justified.
          <br /> Ultimately, IT organizations need to conduct due diligence investigations to understand what modifications will be required to prepare an application for cloud deployment.</li>
        <br />

        <li><b>Choose the Best Deployment Model for Your Needs</b> -
          <br />
          Each new cloud application deployment requires IT organizations to make a decision about how the application should be hosted. Using a private cloud environment is more costly, as you'll miss out on the savings associated with flexible data capacity and your organization must host the infrastructure on-site.
          <br />
          Meanwhile, public cloud services offer the best value but may not be ideal for your most sensitive data. Privacy, security and cost are all key concerns when deciding how to deploy a cloud application.</li>
        <br />


        <li><b>Focus on Deployment vs Migration</b> -
          <br />
          When an organization makes the decision to move away from the traditional data center operation paradigm and towards a private cloud configuration, it is often motivated by a desire to consolidate applications and infrastructure spread across servers.
          <br />
          While consolidating servers can lead to cost reduction, application deployment should be the focus of cloud service implementation.</li>
        <br />

        <li><b>Plan for Changes in Application Performance</b> -
          <br />
          Before an app is deployed in the cloud, your organization should bench mark its performance in the traditional data center environment and determine a minimum acceptable standard. The cloud environment functions much different than a physical server, so you will have to monitor the performance of a newly deployed cloud application and optimize it over time.
        </li>
        <br />

        <li><b>Invest in New Monitoring Tools for Your Cloud Application</b> -
          <br />
          The monitoring tools that were sufficient in traditional IT environments are no longer effective for the cloud. Organizations that depend on cloud applications use purpose-built monitoring tools called cloud management platforms (CMPs) to keep track of security threats, compliance status and application performance across all cloud systems.
        </li>
        <br />
      </ol>
    </div>
  )
};

export default CloudApp;
