using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("Transactions")]
    public class Transaction
    {
        public long Id { get; set; }
        public string Type { get; set; }
        public DateTime Date { get; set; }
        public double Amount { get; set; }
    }
}