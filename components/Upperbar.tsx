export default function Navbar(){
    return(
        <div>
            <div 
            style={{
                borderBottom:"1px solid #444",
                height:"95px",
            }}
            >
               
             <h3
             style={{
                fontFamily:"poopings",
                fontWeight: 700,
                fontSize: 40,
                marginLeft:"30px",
                marginTop:"20px",
                position:"fixed"
            }}
             >
              Asmit Biswas
             </h3>

              <img 
                style={{
                    // objectFit:"cover",
                    borderRadius:"100px",
                    height:"100px",
                    marginTop:"-10px",
                    width:"50px",
                    marginLeft:"1865px"
                }}
                src="WhatsApp Image 2026-09-14 at 11.58.20 PM.jpeg" alt="" />
            </div>
        </div>
    )
}