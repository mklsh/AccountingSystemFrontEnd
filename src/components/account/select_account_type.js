import React from 'react'


const SelectType = ({newAccount, setNewAccount})=>{

    const handleTypeChange =(event) =>{
        setNewAccount({...newAccount,type:event.target.value})
    }

    return (

            <select value={newAccount.type} onChange={handleTypeChange}>
                <option disabled={true}/>
                <option value="CURRENT_ASSET">Current Asset</option>
                <option value="NON_CURRENT_ASSET">Fixed asset</option>
                <option value="CURRENT_LIABILITY">Current Liability</option>
                <option value="LONG_TERM_LIABILITY">Long Term Liability</option>
            </select>

    )

}


export default SelectType