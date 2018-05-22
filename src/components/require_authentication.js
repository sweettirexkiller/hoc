import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


export default function (ComposedComponent) {

    Component.propTypes = {
        name: PropTypes.string,
        authArray: PropTypes.arrayOf(PropTypes.string),
    };

    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        };


        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            }
        }


        componentWillUpdate(nextProps, nextState) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }


        render() {
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.authenticated
        }
    }

    return connect(mapStateToProps)(Authentication);
}