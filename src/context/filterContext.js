import React, { useContext, useReducer } from 'react'
import reducer from '../reducer/reducer'
import data from '../data/people.json'
import { HANDLE_CHANGE } from '../utils/action'
const initialState =  {
      data: [...data],
      selectedData: [...data],
      tercihler: {yuzyuze: false, cevrimici: false},
      sehir: null,
      kim: []
}
const FilterContext = React.createContext()
export const FilterProvider = ({children}) => {
      const [state, dispatch] = useReducer(reducer, initialState)
      
      const handleChange = (data) => {
            dispatch({type: HANDLE_CHANGE, payload: data})
      }
      return (
        <FilterContext.Provider value={{...state, handleChange}}>{children}</FilterContext.Provider>
      )
}

// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext)
}