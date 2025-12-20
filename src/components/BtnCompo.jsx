const BtnCompo = ({ label, onClick, variant = "default", className = "" }) => {

    const base =
    "text-sm flex items-center justify-center transition-all px-4 text-xs";


  const variants = {
    default: "border border-white rounded-3xl mr-6 text-white py-2",
    noutline: "flex items-center space-x-2 text-white p-2 hover:text-[#e6c500] ",
    
  };

  return (
    <button 
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      style={{fontFamily:'Abril Fatface'}}
    >
      {label}
    </button>
  );
};

export default BtnCompo