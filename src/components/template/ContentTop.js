import { Row, Col, Card } from "antd";
import React from "react";
const ContentTop = () => {
    return (
            <Row>
                <Col sm={24} md={24} xs={24}>
                    <Row className="content-top">
                        <Col sm={7} md={7} xs={7}>
                            <Card className="custom-card" />
                        </Col>
                        <Col sm={7} md={7} xs={7} offset={1}>
                            <div className="content-right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec lorem turpis, tincidunt in velit nec, rhoncus sollicitudin ante.
                                    Donec congue pulvinar massa ac tempor. Duis dignissim varius augue, sed luctus
                                    tellus volutpat nec. Aliquam nec nulla vel leo aliquet aliquet. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Aenean sodales nunc mollis, vestibulum urna ac, blandit nibh.</p>
                                <p className='second-label'>Pellentesque gravida efficitur nunc, eu fringilla tortor fermentum tristique.
                                    Morbi pretium mauris non leo feugiat maximus.
                                    Vivamus eget feugiat ligula. Donec pulvinar dapibus rhoncus. Ut sed fringilla augue.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
    )

}
export default ContentTop;