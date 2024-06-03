import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to Mbele</h1>
      <h2 className="text-xl">Transforming Service Requests in Nairobi, Kenya</h2>
      <p>
        <strong>Mbele</strong> is a revolutionary peer-to-peer service request platform designed to meet the needs of upper-middle-class households in Nairobi. We provide a reliable, convenient, and safe way to request popular services within a 25KM radius, ensuring adherence to local regulations.
      </p>
      
      <h3 className="text-lg font-semibold">Why Choose Mbele?</h3>
      <ul className="list-disc list-inside">
        <li><strong>Safety & Reliability</strong>: All service providers are thoroughly vetted to ensure your safety and satisfaction.</li>
        <li><strong>Convenience</strong>: Easily request services within your neighborhood and get prompt responses.</li>
        <li><strong>Wide Range of Services</strong>: From home cleaning and plumbing to tutoring and delivery services, Mbele has got you covered.</li>
      </ul>
      
      <h3 className="text-lg font-semibold">Our Services</h3>
      <h4 className="text-md font-medium">Skilled Labor Services</h4>
      <ul className="list-disc list-inside ml-4">
        <li>Plumbing</li>
        <li>Electrical repairs</li>
        <li>Tutoring</li>
        <li>Mechanics</li>
        <li>Handymen</li>
        <li>Drivers</li>
      </ul>
      
      <h4 className="text-md font-medium">Unskilled Labor Services</h4>
      <ul className="list-disc list-inside ml-4">
        <li>Home cleaning</li>
        <li>Delivery services</li>
        <li>Maids</li>
      </ul>
      
      <h3 className="text-lg font-semibold">How It Works</h3>
      <ol className="list-decimal list-inside ml-4">
        <li><strong>Request a Service</strong>: Use our platform to request any service you need within a 25KM radius.</li>
        <li><strong>Safety Assured</strong>: We ensure all services adhere to local safety and regulatory standards.</li>
        <li><strong>Service at Your Convenience</strong>: Make requests during specified hours, with all requests past 6 PM processed the next day.</li>
      </ol>
      
      <h3 className="text-lg font-semibold">Join Our Community</h3>
      <h4 className="text-md font-medium">Service Providers</h4>
      <ul className="list-disc list-inside ml-4">
        <li>Verified and trained professionals</li>
        <li>Advanced scheduling options</li>
        <li>Quality assurance through ratings and reviews</li>
      </ul>
      
      <h4 className="text-md font-medium">Users</h4>
      <ul className="list-disc list-inside ml-4">
        <li>Background-checked service providers</li>
        <li>On-demand availability</li>
        <li>Customizable preferences for repeat services</li>
      </ul>
      
      <h3 className="text-lg font-semibold">Ready to Get Started?</h3>
      <p>Join Mbele today and experience the future of peer-to-peer service requests. Whether you need a quick home repair or a reliable cleaning service, Mbele is here to make your life easier.</p>
    </div>
  );
};

export default HomePage;
