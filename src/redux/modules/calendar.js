// 액션 타입 정의
const SET_DATE = 'calendar/SET_DATE'

// 액션 생성자
export const setDate = date => ({
  type: SET_DATE,
  payload: date
})

// 초기 상태
const initialState = {
  selectedDate: new Date() // 현재 날짜를 초기값으로 설정
}

// 리듀서
const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        selectedDate: action.payload
      }
    default:
      return state
  }
}

export default calendarReducer
