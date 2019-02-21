import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import Board from "./Board";

class Game extends React.Component {
    state = {
        playerOne: "Andzej",
        playerTwo: "Mati",
    };

    render() {

        return (
            <View>
                <Board
                    playerOne={this.state.playerOne}
                    playerTwo={this.state.playerTwo}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        flexDirection: 'row'

    },
});
export default Game;