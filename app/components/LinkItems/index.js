import React, {Component} from 'react';
import {Map} from 'immutable';
import autobind from 'autobind-decorator';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    ScrollView,
    Button
} from 'react-native';

import style from './style';
import LinkItem from '../LinkItem';
import Swipeout from '../Swipeout';
import Hr from '../Hr';

@autobind
class LinkItems extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    shouldComponentUpdate(newProps, newState, newContext) {
        return !Map(this.props).equals(Map(newProps))
    }

    componentWillUpdate(newProps, newState, newContext) {
    }

    componentDidUpdate(oldProps, oldState, oldContext) {
    }

    componentWillUnmount() {
    }

    static defaultProps = {
        items: []
    }
    state = {}
    static propTypes = {
        items: React.PropTypes.array.isRequired,
        style: React.PropTypes.object
    }

    render() {
        const {items, style, ...rest} = this.props;

        return (
            <ListView
                {...rest}
                style={[{alignSelf: 'stretch'}, style]}
                renderRow={this._renderRow}
                dataSource={
                    new ListView.DataSource({
                        rowHasChanged: (r1, r2) => !Map(r1).equals(Map(r2)),
                    }).cloneWithRows(items)
                }
            />
        )
    }

    render2() {
        const {items, style, ...rest} = this.props;
        return (
            // {/*<ScrollView*/}
            //     {/*{...rest}*/}
            //     {/*style={{height: 300}}*/}
            // {/*>*/}
            <ScrollView style={{alignSelf: 'stretch'}}>
                {items.map((x, i) => this._renderRow(x, null, i))}
            </ScrollView>
            //</ScrollView>
        )
    }

    _renderRow(rowData, sectionID, rowID) {
        return <LinkItem
            showBorder={rowID == 0 ? null : 'top'} {...rowData}
        />
    }
}

export default LinkItems;
