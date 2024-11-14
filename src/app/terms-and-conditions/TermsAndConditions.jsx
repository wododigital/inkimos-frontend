import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import  TermsSection from './TermsSection';

const TermsAndConditions = React.memo(() => {
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
      <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
      
      <div className="space-y-6">
        <p>
          Welcome to <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link>. By accessing and using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully. If you disagree with any part of these terms, you may not access the website.
        </p>

        <TermsSection title="1. Acceptance of Terms">
          <p>
            By using <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link>, you acknowledge that you have read, understood, and agreed to abide by these Terms and Conditions. These Terms apply to all visitors, users, and others who access or use our website.
          </p>
        </TermsSection>

        <TermsSection title="2. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on this page. Your continued use of <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link> following any changes indicates your acceptance of the revised Terms. We advise you to review this page periodically for any updates.
          </p>
        </TermsSection>

        <TermsSection title="3. Use of the Website">
          <ul className="list-none space-y-2">
            <li><strong>Eligibility:</strong> By using our site, you confirm that you are at least 13 years of age. If you are under 13, you may only use this site under the supervision of a parent or guardian.</li>
            <li><strong>License:</strong> Inkimos grants you a limited, non-exclusive, non-transferable license to use the website solely for personal, non-commercial use.</li>
            <li>
              <strong>Restrictions:</strong> You agree not to:
              <ul className="list-none ml-4 mt-1">
                <li>• Use the website for any illegal purpose or in violation of any laws;</li>
                <li>• Attempt to gain unauthorized access to any portion or feature of the website, or any other systems or networks connected to the website;</li>
                <li>• Disrupt or interfere with the security or operation of the website or its content.</li>
              </ul>
            </li>
          </ul>
        </TermsSection>

        <TermsSection title="4. Content Ownership and Use">
          <p>
            All content on <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link>, including text, images, graphics, and other material, is the property of Inkimos or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works of our content without our express permission.
          </p>
        </TermsSection>

        <TermsSection title="5. User Accounts">
          <p>To access certain features of our website, you may need to register for an account. When you create an account, you agree to:</p>
          <ul className="list-none ml-4 mt-2">
            <li>• Provide accurate and complete information;</li>
            <li>• Maintain the confidentiality of your account credentials;</li>
            <li>• Notify us immediately of any unauthorized use of your account or other security breaches.</li>
          </ul>
          <p className="mt-2">Inkimos reserves the right to suspend or terminate your account if you violate these Terms or engage in unauthorized activities.</p>
        </TermsSection>

        <TermsSection title="6. Privacy">
          <p>
            Our Privacy Policy governs the collection and use of personal information on <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link>. By using our website, you agree to our Privacy Policy. We encourage you to review our Privacy Policy to understand our practices.
          </p>
        </TermsSection>

        <TermsSection title="7. Third-Party Links">
          <p>
            <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link> may contain links to third-party websites that are not owned or controlled by Inkimos. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. By accessing these third-party links, you do so at your own risk.
          </p>
        </TermsSection>

        <TermsSection title="8. Disclaimer of Warranties">
          <p>
            Inkimos provides the website on an "as-is" and "as-available" basis. We make no representations or warranties of any kind, express or implied, regarding the operation or availability of our website or the information, content, or materials included on it. You agree that your use of the website is at your own risk.
          </p>
        </TermsSection>

        <TermsSection title="9. Limitation of Liability">
          <p>
            In no event shall Inkimos, its directors, employees, or affiliates, be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of, or inability to use, our website or services. Some jurisdictions do not allow the exclusion or limitation of liability for certain damages, so the above limitation may not apply to you.
          </p>
        </TermsSection>

        <TermsSection title="10. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless Inkimos and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses arising from or related to your use of <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link> or violation of these Terms.
          </p>
        </TermsSection>

        <TermsSection title="11. Governing Law">
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms shall be resolved exclusively in the courts of [Your Jurisdiction].
          </p>
        </TermsSection>

        <TermsSection title="12. Termination">
          <p>
            We reserve the right to suspend or terminate your access to <Link href="https://www.inkimos.com"  className='text-pink-600'>www.inkimos.com</Link> at our sole discretion, without notice, for any reason, including violation of these Terms.
          </p>
        </TermsSection>

        <TermsSection title="13. Contact Us">
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us.
          </p>
        </TermsSection>
      </div>


    </div>
  );
});

export default TermsAndConditions;