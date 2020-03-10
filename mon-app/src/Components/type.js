import React, {Component} from 'react';

class type extends Component {
    render() {
        return(
<div style={{width: '40%'}} class="dropdown">
                <select className="form-control">
                  <option value={0}>Comedy</option>
                  <option value={1}>Thriller</option>
                  <option value={2}>Drame</option>
                  <option value={2}>Animation</option>
                </select>       

               </div>
        )
    }
}

export default type;