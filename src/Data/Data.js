import { 
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
    //UilPackage,
    UilChart
 } from "@iconscout/react-unicons";

 import img1 from "../imgs/img1.png";
 import img2 from "../imgs/img2.png";
 import img3 from "../imgs/img3.png";


 export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'Dashboard'
    },
    {
        icon: UilClipboardAlt,
        heading: 'Orders'
    },
    {
        icon: UilUsersAlt,
        heading: 'Customers'
    },
    {
        icon: UilChart,
        heading: 'Analytics'
    }
    
 ];

 export const CardsData = [
    {
        title: 'Sales',
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: '25,977',
        png: UilUsdSquare,
        series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },
    {
        title: 'Revenue',
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7"
        },
        barValue: 81,
        value: '14,270',
        png: UilMoneyWithdrawal,
        series: [
            {
                name: 'Revenue',
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ]
    },
    {
        title: 'Expenses',
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b"
        },
        barValue: 60,
        value: '4,270',
        png: UilClipboardAlt,
        series: [
            {
                name: 'Expenses',
                data: [10, 25, 15, 30, 12, 15, 20]
            }
        ]
    },
 ];

 export const NewsData = [
    // {
    //   img: img1,
    //   name: "Andrew Thomas",
    //   noti: "has ordered Apple smart watch 2500mh battery.",
    //   time: "25 seconds ago",
    // },
    // {
    //   img: img2,
    //   name: "James Bond",
    //   noti: "has received Samsung gadget for charging battery.",
    //   time: "30 minutes ago",
    // },
    // {
    //   img: img3,
    //   name: "Iron Man",
    //   noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    //   time: "2 hours ago",
    // },
    {
        "title": "What can Eric Adams do? The limits of turning New York City into a crypto hub",
        "desc": "Despite the limitations of his office, the mayor-elect of New York could leverage his agenda-setting power to the benefit of both crypto and city residents. ",
        "image": "https://images.cointelegraph.com/images/840_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTEvMmY5ZWYxNWItMjZlMC00YTNkLThhOTktOGQ0N2EyNjBmMjFhLmpwZw==.jpg",
        "url": "https://cointelegraph.com/news/what-can-eric-adams-do-the-limits-of-turning-new-york-city-into-a-crypto-hub",
        "date": "Mon, 15 Nov 2021 16:30:00"
    },
    {
        "title": "Nasdaq-listed Bitcoin mining firm Marathon to raise $500M in debt",
        "desc": "Marathon’s stock hit a six-year high in early November, with the firm accumulating $460 million worth of Bitcoin.",
        "image": "https://images.cointelegraph.com/images/840_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMTEvZWMyYzFjMDEtMGQ1MC00MWI1LTkxNjktNTZkNjJhYThkYzZiLmpwZw==.jpg",
        "url": "https://cointelegraph.com/news/nasdaq-listed-bitcoin-mining-firm-marathon-to-raise-500m-in-debt",
        "date": "Mon, 15 Nov 2021 15:45:00"
    }
  ];