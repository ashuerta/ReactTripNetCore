import React, {Component} from 'react';
import axios from 'axios';

export class Delete extends Component {
    constructor(props){
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    componentDidMount() {
        const {id} = this.props.Math.params;
        axios.get("v1/Trips/SingleTrip/" + id)
            .then(r => {
                const trip = r.data; 
                this.setState({
                    name: trip.name,
                    description: trip.description,
                    dateStarted: new Date(trip.dateStarted).toISOString().slice(0, 10),
                    dateCompleted: trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0, 10) :  null
                });
            });
    }

    onCancel(e) {
        const {history} = this.props;
        history.push('/trips');
    }

    onConfirmation(e) {
        const {id} = this.props.match.params;
        const {history} = this.props;

        axios.delete('v1/Trips/DeleteTrip/' + id)
            .then(r => {
                history.push('/trips');
            })
    }

    render() {
        return(
            <div style= {{ marginTop: 10 }}>
                <h2>Delete trip confirmation</h2>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title"> {this.state.name} </h4>
                        <p className="card-text"> {this.state.description} </p>
                        <button onClick={this.onCancel} className="btn btn-default">Cancel</button>
                        <button onClick={this.onConfirmation} className="btn btn-danger">Confirm</button>
                    </div>
                </div>
            </div>
        );
    }

}