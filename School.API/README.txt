* Setup Owin server and configure ASP.NET Web API to be hosted within an Owin server
1. Install-Package Microsoft.AspNet.WebApi.Owin -Version 5.1.2
2. Install-Package Microsoft.Owin.Host.SystemWeb -Version 2.1.0

3. Add Startup class with attribute:
[assembly: OwinStartup(typeof(School.API.Startup))]

* Add ASP.Net Identity System
4.Install-Package Microsoft.AspNet.Identity.Owin -Version 2.0.1
5.Install-Package Microsoft.AspNet.Identity.EntityFramework -Version 2.0.1

* Configure our API to use OAuth authentication workflow
6.Install-Package Microsoft.Owin.Security.OAuth -Version 2.1.0

* Register
Put http://localhost:63632/api/account/register
Content-Type: application/json
{
  "userName": "Taiseer",
  "password": "SuperPass",
  "confirmPassword": "SuperPass"
}

* Get token
put http://localhost:63632/token
Content-Type: application/json, application/x-www-form-urlencoded
grant_type=password&username=Tester&password=abc!123   <-- no cr!!

* Get claims
http://localhost:63632/api/account/claim
Authorization: Bearer VwCZ_5D56uH3sxbUJ40IgMGw3UMFJPC1ac1zwI7le4yITNDcgsmBA-QYnvUfQzdy4OU7dwH81QBa1uffHTh5pVsdnUVBTUWY6GsFJ6xZ-2Ty4nZIJbpbYZt_tKgm1o--_1_mJyZoxHcz13c8tQUTqIYJgTq94qkg2_rFEqX1aY6KwYWfYVXce4y1U9lNzNrhYJgRDgAsRXGLVRF9aOZ_APVER8L5rsJQaXfprPcrP8E


*Get Orders service
get http://localhost:63632/api/orders
Authorization: Bearer VwCZ_5D56uH3sxbUJ40IgMGw3UMFJPC1ac1zwI7le4yITNDcgsmBA-QYnvUfQzdy4OU7dwH81QBa1uffHTh5pVsdnUVBTUWY6GsFJ6xZ-2Ty4nZIJbpbYZt_tKgm1o--_1_mJyZoxHcz13c8tQUTqIYJgTq94qkg2_rFEqX1aY6KwYWfYVXce4y1U9lNzNrhYJgRDgAsRXGLVRF9aOZ_APVER8L5rsJQaXfprPcrP8E

Test GIT