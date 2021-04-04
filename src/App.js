import './App.css';
import Header from './components/header';
import CasesDetails from './components/casesDetails';
import BarChart from './components/barChart';
import LineChart from './components/lineChart';
import Grid from '@material-ui/core/Grid';
import CountriesTable from './components/table';

function App() {
  return (
    <>
      <Header />
      <CasesDetails />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '90%',
        }}>
          <BarChart />
        </div>
        <div style={{
          width: '90%',
        }}>
          <LineChart />
        </div>
      </div>
      <CountriesTable />
    </>
  );
}

export default App;
//