namespace siama_api.Repository
{
    public interface IUnitOfWork
    {
        void RollBack();

        void SaveChanges();
    }
}
