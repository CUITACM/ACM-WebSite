import React, { PropTypes } from 'react';
import strftime from 'strftime';
import { Tag } from 'antd';
import { ArticleStatus } from 'models/article';
import './style.less';

export default class NewsList extends React.PureComponent {
  static propTypes = {
    newsList: PropTypes.array,
  }

  render() {
    return (
      <ul className="article-list">
        {this.props.newsList.map(news =>
          <li key={news.id}>
            <h4>
              {news.status === ArticleStatus.PINNED ? <Tag color="blue">置顶</Tag> : null}
              {news.title}
              <div className="pull-right">
                <span>[发表于 {strftime('%Y-%m-%d', new Date(news.created_at))}]</span>
              </div>
            </h4>
            <p className="article-summary">{news.summary}</p>
          </li>
        )}
      </ul>
    );
  }
}
