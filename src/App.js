import './App.css';
import SelectRadioTableComponent from './lib/Components/table-radio';
import data1 from './lib/Components/table-radio.data';
// import SelectTableComponent from './lib/Components/table-search';
function App() {
  return (
    <div className="App">
      <h1>Table</h1>
      {/* <SelectTableComponent List={Users}  /> */}
      <SelectRadioTableComponent List={data1} />
    </div>
  );
}

export default App;
