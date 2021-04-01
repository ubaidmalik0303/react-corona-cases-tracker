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
      <Grid container justify="center">
        <Grid item sm={8}>
          <BarChart />
        </Grid>
        {/* <Grid item sm={8}>
          <LineChart />
        </Grid> */}
      </Grid>
      <CountriesTable />
    </>
  );
}

export default App;
//