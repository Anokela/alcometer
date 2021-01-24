import {useState} from 'react'
import './App.css';

function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [duration, setDuration] = useState(1);
  const [gender, setGender] = useState('male');
  const [permille, setPermille] = useState(0)
  
  function calculatePermille(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const grams_left = grams - (burning * duration);
    let calculation = 0;

    if (gender === 'male') {
      calculation = grams_left / (weight * 0.7);
        if (calculation < 0) {
          calculation = 0;
        }
    }
    else {
      calculation = grams_left / (weight * 0.6);
      if (calculation < 0) {
        calculation = 0;
      }
    }
    setPermille(calculation);
  }
  return (
    <div className="container">
      <h1 className="col-12 ">Alcometer</h1>
      <form onSubmit={calculatePermille}  className="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3">
        <div className="form-group">
          <label for="kg">Your weight (kg)</label>
          <input id="kg" min="0" name="weight" type="number"className="form-control" step="1" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="beer">Bottles of beer (0.33 l)</label>
          <input id="beer" min="0" name="bottles" type="number"className="form-control" step="1" value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="hour" >Drinking time (h)</label>
          <input id="hour" min="0" name="duration" type="number"className="form-control" step="1" value={duration} onChange={e => setDuration(e.target.value)}/>
        </div>
        <div className="form-group">
          <label className="form-check-label mb-3">Gender</label>
            <div className="form-check">
              <input className="form-check-inline" type="radio" id="1" name="gender" value="male" defaultChecked  onChange={e => setGender(e.target.value)}/><label for="1" className="form-check-inline">Male</label>
              <input className="form-check-inline" type="radio" id="2" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label for="2" className="form-check-inline">Female</label> 
            </div>  
        </div> 
        <div className="form-group mb-4">
          <output>{"Blood alcohol level: " + permille.toFixed(2) + " ‰"}</output>
        </div>
        <button className="btn btn-secondary">Calculate</button>
      </form>
    </div>
    
  );
}

export default App;
