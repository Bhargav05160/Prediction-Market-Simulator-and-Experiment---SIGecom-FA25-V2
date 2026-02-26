import { useState } from 'react';


// Privacy Policy Page
// Terms generated using Termly
// Converted into JSX from HTML using Claude

const sections = [
  { id: "infocollect", title: "1. What Information Do We Collect?" },
  { id: "infouse", title: "2. How Do We Process Your Information?" },
  { id: "whoshare", title: "3. When and With Whom Do We Share Your Personal Information?" },
  { id: "inforetain", title: "4. How Long Do We Keep Your Information?" },
  { id: "infosafe", title: "5. How Do We Keep Your Information Safe?" },
  { id: "infominors", title: "6. Do We Collect Information From Minors?" },
  { id: "privacyrights", title: "7. What Are Your Privacy Rights?" },
  { id: "DNT", title: "8. Controls for Do-Not-Track Features" },
  { id: "uslaws", title: "9. Do United States Residents Have Specific Privacy Rights?" },
  { id: "policyupdates", title: "10. Do We Make Updates to This Notice?" },
  { id: "contact", title: "11. How Can You Contact Us About This Notice?" },
  { id: "request", title: "12. How Can You Review, Update, or Delete the Data We Collect From You?" },
];

const dataCategories = [
  { category: "A. Identifiers", examples: "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name", collected: "NO" },
  { category: "B. Personal information as defined in the California Customer Records statute", examples: "Name, contact information, education, employment, employment history, and financial information", collected: "NO" },
  { category: "C. Protected classification characteristics under state or federal law", examples: "Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data", collected: "NO" },
  { category: "D. Commercial information", examples: "Transaction information, purchase history, financial details, and payment information", collected: "NO" },
  { category: "E. Biometric information", examples: "Fingerprints and voiceprints", collected: "NO" },
  { category: "F. Internet or other similar network activity", examples: "Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements", collected: "NO" },
  { category: "G. Geolocation data", examples: "Device location", collected: "NO" },
  { category: "H. Audio, electronic, sensory, or similar information", examples: "Images and audio, video or call recordings created in connection with our business activities", collected: "NO" },
  { category: "I. Professional or employment-related information", examples: "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us", collected: "NO" },
  { category: "J. Education Information", examples: "Student records and directory information", collected: "NO" },
  { category: "K. Inferences drawn from collected personal information", examples: "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics", collected: "NO" },
  { category: "L. Sensitive personal Information", examples: "", collected: "NO" },
];

const CONTACT_EMAIL = "howardc3@illinois.edu";

function SectionHeading({ id, children }) {
  return (
    <h2 id={id} style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111", marginTop: "2rem", marginBottom: "0.5rem", fontFamily: "'Georgia', serif" }}>
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#222", marginTop: "1.25rem", marginBottom: "0.4rem" }}>
      {children}
    </h3>
  );
}

function BodyText({ children, style }) {
  return (
    <p style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "0.75rem", ...style }}>
      {children}
    </p>
  );
}

function EmailLink({ email }) {
  return <a href={`mailto:${email}`} style={{ color: "#1a56db" }}>{email}</a>;
}

function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#1a56db" }}>{children}</a>;
}

function InternalLink({ href, children }) {
  return <a href={href} style={{ color: "#1a56db" }}>{children}</a>;
}


function PrivacyPolicy() {
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 860, margin: "0 auto", padding: "2rem 1.5rem", background: "#fff", color: "#333" }}>
      {/* Header */}
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#000", marginBottom: "0.25rem" }}>PRIVACY POLICY</h1>
      <p style={{ color: "#595959", fontSize: "0.875rem", marginBottom: "2rem" }}>Last updated February 25, 2026</p>

      {/* Intro */}
      <BodyText>
        This Privacy Notice for <strong>SIGEcom</strong> ("we," "us," or "our") describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
      </BodyText>
      <ul style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
        <li>Visit our website at <ExternalLink href="http://localhost:5173/">http://localhost:5173/</ExternalLink>, or any website of ours that links to this Privacy Notice</li>
        <li>Engage with us in other related ways, including any marketing or events</li>
      </ul>
      <BodyText>
        <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <EmailLink email={CONTACT_EMAIL} />.
      </BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Summary */}
      <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>SUMMARY OF KEY POINTS</h2>
      <BodyText><em><strong>This summary provides key points from our Privacy Notice.</strong> You can find more details by using our <InternalLink href="#toc">table of contents</InternalLink> below.</em></BodyText>

      {[
        ["What personal information do we process?", <>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us. Learn more about <InternalLink href="#personalinfo">personal information you disclose to us</InternalLink>.</>],
        ["Do we process any sensitive personal information?", "We do not process sensitive personal information."],
        ["Do we collect any information from third parties?", "We do not collect any information from third parties."],
        ["How do we process your information?", <>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. Learn more about <InternalLink href="#infouse">how we process your information</InternalLink>.</>],
        ["In what situations and with which parties do we share personal information?", <>We may share information in specific situations and with specific third parties. Learn more about <InternalLink href="#whoshare">when and with whom we share your personal information</InternalLink>.</>],
        ["How do we keep your information safe?", <>We have adequate organizational and technical processes and procedures in place to protect your personal information. Learn more about <InternalLink href="#infosafe">how we keep your information safe</InternalLink>.</>],
        ["What are your rights?", <>Depending on where you are located geographically, you may have certain rights regarding your personal information. Learn more about <InternalLink href="#privacyrights">your privacy rights</InternalLink>.</>],
        ["How do you exercise your rights?", <>The easiest way is by submitting a <ExternalLink href="https://app.termly.io/dsar/b2a4c784-23ef-4d1e-a723-9234696a0da6">data subject access request</ExternalLink>, or by contacting us.</>],
      ].map(([q, a], i) => (
        <div key={i} style={{ marginBottom: "0.75rem" }}>
          <BodyText><strong>{q}</strong> {a}</BodyText>
        </div>
      ))}

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Table of Contents */}
      <h2 id="toc" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111", marginBottom: "0.75rem" }}>TABLE OF CONTENTS</h2>
      <nav>
        {sections.map((s) => (
          <div key={s.id} style={{ marginBottom: "0.25rem" }}>
            <InternalLink href={`#${s.id}`}>{s.title}</InternalLink>
          </div>
        ))}
      </nav>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 1 */}
      <SectionHeading id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</SectionHeading>
      <SubHeading>Personal information you disclose to us</SubHeading>
      <BodyText><em><strong>In Short:</strong> We collect personal information that you provide to us.</em></BodyText>
      <BodyText>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</BodyText>
      <BodyText><strong>Personal Information Provided by You.</strong> The personal information we collect may include the following:</BodyText>
      <ul style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
        <li>email addresses</li>
        <li>usernames</li>
        <li>passwords</li>
      </ul>
      <BodyText><strong>Sensitive Information.</strong> We do not process sensitive information.</BodyText>
      <BodyText>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 2 */}
      <SectionHeading id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></BodyText>
      <BodyText><strong>We process your personal information for a variety of reasons, including:</strong></BodyText>
      <ul style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
        <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
        <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
        <li><strong>To administer prize draws and competitions.</strong> We may process your information to administer prize draws and competitions.</li>
      </ul>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 3 */}
      <SectionHeading id="whoshare">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</em></BodyText>
      <BodyText>We may need to share your personal information in the following situations:</BodyText>
      <ul style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
        <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
      </ul>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 4 */}
      <SectionHeading id="inforetain">4. HOW LONG DO WE KEEP YOUR INFORMATION?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></BodyText>
      <BodyText>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</BodyText>
      <BodyText>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible, we will securely store your personal information and isolate it from any further processing until deletion is possible.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 5 */}
      <SectionHeading id="infosafe">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</em></BodyText>
      <BodyText>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 6 */}
      <SectionHeading id="infominors">6. DO WE COLLECT INFORMATION FROM MINORS?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</em></BodyText>
      <BodyText>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <EmailLink email={CONTACT_EMAIL} />.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 7 */}
      <SectionHeading id="privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></BodyText>
      <SubHeading>Withdrawing your consent</SubHeading>
      <BodyText>If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time by contacting us using the contact details provided in the section <InternalLink href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</InternalLink> below. Please note that this will not affect the lawfulness of the processing before its withdrawal.</BodyText>
      <SubHeading>Account Information</SubHeading>
      <BodyText>If you would at any time like to review or change the information in your account or terminate your account, you can:</BodyText>
      <ul style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
        <li>Log in to your account settings and update your user account.</li>
      </ul>
      <BodyText>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</BodyText>
      <BodyText>If you have questions or comments about your privacy rights, you may email us at <EmailLink email={CONTACT_EMAIL} />.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 8 */}
      <SectionHeading id="DNT">8. CONTROLS FOR DO-NOT-TRACK FEATURES</SectionHeading>
      <BodyText>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</BodyText>
      <BodyText>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 9 */}
      <SectionHeading id="uslaws">9. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have certain rights regarding your personal information.</em></BodyText>

      <SubHeading>Categories of Personal Information We Collect</SubHeading>
      <BodyText>The table below shows the categories of personal information we have collected in the past twelve (12) months.</BodyText>

      <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem", color: "#595959" }}>
          <thead>
            <tr style={{ background: "#f9fafb" }}>
              <th style={{ border: "1px solid #d1d5db", padding: "0.6rem 0.75rem", textAlign: "left", fontWeight: 700 }}>Category</th>
              <th style={{ border: "1px solid #d1d5db", padding: "0.6rem 0.75rem", textAlign: "left", fontWeight: 700 }}>Examples</th>
              <th style={{ border: "1px solid #d1d5db", padding: "0.6rem 0.75rem", textAlign: "center", fontWeight: 700 }}>Collected</th>
            </tr>
          </thead>
          <tbody>
            {dataCategories.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                <td style={{ border: "1px solid #d1d5db", padding: "0.6rem 0.75rem", verticalAlign: "top" }}>{row.category}</td>
                <td style={{ border: "1px solid #d1d5db", padding: "0.6rem 0.75rem", verticalAlign: "top" }}>{row.examples}</td>
                <td style={{ border: "1px solid #d1d5db", padding: "0.6rem 0.75rem", textAlign: "center", verticalAlign: "middle" }}>{row.collected}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SubHeading>Sources of Personal Information</SubHeading>
      <BodyText>Learn more about the sources of personal information we collect in <InternalLink href="#infocollect">"WHAT INFORMATION DO WE COLLECT?"</InternalLink></BodyText>

      <SubHeading>How We Use and Share Personal Information</SubHeading>
      <BodyText>Learn more about how we use your personal information in <InternalLink href="#infouse">"HOW DO WE PROCESS YOUR INFORMATION?"</InternalLink></BodyText>
      <BodyText><strong>Will your information be shared with anyone else?</strong></BodyText>
      <BodyText>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in <InternalLink href="#whoshare">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</InternalLink></BodyText>
      <BodyText>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</BodyText>
      <BodyText>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</BodyText>

      <SubHeading>Your Rights</SubHeading>
      <BodyText>You have rights under certain US state data protection laws. These rights include:</BodyText>
      <ul style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
        <li><strong>Right to know</strong> whether or not we are processing your personal data</li>
        <li><strong>Right to access</strong> your personal data</li>
        <li><strong>Right to correct</strong> inaccuracies in your personal data</li>
        <li><strong>Right to request</strong> the deletion of your personal data</li>
        <li><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
        <li><strong>Right to non-discrimination</strong> for exercising your rights</li>
        <li><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</li>
      </ul>
      <BodyText>Depending upon the state where you live, you may also have additional rights including rights related to sensitive data, profiling, and disclosure of third-party data sharing.</BodyText>

      <SubHeading>How to Exercise Your Rights</SubHeading>
      <BodyText>To exercise these rights, you can contact us by submitting a <ExternalLink href="https://app.termly.io/dsar/b2a4c784-23ef-4d1e-a723-9234696a0da6">data subject access request</ExternalLink>, by emailing us at <EmailLink email={CONTACT_EMAIL} />, or by referring to the contact details at the bottom of this document.</BodyText>

      <SubHeading>Request Verification</SubHeading>
      <BodyText>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request.</BodyText>

      <SubHeading>Appeals</SubHeading>
      <BodyText>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <EmailLink email={CONTACT_EMAIL} />. We will inform you in writing of any action taken or not taken in response to the appeal. If your appeal is denied, you may submit a complaint to your state attorney general.</BodyText>

      <SubHeading>California "Shine The Light" Law</SubHeading>
      <BodyText>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes. Please submit your request in writing using the contact details provided in the section <InternalLink href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</InternalLink></BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 10 */}
      <SectionHeading id="policyupdates">10. DO WE MAKE UPDATES TO THIS NOTICE?</SectionHeading>
      <BodyText><em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></BodyText>
      <BodyText>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 11 */}
      <SectionHeading id="contact">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</SectionHeading>
      <BodyText>If you have questions or comments about this notice, you may contact us by post at:</BodyText>
      <div style={{ color: "#595959", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1rem", paddingLeft: "1rem", borderLeft: "3px solid #e5e7eb" }}>
        <div><strong>SIGEcom</strong></div>
        <div>__________</div>
        <div>__________</div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      {/* Section 12 */}
      <SectionHeading id="request">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</SectionHeading>
      <BodyText>You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <ExternalLink href="https://app.termly.io/dsar/b2a4c784-23ef-4d1e-a723-9234696a0da6">data subject access request</ExternalLink>.</BodyText>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "2rem 0" }} />

      <BodyText style={{ fontSize: "0.8rem", color: "#999" }}>
        This Privacy Policy was created using{" "}
        <ExternalLink href="https://termly.io/products/privacy-policy-generator/">Termly's Privacy Policy Generator</ExternalLink>.
      </BodyText>
    </div>
  );
}

export default PrivacyPolicy;