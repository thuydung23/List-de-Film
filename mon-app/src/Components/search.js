
import React, {Component} from 'react';

class search extends Component {
    render() {
        return(
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Nom de Film" />
              <span className="input-group-btn">
                <button className="btn btn-info" type="button">Supprimer</button>
              </span>
            </div>
        )
    }
}

export default search;