const commentReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT-COMMENTS': return action.comments
    case 'ADD-COMMENT': return state.concat(action.comment)
    default: return state
  }
}

export const initComments = comments => ({
  type: 'INIT-COMMENTS',
  comments
})

export const addComment = comment => ({
  type: 'ADD-COMMENT',
  comment
})

export default commentReducer