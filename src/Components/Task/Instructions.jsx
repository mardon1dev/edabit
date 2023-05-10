import { Row,Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import data from "../../../public/data.json"

const Instructions = () => {
    const {id} = useParams()
  return (
        <div className='task--content'>
            <Row>
                <Col md={8} sm={12}>
                    <div>
                        {
                            data.map((item) => {
                                if (item.id == id) {
                                    return (
                                        <div key={id}>
                                            <h4>{item.name}</h4>
                                            <h6>Published by <strong>Mardon</strong> in Javascript </h6>
                                            <p>{item.description}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </Col>
            </Row>
    </div>
  )
}

export default Instructions