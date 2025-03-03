function App() {
  return ( 
  <>
  <companyname/>  
  <h1 className=" text border bg-amber-950 text-white px-4 py-4 text-center">digital computing@ khandwa</h1>
  <div className="bg-amber-500 mt-2 border h-150 w-400">
    <nav className="bg-amber-700 space-x-6 text-right text-white">
      <a href="home">home</a>
      <a href="about">about</a>
      <a href="project">project</a>
      <a href="task">task</a>
      <a href=" contact">contact</a>
    </nav>
    <div className="bg-amber-800 h-150 w-80">
      
      <input id="username" type="text" placeholder="enter the name" className="bg-amber-50 border m-5 p-5"></input>
      <br/>
      <input id="password" type="text" placeholder="enter the password" class="bg-amber-50 border m-5 p-5"></input>
      <br/>
      <input id="emailid" type="text" placeholder="enter the email" className="bg-amber-50 border m-5 p-5"></input>
      <br/>
      <button className="bg-amber-400 text-white h-6 w-15 text-center border">login</button>
      <br/>
      <div className="border bg-amber-400 m-5 p-5">
      <i classname="text-blue-950">please fill the information carefully</i>
      </div>
      <button className="bg-amber-400 text-white h-6 w-15 text-center border">next</button>
    </div>
    </div>
    
    
    
    
  
 <h1 className="text-center text border bg-amber-950 text-white px-4 py-4">digital computing@ khandwa</h1>
   
  
  </>
 )
} 


export default App

