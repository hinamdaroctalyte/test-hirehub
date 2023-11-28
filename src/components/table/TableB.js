import React, { useState } from 'react';
import Icon from '../icon';
import { Button, InputWithLabel, Badge } from '../core';
import { Pagination, Table, Space, Flex } from 'antd';
import '../../assets/css/table.css'

function TableB({
    columns,
    data,
    filterBy,
    onViewClick,
    onEditClick,
    onDeleteClick,
    onMessageClick
}) {
    const newColumn = columns.map((value, index) => {
        let columnSorter;
        if (value.sorter === true) {
            // If sorter is true, implement a custom sorter function based on data type
            columnSorter = (a, b) => {
                if (typeof a.name === 'string' && typeof b.name === 'string') {
                    return a.name.localeCompare(b.name);
                } else if (typeof a.name === 'number' && typeof b.name === 'number') {
                    return a.name - b.name;
                } else {
                    // Handle other data types if needed
                    return 0; // No sorting
                }
            };
        } else if (value.sorter === false) {
            // If sorter is explicitly false, don't define a sorter function
            columnSorter = undefined;
        }

        return {
            ...value,
            render: (val, id) => {
                if (value.dataIndex === "name" || value.dataIndex === "employerName") {
                    return (
                        <>
                            {val?.img ?
                                <div className='flex justify-start items-center gap-x-2 min-w-[140px]'>
                                    <img className="inline-block h-[30px] w-[30px] rounded-full" src={val?.img} alt="profile image" />
                                    <span className='whitespace-nowrap'>{val?.name}</span>
                                </div> :
                                <span>{val}</span>
                            }
                        </>
                    )
                }
                else if (value.dataIndex === "payment") {
                    return (
                        <div className='capitalize'>
                            {val}
                        </div>
                    )
                }
                else if (value.dataIndex === "account") {
                    return (
                        <div className='w-full text-center'>
                            <Badge>{id.account}</Badge>
                        </div>
                    )
                }
                else if (value.dataIndex === "accountStatus") {
                    return (
                        <div className='w-full text-center'>
                            <Badge>{id.accountStatus}</Badge>
                        </div>
                    )
                }
                else if (value.dataIndex === "action") {
                    return (
                        <Flex gap="small">
                            <span className='cursor-pointer'
                                onClick={() => onViewClick(id?.key)}
                            >
                                <Icon name="View" />
                            </span>
                            <span className='cursor-pointer'
                                onClick={() => onEditClick(id?.key)}
                            >
                                <Icon name="Edit" />
                            </span>
                            <span className='cursor-pointer'
                                onClick={() => onMessageClick(id?.key)}
                            >
                                <Icon name="Message" />
                            </span>
                        </Flex>
                    )
                }
                else {
                    return val;
                }
            },
            sorter: columnSorter,
        }
    });

    const handleTableChange = (pagination, filters, sorter) => {
        // Handle pagination change here
        // Update the data displayed based on the new page number or other changes
        // You might want to update your data source or fetch new data here
        console.log(pagination); // Use pagination object to get current, pageSize, total, etc.
    };
    
    return (
        <div class="flex flex-col bg-white rounded-[8px] overflow-hidden shadow-md">
            <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden ">
                        <div class="bg-white flex justify-between items-center py-3 px-5 ">
                            <span className='text-black-2 text-[18px] leading-[28px] font-medium'>Filters</span>
                            <div className='flex justify-end items-center gap-1'>
                                {filterBy?.map(value => {
                                    return (
                                        <InputWithLabel name={value} sm />
                                    )
                                })}
                                <div className='flex justify-end items-center gap-1'>
                                    <Button sm type="narrow" >Search</Button>
                                    <Button sm type="narrow" color="white" icon="Cross">Reset</Button>
                                </div>
                            </div>
                        </div>
                        <div class="overflow-hidden">
                            <Table
                                columns={newColumn}
                                dataSource={data}
                                pagination={{ pageSize: 10 }} // Set your desired page size
                                onChange={handleTableChange} // Handle pagination change
                            />
                        </div>
                        <div class="flex justify-between items-center border-t py-5 px-4">
                            {/* <span className='text-gray-6 text-[14px] leading-[20px] font-semibold'>
                                Showing 1-10 from 100
                            </span> */}
                            {/* <Pagination defaultCurrent={6} total={500} /> */}
                            {/* itemBg={"#000"} itemInputBg={"#fcfcfc"} itemLinkBg={"#f6cf6c"} itemSize="100" */}
                            {/* <nav class="flex items-center space-x-1">
                                <button type="button" class="w-[32px] h-[32px] flex items-center gap-x-2 text-sm rounded-[8px] text-purple-4 bg-purple-7 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 p-2.5 ">
                                    <span aria-hidden="true">
                                        <Icon name="ChevronLeft" size="10" />
                                    </span>
                                    <span class="sr-only">Previous</span>
                                </button>
                                <button type="button" class="w-[32px] h-[32px] flex justify-center items-center text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 py-2.5 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10" aria-current="page">1</button>
                                <button type="button" class="w-[32px] h-[32px] flex justify-center items-center text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 py-2.5 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">2</button>
                                <button type="button" class="w-[32px] h-[32px] flex justify-center items-center text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 py-2.5 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">3</button>
                                <button type="button" class="w-[32px] h-[32px] flex items-center gap-x-2 text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 p-2.5 ">
                                    <span class="sr-only">Next</span>
                                    <span aria-hidden="true">
                                        <Icon name="ChevronRight" size="10" />

                                    </span>
                                </button>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default TableB








// import React, { useState } from 'react';
// import { Table } from 'antd';

// const TableComponent = () => {
//   const [dataSource, setDataSource] = useState([]);

//   // Generate dummy data
//   const generateData = () => {
//     const data = [];
//     for (let i = 1; i <= 50; i++) {
//       data.push({
//         key: i,
//         name: `John Doe ${i}`,
//         age: 25 + i,
//         address: `New York No. ${i} Lake Park`,
//       });
//     }
//     setDataSource(data);
//   };

//   // Set initial data
//   useState(() => {
//     generateData();
//   }, []);

//   // Columns for the table
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//   ];

//   return (
//     <div>
//       <h2>Ant Design Table with Pagination</h2>
//       <Table
//         dataSource={dataSource}
//         columns={columns}
//         pagination={{ pageSize: 5 }} // Set the number of rows per page
//       />
//     </div>
//   );
// };

// export default TableComponent;
