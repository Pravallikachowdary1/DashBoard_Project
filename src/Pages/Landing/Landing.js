import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Label,
  Tooltip,
  Legend,
} from "recharts";
import currency from "../../Assests/Images/currency.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineContainer } from "react-icons/ai";
import { BsFillTabletLandscapeFill } from "react-icons/bs";
import { BsFillBagDashFill } from "react-icons/bs";
import abstract from "../../Assests/Images/abstarct.jfif";

const Landing = () => {
  const [tdata, settData] = useState(tabaleData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Filter the data based on the search term
    const filteredData = tabaleData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    settData(filteredData);
  };
  return (
    <div className="pl-[80px] pt-[30px] pr-[40px] pb-[40px] ">
      <div className="text-[#404040] font-bold text-[28px]">Hello fiteo</div>
      <div className="mt-[40px] grid grid-cols-4 gap-[50px]">
        <div className="bg-[#f7f5f5] shadow-xl h-[210px]  rounded-[20px] p-[30px]">
          <div className="flex gap-2">
            {/* <div><img src={currency} alt='currency'  className='[100px] h-[100px]'/></div> */}
            <AiFillDollarCircle className="h-[100px] w-[100px] text-[#008000] mb-[10px] mt-[10px]" />
            <div>
              <h1 className="text-[20px] text-[#767676] mb-[10px]">Earnings</h1>
              <h1 className="text-[#404040] text-[28px] font-bold mb-2.5">
                $198k
              </h1>
              <h1 className=" text-[#008000] font-semibold text-[18px] ">
                37.8%<span className="text-[#404040] mr-1">This Month</span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] shadow-xl h-[210px]  rounded-[20px] p-[30px]">
          <div className="flex gap-2">
            {/* <div><img src={currency} alt='currency'  className='[100px] h-[100px]'/></div> */}
            <AiOutlineContainer className="h-[100px] w-[100px] text-[#8888db] mb-[10px] mt-[10px]" />
            <div>
              <h1 className="text-[20px] text-[#767676] mb-[10px]">Orders</h1>
              <h1 className="text-[#404040] text-[28px] font-bold mb-2.5">
                $2.4k
              </h1>
              <h1 className=" text-[#008000] font-semibold text-[18px] ">
                2%<span className="text-[#404040] mr-1">This Month</span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] shadow-xl h-[210px]  rounded-[20px] p-[30px]">
          <div className="flex gap-3">
            <BsFillTabletLandscapeFill className="h-[100px] w-[100px] text-[#87CEEB] mb-[10px] mt-[10px]" />
            <div>
              <h1 className="text-[20px] text-[#767676] mb-[10px]">Balance</h1>
              <h1 className="text-[#404040] text-[28px] font-bold mb-2.5">
                $2.4k
              </h1>
              <h1 className=" text-[#008000] font-semibold text-[18px] ">
                2%<span className="text-[#404040] mr-1">This Month</span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] shadow-xl h-[210px]  rounded-[20px] p-[30px]">
          <div className="flex gap-3">
            <BsFillBagDashFill className="h-[100px] w-[100px] text-[#ffcccb] mb-[10px] mt-[10px]" />
            <div>
              <h1 className="text-[20px] text-[#767676] mb-[10px]">Balance</h1>
              <h1 className="text-[#404040] text-[28px] font-bold mb-2.5">
                $2.4k
              </h1>
              <h1 className=" text-[#008000] font-semibold text-[18px] ">
                2%<span className="text-[#404040] mr-1">This Month</span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <div className="w-[1200px] mt-[100px] bg-[#ffffffdc] shadow-xl p-[34px] rounded-[30px] ">
          <div className="flex justify-between">
            <div className="text-[#404040] font-bold text-[24px]">Overview</div>
            <button
              type="button"
              className="inline-flex w-[300p]  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Quarterly
              <svg
                className="w-5 h-5 -mr-1 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart width={100} height={150} data={data}>
              <Bar
                dataKey="pv"
                barSize={40}
                stackId="a"
                className="!rounded-[20px]"
                isAnimationActive={true}
                fill="#8884d8"
              />
          <XAxis dataKey="name" />
              <Bar dataKey="uv" barSize={40} stackId="a" fill="#dbe9f4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-[#ffffff]  rounded-2xl shadow-xl mt-[100px] p-[10px]">
          <div>
            <div className="text-[#404040] font-bold text-[24px] mt-[40px] ml-[20px] mb-[10px]">
              Customers
            </div>
            <div className="ml-[20px] text-[16px] text-[#767676]">
              Customer that buy Products
            </div>
          </div>
          <div className="">
            <PieChart width={300} height={300}>
              <Pie
                data={pidata}
                cx={140}
                cy={140}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >

                {pidata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                  ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] shadow-xl rounded-[20px] p-[30px] mt-[50px]">
        <div className="flex justify-between">
        <h1 className="text-[#404040] text-[24px] font-bold">Product Sell</h1>
        <div className="w-[350px]">
          
<form>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" value={searchTerm} onChange={handleSearch}  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Name" required/>
    </div>
</form>

        </div>
       
        </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Stocks
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Total Stocks
                </th>
            </tr>
        </thead>
        <tbody className="h-[100px]">
        {tdata.map((i) => {
              return ( 
                <tr className="mb-[20px] text-center">
                  <td className="border border-slate-300 ...">
                    <div className="flex gap-3 ml-[20px]">
                      <div>
                        <img
                          src={i.aImg}
                          alt="abs"
                          className="w-[80px] h-[50px] rounded-lg  mb-[10px] mt-[10px]"
                        />
                      </div>
                      <div>
                        <h1 className="text-[20px] font-bold text-[#4040404] mt-[10px] text-left">
                          {i.name}
                        </h1>
                        <h1 className="text-[16px] text-[#767676] ">
                          {i.content}
                        </h1>
                      </div>
                    </div>
                  </td>
                  <td className="border border-slate-300 ...">{i.frame}</td>
                  <td className="border border-slate-300 ...">{i.price}</td>
                  <td className="border border-slate-300 ...">{i.qty}</td>
                </tr>
              );
            })}
        </tbody>
    </table>
</div>

        ​
      </div>
    </div>
  );
};

const pidata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default Landing;
const data = [
  {
    name: "Jan",
    uv: 1890,
    amt: 2000,
  },
  {
    name: "Feb",
    uv: 1890,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    amt: 2290,
  },
  {
    name: "Jun",
    uv: 2780,
    amt: 2000,
  },
  {
    name: "Jul",
    uv: 1890,
    amt: 2181,
  },
  {
    name: "Aug",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sep",
    uv: 3490,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    amt: 2100,
  },
];
// const pieChartData = [
//   { type: "Mobile", value: 400 },
//   { type: "Web", value: 300 },
//   { type: "TV", value: 300 },
//   { type: "Tablet", value: 10 },
// ];
// const COLORS = ["#FF8A1E", "#C52015", "#FFBF5F", "#FF6635"];x

const tabaleData = [
  {
    aImg: abstract,
    name: "Abstract 3D",
    content: "Here is the Progress of Screens Done by the team until now.",
    frame: 34,
    price: 24,
    qty: 3,
  },
  {
    aImg: abstract,
    name: "Gold",
    content: "Here is the Progress of Screens Done by the team until now.",
    frame: 34,
    price: 24,
    qty: 3,
  },
  {
    aImg: abstract,
    name: "TATA",
    content: "Here is the Progress of Screens Done by the team until now.",
    frame: 34,
    price: 24,
    qty: 3,
  },
  {
    aImg: abstract,
    name: "Jio",
    content: "Here is the Progress of Screens Done by the team until now.",
    frame: 34,
    price: 24,
    qty: 3,
  },
  {
    aImg: abstract,
    name: "JP Power",
    content: "Here is the Progress of Screens Done by the team until now.",
    frame: 34,
    price: 24,
    qty: 3,
  },
  {
    aImg: abstract,
    name: "Abstract 3D",
    content: "Here is the Progress of Screens Done by the team until now.",
    frame: 34,
    price: 24,
    qty: 3,
  },
];
