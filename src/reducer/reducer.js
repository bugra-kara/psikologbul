import { 
      HANDLE_CHANGE
  } from '../utils/action'
  
  const reducer = (state, action) => {
      if(action.type === HANDLE_CHANGE){
        console.log(action.payload)
            const newTercihler = action.payload === 'yuzyuze' ? {...state.tercihler, yuzyuze: !state.tercihler.yuzyuze} : action.payload === 'cevrimici' ? {...state.tercihler, cevrimici: !state.tercihler.cevrimici} : {...state.tercihler}
            const newSehir = action.payload?.value > 0 ? action.payload.label : action.payload?.value === 0 ? null : state.sehir
            const newData = state.data.filter((item)=> {
                if(newSehir !== null && newSehir !== 'Tüm Şehirler') {
                    console.log("here")
                    if((newTercihler.yuzyuze === true && newTercihler.cevrimici === false)) {
                        return item.tercihler.yuzyuze === true && item.sehir === newSehir
                    }
                    if(newTercihler.yuzyuze === false && newTercihler.cevrimici === true) {
                        return item.tercihler.cevrimici === true && item.sehir === newSehir
                    }
                    if(newTercihler.yuzyuze === true && newTercihler.cevrimici === true) {
                        return ((item.tercihler.cevrimici === true) && (item.tercihler.yuzyuze === true)) && (item.sehir === newSehir)
                    }
                    else {
                        return item.sehir === newSehir
                    }
                }
                else {
                    if((newTercihler.yuzyuze === true && newTercihler.cevrimici === false)) {
                        return item.tercihler.yuzyuze === true
                    }
                    if(newTercihler.yuzyuze === false && newTercihler.cevrimici === true) {
                        return item.tercihler.cevrimici === true
                    }
                    if(newTercihler.yuzyuze === true && newTercihler.cevrimici === true) {
                        return (item.tercihler.cevrimici === true) && (item.tercihler.yuzyuze === true)
                    }
                    else {
                        return item
                    }
                }
            })
          return { ...state, tercihler: {...newTercihler}, selectedData: [...newData], sehir: newSehir}
      }
      return state
  }
  export default reducer