import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const PrivacyPage = () => {
  return <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO title="Privacy Policy" description="Repeadly's Privacy Policy explains how we collect, use, and protect your personal information." canonical="/privacy" />
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-20 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: March 14, 2026</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm">
          <p>
            This Privacy Policy explains how information about you is collected, used and disclosed by Repeadly, Inc. (collectively, "Repeadly," "we" or "us") when you use our website <a href="https://app.repeadly.com" className="text-primary hover:underline">https://app.repeadly.com</a> ("Website") and customer loyalty program services ("Platform") (collectively, "Services"), or when you otherwise interact with us. This Privacy Policy also describes your choices regarding use, access and correction of personal information collected about you through our Services. Please read this Privacy Policy carefully and ensure that you understand it before you start to use our Services.
          </p>

          <p>
            This Website is owned and operated by, or on behalf of, Repeadly Inc. ("we", "our" or "us"). We are the data controller in respect of personal information of our users based in the European Union.
          </p>

          <p>
            By accessing and using the Services, you acknowledge that you have read and understood the content of this Privacy Policy. We reserve the right to update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the Privacy Policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification). We encourage you to review the Privacy Policy whenever you access the Services or otherwise interact with us to stay informed about our information practices and the ways you can help protect your privacy.
          </p>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">INFORMATION YOU PROVIDE TO US THROUGH THE SERVICES</h2>
            <p>
              We collect and process information you provide directly to us via the Services. Personal data submitted through the Services include the details you submit when you create an account, participate in any interactive features of the Services, pay for purchase orders, communicate with us via third party social media sites, request customer support or otherwise communicate with us. The types of information we may collect include your name, email address, company name, postal address, phone number and any other information you choose to provide. To the extent you provide credit card information through the Services, that information is collected and processed by our third-party payment processor pursuant to their Privacy Policy and practices. Our payment processor is Stripe and their privacy policy can be found here <a href="https://stripe.com/privacy" className="text-primary hover:underline">https://stripe.com/privacy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">INFORMATION WE COLLECT AUTOMATICALLY WHEN YOU USE THE SERVICES</h2>
            <p>When you access or use the Services we automatically collect information about you, including:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Log Files:</strong> We gather certain information about your use of the Services, including the type of browser you use, access times, pages viewed, your IP address and the page you visited before navigating to the Services, and store it in log files. We do not monitor or log data collected from your servers when using the Services, but we may log or monitor information about your access to our Services.
              </li>
              <li>
                <strong>Information Collected by Cookies and Other Tracking Technologies:</strong> We use various technologies to collect information, including cookies and web beacons. For more information about cookies, and how to disable them, please see our Cookie Policy page <a href="https://app.repeadly.com/promo/gdpr/cookie-policy" className="text-primary hover:underline">https://app.repeadly.com/promo/gdpr/cookie-policy</a>; and Your Choices below.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">INFORMATION WE COLLECT FROM OTHER SOURCES</h2>
            <p>
              We may also obtain information from other sources and combine that with information we collect through our Services for purposes of advertising and user authentication. For example, if you create or log into your Repeadly account using your Google Apps credentials via single sign-on, we will have access to certain information such as your name and email address as authorized in your Google Apps profile settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">USE OF INFORMATION</h2>
            <p>We may use information about you to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Enable you to have full access to the Services;</li>
              <li>Provide, maintain and improve the Services;</li>
              <li>Provide and deliver the products and services you request, process transactions and send you related information, including confirmations and invoices;</li>
              <li>Send you technical notices, updates, security alerts, and support and administrative messages;</li>
              <li>Respond to your comments, questions and requests, and provide customer support;</li>
              <li>Create your Repeadly account and identify you when you sign-in to your account in accordance with your agreement with us;</li>
              <li>Communicate with you about products, services, offers, promotions, rewards, and events offered by Repeadly and others, and provide news and information we think will be of interest to you;</li>
              <li>Monitor and analyze trends, usage and activities in connection with the Services;</li>
              <li>Detect, investigate and prevent fraud and other illegal activities and protect the rights and property of Repeadly and others;</li>
              <li>Personalize and improve the Services and provide advertisements, content or features that match user profiles or interests;</li>
              <li>Notify you about important changes to the Services, including changes or updates to this Privacy Policy;</li>
              <li>Link or combine with information we get from others to help understand your needs and provide you with better service;</li>
              <li>Consider you for possible employment at Repeadly in connection with an application that you submit; and</li>
              <li>Carry out any other purpose described to you at the time the information was collected.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">SHARING OF INFORMATION</h2>
            <p>We may share your personal information as follows or as otherwise described in this Privacy Policy:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>With vendors, consultants and other service providers we have vetted and approved who need access to such information to carry out work on our behalf only to the extent necessary for the performance of any contract we enter into with you;</li>
              <li>In response to a request for information if we believe disclosure is permitted by, in accordance with, or required by, any applicable law, regulation or legal process such as to comply with a subpoena or applicable court order;</li>
              <li>With any person to whom disclosure is necessary to enable us to enforce our rights under this Privacy Policy or under any agreement we enter into with you or to protect the rights, property and safety of Repeadly or third parties;</li>
              <li>In connection with, or during negotiations of, any merger, sale of Repeadly assets, financing or acquisition of all or a portion of our business by another company;</li>
              <li>Between and among Repeadly and all companies affiliated with Repeadly who may act for us for any of the purposes set out in this Privacy Policy, including our current and future parents, affiliates, subsidiaries and other companies under common control and ownership;</li>
              <li>With analytics and search engine providers that assist us in the improvement and optimization of our Website, subject to our Cookies Policy; and</li>
              <li>With your consent or at your direction.</li>
            </ul>
            <p className="mt-3">We may also share aggregated or de-identified information, which cannot reasonably be used to identify you.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">LAWFUL BASIS FOR PROCESSING YOUR INFORMATION</h2>
            <p>We are required to state the lawful basis under which we process the personal data of our users from the European Union ("EU"). Accordingly, the lawful bases upon which we process your personal information are as follows:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Where it is necessary to obtain your prior consent to the processing concerned in order for us to be allowed to do it, for instance in relation to direct marketing, we will obtain and rely on your consent in relation to the processing concerned;</li>
              <li>Otherwise, we will process your personal data only where the processing is necessary for compliance with a legal obligation to which we are a subject; or</li>
              <li>For the purposes of the legitimate interests pursued by us in promoting our business, providing the Platform to our customers pursuant to or legal agreements with them, and in ensuring the security, accessibility and improvement of our Website and Platform and the development of new technology and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">EXTERNAL LINKS</h2>
            <p>
              The Website may, from time to time, contain links to external sites. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites. We are not responsible for the privacy policies or the content of such sites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">LOG-IN FEATURES</h2>
            <p>
              We may allow you to sign up and log in using your Google account. If you sign up using your Google email account, Google will ask your permission to share certain information from your Google account with us. This may include your first name, last name, gender, general location, your timezone and birthday. This information is collected by Google and is provided to us under the terms of Google's privacy policy, which you can find here: <a href="https://policies.google.com/privacy?hl=en-US" className="text-primary hover:underline">https://policies.google.com/privacy?hl=en-US</a>. You can control the information that we receive from Google using the privacy settings in your Google account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">ADVERTISING AND ANALYTICS SERVICES PROVIDED BY OTHERS</h2>
            <p>
              We allow the following companies to serve advertisements on our behalf across the Internet and in applications: Google AdWords, Google analytics, Marketo, Twitter, Facebook, Adroll, Quora, Bing ads, Linkedin, Terminus, Demand base, Instagram, and Reddit using email address and cookies that are collected. These entities use technologies including cookies, web beacons, device identifiers and other tools to collect information about your use of the Services and other websites and applications, including your IP address, web browser, pages viewed, time spent on pages or in apps, links clicked and conversion information. This information may be used by Repeadly and Repeadly service providers to, among other things, analyze and track data, determine the popularity of certain content, deliver advertising and content targeted to your interests on our Services and other websites and better understand your online activity. For more information about cookies, please see below and for further information about interest-based ads, or to opt out of having your web browsing information used for behavioral advertising purposes, please see Repeadly's Cookie Policy at <a href="https://app.repeadly.com/promo/gdpr/cookie-policy" className="text-primary hover:underline">https://app.repeadly.com/promo/gdpr/cookie-policy</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">INFORMATION COLLECTED ON BEHALF OF CUSTOMERS IN PROVIDING OUR PLATFORM</h2>
            <p>
              In the case of personal information we handle or receive on behalf of a customer in connection with their access to, and use of, our Platform ("Customer PI"), we have no direct relationship with the customer's employees or other individuals with whom that customer may interact with respect to the Platform. If you are such an employee or individual and are seeking access to, or would like to correct, amend or delete, Customer PI, you should direct your query to the applicable customer. We will respond within a reasonable timeframe to a customer's request to remove Customer PI. Please note that the foregoing will not limit EU individuals from making certain requests relating to their personal data as provided in Your Rights below.
            </p>
            <p className="mt-3">
              We will not use Customer PI except for the purpose of providing and supporting the Services for the applicable customer. Customer PI will be retained for as long as needed for that purpose and as necessary to comply with our legal obligations, resolve disputes and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">MARKETING</h2>
            <p>
              Where permitted in our legitimate interest or with your prior consent where required by law, we will use your personal information for marketing and to provide you with promotional update communications by email about our products/services. You can object to further marketing at any time by selecting the "unsubscribe" link at the end of all our marketing and promotional electronic communications to you, or by contacting us using the contact details set out at in the Your Choices and Your Rights sections of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">SECURITY</h2>
            <p>
              We take reasonable steps, including physical, technical and organizational measures, to protect your personal information from unauthorized access and against unlawful processing, accidental loss, destruction and damage. Unfortunately, transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information submitted to us.
            </p>
            <p className="mt-3">
              Your personal information will be retained by Repeadly for the duration of your account and may be retained for a period after this time as necessary and relevant to our legitimate interests, our terms of agreement with you and in accordance with applicable legal obligations. This may include retention necessary to meet our tax reporting requirements as well as time required to enforce the relevant terms of agreement or to identify, issue or resolve legal proceedings.
            </p>
            <p className="mt-3">
              We may retain a record of your stated objection to the processing of your data, including in respect of an objection to receiving marketing communications, for the sole legitimate purpose of ensuring that we can continue to respect your wishes and not contact you further, during the term of your objection.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">TRANSFER OF INFORMATION TO THE U.S. AND OTHER COUNTRIES</h2>
            <p>
              Repeadly is based in the United States. By accessing or using the Services or otherwise providing information to us, you understand that your information will be subject to processing, transfer and storage in and to the U.S. where you may not have the same rights and protections as you do under local law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">YOUR RIGHTS</h2>
            <p>EU individuals have rights in relation to their personal data, which is processed by Repeadly. If you are an EU data subject, you may, by emailing us at <a href="mailto:info@repeadly.com" className="text-primary hover:underline">info@repeadly.com</a>:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Request access to the personal data concerned.</li>
              <li>Request that any incorrect personal data about you that we are processing be rectified.</li>
              <li>Request that we erase the personal data concerned.</li>
              <li>Withdraw your consent at any time where we are processing personal data relating to you on the basis of your prior consent to that processing, after which we shall stop the processing concerned.</li>
              <li>Lodge a formal compliant with the Information Commissioner in Ireland (or your local EU supervisory authority if you live outside the UK) if you have a complaint about any processing of your personal data being conducted by us.</li>
            </ul>
            <p className="mt-3">
              If the requested EU Data is Customer PI, please include the name of the applicable customer in your request; we will refer the request to that customer to respond directly to you and will support them as needed to respond to your request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">YOUR CHOICES</h2>
            <h3 className="font-semibold mt-4 mb-2 text-foreground">Account Information</h3>
            <p>
              Our customers may access, update or change personal information they have provided by logging into the Services or emailing us at <a href="mailto:info@repeadly.com" className="text-primary hover:underline">info@repeadly.com</a>.
            </p>
            <p className="mt-3">
              Subject to the terms of their agreements with us, Customers may deactivate their accounts by emailing us at <a href="mailto:info@repeadly.com" className="text-primary hover:underline">info@repeadly.com</a>, but note that we may retain certain personal information as necessary to comply with our legal obligations or for legitimate business purposes, such as to resolve disputes or enforce our agreements. We may also retain cached or archived copies of personal information for a certain period of time.
            </p>
            <p className="mt-3">
              If you are an individual with whom one of our customers interacts with respect to the Services (e.g., an employee of a customer), as noted above, you should direct any requests regarding access, modification or deletion of personal information to the applicable customer.
            </p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">Cookies</h3>
            <p>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services. For more information, please see Repeadly's Cookie Policy at <a href="https://app.repeadly.com/promo/gdpr/cookie-policy" className="text-primary hover:underline">https://app.repeadly.com/promo/gdpr/cookie-policy</a>.
            </p>

            <h3 className="font-semibold mt-4 mb-2 text-foreground">Promotional Communications</h3>
            <p>
              You may opt out of receiving promotional emails from Repeadly by following the instructions in those emails or by emailing <a href="mailto:info@repeadly.com" className="text-primary hover:underline">info@repeadly.com</a>. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3 text-foreground">CONTACT US</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at: Repeadly, Inc., Hobart, Hobart, Indiana, US, 46342, <a href="mailto:info@repeadly.com" className="text-primary hover:underline">info@repeadly.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};

export default PrivacyPage;