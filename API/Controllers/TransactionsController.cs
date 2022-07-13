
using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public TransactionsController(
            IUnitOfWork unitOfWork,
            IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<TransactionDto>> Get()
        {
            return await _unitOfWork.TransactionRepository.GetTransactions();
        }

        [HttpPut]
        public async Task<ActionResult<TransactionDto>> Add(TransactionDto transactionDto)
        {
            var transaction = _mapper.Map<Transaction>(transactionDto);
            _unitOfWork.TransactionRepository.AddTransaction(transaction);
            if (await _unitOfWork.Complete())
            {
                return Ok(_mapper.Map<TransactionDto>(transaction));
            }
            return BadRequest("Failed to add transaction");
        }

        [HttpPost]
        public async Task<ActionResult<TransactionDto>> Update(TransactionDto transactionDto)
        {
            var transaction = _mapper.Map<Transaction>(transactionDto);
            _unitOfWork.TransactionRepository.UpdateTransaction(transaction);
            if (await _unitOfWork.Complete())
            {
                return Ok(_mapper.Map<TransactionDto>(transaction));
            }
            return BadRequest("Failed to update transaction");
        }

        [HttpDelete]
        public async Task<ActionResult<bool>> Delete([FromQuery]long id)
        {
            await _unitOfWork.TransactionRepository.DeleteTransaction(id);
            if (await _unitOfWork.Complete())
            {
                return Ok();
            }
            return BadRequest("Failed to delete transaction");
        }
    }
}