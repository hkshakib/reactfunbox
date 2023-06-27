import { ACTIONS } from '../../pages/Calculator';

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
    className='cursor-pointer text-2xl border border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-90 focus:bg-opacity-90'
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}