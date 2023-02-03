import React, { useEffect, useState } from 'react'

function Table() {


    let [users, setUsers] = useState([])

    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])
    

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    users = users.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(users.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    console.log(pageNumbers, indexOfFirstPost, indexOfLastPost);


    const [show, setShow] = useState('')
 

    const handleView = (id) => { 
        setShow(id)
    }
    
    //pagination

    
    return (
        <div>
            <div className="overflow-x-auto">
                <div className="flex flex-col gap-5 bg-accent p-3 w-full h-full">
                    {
                        users.map(user => ( 
                         <div className=" grid grid-cols-5 gap-x-36 gap-y-10 justify-items-start bg-white py-10 px-5 rounded-xl">
                            <p>{user.name}</p>
                            <div className='flex flex-col text-left items-start'>
                                <p className='font-bold'>CONTACT</p>    
                                <p>{user.email}</p>    
                            </div>
                            <div className='flex flex-col text-left items-start'>
                                <p className='font-bold'>CITY</p>    
                                <p>{user.address.city}</p>    
                            </div>
                            <div className='flex flex-col text-left items-start'>
                                <p className='font-bold'>STATE</p>    
                                <p>{user.address.street}</p>    
                            </div>  
                            <div>
                                <div onClick={()=>handleView(user.id)} className="btn bg-red-500 text-white rounded-full border-none">View Details</div>
                            </div>
                            <div className={`transition-all duration-300 overflow-hidden ${show === user.id  ? '' : 'hidden'} h-full  p-10 gap-5 border-4   items-start justify-center  rounded-lg col-span-5 w-full flex flex-col `}>
                                    {
                                       
                                            <div className={ show === user.id   ? 'opacity-100' : 'opacity-0  '}>
                                                <p className='font-bold'>Description</p>
                                                    <p>{user.company.catchPhrase}</p>
                                                    <div className="grid grid-cols-2 gap-x-60 gap-y-3">
                                                        <p className='font-bold'>Contact Person</p>
                                                        <p className='font-bold'>Address</p>
                                                        <p>{user.username }</p>
                                                        <p>{user.address.street }</p>
                                                        <p className='font-bold'>Designation</p>
                                                        <p className='font-bold'>City</p>
                                                        <p>{user.website}</p>
                                                        <p>{user.address.city }</p>
                                                        <p className='font-bold'>Emails</p>
                                                        <p className='font-bold'>State</p>
                                                        <p>{user.email}</p>
                                                        <p>{user.address.street }</p>
                                                        <p className='font-bold'>Phones</p>
                                                        <p className='font-bold'>Country</p>
                                                        <p>{user.phone}</p>
                                                        <p>{user.address.city }</p>
                                                    </div>
                                            </div>
                                    }
                                    
                            </div>    
                        </div>
                    ))

                   }
                    
                </div>
                <div className="btn-group flex justify-center py-10">
                    <button onClick={()=> paginate(1)} className={`btn btn-md ${currentPage === 1 && 'btn-active'}`}>1</button>
                    <button onClick={()=> paginate(2)} className={`btn btn-md ${currentPage === 2 && 'btn-active'}`}>2</button>
                    <button onClick={()=> paginate(3)} className={`btn btn-md ${currentPage === 3 && 'btn-active'}`}>3</button>
                    <button onClick={()=> paginate(4)} className={`btn btn-md ${currentPage === 4 && 'btn-active'}`}>4</button>
                </div>
            </div>
        </div>
    )
}

export default Table
