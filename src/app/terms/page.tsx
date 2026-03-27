import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const TermsPage = () => {
  return <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO title="Terms of Use" description="Read Repeadly's Terms of Use governing access to our website and customer loyalty platform." canonical="/terms" />
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-20 max-w-3xl">
        <h1 className="font-display text-4xl font-bold mb-4">Terms of Use</h1>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <p>
              Welcome to https://app.repeadly.com (together with any related websites, the "Site"). The Site is owned and operated by Repeadly, Inc. ("Repeadly"). Please read these Terms of Use ("Terms") carefully before using the Site. By accessing or using the Site or any of the content on the Site you agree to be legally bound by these Terms. If you do not accept these Terms, do not use the Site or any of its Content (defined below).
            </p>
            <p className="mt-4">
              You represent to Repeadly that you are lawfully able to enter into contracts (e.g., you are not a minor). If you are entering into these Terms for an entity, such as the company you work for, you represent that you have authority to bind that entity and you agree that "you" as used in these Terms includes both you personally and the entity you represent. You and Repeadly are collectively referred to as the "Parties" and each is a "Party".
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">1. Subscription Agreement</h2>
            <p>
              These Terms do not govern the use of the digital customer loyalty program service as well as other services (the "Service") operated by Repeadly. If you are accessing or using the Service, then you are subject to Repeadly's Subscription Agreement (currently available at <a href="https://app.repeadly.com/promo/gdpr/subscription-agreement" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://app.repeadly.com/promo/gdpr/subscription-agreement</a>, or such other written contract as may be separately agreed and signed between you and Repeadly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">2. Repeadly Content</h2>
            <p>
              The Site contains HTML, applications, messages, text, files, images, photos, video, sounds, profiles, works of authorship and other content (collectively, "Content") of Repeadly or its licensors ("Repeadly Content"). The Site (including the Repeadly Content) is protected by copyright, trademark, trade secret and other laws; and as between you and Repeadly, Repeadly owns and retains all rights in the Site and the Repeadly Content. Repeadly hereby grants to you a limited, revocable, non-sublicensable license to access, display and perform the Repeadly Content (excluding any computer code) solely for your personal, non-commercial use and solely as necessary to access and use the Site. Except as expressly permitted by Repeadly in these Terms or on the Site, you may not copy, download, stream, capture, reproduce, duplicate, archive, upload, modify, translate, create derivative works based upon, publish, broadcast, transmit, retransmit, distribute, perform, display, sell or otherwise use or transfer any Repeadly Content. You may not, either directly or through the use of any device, software, online resource or other means, remove, alter, bypass, avoid, interfere with or circumvent any copyright, trademark or other proprietary notice on the Repeadly Content or any digital rights management mechanism, device, or other content protection or access control measure associated with the Repeadly Content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">3. Trademarks</h2>
            <p>
              The trademarks, logos and service marks ("Marks") displayed on the Site are the property of Repeadly or other third parties. You are not permitted to use these Marks without the prior written consent of Repeadly or such third party.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">4. Third-Party Services</h2>
            <p>
              The Site may make available, or third parties may provide, links to other websites, applications, resources, advertisements, Content or other products or services created, hosted or made available by third parties ("Third-Party Services"), and such third parties may use other third parties to provide portions of the Third-Party Service to you, such as technology, development or payment services. When you access or use a Third-Party Service, you are interacting with the applicable third party, not with Repeadly, and you do so at your own risk. Repeadly is not responsible for, and makes no warranties, express or implied, as to, the Third-Party Services or the providers of such Third-Party Services (including without limitation the accuracy or completeness of the information provided by such Third-Party Service or the privacy practices of any third party). Inclusion of any Third-Party Service or a link thereto on the Site does not imply approval or endorsement of such Third-Party Service. Repeadly is not responsible or liable for the Content or practices of any Third-Party Service or third party, even if such Third-Party Service links to, or is linked by, the Site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">5. Privacy</h2>
            <p>
              Please review Repeadly's Privacy Policy for the Site ("Privacy Policy"), available at <a href="https://app.repeadly.com/promo/gdpr/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://app.repeadly.com/promo/gdpr/privacy-policy</a>, to learn about Repeadly's information collection, usage and disclosures practices with respect to information collected by Repeadly through the Site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">6. Acceptable Use</h2>
            <p>
              Your use of the Site is subject to Repeadly's Acceptable Use Policy available at <a href="https://app.repeadly.com/promo/gdpr/acceptable-use-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://app.repeadly.com/promo/gdpr/acceptable-use-policy</a>. Repeadly is not responsible or liable for any user Content or conduct on the Site. If you become aware of any misuse of the Site, please report such misuse immediately to Repeadly at <a href="mailto:info@repeadly.com" className="text-primary hover:underline">info@repeadly.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">7. Compliance with Laws</h2>
            <p>
              You represent that, in agreeing to, and performing under, these Terms, you are not violating, and will not violate, any governmental laws, rules, regulations or orders that are applicable to your use of the Site ("Applicable Laws"). Without limiting the foregoing, you represent that, in connection with your performance under these Terms, you shall: (a) comply with Applicable Laws relating to anti-bribery and anti-corruption, which may include the US Foreign Corrupt Practices Act of 1977 and the UK Bribery Act 2010; (b) comply with Applicable Laws administered by the U.S. Commerce Bureau of Industry and Security, U.S. Treasury Office of Foreign Assets Control or other governmental entity imposing export controls and trade sanctions ("Export Laws"), including designating countries, entities and persons ("Sanctions Targets"); and (c) not directly or indirectly export, re-export or otherwise deliver any Repeadly software, content or services to a Sanctions Target, or broker, finance or otherwise facilitate any transaction in violation of any Export Laws. You represent that you are not a Sanctions Target or prohibited from receiving Repeadly software, content or services pursuant to these Terms under Applicable Laws, including Export Laws.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">8. Global Availability</h2>
            <p>
              Repeadly controls the Site from Delaware, USA offices. If you use this website from other locations, you are responsible for compliance with local Applicable Laws. Repeadly makes no representation that the products and services referenced herein are appropriate, or available, worldwide.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">9. Indemnity</h2>
            <p>
              You agree to defend, indemnify and hold harmless Repeadly, its affiliates and their respective employees, contractors, agents, officers and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, debt or expenses (including without limitation attorneys' fees) arising out of or related to any claim, suit, action or proceeding by a third party arising out of or relating to your use of the Site, breach of these TermsPage (including any Repeadly policy referenced in these Terms), violation of law, or any Content that you post, upload or cause to interface with the Site, or otherwise transfer, process, use or store in connection with the Site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">10. Disclaimers</h2>
            <p>
              THE SITE AND ALL CONTENT AND OTHER ITEMS MADE AVAILABLE BY REPEADLY ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTY OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. REPEADLY ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (i) ERRORS, MISTAKES OR INACCURACIES OF DATA OR INFORMATION POSTED, DISPLAYED, PUBLISHED OR MADE AVAILABLE FOR DOWNLOAD OR USE ON THE SITE, (ii) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM USE OF THE SITE, (iii) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, OR (iv) THE DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF ANY THIRD PARTY NOT UNDER REPEADLY'S CONTROL.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">11. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW: (a) IN NO EVENT SHALL REPEADLY, ITS AFFILIATES OR THEIR RESPECTIVE EMPLOYEES, CONTRACTORS, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR BUSINESS INTERRUPTION, LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES ARISING OUT OF OR RELATING TO THE SITE; AND (b) IN NO EVENT SHALL REPEADLY'S CUMULATIVE AND AGGREGATE LIABILITY UNDER THESE TERMS EXCEED TWO HUNDRED U.S. DOLLARS. THE EXCLUSIONS AND LIMITATIONS IN THIS SECTION APPLY WHETHER THE ALLEGED LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR ANY OTHER BASIS, EVEN IF YOU HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">12. Responsibility for End Users</h2>
            <p>
              You are responsible for violations of these Terms by anyone using the Site with your permission or using your account on an unauthorized basis. Your use of the Site to assist another person in an activity that would violate these Terms if performed by you is a violation of these Terms. These Terms applies to anyone accessing or using the Site; however, each provision in these Terms shall be interpreted to include, and apply to, any action directly or indirectly taken, authorized, facilitated, promoted, encouraged or permitted by a user of the Site, even if such person did not themselves violate the provision.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">13. Termination and Monitoring</h2>
            <p className="font-semibold mb-2">13.1</p>
            <p className="mb-4">
              If you violate these Terms, Repeadly may suspend or terminate your use of the Site. Repeadly's right to suspend or terminate your use of Site applies even if a breach is committed unintentionally or without your authorization if Repeadly believes that suspension or termination is necessary to ensure compliance with Applicable Laws or to protect the rights, safety, privacy, security or property of Repeadly, its customers or third parties.
            </p>
            <p className="font-semibold mb-2">13.2</p>
            <p>
              Repeadly reserves the right, but does not assume the obligation, to investigate any violation of these Terms or misuse of the Site. Repeadly has the right in its sole discretion to edit, refuse to post or remove any Content posted, displayed, published or made available for download or use on the Site that Repeadly finds to be in violation of these Terms. Repeadly may report any activity that it suspects violates any law or regulation to appropriate law enforcement officials, regulators, or other appropriate third parties. Such reporting may include disclosing appropriate customer data. Repeadly also may cooperate with appropriate law enforcement agencies, regulators, or other appropriate third parties to help with the investigation and prosecution of illegal conduct by providing network and systems information related to alleged violations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">14. Electronic Communications</h2>
            <p>
              When you visit the Site or send emails to Repeadly, you are communicating with Repeadly electronically; and you consent to receive communications from Repeadly electronically. Repeadly will communicate with you by email or by posting notices on the Site. You agree that all agreements, notices, disclosures and other communications that Repeadly provides to you electronically satisfy any legal requirement that such communications be in writing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">15. Modifications</h2>
            <p>
              Repeadly may modify these Terms at any time by posting a revised version on the Site. By accessing the Site, you agree to the latest version of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">16. Governing Law</h2>
            <p>
              This Agreement will be interpreted, construed and enforced in all respects in accordance with the laws of the State of Delaware, without reference to its choice of law principles. Any legal action or proceeding arising under or relating to this Agreement shall be brought exclusively in the state or federal courts located in New Castle County, State of Delaware, USA, and the Parties expressly consent to personal jurisdiction and venue in those courts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">17. Miscellaneous</h2>
            <p>
              These Terms constitute the complete and exclusive statement of the agreement between the Parties and supersede all proposals, oral or written, and all other communications between the Parties relating to the subject matter of these Terms. In the event any information posted on the Site from time to time conflicts with any provision of these Terms, the applicable provision of these Terms shall control. Any terms and conditions of any other instrument issued by you in connection with these Terms which are in addition to, inconsistent with or different from these Terms shall be of no force or effect. These Terms do not, and shall not be construed to, create any partnership, joint venture, employer-employee, agency or franchisor-franchisee relationship between you and Repeadly. You may not assign, transfer or sublicense all or any of your rights or obligations under these Terms without Repeadly's express prior written consent. Repeadly may assign, transfer or sublicense all or any of Repeadly's rights or obligations under these Terms without restriction. The failure of Repeadly to exercise or enforce any condition, term or provision of these Terms will not operate as a waiver of such condition, term or provision. Any waiver by Repeadly of any condition, term or provision of these Terms shall not be construed as a waiver of any other condition, term or provision. If any provision of these Terms is held invalid or unenforceable, the remainder of these Terms shall continue in full force and effect. You agree that a printed version of these Terms and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to these Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. Repeadly will not be responsible for failures to fulfill any obligations due to causes beyond its control. Non-English translations of these Terms are provided for convenience only. In the event of any ambiguity or conflict between translations, the English version is authoritative and controls.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold mb-3">18. Contact</h2>
            <p>
              Please contact Repeadly at <a href="mailto:info@repeadly.com" className="text-primary hover:underline">info@repeadly.com</a> with any questions regarding these Terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};

export default TermsPage;