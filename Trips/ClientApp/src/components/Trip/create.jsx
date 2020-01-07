import React, {Component} from 'react';
import axios from 'axios';

export class Create extends Component
{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);

        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDateStarted(e) {
        this.setState({
            dateStarted: e.target.value
        });
    }

    onChangeDateCompleted(e) {
        this.setState({
            dateCompleted: e.target.value
        });
    }

    render() {
        return(
            <div className="trip-form">
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Trip name:     </label>
                        <input 
                            type="text"
                            className="form-control"
                            value= {this.state.name}
                            onChange= {this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trip description:    </label>
                        <textarea 
                            type="text"
                            className="form-control"
                            value= {this.state.description}
                            onChange= {this.onChangeDescription}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of Start:    </label>
                                <input 
                                    type="date"
                                    className="form-control"
                                    value= {this.state.dateStarted}
                                    onChange= {this.onChangeDateStarted}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion:    </label>
                                <input 
                                    type="date"
                                    className="form-control"
                                    value= {this.state.dateCompleted}
                                    onChange= {this.onChangeDateCompleted}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}