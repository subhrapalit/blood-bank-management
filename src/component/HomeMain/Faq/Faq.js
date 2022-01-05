import React from 'react';
import { Accordion } from 'react-bootstrap';
import gif from '../../../images/faq.gif'

const Faq = () => {
    return (
        //FAQ Section
        <>
            <h3 className='m-5 text-title text-center'>Frequently Asked Questions (FAQ)</h3>
            <div className='d-flex my-5'>
                <div className='mx-auto' >
                    <img src={gif} className='rounded' alt="" />

                </div>
                <div id='faq' className='mx-auto my-5' style={{ width: '50%' }}>

                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Who Are We?</Accordion.Header>
                            <Accordion.Body>
                                This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What Is Our Goal?</Accordion.Header>
                            <Accordion.Body>
                                This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How Much We Charge?</Accordion.Header>
                            <Accordion.Body>
                                This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Where Is Our Branches?</Accordion.Header>
                            <Accordion.Body>
                                This website is a platform for blood seekers & donars, where one can easily choose their desired blood groups from nearby locations.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default Faq;