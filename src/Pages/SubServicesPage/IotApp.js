import React from 'react';
import iotApp from "../../images/s4.jpg";
import iotAppSub from "../../images/subPagesImgs/iot-sub-page.png";

const IotApp = () => {
  return (
    <div className="container pb-5">
      <img src={iotApp} alt="iot app" className="pt-4" style={{ width: "100%", maxHeight: "340px", objectFit: "cover" }} />

      <h1 className="my-5">IoT Application</h1>

      <p><b>IoT applications</b> promise to bring immense value into our lives. With newer wireless networks, superior sensors and revolutionary computing capabilities, the Internet of Things could be the next frontier in the race for its share of the wallet.
        <br />
        IoT applications are expected to equip billions of everyday objects with connectivity and intelligence. It is already being deployed extensively.</p>

      <div className="text-center py-4">
        <img src={iotAppSub} alt="sub page of iot dev" width="50%" />
      </div>

      <p>Imagine an intelligent device such as a traffic camera. The camera can monitor the streets for traffic congestion, accidents, weather conditions, and communicate this data to a common gateway. This gateway also receives data from other such cameras and relays the information further to a city-wide traffic monitoring system.</p>

      <p>Now, take, for instance, the Municipal Corporation decides to repair a certain road. This may cause a traffic congestion on the way to a national highway. This insight is sent to the city-wide traffic monitoring system.</p>

      <p>IoT is essentially a platform where embedded devices are connected to the internet, so they can collect and exchange data with each other. It enables devices to interact, collaborate and, learn from each other’s experiences just like humans do.</p>

      <p>Some of the appication are: </p>

      <ol>
        <li>IoT Applications – Wearables.</li>
        <li>IoT Applications – Smart Home Applications.</li>
        <li>IoT Applications – Health Care.</li>
        <li>IoT Applications – Smart Cities.</li>
        <li>IoT Applications – Agriculture.</li>
      </ol>
    </div>
  )
};

export default IotApp;
