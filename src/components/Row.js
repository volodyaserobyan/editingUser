import React, {useState} from 'react';
import '../style/row.css'
import Loader from "react-loader-spinner";
import { putItem } from '../actions/Action';
import { connect } from 'react-redux';
import _ from "lodash";

const Row = ({context, putItem, groupIdReducer, userIdReducer, isCons}) => {
    const [inputValue, setInputValue] = useState('');
    const [isEditable, setEditable] = useState(false);
    const [editValue, setEditValue] = useState('');

    if (_.isEmpty(context)) return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;

    const handleChange = (e) => {
        const { value } = e.target;
        cons: isCons ? newArr : context.cons
        setInputValue(value);
    }
    
    const handleClickAdd = () => {
        const newArr = context[isCons ? 'cons' : 'pros'].slice();
        newArr.push(inputValue)
        const obj = {
            itemContext: {
                pros: isCons ? context.pros : newArr,
            }
        }

        putItem(groupIdReducer, userIdReducer, obj);
    }

    const deleteItem = (e) => {
        const index = e.target.name
        const newArr = context[isCons ? 'cons' : 'pros'].slice();
        newArr.splice(index, 1)
        const obj = {
            itemContext: {
                pros: isCons ? context.pros : newArr,
                cons: isCons ? newArr : context.cons
            }
        }

        putItem(groupIdReducer, userIdReducer, obj)
    }

    return (
        <div className='blok'>
            <div className='containerItems'>
                <div className='title'>
                    <p>{isCons ? "Con's" : "Pro's"} </p>
                </div>
                {context[isCons ? 'cons' : 'pros'].map((item, i) =>
                <div key={i} className='items'> 
                        <p name={i} className='itemContext'>{item} </p>
                        <button name={i} onClick={deleteItem} className='deleteItem'>Delete</button>
                </div>
                )}
            </div>
            <div className='addItems'>
                <input type='text' placeholder={isCons ? "New Con's" : "New Pro's"} value={inputValue} name='inputValue' onChange={handleChange} className='input' />
                <button className='addBtn' onClick={handleClickAdd}>Add</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    if (_.isEmpty(state)) {
      return {
        ...state
      };
    } else {
      return {
        context: state.getItemsReducer.itemContext,
        groupIdReducer: state.groupIdReducer.groupId,
        userIdReducer: state.userIdReducer.userId,
      };
    }
  };

const mapDispatchToProps = dispatch => {
    return {
        putItem: (groupId, userId, obj) => dispatch(putItem(groupId, userId, obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Row);