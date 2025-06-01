import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input type="number" defaultValue="10000" />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input type="number" defaultValue="1200" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input type="number" defaultValue="6" />
          </p>

          <p>
            <label>DURATION</label>
            <input type="number" defaultValue="10" />
          </p>
        </div>
      </div>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$10,600.00</td>
            <td>$600.00</td>
            <td>$600.00</td>
            <td>$10,000.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$11,236.00</td>
            <td>$636.00</td>
            <td>$1,236.00</td>
            <td>$10,000.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$11,910.16</td>
            <td>$674.16</td>
            <td>$1,910.16</td>
            <td>$10,000.00</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </>
  );
}

export default App;
