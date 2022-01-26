import React from 'react';
import appMarket from "../../images/s6.jpg";
import subAppMarketing from "../../images/subPagesImgs/sub-app-marketing.jpg";

const AppMarket = () => {
  return (
    <div className="container pb-5">
      <img src={appMarket} alt="app market" className="pt-4" style={{ width: "100%", maxHeight: "340px", objectFit: "cover" }} />

      <h1 className="my-5">App Marketing</h1>

      <p><b>App marketing</b> refers to the marketing of an application, or short app, that can be used on various mobile devices. App marketing aims to attract the largest possible number of users for an app or widget and thereby generate revenue.</p>

      <p><b>App marketing</b> can be classified as a part of mobile marketing, but differs from mobile marketing by focusing on apps, whereas in mobile marketing, mobile devices are considered to be the distribution channel for advertising.</p>

      <div className="text-center py-4">
        <img src={subAppMarketing} alt="sub page of app market" width="50%" />
      </div>

      <p>With the increasing use of mobile devices, apps and widgets have become popular as well. The number of smartphone users has grown steadily in recent years and as of February 2014 was more than 40 million in Germany alone.</p>

      <p>Apps are available in various designs and usually have very specialized functions which users regard as helpful. But before apps attract user attention, they must be marketed. In many cases this is handled by specialized agencies, but you can also do your own marketing providing you observe several basic rules.</p>

      <p>The typical way to think of mobile app usage is as a sequence of stages, or “funnel”. There are many funnel stages, but here’s a simplified view.</p>

      <ul>
        <li><b>Acquisition</b> is the first step in a user’s interaction with your app. How do you get them to download and install your app in the first place?</li>
        <br />

        <li><b>Activation</b> is next. The exact meaning of “user activation” differs from app to app, but in general, activation refers to a user’s first actions, such as adding their email address or making an initial purchase.</li>
        <br />

        <li><b>Retention</b> means turning your app into a regular destination for your user.</li>
        <br />
      </ul>

      <p>Mobile App Acquisition</p>

      <p>The first part of building a successful app is, of course, getting people to use it. From a messaging perspective, you have to convince a prospective user that your app can solve a problem they have. Some of the most common channels for sending these messages include:</p>

      <ul>
        <li><b>Social</b>
          <br />
          One of the most popular app acquisition channels. Unless you already have a large audience, paid social advertising, in particular, is likely to be the most effective channel. An even more effective channel, once your app has traction, is getting users of your app to recruit their friends as users.
        </li>
        <br />

        <li><b>Real-world incentives</b>
          <br />
          Offering a product giveaway, sweepstakes entry, or some other tangible reward in exchange for an app install is a common strategy. One pitfall of using real-world incentives is that users who sign up this way may end up immediately removing your app as soon as they’ve received their reward.
        </li>
        <br />
        <li><b>Search advertising.</b>
          <br />
          Google Play and Apple’s App Store both offer in-store advertising that app managers can purchase to drive downloads. Ads appear when users search for specific app keywords — for example, ads for mobile payment apps might appear when a user searches “send cash.” Search advertising can also be purchased through platforms like Google AdWords, so that someone searching Google from their phone for “buying a home” sees an ad for your real estate app. The link then goes directly to your app store page.
        </li>
        <br />

        <li><b>App cross-promotion.</b>
          <br />
          If you have more than one app, a good way to acquire users is to use one app to promote another. For example, if your company produces a restaurant database, you can put ads in it that refer to your travel app, since users who are interested in one might be interested in the other.
        </li>
        <br />

        <li><b>App store listing.</b>
          <br />
          App stores require text and picture descriptions of every app. Writing your listing thoughtfully is critical to convincing users to download it. The text in your listing influences, among other factors, whether users will see it as they look for apps in your category.
        </li>
        <br />
      </ul>
    </div>
  )
};

export default AppMarket;
