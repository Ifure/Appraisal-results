
function App() {
  return (
    <div className="text-gray-900 overflow-x-hidden w-full">
       <header className="bg-red-900  text-white py-4 px-3 flex items-center justify-between w-full">
         <div className="w-10 h-10">
           <img src="https://www.ngscholars.net/wp-content/uploads/2015/09/UNIUYO.jpg" alt="logo" />
         </div>
         <div className="px-1 py-2 items-center justify-center">
           <span  className="p-2 font-bold  hover:bg-transparent hover:text-black hover:shadow-md">About</span>
           <span  className="p-2 font-bold  hover:bg-transparent hover:text-black hover:shadow-md">Info</span>
           <span  className="p-2 font-bold  hover:bg-transparent hover:text-black hover:shadow-md">Register</span>
           <span className="p-2 font-bold  hover:bg-transparent hover:text-black hover:shadow-md">Contact</span>
         </div>
       </header>
       <p className="text-3xl mt-5 mx-10 text-center font-bolder">
          The UNIUYO Appraisal Board welcomes you to its Website. 
        </p>
        <p className="italic mx-10 text-center">
          The mission of UNIUYO Appraisal Board is to guide improvement of teaching skills, to recognize and reinforce teaching excellence, to help teachers focus on student outcomes, 
          and to plan in service education activities. 
        </p>
        <main className=" w-full flex flex-col justify-center items-center mx-auto p-5">
          <div >
            <p className="text-red-900 font-bold uppercase"> Completed Performance Appraisal Form</p>
            <p> <b>Instructions: </b> Employees are to complete a self-assessment and submit it to 
                their manager no later than November 15. Managers are to complete their assessment and submit it to Human Resources by December 5.</p>
            <p className="text-base font-bold" >Rating scale :</p>
          <ul className="ml-3">
            <li><b className="mr-2">5</b> Excellent </li>
            <li><b className="mr-2">4</b>Outstanding </li>
            <li><b className="mr-2">3</b>Satisfactory </li>
            <li><b className="mr-2">2</b>Needs improvement </li>
            <li><b className="mr-2">1</b>Unacceptable </li>
          </ul>
          <h2 className="text-center mt-3 text-red-900 font-bold"> OVERALL PERFORMANCE OF THE EMPLOYEES</h2>
          </div>
          <div className="w-full flex flex-col justify-center items-center p-2 shadow-lg bg-gray-200 my-5">
            <div className="w-full flex mb-3 ">
              <div className="mr-5 mt-2">
                <p><b>Name :</b> Jane Doe</p>
                <p><b>Level :</b> lecturer II</p>
                <p><b>Rating :</b> 3.9</p>
              </div>
              <div className="ml-3 mt-2" >
                <p><b>Department :</b> Business Administration</p>
                <p><b>Years In Service :</b> 10</p>
                <p><b>Status :</b> Promoted </p>
              </div>
            </div>
            <p>Breakdown of Performance</p>
            <div className="w-full flex my-1">
              <p className="w-1/2">Professional Experience :</p>
              <p className="w-28 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Teaching Experience :</p>
              <p className="w-32 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Qualification :</p>
              <p className="w-40 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Research and Publications :</p>
              <p className="w-1/4 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Administrative Experience :</p>
              <p className="w-10 bg-green-700 h-2 rounded mt-3"></p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center p-2 shadow-lg bg-gray-200 my-5">
            <div className="w-full flex  mb-3">
              <div className="mr-5 mt-2">
                <p><b>Name :</b> Akpan, Nseyo Ifiok</p>
                <p><b>Level :</b> Senior Lecturer</p>
                <p><b>Rating :</b> 2.0</p>
              </div>
              <div className="ml-5 mt-2" >
                <p><b>Department :</b> Math & Statistics</p>
                <p><b>Years In Service :</b> 18 </p>
                <p><b>Status :</b> Not Promoted </p>
              </div>
            </div>
            <p>Breakdown of Performance</p>
            <div className="w-full flex my-1">
              <p className="w-1/2">Professional Experience :</p>
              <p className="w-40 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Teaching Experience :</p>
              <p className="w-32 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Qualification :</p>
              <p className="w-40 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Research and Publications :</p>
              <p className="w-10 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Administrative Experience :</p>
              <p className="w-10 bg-green-700 h-2 rounded mt-3"></p>
            </div>
                
          </div>
          <div className="w-full flex flex-col justify-center items-center p-2 shadow-lg bg-gray-200 my-5">
            <div className="w-full flex mb-3">
              <div className="mr-5 mt-2">
                <p><b>Name :</b> Esther Okon</p>
                <p><b>Level :</b> lecturer I</p>
                <p><b>Rating :</b> 1.7</p>
              </div>
              <div className="ml-5 mt-2" >
                <p><b>Department :</b> French</p>
                <p><b>Years In Service :</b> 5</p>
                <p><b>Status :</b>Not Promoted </p>
              </div>
            </div>
            <p>Breakdown of Performance</p>
            <div className="w-full flex my-1">
              <p className="w-1/2">Professional Experience :</p>
              <p className="w-14 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Teaching Experience :</p>
              <p className="w-8 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Qualification :</p>
              <p className="w-10 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Research and Publications :</p>
              <p className="w-7 bg-green-700 h-2 rounded mt-3"></p>
            </div>
            <div className="w-full flex my-1">
              <p className="w-1/2">Administrative Experience :</p>
              <p className="w-5 bg-green-700 h-2 rounded mt-3"></p>
            </div>   
          </div>
        </main>  
    </div>
  );
}

export default App; 