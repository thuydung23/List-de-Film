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
          
        </div>
        
        <br></br>
        <div className="panel panel-success">
          <div className="panel-heading">List Films</div>
		  <div className="items">
          <div className="row">
            <div className="column">
              <div className="content">
			  <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
			  <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
			  <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
			  <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
			  <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
			  <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
              <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="content">
			  <img src="mon-app/src/anh.jpg" alt="Mountains" style={{width: '100%'}} />
                <h3>My Work</h3>
                <div>
                  <div style={{float: 'left'}}>Like/Dislike : 100/1</div>
                  <div style={{float: 'left', marginLeft: '10px', color: 'blueviolet', cursor: 'pointer'}}><i className="fas fa-thumbs-up" /></div>
                  <input type="button" defaultValue="Supprimer" className="btn-remove" style={{float: 'right', cursor: 'pointer'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <a href="#">Précédent</a>
          <a href="#">1</a>
          <a href="#" className="active">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">Suivant</a>
        </div>
      </div>
	  </div>
        );
    }
}

export default App;

    

