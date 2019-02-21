import React from 'react';
import Square from './Square';
import {
    StyleSheet,
    Text,
    Alert,
    View,
    Button
} from 'react-native';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };

    }

    handleClick(i) {

        const squares = this.state.squares.slice();
        if (squares[i] === null) {

            squares[i] = this.state.xIsNext ? 'X' : 'O';
        }
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {

        return <Square value={this.state.squares[i]}
                       handleClick={() => this.handleClick(i)}/>;
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    reload = () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        })
    };

    render() {
        const {
            playerOne,
            playerTwo
        } = this.props;
        const {
            xIsNext,
            squares
        } = this.state;

        const winner = this.calculateWinner(squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (xIsNext ? playerOne : playerTwo);
        }
        return (
            <View style={{
                marginTop: 100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {winner ?
                    <View>
                        <Text className="status">{status}</Text>
                        <Button
                            style={{marginTop: 50}}
                            onPress={this.reload}
                            title="Restart"
                            color="#841584"
                            accessibilityLabel="Restart"
                        />
                    </View>
                    :
                    <View>
                        <Text className="status">{status}</Text>
                        < View style={{
                            flexDirection: 'column',
                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <View>
                                    {this.renderSquare(0)}
                                </View>
                                <View>
                                    {this.renderSquare(1)}
                                </View>
                                <View>
                                    {this.renderSquare(2)}
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <View>
                                    {this.renderSquare(3)}
                                </View>
                                <View>
                                    {this.renderSquare(4)}
                                </View>
                                <View>
                                    {this.renderSquare(5)}
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <View>
                                    {this.renderSquare(6)}
                                </View>
                                <View>
                                    {this.renderSquare(7)}
                                </View>
                                <View>
                                    {this.renderSquare(8)}
                                </View>
                            </View>
                        </View>
                    </View>
                }

            </View>
        );
    }

}

const styles = StyleSheet.create({
    square: {
        height: 80,
        width: 80,
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 50,
        textAlign: 'center',
    },
});
export default Board