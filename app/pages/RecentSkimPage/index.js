import React, {Component, PropTypes} from 'react';
import {Map} from 'immutable';
import autobind from 'autobind-decorator';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    ListView,
    ScrollView,
    Button
} from 'react-native';

import sty from './style';

import Collections from '../../components/Collections'
import HomeItems from '../../components/HomeItems'

@autobind
class RecentSkimPage extends Component {
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
    static defaultProps = {}
    state = {}
    static propTypes = {}
    render() {
        const {store: {recent_skim: {items}}} = this.props

        return (
            <View style={sty.main}>
                <HomeItems
                    items={items.map(x => ({...x, style: {paddingHorizontal: 15}, bottomValues: [x.numerator, x.appointNum], onPress: () => alert(x.title)}))}
                />
            </View>
        )
    }
}

export default RecentSkimPage;
