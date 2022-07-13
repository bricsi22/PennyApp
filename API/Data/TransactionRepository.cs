using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using API.Models;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public TransactionRepository(
            DataContext dataContext,
            IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }

        public async Task<IEnumerable<TransactionDto>> GetTransactions()
        {
            return await _dataContext.Transactions
                .ProjectTo<TransactionDto>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        public void AddTransaction(Transaction transaction)
        {
            _dataContext.Transactions.Add(transaction);
        }

        public TransactionDto UpdateTransaction(Transaction transaction)
        {
            var updatedTransaction = _dataContext.Transactions.Update(transaction);
            return _mapper.Map<TransactionDto>(updatedTransaction.Entity);
        }

        public async Task DeleteTransaction(long transactionId)
        {
            var transaction = await _dataContext.Transactions.FindAsync(transactionId);
            _dataContext.Transactions.Remove(transaction);
        }
    }
}