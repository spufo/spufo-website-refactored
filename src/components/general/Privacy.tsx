import React from 'react';
import background from '/assets/images/Background.png';

const PrivacyStatement = () => {
  return (
    <section className="relative bg-[#111] text-white overflow-hidden flex flex-col">
      {/* Dots Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="flex-grow flex flex-col max-w-5xl mx-auto py-24 px-6 mt-24 z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-[#00B7FF] mb-12 text-center">Privacy Statement</h1>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">General Information and Mandatory Information:</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-center">Name of the Responsible Entity</h3>
          <p className="text-lg mb-2 text-center">The responsible entity for data processing on this website is:</p>
          <p className="text-lg mb-2 text-center">Twojo Software GmbH</p>
          <p className="text-lg mb-2 text-center">c/o Hochschule Luzern - Informatik<br />
            Smart-up Campus Zug-Rotkreuz
          </p>
          <p className="text-lg mb-2 text-center">Suurstoffi 1<br />
            6343 Rotkreuz
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Withdrawal of Your Consent to Data Processing</h3>
          <p className="text-lg mb-2 text-center">Data processing is only possible with your explicit consent. You can withdraw your consent at any time. To withdraw, a simple message via email is sufficient. The legality of the data processing carried out until the withdrawal remains unaffected.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Right to Complain to the Supervisory Authority</h3>
          <p className="text-lg mb-2 text-center">As a data subject, you have the right to complain to the relevant supervisory authority in the event of a data protection violation. The relevant supervisory authority for data protection issues is the state data protection officer of the federal state in which our company is located. The following link provides a list of data protection officers and their contact details: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-[#00B7FF] hover:underline">Data Protection Officers</a>.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Right to Data Portability</h3>
          <p className="text-lg mb-2 text-center">You have the right to request data that we process automatically based on your consent or in fulfillment of a contract, in a structured, commonly used, and machine-readable format. If you request the direct transfer of data to another controller, this will only be done if technically feasible.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Right to Access, Rectification, Blocking, Deletion</h3>
          <p className="text-lg mb-2 text-center">You have the right to obtain information about your stored personal data free of charge at any time, including the origin of the data, its recipients, and the purpose of the data processing. You also have the right to request rectification, blocking, or deletion of this data. For this and any further questions regarding personal data, please contact us using the contact details provided in the Impressum.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">SSL or TLS Encryption</h3>
          <p className="text-lg mb-2 text-center">For security reasons and to protect the transmission of confidential content that you send to us as the site operator, our website uses SSL or TLS encryption. This means that the data you transmit via this website cannot be read by third parties. You can recognize an encrypted connection by the "https://" address bar of your browser and the lock symbol in the browser bar.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Server Log Files</h3>
          <p className="text-lg mb-2 text-center">The provider of the website automatically collects and stores information in server log files that your browser automatically transmits to us. This includes:</p>
          <ul className="text-lg mb-4 text-center list-disc list-inside">
            <li>Visited page on our domain</li>
            <li>Date and time of the server request</li>
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Hostname of the accessing computer</li>
            <li>IP address</li>
          </ul>
          <p className="text-lg mb-2 text-center">There is no merging of this data with other data sources. The legal basis for data processing is Article 6 (1) (b) of the GDPR, which permits the processing of data for the performance of a contract or pre-contractual measures.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Contact Form</h3>
          <p className="text-lg mb-2 text-center">Data transmitted via the contact form, including your contact details, will be stored to process your request or to address follow-up questions. This data will not be shared without your consent.</p>
          <p className="text-lg mb-2 text-center">The processing of the data entered in the contact form occurs solely on the basis of your consent (Article 6 (1) (a) GDPR). You can withdraw your consent at any time. For the withdrawal, a simple message via email is sufficient. The legality of the data processing carried out until the withdrawal remains unaffected.</p>
          <p className="text-lg mb-2 text-center">Data submitted via the contact form will remain with us until you request deletion, withdraw your consent to storage, or the necessity of data storage no longer exists. Mandatory statutory provisions – in particular retention periods – remain unaffected.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Cloudflare CDN</h3>
          <h4 className="text-lg font-semibold mb-2 text-center">Type and Scope of Processing</h4>
          <p className="text-lg mb-2 text-center">We use Cloudflare CDN to properly deliver the content of our website. Cloudflare CDN is a service of Cloudflare, Inc., which acts as a Content Delivery Network (CDN) on our website.</p>
          <p className="text-lg mb-2 text-center">A CDN helps to deliver content from our online offering, especially files such as graphics or scripts, more quickly through regionally or internationally distributed servers. When you access this content, you establish a connection to the servers of Cloudflare, Inc., and your IP address and possibly browser data such as your user agent will be transmitted. This data is processed exclusively for the purposes mentioned above and to maintain the security and functionality of Cloudflare CDN.</p>

          <h4 className="text-lg font-semibold mt-6 mb-2 text-center">Purpose and Legal Basis</h4>
          <p className="text-lg mb-2 text-center">The use of the Content Delivery Network is based on our legitimate interests, i.e., the interest in secure and efficient delivery and optimization of our online offering in accordance with Article 6 (1) (f) of the GDPR.</p>
          <p className="text-lg mb-2 text-center">We intend to transfer personal data to third countries outside the European Economic Area, particularly the USA. In cases where there is no adequacy decision by the European Commission (e.g., in the USA), we have established other suitable guarantees with the recipients of the data in accordance with Articles 44 et seq. of the GDPR. These are – unless otherwise stated – standard contractual clauses of the EU Commission pursuant to the implementing decision (EU) 2021/914 of June 4, 2021. A copy of these standard contractual clauses can be viewed at <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE" className="text-[#00B7FF] hover:underline">Standard Contractual Clauses</a>.</p>

          <h4 className="text-lg font-semibold mt-6 mb-2 text-center">Storage Duration</h4>
          <p className="text-lg mb-2 text-center">The specific storage duration of the processed data is not determined by us but is determined by Cloudflare, Inc. Further information can be found in the privacy policy for Cloudflare CDN: <a href="https://www.cloudflare.com/privacypolicy/" className="text-[#00B7FF] hover:underline">Cloudflare Privacy Policy</a>.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-center">Font Awesome</h3>
          <h4 className="text-lg font-semibold mb-2 text-center">Type and Scope of Processing</h4>
          <p className="text-lg mb-2 text-center">We use Font Awesome provided by Fonticons, Inc. for the proper presentation of our website content.</p>

          <h4 className="text-lg font-semibold mt-6 mb-2 text-center">Purpose and Legal Basis</h4>
          <p className="text-lg mb-2 text-center">The use of Font Awesome is based on your consent in accordance with Article 6 (1) (a) of the GDPR and Section 25 (1) of the TTDSG.</p>
          <p className="text-lg mb-2 text-center">We intend to transfer personal data to third countries outside the European Economic Area, particularly the USA. In cases where there is no adequacy decision by the European Commission (e.g., in the USA), we have established other suitable guarantees with the recipients of the data in accordance with Articles 44 et seq. of the GDPR. These are – unless otherwise stated – standard contractual clauses of the EU Commission pursuant to the implementing decision (EU) 2021/914 of June 4, 2021. A copy of these standard contractual clauses can be viewed at <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE" className="text-[#00B7FF] hover:underline">Standard Contractual Clauses</a>.</p>
          <p className="text-lg mb-2 text-center">Moreover, we obtain your consent for such third country transfer in accordance with Article 49 (1) Sentence 1 (a) of the GDPR, which you provide via the consent manager (or other forms, registrations, etc.). We would like to point out that there may be unknown risks involved in third country transfers (e.g., data processing by security authorities of the third country, the exact scope of which and their consequences for you are unknown, over which we have no influence and of which you may not be aware).</p>

          <h4 className="text-lg font-semibold mt-6 mb-2 text-center">Storage Duration</h4>
          <p className="text-lg mb-2 text-center">The specific storage duration of the processed data is not determined by us but is determined by Fonticons, Inc. Further information can be found in the privacy policy for Font Awesome CDN: <a href="https://cdn.fontawesome.com/privacy" className="text-[#00B7FF] hover:underline">Font Awesome Privacy Policy</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyStatement;
