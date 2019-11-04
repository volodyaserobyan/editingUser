const baseUrl = 'https://avetiq-test.firebaseapp.com'

export const getGroupId =  () =>  {
    return async(dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/group/volodya_serobyan`, {
                method: 'GET',
            })
            const {groupId} = await response.json()
            dispatch({
                type: 'GET_GROUPID',
                groupId,
            })
        }catch (e) {
            console.log({e})
        }
    }
}

export const getUserId = () => {
    return async(dispatch) => {
        try {
            const response = await fetch(`${baseUrl}/user/volodya_serobyan`, {
                method: 'GET',
            })
            const {userId} = await response.json();
            
            dispatch({
                type: 'GET_USERID',
                userId,
            })
        }catch (e) {
            console.log({e});
        }
    }
}

export const getItemContext = (groupId,userId ) => {
    return async(dispatch) => {
        try{const response = await fetch(`${baseUrl}/proscons/group/${groupId}/user/${userId}`, {
            method: 'GET',
        })
        const itemContext = await response.json()
        dispatch({
            type: 'GET_ITEMS',
            itemContext: JSON.parse(itemContext).itemContext,
        })}catch(e) {
            console.log({e});
            
        }
    }
}

export const putItem = (groupId, userId, obj)=> {
    return async(dispatch) => {
        try{const response = await fetch(`${baseUrl}/proscons/group/${groupId}/user/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(obj)
        }) 
        const itemContext = await response.json()
        dispatch({
            type: 'DELETE_ITEMS',
            itemContext: JSON.parse(itemContext).itemContext,
        })}catch(e) {
            console.log({e});
            
        }
    }
}