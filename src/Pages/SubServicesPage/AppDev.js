import React from 'react';
import appDev from "../../images/s2.jpg";
import subAppDev from "../../images/subPagesImgs/sub-mobile-dev.png";

const AppDev = () => {
  return (
    <div className="container pb-5">
      <img src={appDev} alt="app dev" className="pt-4" style={{ width: "100%", maxHeight: "340px", objectFit: "cover" }} />

      <h1 className="my-5">Application Development</h1>

      <p><b>Application development</b> is the process of creating a computer program or a set of programs to perform the different tasks that a business requires. From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency.</p>

      <p>Every app-building process follows the same steps: </p>

      <ul>
        <li>Gathering Requirements,</li>
        <li>Designing Prototypes,</li>
        <li>Testing,</li>
        <li>Implementation,</li>
        <li>Integration.</li>
      </ul>

      <div className="text-center py-4">
        <img src={subAppDev} alt="sub page of app dev" width="50%" height="200px" style={{ objectFit: "scale-down" }} />
      </div>

      <p><b>App Development</b> is the process in which developers create an application to be used on smartphones, tablets and other mobile devices. While app development sometimes involves creating a web-based app or a desktop version of the app, the majority of app development projects are deployed to mobile and tablet devices. There are many features and considerations that factor into app development.</p>

      <p>Key Features Of <b>Mobile Applications</b></p>

      <ul>
        <li>Push Notifications.</li>
        <li>Integrations And Enhancements.</li>
        <li>Speed And Security.</li>
      </ul>

      <ol>
        <li><b>Push notifications</b> are an example of a feature often used by app developers. These notifications or messages create a direct line of communication between businesses and customers. Instead of developing cold email lists or sending out targeted ads, push notifications work to establish a direct text or email relationship with users that already utilize your mobile application to further increase their interest in your brand.</li>
        <br />
        <li>Another example of popular mobile app features include one-click contact, QR scanner integration, Google Indoor-Maps, and augmented reality. Many businesses also rely on customized content, system functionality, and layouts to create a visual design that is both attractive and functional. <b>Integrations</b> with other existing applications or technologies can also improve the overall experience for the user.</li>
        <br />
        <li>While these may seem like obvious features, speed and security are critical to app development. If an application uses technologies that are cookie-cutter, outdated, slow or difficult to secure, it will likely be outperformed by custom applications that are fast, responsive and provide a sense of security to the user. Every custom app development project should produce a fast and secure product at minimum to be considered a success.</li>
      </ol>

    </div>
  )
};

export default AppDev;
