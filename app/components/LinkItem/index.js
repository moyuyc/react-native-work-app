import React, {Component} from 'react';
import {Map} from 'immutable';
import autobind from 'autobind-decorator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    ScrollView,
    Button
} from 'react-native';

import sty from './style';
import Hr from '../../components/Hr'

@autobind
class LinkItem extends Component {
    constructor(props) {
      super(props)
    }
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps(newProps) {}
    shouldComponentUpdate(newProps, newState, newContext) {
      return !Map(this.props).equals(Map(newProps))
    }
    componentWillUpdate(newProps, newState, newContext) {}
    componentDidUpdate(oldProps, oldState, oldContext) {}
    componentWillUnmount() {}
    static defaultProps = {
        style: {},
        borderColor: '#E5E5E5',
        showBorder: ''
    }
    state = {}
    static propTypes = {
        leftText: React.PropTypes.string.isRequired,
        rightText: React.PropTypes.string,
        showBorder: React.PropTypes.oneOf(["top", "both", "bottom"]),
        borderColor: React.PropTypes.string,
        style: React.PropTypes.object,
        onPress: React.PropTypes.func,
        leftComponent: React.PropTypes.element,
        rightComponent: React.PropTypes.element
    }
    render() {
        const {style, leftText, leftComponent, rightComponent, onPress, rightText, showBorder, borderColor} = this.props
        return (
            <View>
                {
                    (showBorder === 'both' || showBorder=== 'top') &&
                    <Hr marginBottom={0} style={sty.hr}/>
                }
                <TouchableOpacity
                    activeOpacity={.83}
                    onPress={onPress} style={[sty.main, style, {borderColor}]}>
                    <View style={sty.container}>
                        <View style={[sty.left, leftComponent?{flex: 5}:{}]}>
                            {leftComponent}
                            {!leftComponent && <Text>{leftText}</Text>}
                        </View>
                        <View style={sty.right}>
                            {rightComponent}
                            {!rightComponent  && <Text style={sty.rightText}>{rightText}</Text>}
                            <Icon style={sty.rightIcon} name="angle-right" size={20} color="#C4C4C4" />
                        </View>
                    </View>
                </TouchableOpacity>
                {
                    (showBorder === 'both' || showBorder=== 'bottom') &&
                    <Hr marginBottom={0} style={sty.hr}/>
                }
            </View>
        )
    }
}

export default LinkItem;