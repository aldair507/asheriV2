/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
// import Profile from "views/examples/Profile.js";

import Register from "views/examples/Register.js";

import Tables from "views/examples/Tables.js";
// import Icons from "views/examples/Icons.js";
import RegisterUser from "views/examples/RegisterUser.js";
import RegisterRoles from "views/examples/RegisterRoles.js";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/register/users",
    name: "Register Users",
    icon: "ni ni-single-02",
    component: <RegisterUser />,
    layout: "/admin",
  },
  
  {
    path: "/roles",
    name: "Register Roles",
    icon: "ni ni-circle-08",
    component: <RegisterRoles />,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "LogOut",
    icon: "ni ni-key-25 text-info",
    component: <Register />,
    layout: "/auth",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-single-02",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // }
 
];
export default routes;
