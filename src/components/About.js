import React from 'react';
import Navbar from './NavBar';

const AboutPage = () => {
  return (
    <><Navbar /><div className="about-page" style={{ marginTop: "5rem" }}>
          <h1>About Milley Insurance</h1>
          <p>
              At Milley Insurance, we believe in safeguarding what matters most to
              you. Established with a commitment to provide reliable protection and
              personalized service, Milley Insurance is your trusted partner in
              navigating life's uncertainties.
          </p>
          <h2>Our Mission</h2>
          <p>
              Our mission is to offer comprehensive insurance solutions tailored to
              your unique needs, ensuring peace of mind and financial security for
              you and your loved ones.
          </p>
          <h2>Why Choose Milley Insurance?</h2>
          <ul>
              <li>
                  <strong>Personalized Service:</strong> We understand that every
                  individual and business is different. Our dedicated agents work
                  closely with you to understand your specific requirements and provide
                  personalized insurance solutions.
              </li>
              <li>
                  <strong>Reliable Coverage:</strong> With Milley Insurance, you can
                  rest assured that you're backed by reliable coverage from top-rated
                  insurance carriers. We offer a wide range of insurance products,
                  including auto, home, life, health, and business insurance.
              </li>
              <li>
                  <strong>Exceptional Customer Care:</strong> Your satisfaction is our
                  priority. Our team is committed to delivering exceptional customer
                  service, whether you have questions about your policy or need
                  assistance filing a claim.
              </li>
              <li>
                  <strong>Community Involvement:</strong> At Milley Insurance, we
                  believe in giving back to the communities we serve. We actively
                  support local initiatives and charities, striving to make a positive
                  impact where it matters most.
              </li>
          </ul>
          <h2>Get in Touch</h2>
          <p>Contact us at support@milleyinsurance.com for more information.</p>
      </div></>
  );
};

export default AboutPage;
