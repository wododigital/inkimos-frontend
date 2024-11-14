import React, {useEffect} from 'react';

const PrivacyPolicy = React.memo(() => {
  const websiteUrl = "www.inkimos.com";

  useEffect(() => {
     window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-12 py-24 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      
      <p className="mb-4">
        At <span className="text-pink-600">{websiteUrl}</span>, accessible from <span className="text-pink-600">https://inkimos.com/</span>, one of our primary concerns is the privacy of our visitors. This Privacy Policy document outlines the types of information collected and recorded by <span className="text-pink-600">{websiteUrl}</span> and how we use it.
      </p>

      <p className="mb-4">
        If you have additional questions or require further details about our Privacy Policy, please feel free to contact us.
      </p>

      <p className="mb-6">
        This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding the information that they share and/or collect on <span className="text-pink-600">{websiteUrl}</span>. This policy is not applicable to any information collected offline or via channels other than this website.
      </p>

      <h2 className="text-xl font-bold mb-3">Consent</h2>
      <p className="mb-6">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

      <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
      <p className="mb-4">The personal information we ask you to provide and the reasons why you're asked to provide it will be made clear to you at the point we ask for your information.</p>
      <p className="mb-4">If you contact us directly, we may receive additional details about you such as your name, email address, phone number, the contents of your message, any attachments, and any other information you choose to share.</p>
      <p className="mb-6">When you register for an account, we may ask for contact information such as your name, company name, address, email address, and phone number.</p>

      <h2 className="text-xl font-bold mb-3">How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect in a variety of ways, including to:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, updates, and marketing or promotional purposes</li>
        <li>Send you emails</li>
        <li>Detect and prevent fraud</li>
      </ul>

      <h2 className="text-xl font-bold mb-3">Log Files</h2>
      <p className="mb-6">
        <span className="text-pink-600">{websiteUrl}</span> follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This information is not linked to anything personally identifiable but is used for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
      </p>

      <h2 className="text-xl font-bold mb-3">Cookies and Web Beacons</h2>
      <p className="mb-6">
        Like many websites, <span className="text-pink-600">{websiteUrl}</span> uses "cookies." These cookies are used to store information including visitors' preferences and the pages they accessed on the website. The information is used to optimize users' experience by customizing web page content based on visitors' browser type and/or other data.
      </p>

      <h2 className="text-xl font-bold mb-3">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
      <p className="mb-4">Under the CCPA, California consumers have the right to:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>Request that a business disclose the categories and specific pieces of personal data collected about them.</li>
        <li>Request that a business delete any personal data collected about them.</li>
        <li>Request that a business that sells personal data not sell the consumer's personal data.</li>
      </ul>
      <p className="mb-6">If you make a request, we have one month to respond. To exercise any of these rights, please contact us.</p>

      <h2 className="text-xl font-bold mb-3">GDPR Data Protection Rights</h2>
      <p className="mb-4">We want you to be fully aware of your data protection rights. Every user is entitled to the following:</p>
      <ul className="list-disc pl-8 mb-6">
        <li>The right to access – You have the right to request copies of your personal data. A small fee may be charged for this service.</li>
        <li>The right to rectification – You have the right to request corrections to any inaccurate or incomplete information.</li>
        <li>The right to erasure – You have the right to request deletion of your personal data under certain conditions.</li>
        <li>The right to restrict processing – You have the right to request restricted processing of your personal data under certain conditions.</li>
        <li>The right to object to processing – You have the right to object to the processing of your personal data under certain conditions.</li>
        <li>The right to data portability – You have the right to request the transfer of your data to another organization or directly to you under certain conditions.</li>
      </ul>

      <h2 className="text-xl font-bold mb-3">Children's Information</h2>
      <p className="mb-4">Another priority is protecting children while using the internet. We encourage parents and guardians to observe, participate in, and monitor their online activity.</p>
      <p className="mb-6">
        <span className="text-pink-600">{websiteUrl}</span> does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided such information on our website, please contact us, and we will do our best to promptly remove it from our records.
      </p>

      <h2 className="text-xl font-bold mb-3">Changes to This Privacy Policy</h2>
      <p className="mb-6">We may update our Privacy Policy periodically. We advise reviewing this page for any changes. Any changes will be effective immediately upon posting on this page.</p>

      <h2 className="text-xl font-bold mb-3">Contact Us</h2>
      <p className="mb-4">If you have questions or suggestions about our Privacy Policy, please contact us.</p>
    </div>
  );
});

export default PrivacyPolicy;