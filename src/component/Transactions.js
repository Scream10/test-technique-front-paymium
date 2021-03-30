import './Transactions.scss';
import DataTransactions from './DataTransactions';
import data from './data/transactions.json';

function Transactions() {

  return (
    <div>
      <div className="sidebar-left">
        <div className="sidebar-left__header">
          <h1 className="sidebar-left__title">
            finpal
          </h1>
        </div>
        <div className="sidebar-left__section">
          <p>overview</p>
          <p>transactions (3)</p>
        </div>
        <div className="sidebar-left__section">
          <p>transfers (2)</p>
          <p>invoices (1)</p>
        </div>
        <div className="sidebar-left__section">
          <p>manage cards</p>
          <p>manage accounts</p>
        </div>
        <div className="sidebar-left__section">
          <p>team</p>
          <p>integrations</p>
          <p>settings</p>
          <a href="/" className="btn">upgrade account</a>
        </div>
      </div>
      <div className="sidebar-right">
        <div className="sidebar-right__header"></div>
        <div className="sidebar-right__section">
          <p>Click on one or several transactions to see details</p>
        </div>
      </div>
      <div className="sidebar-top"></div>

      <main className="main-container">

        <DataTransactions data={data[0].transactions} />

      </main>
    </div>
  );
}

export default Transactions;
