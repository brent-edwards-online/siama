namespace siama_api.Repository
{
    using Entities;
    
    public class UnitOfWork : IUnitOfWork
    {
        private SiamaDbContext _context;

        public UnitOfWork(SiamaDbContext context)
        {
            this._context = context;
        }

        public void RollBack()
        {
          
        }

        public void SaveChanges()
        {
            this._context.SaveChanges();
        }
    }
}
