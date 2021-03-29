import './Transactions.scss';

function Transactions() {
  return (
    <div>
       {/* SIDEBAR */}
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

      {/* MAIN */}
      <main className="main-container">
        <nav>
          <ul>
            <li>
              <strong>DD-MM-YYYY</strong>
              <a href="/" className="triangle"></a>
            </li>
            <li>Counterparty Name</li>
            <li>Payment Type</li>
            <li>Amount</li>
            <li><img src="logo-link.png" alt="logo link" /></li>
          </ul>
        </nav>
        <div className="separator separator--strong"></div>

        <div className="main-sections">
          <ul>
              <li>
                <strong>DD-MM-YYYY</strong>
              </li>
              <li><strong>Counterparty Name</strong></li>
              <li><strong>Payment Type</strong></li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--blue"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                <strong>DD-MM-YYYY</strong>
              </li>
              <li><strong>Counterparty Name</strong></li>
              <li><strong>Payment Type</strong></li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--blue"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                <strong>DD-MM-YYYY</strong>
              </li>
              <li><strong>Counterparty Name</strong></li>
              <li><strong>Payment Type</strong></li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--blue"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                DD-MM-YYYY
              </li>
              <li>Counterparty Name</li>
              <li>Payment Type</li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--red"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                DD-MM-YYYY
              </li>
              <li>Counterparty Name</li>
              <li>Payment Type</li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--blue"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                DD-MM-YYYY
              </li>
              <li>Counterparty Name</li>
              <li>Payment Type</li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--red"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                DD-MM-YYYY
              </li>
              <li>Counterparty Name</li>
              <li>Payment Type</li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--blue"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                DD-MM-YYYY
              </li>
              <li>Counterparty Name</li>
              <li>Payment Type</li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--red"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>

        <div className="main-sections">
          <ul>
              <li>
                DD-MM-YYYY
              </li>
              <li>Counterparty Name</li>
              <li>Payment Type</li>
              <li>
                <strong>+ 3147,93 EUR</strong>
                <a href="/" className="triangle triangle--red"></a>
              </li>
              <li className="main--link">
                <img src="logo-link.png" alt="logo link" />
                <p>1</p>
              </li>
            </ul>
        </div>
        <div className="separator"></div>
      </main>
    </div>
  );
}

export default Transactions;
