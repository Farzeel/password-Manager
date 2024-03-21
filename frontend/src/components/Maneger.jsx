import React, { useEffect, useRef, useState } from "react";
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import StickyThing from "./stickyThing";

const Maneger = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwords, setPasswords] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const ref = useRef();
  const passwordRef = useRef();
  const searchRef = useRef();
  const toogleIcon = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/hide.png";
      passwordRef.current.type = "text"
      ref.current.title = "hide Password"
   
    } else {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password"
      ref.current.title = "show Password"
     
    }
  };

  useEffect(() => {
    
    let password = localStorage.getItem("password");
    if (password) {
      setPasswords(JSON.parse(password));
    }
    
  }, []);

  const savePassword = () => {
    if(form.site=="" || form.password =="" || form.username==""){
      toast.error("Input fileds cannot be Empty")
      return
    }
    setPasswords([...passwords, {...form, id:uuidv4()}]);
    localStorage.setItem("password", JSON.stringify([...passwords, {...form, id:uuidv4()}]));
   setForm({site:"" , password:""  , username:""})
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const copyText = (text)=>{
  navigator.clipboard.writeText(text)
  toast.success("Text copied ")
}

const deletePassword=(id)=>{
  if(confirm("Are you sure you want to delete")){
    const newArr = passwords.filter(item=>item.id != id)
    setPasswords(newArr)
    localStorage.setItem("password", JSON.stringify(newArr));

  }
}
const editPassword=(id)=>{
  const EditItem = passwords.filter(item=>item.id == id)
  setForm(EditItem[0])
  setPasswords(passwords.filter(item=>item.id != id));

}
const filterResults = (e)=>{

    if(!e.target.value==""){
      let filterRes  = passwords?.filter(item=>item?.username.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchResults(filterRes)
     console.log( searchRef.current.value)
      
    
    
     console.log("password",passwords)
    }else{
      let password = localStorage.getItem("password");
      setPasswords(JSON.parse(password));
     
    }
  


}

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
        <StickyThing/>
      <div className=" mycontainer md:px-40 min-h-[78.1vh]">
        <h1 className="text-center  text-4xl font-bold">
        
          <span className="text-green-400">&lt; </span>
          Pass
          <span className="text-green-400">OP /&gt;</span>{" "}
        </h1>
        <p className="text-center text-green-900 text-lg">
          Your Password Maneger
        </p>

        <div className="flex  flex-col  p-4 gap-8 items-center">
          <input
            placeholder="Enter Website Url"
            className="rounded-full w-full border border-green-500 border-b-4 outline-none p-4 py-1"
            type="text"
            value={form.site}
            onChange={handleChange}
            name="site"
          />
          <div className="flex flex-col md:flex-row w-full gap-6 justify-between ">
            <input
              placeholder="Enter Username"
              className="rounded-full w-full border border-green-500 border-b-4 outline-none p-4 py-1"
              type="text"
              value={form.username}
              onChange={handleChange}
              name="username"
            />
            <div className="w-full relative">
              <img
                onClick={toogleIcon}
                ref={ref}
                title="showPassword"
                src="icons/eye.png"
                className="absolute right-2 top-[6px] cursor-pointer"
                width={20}
                alt=""
                
              />
              <input
              ref={passwordRef}
                placeholder="Enter Password"
                className="rounded-full w-full border border-green-500 border-b-4 outline-none p-4 py-1"
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2  border border-green-500 border-b-4  bg-green-400 rounded-full w-full md:w-fit px-4 py-2 hover:bg-green-200 active:border-b-2 "
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              //   style="width:250px;height:250px"
            ></lord-icon>
            <span className="font-bold ">Add Password</span>
          </button>
        </div>
        
          <div className="passwords md:pb-16 mt-4">
            <div className="flex justify-between items-center px-1 md:px-4">
            <h2 className="md:text-3xl text-lg font-bold text-green-400 p-4">
              Your Passwords
            </h2>
            <input
            placeholder="Serch by User Name"
            className="rounded-3xl w-1/2  md:w-1/3 border border-green-500 border-b-4 outline-none px-2 md:px-4 py-1"
            type="search"
            onInput={filterResults}
           
            ref={searchRef}
          />

            </div>
            {passwords?.length > 0 ? (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100 ">
                {searchRef.current.value =="" ?passwords?.map((item) => (
                  <tr key={item.id}>
                    <td className=" text-center py-2 border border-white ">
                      <div className="flex flex-col md:flex-row justify-center items-center text-xs md:text-sm gap-1 md:gap-3">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <img
                          src="icons/copy.png"
                          width={16}
                          title="copy"
                          className="cursor-pointer  "
                          onClick={() => copyText(item.site)}
                        />
                      </div>
                    </td>
                    <td className=" text-center py-2 border border-white ">
                      <div className=" flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
                        <span>{item.username}</span>
                        <img
                          src="icons/copy.png"
                          width={16}
                          title="copy"
                          className="cursor-pointer  "
                          onClick={() => copyText(item.username)}
                        />
                      </div>
                    </td>
                    <td className="text-center py-2 border border-white ">
                      <div className=" flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
                        <span> {item.password}</span>
                        <img
                          src="icons/copy.png"
                          width={16}
                          title="copy"
                          className="cursor-pointer  "
                          onClick={() => copyText(item.password)}
                        />
                      </div>
                    </td>
                    <td className=" text-center py-2 border border-white ">
                      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
                      <img
                          src="icons/edit.png"
                          width={24}
                          title="edit"
                          className="cursor-pointer  "
                          onClick={()=>editPassword(item.id)}
                        />
                        <img
                          src="icons/delete.png"
                          width={24}
                          title="delete"
                          className="cursor-pointer  "
                         onClick={()=>deletePassword(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                )):
                searchResults?.map((item) => (
                  <tr key={item.id}>
                    <td className=" text-center py-2 border border-white ">
                      <div className="flex flex-col md:flex-row justify-center items-center text-xs md:text-sm gap-1 md:gap-3">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <img
                          src="icons/copy.png"
                          width={16}
                          title="copy"
                          className="cursor-pointer  "
                          onClick={() => copyText(item.site)}
                        />
                      </div>
                    </td>
                    <td className=" text-center py-2 border border-white ">
                      <div className=" flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
                        <span>{item.username}</span>
                        <img
                          src="icons/copy.png"
                          width={16}
                          title="copy"
                          className="cursor-pointer  "
                          onClick={() => copyText(item.username)}
                        />
                      </div>
                    </td>
                    <td className="text-center py-2 border border-white ">
                      <div className=" flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
                        <span> {item.password}</span>
                        <img
                          src="icons/copy.png"
                          width={16}
                          title="copy"
                          className="cursor-pointer  "
                          onClick={() => copyText(item.password)}
                        />
                      </div>
                    </td>
                    <td className=" text-center py-2 border border-white ">
                      <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
                      <img
                          src="icons/edit.png"
                          width={24}
                          title="edit"
                          className="cursor-pointer  "
                          onClick={()=>editPassword(item.id)}
                        />
                        <img
                          src="icons/delete.png"
                          width={24}
                          title="delete"
                          className="cursor-pointer  "
                         onClick={()=>deletePassword(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
            
        
            ):    <div className="text-lg md:text-3xl font-bold text-green-800   p-4">
            Save passwords will appear here
          </div>}
          </div>
      </div>
    </>
  );
};

export default Maneger;
