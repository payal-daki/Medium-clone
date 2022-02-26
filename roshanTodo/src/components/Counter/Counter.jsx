import { useDispatch, useSelector } from "react-redux"
import { incCount,decCount } from "../../reduxStore/action"
export const Counter = () => {

    const {count} = useSelector(store => ({...store}))
    const dispatch = useDispatch()
    return <div>
        counter = {count}
        <button onClick={()=>dispatch(incCount(1))}>Add Count</button>
        <button onClick={()=>dispatch(decCount(1))}>Dec Count</button>
    </div>
}