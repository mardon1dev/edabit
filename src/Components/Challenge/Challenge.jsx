import { Container,Row,Col,Dropdown,Form } from 'react-bootstrap';
import { FaFacebookSquare,FaTwitterSquare,FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  data  from "../../../public/data.json"

import "./Challenge.scss"
const Challenge = () => {
  return (
    <div>
        <Container>
          <div className='challenge mt-1'>
            <Row>
              <Col sm={3}>
                <div className='challenge-left'>
                  <div>
                  <Form.Select size='sm' aria-label="Default select example">
                    <option>Javascript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="c#">C#</option>
                  </Form.Select>
                  <Form.Select size='sm' aria-label="Default select example">
                    <option>Easy</option>
                    <option value="medium">Medium</option>
                    <option value="upper">Upper</option>
                    <option value="advanced">Advanced</option>
                  </Form.Select>
                  <Form.Select size='sm' aria-label="Default select example">
                    <option>Algebra</option>
                    <option value="recursion">Recursion</option>
                    <option value="loop">Loop</option>
                    <option value="object">Object</option>
                  </Form.Select>
                  </div>
                </div>
              </Col>
              <Col sm={9}>
                <div className='challenge-right mt-2'>
                  <div className='challenge-right-top'>
                    <h3>Like Edabit? Share us with your friends!</h3>
                    <div className='social'>
                      <FaFacebookSquare className='social-img facebook'/>
                      <FaTwitterSquare className='social-img twitter'/>
                      <FaLinkedin className='social-img linkedin'/>
                    </div>
                  </div>
                  <div className='mt-3'>
                    <ul className='challenge-right-bottom'>
                      {
                        data.map((item,index) => {
                          return (
                            <li key={index}>
                              <Link to={`/task/${item.id}`}>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <span>{item.level}</span>
                              </Link>
                            </li>
                          )
                        })
                        }
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
    </div>
  )
}

export default Challenge