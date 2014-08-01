using System;
namespace School.API
{
    public interface IStartup
    {
        void Configuration(Owin.IAppBuilder app);
        void ConfigureOAuth(Owin.IAppBuilder app);
    }
}
