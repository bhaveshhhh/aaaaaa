import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="heading">Premium Property Finder</h1>

      <div style={{ border: "3px solid", margin: "5em" }}>
        <p>Refine Result</p>
        <div style={{ margin: "1rem", itemalign: "center" }}>
          <input style={{ margin: "5px" }} placeholder="price"></input>
          <select style={{ margin: "5px" }} name="property" id="property">
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>
          <select style={{ margin: "5px" }} name="property" id="property">
            <option value="sortorder">Sort Order</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>
        </div>
      </div>




      <div className="cards">
        <div style={{ border: "5px solid", margin: "1em" }}>
          <div class="container">
            <h4 style={{ border: "2px solid" }}><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div style={{ border: "5px solid", margin: "1em" }}>
          <div class="container">
            <h4 style={{ border: "2px solid" }}><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div style={{ border: "5px solid", margin: "1em" }}>
          <div class="container">
            <h4 style={{ border: "2px solid" }}><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div style={{ border: "5px solid", margin: "1em" }}>
          <div class="container">
            <h4 style={{ border: "2px solid" }}><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div style={{ border: "5px solid", margin: "1em" }}>
          <div class="container">
            <h4 style={{ border: "2px solid" }}><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div style={{ border: "5px solid", margin: "1em" }}>
          <div class="container">
            <h4 style={{ border: "2px solid" }}><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div style={{ border: "5px solid", margin: "1em" }}>
          <div class="container">
            <h4 style={{ border: "2px solid" }}><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
