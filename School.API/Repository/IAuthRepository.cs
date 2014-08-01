using System;
namespace School.API.Repository
{
    public interface IAuthRepository
    {
        void Dispose();
        System.Threading.Tasks.Task<Microsoft.AspNet.Identity.EntityFramework.IdentityUser> FindUser(string userName, string password);
        System.Threading.Tasks.Task<Microsoft.AspNet.Identity.IdentityResult> RegisterUser(School.API.Models.User userModel);
    }
}
