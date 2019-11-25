import React, {useState} from 'react';

// core components
import WebsiteNavbar from 'components/Navbars/WebsiteNavbar.js';
import WebsiteFooter from 'components/Footers/WebsiteFooter.js';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';

function PrivacyPage () {
  const initialState = {
    activeTab: '1',
  };

  const [state, setState] = useState (initialState);

  const toggle = tab => {
    if (state.activeTab !== tab) {
      setState ({
        activeTab: tab,
      });
    }
  };
  return (
    <main>
      <WebsiteNavbar />
      <section className="policy--header-container">
        <Row>
          <Col xs="12" sm="4" md="3" className="policy--header-column">
            <Nav tabs vertical pills>
              <NavItem>
                <NavLink
                  className={classnames ({active: state.activeTab === '1'})}
                  onClick={() => {
                    toggle ('1');
                  }}
                >
                  Terms of Investment
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  className={classnames({ active: state.activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Terms of Investment
                </NavLink>
              </NavItem> */}
            </Nav>
          </Col>
          <Col xs="12" sm="6" md="8" className="privacy--tab-content">
            <TabContent activeTab={state.activeTab}>
              <TabPane tabId="1">
                <h4>Terms of Investment</h4>
                <p>
                  <strong> 1. INTRODUCTION</strong>
                  <br />
                  This agreement outlines the terms and conditions (the “Terms”)
                  between you (an “Investor”, “you”) and Flinvest Limited
                  (“Flinvest”, the “Company”, “we”, or “us”) under which you
                  agree to invest in Flinvest platform (the “Platform”). It is
                  important that you read these Terms carefully. We strongly
                  recommend that you seek independent advice when considering
                  whether to invest your money through the Platform. We do not
                  provide any advice, nor do we make any recommendations to you.
                  The Company solely allows you to investor in project listed on
                  the Platform. It is your responsibility to assess whether the
                  Platform is suitable or appropriate for your needs and any
                  decision made to use our Services is done so entirely at your
                  own risk. Please be aware that execution of these Terms does
                  not imply that we have confirmed that use of the Platform and
                  our Services are suitable or appropriate for you. We advise
                  you to consider whether investing through the Platform meets
                  your required risk levels and objectives, and you should only
                  commit such funds that you are able to financially bear the
                  risk of losing considering your other financial commitments.
                  By using the Platform, you confirm that you have the necessary
                  experience and knowledge to understand the risks involved. You
                  confirm your agreement to these Terms either by registering as
                  an investor on our platform or by signing a copy of these
                  Terms. By continuing on our website, you agree to the
                  following terms together with the Terms of Use, consent to our
                  privacy policy, agree to transact business with us and receive
                  communications relating to the investment electronically.
                  <br />
                  <br />
                  <strong> 2. LEGAL AND REGULATORY INFORMATION</strong>
                  <br />
                  Flinvest Limited is a limited liability company registered in
                  Nigeria (registration number RC xxxxxx with its address at 1B,
                  Emma Abimbola Cole, Lekki Phase1, Lagos, Nigeria Flinvest
                  Limited is a peer to peer company providing innovative and
                  digital solutions for its users to invest and gain return on
                  investment.
                  <br />
                  <br />
                  <strong> 3. TERMS</strong>
                  <br />
                  The Investor will receive periodic updates on the status of
                  the investment by email. The updates are also available on
                  your profile on the Platform. You are expected to review all
                  notifications, updates and reports from Flinvest as they
                  represent a record of information pertaining to your
                  investment You are entitled to request for a physical visit to
                  your investment site, however, you must provide us with at
                  least 14 days notice to schedule a visit You agree that by
                  investing in projects listed on the platform, your
                  contribution is tied and unavailable for the entire duration
                  of the project and neither Flinvest nor the investees can or
                  will refund your investment until the successful completion of
                  investment tenor Any profits from a successful investment are
                  remitted to the electronic wallet on the Platform At the end
                  of a successful investment, you can decide whether to withdraw
                  your funds from the electronic wallet on the Platform and
                  transfer to a bank account you provide us with or to invest in
                  another project At the end of an investment period, any
                  profits made during the investment will be shared between the
                  Investor, the Investee and Flinvest based on a pre-determined
                  model unique to that investment cycle. This is done at the end
                  of the stated tenure period for that investment cycle. You
                  acknowledge that you do not own any of the investment projects
                  and are only entitled to the proceeds of any investment cycle
                  you participate in.
                  <br />
                  <br />
                  <strong>4.INVESTOR REPRESENTATIONS AND WARRANTIES</strong>
                  <br />
                  Representations and warranties are statements and promises
                  made by you to the Company, which we rely on as being accurate
                  in our dealings with you. You make the following
                  representations and warranties to us at the time of agreeing
                  to these Terms and every time you use the Platform or
                  Services, including the time you are matched to a Loan
                  Agreement; you are over the age of 21 years; you are of sound
                  mind and have the capacity to enter into these Terms and be
                  matched to a investment; all personal information that you
                  provide about yourself is accurate and true to the best of
                  your knowledge; you hold a bank account in Nigeria in your own
                  name and will use this account to transfer money to our
                  account when you invest in projects and to receive refunds of
                  contributions made and profits earned; you have carefully
                  considered the risks involved with using the Platform, the
                  Services and being matched to an investment and also the risks
                  associated with any form of cash contribution or donation,
                  including but not limited to the possibility of losing all the
                  money you contribute; You will only ever invest with your own
                  money unless you are authorised on behalf of a third party
                  (“Third Party”) and we agree that you may act on behalf of
                  that Third Party. you are not using any illegal funds or
                  attempting to launder by investing on the platform if you are
                  registering or accepting these Terms on behalf of a legal
                  entity such as a company, trust or partnership, you are
                  legally authorised to do so and we may request evidence of
                  such legal entitlement (by way of a copy of any document which
                  shows the valid and subsisting authorisation);and you are not
                  breaching any laws or regulations that are applicable to you
                  or any company, trust or partnership upon whose instructions
                  you are acting.
                  <br />
                  <br />
                  <strong>5. ACCESS AND USE </strong>
                  <br />
                  The Platform and Website is, at all times, subject to our
                  Website Terms of Use. Secure access to the Platform is
                  provided by way of your username and password. These log-in
                  credentials are unique to you and are the primary method of
                  securely identifying you when delivering our Services to you.
                  It is therefore extremely important that you keep your
                  username and password secure at all times. If you suspect that
                  your secure access to the Platform has been compromised in any
                  way, it is your responsibility to contact us. You confirm that
                  you will only use our Platform for the purposes set out in
                  these Terms. You confirm that you will not attempt to gain
                  unauthorised access to the secure areas of the Website or
                  Platform and furthermore you will not attempt to use code or
                  software to manipulate or automate functions available on the
                  Website. You understand that we may store your IP address
                  information and may monitor your use of the Website in
                  accordance with our cookie policy. Access to the Platform may
                  be restricted at the discretion of the Company, particularly
                  during periods of maintenance and updating. We have the right
                  not to act on your instructions including where we deem that
                  your instruction was not sufficiently clear, or we could not
                  verify your identity to our satisfaction, or the instruction
                  was not made by you, or we believe that the instruction may be
                  related to an illegal activity.
                  <br />
                  <br />
                  <strong> 6. ANTI-MONEY LAUNDERING </strong>
                  <br />
                  Where we discover that the Platform is being used to launder
                  money or for any suspicious transactions, we have an
                  obligation to report your activities to the relevant
                  authorities without recourse to you.
                  <br />
                  <br />
                  <strong> 7.FOREIGN EXCHANGE RISK</strong>
                  <br />
                  Where an Investor contributes in a currency other than the
                  Naira, foreign exchange gain or loss and fluctuations in
                  currency rates may have an impact on the profit made on such
                  contribution by the Investor. All profits on contribution
                  shall be converted and returned in Naira based on the Central
                  Bank of Nigeria (CBN) official exchange rate. The Investor
                  therefore enters into any transactions in currencies other
                  than the Naira at their sole risk and shall bear all
                  responsibilities for any gains or loss as a result. Unexpected
                  changes in currency exchange market conditions may have an
                  impact on the extent of profit the Investor would be exposed
                  to such as when there is an upward or downward movement in the
                  relevant rates. The Investor understands and is able to assume
                  the risk of loss associated and agrees to be liable for any
                  resulting deficit this might have on contributions made or
                  profits earned.
                  <br />
                  <br />
                  <strong> 8. TERM AND TERMINATION</strong>
                  <br />
                  Except as otherwise terminated in accordance with the
                  provisions below, these Terms shall commence on the date you
                  register to invest through Platform of the Company and shall
                  remain valid and binding for as long as you have outstanding
                  investment. These Terms may be superseded by any amended
                  Terms. These Terms may be terminated by you provided that you
                  have no outstanding investment. Notice of termination must be
                  provided in writing to info@Flinvest.com These Terms may be
                  terminated by the Company at any time without notice.
                  <br /> <br />
                  <strong> 9. PRIVACY</strong>
                  <br />
                  You confirm that you have read and understood the Company’s
                  Privacy Policy which provides information on how we use and
                  store the personal information that you provide to us and you
                  further acknowledge that the Company may amend and update this
                  policy from time to time.
                  <br /> <br />
                  <strong> 10. INDEMNITY</strong>
                  <br />
                  Subject to the Terms of Insurance and any insurance claims
                  settled, you agree that the Company has no obligation to
                  reimburse or indemnify you for any cost, loss or liability
                  which you incur as a result of the failure of an investment to
                  yield according to expectations You agree to indemnify and
                  hold harmless the Company, any investment, and all our other
                  agents or sub-contractors, against all liabilities, costs,
                  expenses, damages and losses (including any direct, indirect
                  or consequential losses, loss of profit, loss of reputation
                  and all interest penalties and legal and other reasonable
                  professional costs and expenses) suffered or incurred as a
                  result of: your fraudulent or illegal use of the Platform, the
                  Services or the Website; your negligence or any default by you
                  of any of these Terms or the terms of any Loan Agreement to
                  which you are matched; any inaccurate or incomplete
                  information that you have knowingly provided to us; your
                  allowing any other person to access your account either with
                  your permission or as a result of your failure to keep your
                  username and password private; any service that you have
                  offered, whether with or without our permission, to another
                  third party using our Platform, Services or Website; any claim
                  made against you for actual or alleged infringement of the
                  Company’s Intellectual Property Rights or any actual or
                  alleged infringement of a third party’s Intellectual Property
                  Rights arising out of or in connection with the Services or
                  your use of the Platform
                  <br /> <br />
                  <strong> 11. DISPUTE RESOLUTION</strong>
                  <br />
                  This Agreement shall be governed by the Laws of the Federal
                  Republic of Nigeria. Any dispute arising out of this
                  Agreement, which cannot be settled, by mutual
                  agreement/negotiation within 30 days shall be referred to
                  arbitration by a single arbitrator at the Lagos Court of
                  Arbitration (“LCA”) and governed by the Arbitration and
                  Conciliation Act, Cap A10, Laws of the Federal Republic of
                  Nigeria. The arbitrator shall be appointed by the Parties,
                  where Parties are unable to agree on the choice of an
                  arbitrator, the choice of arbitration shall be referred to the
                  LCA. The findings of the arbitrator and subsequent award shall
                  be binding on the Parties and may be enforced through a
                  Nigerian court of law. Each Party shall bear its cost in
                  connection with the Arbitration.
                  <br /> <br />
                  <strong> 12. APPLICABLE LAW</strong>
                  <br />
                  This Agreement shall be interpreted and governed by the laws
                  in force in the Federal Republic of Nigeria. The Parties
                  submit to Arbitration and waive any objections based upon
                  venue.
                </p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </section>
      <WebsiteFooter />
    </main>
  );
}

export default PrivacyPage;
