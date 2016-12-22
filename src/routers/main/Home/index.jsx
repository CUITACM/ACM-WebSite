import React, { PropTypes } from 'react';
import { Carousel, Row, Col } from 'antd';
import './style.less';

export default class Home extends React.PureComponent {
  render() {
    return (
      <Row>
        <Col span={15}>
          <Carousel
            className="carousel-container"
            autoplay pauseOnHover centerMode infinite
          >
            <div>
              <img role="presentation" src="https://os.alipayobjects.com/rmsportal/yWNVSFBhKsoShvi.png" />
            </div>
            <div>
              <img role="presentation" src="https://os.alipayobjects.com/rmsportal/nvJftlNzfzhVDVW.png" />
            </div>
            <div>
              <img role="presentation" src="https://os.alipayobjects.com/rmsportal/yWNVSFBhKsoShvi.png" />
            </div>
            <div>
              <img role="presentation" src="https://os.alipayobjects.com/rmsportal/nvJftlNzfzhVDVW.png" />
            </div>
          </Carousel>
        </Col>
        <Col span={9}>
          right
        </Col>
      </Row>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};
