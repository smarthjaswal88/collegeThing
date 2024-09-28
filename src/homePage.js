import React from "react";
import style from "./homePage.css";

function HomePage() {
  return (
    <div className="homeScreen">
     <header className="header flex items-center justify-between p-3 md:p-4 sticky top-0 z-50 bg-black text-white">
        <div className="imageFile h-12 w-12 md:h-16 md:w-16 object-contain rounded-m"></div>
        <div className="text-center flex-1">
          <h1 className="text-2xl md:text-3xl font-bold">SOS Connect</h1>
          <p className="text-sm md:text-base mt-1">
            Where Help is Always Just a Click Away
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto mt-6 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl md:text-2xl font-semibold section-title">
            Introduction
          </h2>
          <p className="mt-4 text-sm md:text-lg">
            With just a single tap, the SOS Connect app connects you to
            emergency services and your loved ones. You can authorize it to turn
            on your camera and microphone for live streaming to family members,
            keeping them informed. SOS Connect isn't just an app—it's a
            comprehensive safety solution tailored to your lifestyle. With its
            intuitive design and robust features, SOS Connect empowers you to
            navigate your world with confidence and assurance.
          </p>
        </section>
      </div>

      <div className="max-w-4xl mx-auto mt-6 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl md:text-2xl font-semibold section-title">
            What Problems Will SOS Connect Solve?
          </h2>
          <p className="mt-4 text-sm md:text-lg">
            Personal safety concerns are escalating due to rising incidents of
            harassment, attacks, and emergencies across both urban and remote
            locations. These concerns are compounded by the lack of immediate
            help, including delays in response times from emergency services and
            challenges in alerting others during distressing situations. While
            traditional safety apps and services offer some level of protection,
            they often fall short in real-time response and accuracy,
            highlighting the need for more effective and responsive solutions.
          </p>
        </section>
      </div>

      <div className="max-w-4xl mx-auto mt-6 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6 bg-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold section-title">
            How is AI Going to Help?
          </h2>
          <p className="mt-4 text-sm md:text-lg">
            SOS Connect uses AI to provide predictive alerts, voice recognition
            for hands-free SOS activation, and real-time data analytics. It
            helps with safer route suggestions and warns users of potential
            risks by analyzing live data like location and weather.
          </p>
        </section>
      </div>

      <div className="max-w-4xl mx-auto mt-6 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl md:text-2xl font-semibold section-title">
            Features of Our App
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-3">
            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">
                Personalized Safety Recommendations
              </h3>
              <p className="text-sm mt-2">
                Our app analyzes your behavior and preferences to suggest
                personalized safety recommendations, ensuring you’re always
                protected in real-time.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">
                Real-time Threat Detection
              </h3>
              <p className="text-sm mt-2">
                With cutting-edge AI and live data analysis, SOS Connect detects
                threats around you in real-time, providing instant alerts.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">
                Continuous Learning for Improved Alerts
              </h3>
              <p className="text-sm mt-2">
                Our system continuously learns from new data and feedback,
                refining its algorithms to improve safety alerts and
                recommendations.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto mt-6 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6 bg-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold section-title">
            How is SOS Connect a Good Business Solution?
          </h2>
          <p className="mt-4 text-sm md:text-lg">
            The growing demand for personal safety solutions, coupled with
            cutting-edge AI for real-time threat assessment, positions SOS
            Connect as a key player. We offer monetization strategies through
            subscription models and partnerships with insurance companies and
            security firms.
          </p>
        </section>
      </div>

      <div className="max-w-4xl mx-auto mt-6 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl md:text-2xl font-semibold section-title">
            How is Our Business Viable?
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">
                Technology Infrastructure
              </h3>
              <p className="text-sm mt-2">
                Leveraging existing AI technology and cloud services for
                scalability and reliability, ensuring seamless performance even
                during high demand.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">Cost Structure</h3>
              <p className="text-sm mt-2">
                Initial investment in development and AI training, with ongoing
                costs for server maintenance, updates, and customer support to
                ensure long-term sustainability.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">Revenue Streams</h3>
              <p className="text-sm mt-2">
                Multiple revenue models, including subscriptions and
                partnerships, provide diversified income and financial stability
                for the business.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold">Market Entry Strategy</h3>
              <p className="text-sm mt-2">
                Targeted marketing campaigns to safety-conscious consumers and
                collaborations with safety organizations and tech influencers
                will help boost brand credibility and market penetration.
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-center p-4 sm:p-6 md:p-8 bg-black text-[white] mt-8">
        <p className="text-sm md:text-base">
          Help is always just a click away with SOS Connect.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
