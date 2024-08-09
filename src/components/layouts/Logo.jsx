export default function Logo({onHandleClickMenu,menu}) {
    return (
      <>
        <div className="mb-5 flex items-center hover:cursor-pointer" onClick={()=>onHandleClickMenu(menu)}>
          <img src="quran.png" alt="logo-quran" width={50} height={50} />
          <h3 className="text-white font-bold  mt-2 mx-2 ">Iqra App</h3>
        </div>
      </>
    );
  }