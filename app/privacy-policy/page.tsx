import type { Metadata } from "next";
import { TemplateFooter } from "@/components/TemplateFooter";

export const metadata: Metadata = {
  title: "PRIVACY POLICY | My Site 2"
};

export default function PrivacyPolicyPage() {
  return (
    <main className="template-page legal-page">
      <a className="skip-link" href="#main-content">
        Skip to Main Content
      </a>
      <article className="legal-copy" id="main-content">
        <h1>Privacy Policy</h1>
        <h2>A Legal Disclaimer</h2>
        <p>
          The explanations and information provided on this page are only general and high-level explanations and
          information on how to write your own document of a Privacy Policy. You should not rely on this article as
          legal advice or as recommendations regarding what you should actually do, because we cannot know in advance
          what are the specific privacy policies you wish to establish between your business and your customers and
          visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of
          your own Privacy Policy.
        </p>
        <h2>Privacy Policy - The Basics</h2>
        <p>
          Having said that, a privacy policy is a statement that discloses some or all of the ways a website collects,
          uses, discloses, processes, and manages the data of its visitors and customers. It usually also includes a
          statement regarding the website's commitment to protecting its visitors' or customers' privacy, and an
          explanation about the different mechanisms the website is implementing in order to protect privacy.
        </p>
        <p>
          Different jurisdictions have different legal obligations of what must be included in a Privacy Policy. You are
          responsible to make sure you are following the relevant legislation to your activities and location.
        </p>
        <h2>What to Include in the Privacy Policy</h2>
        <p>
          Generally speaking, a Privacy Policy often addresses these types of issues: the types of information the
          website is collecting and the manner in which it collects the data; an explanation about why is the website
          collecting these types of information; what are the website's practices on sharing the information with third
          parties; ways in which your visitors an customers can exercise their rights according to the relevant privacy
          legislation; the specific practices regarding minors' data collection; and much much more.
        </p>
        <p>
          To learn more about this, check out our article{" "}
          <a href="https://support.wix.com/en/article/creating-a-privacy-policy">
            “Creating a Privacy Policy”
          </a>
          .
        </p>
      </article>
      <TemplateFooter />
    </main>
  );
}
