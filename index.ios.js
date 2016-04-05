/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Show from './components/Show';
import Ctrl from './components/Ctrl';
import data from './components/data.js';

var RelativeCounter = React.createClass ({

    getInitialState: function () {
        return (
        {
            expression: ['我'],
            result: ['我'],
            selected: [false]
        }
        )
    },

    count: function (whose, who) {
        for(var i in data) {
            if(whose === data[i]['name']) {
                return data[i][who]
            }
        }

    },

    hundlePress: function (argu) {
        var newExpression = this.state.expression;
        newExpression.push(argu);

        if(newExpression.length > 10) {
            alert('亲, 可不可以不要这么顽皮!');
            return ;
        }

        var newResult = this.state.result;
        var lastIndex = newResult.length - 1;
        var result = this.count(newResult[lastIndex], argu);
        newResult.push(result);

        var newSelected = this.state.selected;
        if(typeof(newResult[newResult.length - 1]) === 'object') {
            newSelected.push(true)
        }

        this.setState({
            expression: newExpression,
            result: newResult,
            selected: newSelected
        })
    },

    handleIsOld: function (argu) {
        var newResult = this.state.result;
        var lastIndex = newResult.length - 1;

        var result = newResult[lastIndex][argu];
        newResult[lastIndex] = result;

        var newSelected = this.state.selected;
        newSelected[newSelected.length - 1] = false;

        this.setState({
            expression: this.state.expression,
            result: newResult,
            selected: newSelected
        })
    },

    handleBack: function () {
        var newExpression = this.state.expression;
        if (newExpression.length - 1) {
            newExpression.pop();
        }

        var newResult = this.state.result;
        if (newResult.length - 1) {
            newResult.pop();
        }

        var newSelected = this.state.selected;
        if (newSelected.length - 1) {
            newSelected.pop();
        }

        this.setState({
            expression: newExpression,
            result: newResult,
            selected: newSelected
        })
    },

    handleClear: function () {
        this.setState({
            expression: ['我'],
            result: ['我'],
            selected: [false]
        })
    },

    render: function () {
        return (
            <View style={styles.container}>
                <Show
                    expression={this.state.expression}
                    result={this.state.result}
                />

                <Ctrl
                    handlePress={this.hundlePress}
                    handleIsOld={this.handleIsOld}
                    handleClear={this.handleClear}
                    handleBack={this.handleBack}
                    selected={this.state.selected}
                />
            </View>
        )
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('RelativeCounter', () => RelativeCounter);
