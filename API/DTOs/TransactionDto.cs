using System;

namespace API.DTOs
{
    public class TransactionDto
    {
        public long Id { get; set; }
        public string Type { get; set; }
        public DateTime Date { get; set; }
        public double Amount { get; set; }
    }
}