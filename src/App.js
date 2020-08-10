import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Form</h1>
      <hr />
      <form>

        <div className="col">
          <div className="col form-group">
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col form-group">
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="col form-group">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type your text"></textarea>
          </div>
          <div className="col">
            <button className="btn btn-secondary">submit</button>
            <button className="btn btn-secondary">cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
