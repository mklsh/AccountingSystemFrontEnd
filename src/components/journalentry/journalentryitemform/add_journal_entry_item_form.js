import React from 'react'
import SelectItemType from "../select_journal_entry_item_type";
import InputAccountName from "./input_account_name";
import InputItemAmount from "./input_item_amount";
import InputLegalEntityName from "./input_legal_entity_name";
import AddItemLineButton from "./add_item_line_button";
import DeleteItemLineButton from "./delete_item_line_button";

const JournalEntryItemAddForm =({item, itemIndex, newJournalEntry, setNewJournalEntry})=>{


    return (
        <tr>
            <td>
                <SelectItemType item={item} itemIndex={itemIndex} newJournalEntry={newJournalEntry} setNewJournalEntry={setNewJournalEntry}/>
            </td>
            <td><InputAccountName item={item} itemIndex={itemIndex} newJournalEntry={newJournalEntry} setNewJournalEntry={setNewJournalEntry} /></td>
            <td><InputItemAmount item={item} itemIndex={itemIndex} newJournalEntry={newJournalEntry} setNewJournalEntry={setNewJournalEntry}/></td>
            <td><InputLegalEntityName item={item} itemIndex={itemIndex} newJournalEntry={newJournalEntry} setNewJournalEntry={setNewJournalEntry}/></td>
            <td><AddItemLineButton setNewJournalEntry={setNewJournalEntry} newJournalEntry={newJournalEntry} itemIndex={itemIndex} /></td>
            <td><DeleteItemLineButton  setNewJournalEntry={setNewJournalEntry} newJournalEntry={newJournalEntry} itemIndex={itemIndex} /></td>

        </tr>
    )
}

export default JournalEntryItemAddForm