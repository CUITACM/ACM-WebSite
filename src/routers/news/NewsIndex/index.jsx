import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Pagination, Card, Row, Col } from 'antd';
import NewsList from '../NewsList';

class NewsIndex extends React.PureComponent {
  static propTypes = {
    location: PropTypes.object,
    dispatch: PropTypes.func,
    list: PropTypes.array,
    pagination: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(page, pageSize) {
    console.log(page, pageSize);
    this.props.dispatch(routerRedux.push({
      pathname: '/site/news/index',
      query: { ...this.props.location.query, page }
    }));
  }

  render() {
    const { list, pagination } = this.props;
    return (
      <div className="articles-page">
        <Row gutter={16}>
          <Col span={18}>
            <Card title="校队新闻" bodyStyle={{ padding: '10px 24px' }}>
              <NewsList newsList={list} />
              <div className="pull-right">
                <Pagination {...pagination} onChange={this.onPageChange} />
              </div>
            </Card>
          </Col>
          <Col span={6}>
            other todo
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, article }) => ({
  loading: loading.models.article,
  list: article.list,
  filters: article.filters,
  pagination: {
    current: article.page,
    pageSize: article.per,
    total: article.totalCount
  }
});

export default connect(mapStateToProps)(NewsIndex);
