import React, {useState} from 'react';

// core components
import WebsiteNavbar from 'components/Navbars/WebsiteNavbar.js';
import WebsiteFooter from 'components/Footers/WebsiteFooter.js';
import SearchBar from '@opuscapita/react-searchbar';
import {Accordion, Card} from 'react-bootstrap';

function FaqPage () {
  const initialState = {
    searchValue: '',
  };

  const [state, setState] = useState (initialState);

  const handleChange = event => {
    const {target: {value}} = event;
    setState ({searchValue: value});
  };

  return (
    <main>
      <WebsiteNavbar />
      <section className="faq--search-container">
        <SearchBar
          onSearch={event => handleChange (event)}
          value={state.value}
          translations={{
            searchPlaceHolder: 'Type your question here, someone might have asked it already',
          }}
        />
      </section>
      <section className="faq--accordion-container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" forwardref="1">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10">
              What is Flinvest me about?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                Good morning beloved people of the beloved country. It's the last Friday of the month and we will be ving r All Night prayer
                meeting in church tonight. 10pm - 4am. Cell leaders kindly commence mobilising your members for the meeting.Its going to be
                a glorious time of Refreshing in his Presence. Warmest Regards.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
      <WebsiteFooter />
    </main>
  );
}

export default FaqPage;
