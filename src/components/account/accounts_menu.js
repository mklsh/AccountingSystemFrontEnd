import React from 'react'
import {useState,useEffect} from 'react'
import AddAccountForm from "./add_account_form";
import AccountsTable from "./accounts_table";
import accountsService from '../../services/accounts'


const AccountsMenu =()=>{
    const [accountsList, setAccountsList] = useState([])
    useEffect(()=>{
        accountsService.getAll()
            .then(initialAccounts => setAccountsList(initialAccounts))

    },[])

    return (
        <div>
        <AddAccountForm accountsList={accountsList} setAccountsList={setAccountsList} />
        <AccountsTable accountsList={accountsList} setAccountsList={setAccountsList}/>
        </div>

    )
}

export default AccountsMenu