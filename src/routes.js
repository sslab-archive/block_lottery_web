/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import BubbleChart from "@material-ui/icons/BubbleChart";
import ViewList from "@material-ui/icons/ViewList"
import QnA from "@material-ui/icons/QuestionAnswer"
import Create from "@material-ui/icons/Create"
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Icons from "views/Icons/Icons.jsx";
// core components/views for RTL layout

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/main"
    },
    {
        path: "/create_event",
        name: "create event",
        icon: Create,
        component: Icons,
        layout: "/main"
    },
    {
        path: "/event_list",
        name: "event list",
        icon: ViewList,
        component: Icons,
        layout: "/main"
    },
    {
        path: "/qna",
        name: "Q & A",
        icon: QnA,
        component: Icons,
        layout: "/main"
    }
];

export default dashboardRoutes;
