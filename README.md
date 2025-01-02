# React + Vite

1. addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword):

Functionality:

Adds a new transaction to the transactions array.

Sends Ether to the specified receiver using a low-level call.

Emits the Transfer event to log the transaction details.

Parameters:

receiver: The address of the recipient.

amount: The amount of Ether being sent.

message: A custom message associated with the transaction.

keyword: An additional string for tagging or categorizing the transaction.


2. getAllTransactions():

Returns the entire array of transactions, allowing users to see all transfers that have occurred.


3. getTransactionCount():

Returns the total number of transactions recorded in the contract.1 
