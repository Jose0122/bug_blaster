import'./styles.css'
import { useReducer } from 'react';
import './App.css';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/TicketReducer';
import Ticketlist from './components/Ticketlist';
import { sortTickets } from './utilities/sortingUtilities';

function App() {

  const initialState= {tickets:[],editingTicket:null,sortPreference:"High to Low"}

  const [state,dispatch] = useReducer(ticketReducer,initialState)
  const sortedTickets = sortTickets(state.tickets,state.sortPreference)
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
        <TicketForm 
        dispatch={dispatch} 
        editingTicket={state.editingTicket}/>
        {state.tickets.length > 0 && (
        <div className='results'>
        <h2>All Tickets</h2>
        <select value={state.sortPreference} onChange={(e)=>dispatch({type:"SET_SORTING",payload:e.target.value})}>
          <option value="High to Low">High to Low</option>
          <option value="Low to High">Low to High</option>
        </select>
          <Ticketlist 
          tickets={sortedTickets} 
          dispatch={dispatch}>
          </Ticketlist>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
