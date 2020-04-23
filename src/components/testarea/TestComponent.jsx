import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import * as actionTest from './TestAction'
class TestComponent extends Component {
    render() {
        const { data, testActionCreator } = this.props
        const { incrementCounter, decrementCounter } = testActionCreator
        return (
            <div>
                <h1>Test area</h1>
                <h3>Test :{data} </h3>
                <Button onClick={incrementCounter} color='green' content='incrementCounter' />
                <Button onClick={decrementCounter} color='green' content='decrementCounter' />

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.testReducer.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        testActionCreator: bindActionCreators(actionTest, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);