import React, { useEffect } from "react";
import "../style/dashboard.css";
import Row from './Row';
import { connect } from "react-redux";
import {
  getGroupId,
  getUserId,
  getItemContext,
  putItem
} from "../actions/Action";
import Loader from "react-loader-spinner";
import _ from "lodash";

const Dashboard = ({
  groupIdReducer,
  userIdReducer,
  getItemsReducer,
  fetchGroupId,
  fetchUserId,
  fetchItems,
//   putItem
}) => {

  useEffect(() => {
    fetchGroupId();
    fetchUserId();
  }, []);

  useEffect(() => {
    if (groupIdReducer && userIdReducer) {
      fetchItems(groupIdReducer, userIdReducer);
      // for restoting data
    //   const obj = {
    //       itemContext: {
    //           pros: ['random reason 1', 'random reason 2', 'random reason 3'],
    //           cons: ['random reason 1', 'random reason 2', 'random reason 3', 'random reason 4']
    //       }
    //   }
    //   putItem(groupIdReducer, userIdReducer, obj);
    }
  }, [groupIdReducer, userIdReducer]);

  if (_.isEmpty(getItemsReducer)) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }
  return (
    <div className="container">
        <Row />
        <Row isCons/>
    </div>
  );
};

const mapStateToProps = state => {
  if (_.isEmpty(state)) {
    return {
      ...state
    };
  } else {
    return {
      groupIdReducer: state.groupIdReducer.groupId,
      userIdReducer: state.userIdReducer.userId,
      getItemsReducer: state.getItemsReducer
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGroupId: () => dispatch(getGroupId()),
    fetchUserId: () => dispatch(getUserId()),
    fetchItems: (groupId, userId) => dispatch(getItemContext(groupId, userId)),
    putItem: (groupId, userId, obj) => dispatch(putItem(groupId, userId, obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
