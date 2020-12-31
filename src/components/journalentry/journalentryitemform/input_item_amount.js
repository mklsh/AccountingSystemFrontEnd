import React from "react";


const InputItemAmount = ({item,itemIndex, newJournalEntry, setNewJournalEntry})=>{

    const handleAmountChange = (event) =>{
        setNewJournalEntry({
                ...newJournalEntry,
                itemsList:newJournalEntry.itemsList.map((i,index)=>
                    (index===itemIndex)?{...i,amount:event.target.value}:i)
            }
        )

    }
    return (
        <input type="number" value={item.amount} onChange={handleAmountChange}/>
    )
}

export default InputItemAmount