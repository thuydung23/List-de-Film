import React, {Component} from 'react';

class form extends Component {
    render() {
        return(
            <form className="form-inline">
                                <div className="form-group">
                <input type="text" className="form-control" placeholder="Chercher par type de Film" />
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option value={0}>Comedy</option>
                  <option value={1}>Thriller</option>
                  <option value={2}>Drame</option>
                  <option value={2}>Animation</option>
                </select>
              </div>
              <button type="button" className="btn btn-primary">Valider</button>
              <button type="button" className="btn btn-default">Annuler</button>
            </form>
        )
    }
}

export default form;