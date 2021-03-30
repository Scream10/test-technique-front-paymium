import React from 'react';
import './DataTransactions.scss';

const sortTypes = {
  up: {
    class: 'sort-up',
    fn: (a, b) => a.net_worth - b.net_worth
  },
  down: {
    class: 'sort-down',
    fn: (a, b) => b.net_worth - a.net_worth
  },
  default: {
    class: 'sort',
    fn: (a, b) => a
  }
};

class DataTransactions extends React.Component {

  state = {
		currentSort: 'default'
	};

	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};

  render () {
    const { data } = this.props;
    const { currentSort } = this.state;

    return (
      <div>
        <nav>
          <ul>
            <li>
              <button className="nav-button">
                <strong>DD-MM-YYYY</strong>
              </button>
            </li>
            <li>
              <button className="nav-button">Counterparty Name</button>
            </li>
            <li>
              <button className="nav-button">Payment Type</button>
            </li>
            <li>
              <button className="nav-button" onClick={this.onSortChange}>
                Amount
                <i className={`fas fa-${sortTypes[currentSort].class}`} />
              </button>
            </li>
            <li><img src="logo-link.png" alt="logo link" /></li>
          </ul>
        </nav>
        <div className="separator separator--strong"></div>
        <div className="fixed-scroll">
          {[...data].sort(sortTypes[currentSort].fn).map((data, id) => (
            <div className="main-sections">
              <ul key={id}>
                <button>
                  <li>{data.created_at}</li>
                  <li>{data.counterparty_name}</li>
                  <li>{data.operation_type}</li>
                  <li>
                    <strong>{data.amount > 0 ? "+" : ""}{data.amount} {data.currency}</strong>
                    <span className={data.amount > 0 ? "triangle triangle--blue" : "triangle triangle--red"}></span>
                  </li>
                  <li className="main--link">
                    <a href={data.attachements[0].url} rel="noreferrer" target="_blank">
                      <img src="logo-link.png" alt="logo link" />
                    </a>
                    <p>1</p>
                  </li>
                </button>
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default DataTransactions;