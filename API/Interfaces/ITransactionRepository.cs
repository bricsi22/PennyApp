using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Models;

namespace API.Interfaces
{
    public interface ITransactionRepository
    {
        Task<IEnumerable<TransactionDto>> GetTransactions();
        void AddTransaction(Transaction transaction);
        TransactionDto UpdateTransaction(Transaction transaction);
        void DeleteTransaction(Transaction transaction);
    }
}