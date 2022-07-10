import './App.css';
import ExpenseHeader from './components/ExpenseHeader';
import HeaderLogo from './assets/HeaderLogo';
import ExpenseSummary from './components/ExpenseSummary';
import SpendingChart from './components/chart/SpendingChart';

const expData = require('./data/expense-data.json');

function App() {

  return (
    <div className="App">
      {/* {expData[1].day} */ }
      <ExpenseHeader
        logo={ <HeaderLogo /> }
        balance="$941.85"
        title="My balance"
      />
      <SpendingChart spendData={expData}/>
      <ExpenseSummary
        amount="$478.33"
        percent="+2.4%"
        timeInterval="month"
      />
    </div>
  );
}

export default App;
