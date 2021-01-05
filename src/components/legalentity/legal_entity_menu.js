import React from 'react'
import {useState,useEffect} from 'react'
import AddLegalEntityForm from "./add_legal_entity_form";
import LegalEntityTable from "./legal_entity_table";
import legalEntityService from '../../services/legalentity'


const LegalEntityMenu =()=>{
    const [legalEntityList, setLegalEntityList] = useState([])
    useEffect(()=>{
        legalEntityService.getAll()
            .then(initialAccounts => setLegalEntityList(initialAccounts))

    },[])

    return (
        <div>
            <h1>Legal Entities</h1>
            <AddLegalEntityForm legalEntitiesList={legalEntityList} setLegalEntitiesList={setLegalEntityList} />
            <LegalEntityTable legalEntitiesList={legalEntityList} setLegalEntitiesList={setLegalEntityList}/>
        </div>

    )
}

export default LegalEntityMenu