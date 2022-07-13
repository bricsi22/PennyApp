using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        ITransactionRepository TransactionRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}