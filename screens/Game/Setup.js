import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Setup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pOneName: '',
            pTwoName: ''
        }
    }


    onSubmitHandler = (event) => {
        event.preventDefault();
        const {
            pOneName,
            pTwoName,
        } = this.state;
        if (!pOneName.trim().length || !pTwoName.trim().length) {
            alert('Podaj imię');
        }
        else {
            this.props.onSubmit(pOneName, pTwoName, this.redirect)
        }
    };
    redirect = () => {
        this.props.history.push('/game');
    };
    onChangeHandler = (event) => {
        const {
            name, value
        } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <View className="form-group">
                <h1> Tic tac toe game </h1>
                <form className="player-forms"
                      onSubmit={this.onSubmitHandler}>
                    <label htmlFor="name"
                           className="f-start__label">
                        Player one name:{this.state.pOneName}
                    </label>
                    <input value={this.state.pOneName}
                           className="start_control form-control"
                           onChange={this.onChangeHandler}
                           name="pOneName"
                           id="pOneName"/>
                    <label htmlFor="name"
                           className="f-start__label">
                        Player two name:{this.state.pTwoName}
                    </label>
                    <input value={this.state.pTwoName}
                           className="start__control form-control"
                           onChange={this.onChangeHandler}
                           name="pTwoName"
                           id="pTwoName"/>
                    <button className="start__action btn btn-primary">Start</button>
                </form>
            </View>
        )
    }
}

Setup.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
export default Setup;