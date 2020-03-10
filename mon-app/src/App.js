import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
        <div className="page-header">
          <h1>List des films<small>ReactJS</small></h1>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Nom de Film" />
              <span className="input-group-btn">
                <button className="btn btn-info" type="button">Supprimer</button>
              </span>
            </div>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div style={{width: '40%'}} class="dropdown">
                <select className="form-control">
                  <option value={0}>Comedy</option>
                  <option value={1}>Thriller</option>
                  <option value={2}>Drame</option>
                  <option value={2}>Animation</option>
                </select>       

               </div>
            </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block marginB10">Ajouter Film</button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
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
          </div>
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">List Films</div>
          <table className="table table-hover ">
            <thead>
              <tr>
                <th style={{width: '10%'}} className="text-center">#</th>
                <th>Nom</th>
                <th style={{width: '15%'}} className="text-center">Type</th>
                <th style={{width: '20%'}}>Like/Dislike</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td>Oceans 8</td>
                <td className="text-center"><span className="label label-info">Comedy</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like: 4</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:1</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td>Midnight Sun</td>
                <td className="text-center"><span className="label label-info">Comedy</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:2</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:0</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td>Les indestructibles 2</td>
                <td className="text-center"><span className="label label-info">Animation</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:3</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:1</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td>Sans un bruit</td>
                <td className="text-center"><span className="label label-info">Thriller</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like: 6</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike: 6</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td>Creed II</td>
                <td className="text-center"><span className="label label-info">Drame</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:16</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:2</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td>Pulp Fiction</td>
                <td className="text-center"><span className="label label-info">Thriller</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:11</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:3</button>
                </td>
              </tr>
              <tr><td className="text-center">7</td>
                <td>Pulp Fiction</td>
                <td className="text-center"><span className="label label-danger">Thriller</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:12333</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:32</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">8</td>
                <td>Seven</td>
                <td className="text-center"><span className="label label-info">Thriller</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:11</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:3</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">9</td>
                <td>Inception</td>
                <td className="text-center"><span className="label label-info">Thriller</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:2</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:1</button>
                </td>
              </tr>
              <tr>
                <td className="text-center">10</td>
                <td>Gone Girl</td>
                <td className="text-center"><span className="label label-info">Thriller</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like:22</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:12</button>
                  </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;

    