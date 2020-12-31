import React from 'react'


const SelectType = ({newLegalEntity,setNewLegalEntity})=>{

    const handleTypeChange =(event) =>{
        setNewLegalEntity({...newLegalEntity,type:event.target.value})
    }

    return (

        <select value={newLegalEntity.type} onChange={handleTypeChange}>
            <option disabled={true}/>
            <option value="CUSTOMER">Customer</option>
            <option value="VENDOR">Vendor</option>
            <option value="EMPLOYEE">Employee</option>
        </select>

    )

}


export default SelectType