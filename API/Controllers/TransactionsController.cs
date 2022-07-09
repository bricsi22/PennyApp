using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionsController : ControllerBase
    {
        //private readonly ILogger<TransactionsController> _logger;
        /*private TransactionsController(ILogger<TransactionsController> logger)
        {
            _logger = logger;
        }*/

        [HttpGet]
        public IEnumerable<Transaction> Get()
        {
            var transactions = new List<Transaction>()
            {
                new Transaction {
                    Id = 1,
                    Amount = 450,
                    Date = new DateTime(2022, 07, 09, 12, 33, 45),
                    Type = "Debit"
                },
                new Transaction {
                    Id = 2,
                    Amount = 666,
                    Date = new DateTime(2022, 07, 09, 11, 13, 46),
                    Type = "Debit"
                },
                new Transaction {
                    Id = 3,
                    Amount = 444,
                    Date = new DateTime(2022, 07, 05, 8, 33, 32),
                    Type = "Debit"
                },
                new Transaction {
                    Id = 4,
                    Amount = 345,
                    Date = new DateTime(2022, 07, 04, 6, 33, 41),
                    Type = "Credit"
                },
                new Transaction {
                    Id = 5,
                    Amount = 222,
                    Date = new DateTime(2022, 07, 09, 12, 33, 45),
                    Type = "Credit"
                },
            };
            return transactions;
        }
    }
}