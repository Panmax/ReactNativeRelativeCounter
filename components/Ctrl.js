/**
 * Created by pan on 16/4/5.
 */
var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    PixelRatio
} = React;

var Ctrl = React.createClass({

    handlePress: function (arg) {
        this.props.handlePress(arg);
    },

    handleIsOld: function (arg) {
        this.props.handleIsOld(arg);
    },

    getSelected: function () {
        var lastIndex = this.props.selected.length - 1;
        return this.props.selected[lastIndex];
    },

    render: function () {
        var bool = this.getSelected();

        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '爸爸')}
                    >
                        <Text>爸</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '妈妈')}
                    >
                        <Text>妈</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor="yellow"
                        onPress={this.props.handleBack}
                    >
                        <Text style={styles.btn_font_red}>{"\u2190"}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor="yellow"
                        onPress={this.props.handleClear}
                    >
                        <Text style={styles.btn_font_red}>C</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.line}>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '哥哥')}
                    >
                        <Text>兄</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '姐姐')}
                    >
                        <Text>姐</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '弟弟')}
                    >
                        <Text>弟</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '妹妹')}
                    >
                        <Text>妹</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.line}>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '丈夫')}
                    >
                        <Text>夫</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '妻子')}
                    >
                        <Text>妻</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.btn_old] : [styles.btn,styles.btn_old, styles.disabled_btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? this.handleIsOld.bind(this, '长') : null}
                    >
                        <Text>长</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                    >
                        <Text>的</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.line}>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '儿子')}
                    >
                        <Text>儿</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? null : this.handlePress.bind(this, '女儿')}
                    >
                        <Text>女</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.btn_young] : [styles.btn, styles.btn_young, styles.disabled_btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                        onPress={bool ? this.handleIsOld.bind(this, '轻') : null}
                    >
                        <Text>轻</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={bool? [styles.btn, styles.disabled_btn] : [styles.btn]}
                        underlayColor={bool ? '#DEDEDE': 'green'}
                    >
                        <Text>等</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

});

var styles = StyleSheet.create({

    container: {
        flex: 7
    },

    line: {
        flex: 1,
        flexDirection: 'row'
    },

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: '#EEF0F2',
        borderWidth: 2/PixelRatio.get(),
        backgroundColor: '#FAFBFC'
    },

    disabled_btn: {
        opacity: 0.3,
        backgroundColor: '#DEDEDE'
    },

    btn_orange: {
        backgroundColor: '#FB742E'
    },

    btn_old: {
        backgroundColor: '#35A084'
    },

    btn_young: {
        backgroundColor: '#4BCC6B'
    },

    btn_font_red: {
        color: 'red'
    }

});


module.exports = Ctrl;
