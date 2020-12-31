import React from 'react'
import AccountsMenu from "./account/accounts_menu";
import LegalEntityMenu from './legalentity/legal_entity_menu'
import JournalEntryMenu from "./journalentry/journal_entry_menu";


const App =()=>{
    return (
        <div>
             <AccountsMenu/>
             <LegalEntityMenu/>
             <JournalEntryMenu/>

        </div>
    )
}

export default App