import '../styles.css'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function TicketForm({dispatch,editingTicket}){
    const[title,setTitle] = useState('');
    const[description,setDescription] = useState('')
    const[priority,setPriority]=useState('1')


useEffect(()=>{
    if(editingTicket){
        setTitle(editingTicket.title)
        setDescription(editingTicket.description)
        setPriority(editingTicket.priority)
    }
    else{
        clearForm();
    }
},[editingTicket])

const priorityLabels={
    1:'Low',
    2:'Medium',
    3:'High'
}

const clearForm = ()=>{
    setTitle('');
    setDescription('');
    setPriority("1");
}

const handleSubmit=(e)=>{
    e.preventDefault();

    const ticketData = {
        id : editingTicket ? editingTicket.id :  new Date().toISOString(),
        title,
        description,
        priority
    }

    dispatch
    ({
        type:editingTicket ? "UPDATE_TICKET":"ADD_TICKET",
        payload : ticketData,
    })
    clearForm();
}

    const handleCancel=()=>{
        dispatch({type:"CLEAR_EDITING_TICKET"})
        clearForm();
    }


    return(
        <form action="" onSubmit={handleSubmit} className='ticket-form'>
            <div>
                <label>Title</label>
                <input type="text" 
                className='form-input' 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}></input>
            </div>

            <div>
                <label>Description</label>
                <textarea type="text" 
                className='form-input' 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>

            <div>
                <fieldset className='priority-fieldset'>
                    <legend>Priority</legend>
                    {
                        Object.entries(priorityLabels).map(([value,lable])=>(
                            <label key={value} className="priority-label">
                                <input type='radio' 
                                className='priority-input' 
                                value={value} 
                                checked={priority === value} 
                                onChange={(e)=>setPriority(e.target.value)}></input>
                                {lable}
                            </label>
                        ))
                    }
                </fieldset>
                <button type='submit' className='button'>Submit</button> 
            </div>
            {editingTicket && 
            <button className='button' onClick={handleCancel}>Cancel Edit</button>}
        </form>
    )
}