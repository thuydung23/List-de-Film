import React, {Component} from 'react';

class film extends Component {
    render() {
        return(
              <tr>
                <td className="text-center">1</td>
                <td><b>Oceans 8</b></td>
                <td className="text-center"><span className="label label-info">Comedy</span></td>
                <td>
                  <button type="button" className="btn btn-warning btn-sm">Like: 4</button>
                  <button type="button" className="btn btn-danger btn-sm">Dislike:1</button>
                </td>
              </tr>
        )
    }
}

export default film;