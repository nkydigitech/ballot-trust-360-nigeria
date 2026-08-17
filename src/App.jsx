
import React, { useState } from 'react';
const OFFICES = [
  {id:'president',label:'President'},
  {id:'governor',label:'Governor'},
  {id:'senate',label:'Senator'},
  {id:'house_rep',label:'House of Reps'},
  {id:'state_assembly',label:'State Assembly'}
];
const CANDS = [
  {name:'Emeka Okafor', party:'FUA - Future Unity Alliance', color:'#102542', photo:'/candidates/president_candidate1.webp', slogan:'Unity in Future'},
  {name:'Aisha Bello', party:'CPC - Civic Progress Collective', color:'#C5A572', photo:'/candidates/president_candidate2.webp', slogan:'Progress for All'},
  {name:'Tolu Adebayo', party:'HGM - Horizon Green Movement', color:'#2D6A4F', photo:'/candidates/president_candidate3.webp', slogan:'Green Horizon'},
  {name:'Ibrahim Musa', party:'IEP - Innovation and Equity Party', color:'#7A5C61', photo:'/candidates/president_candidate4.webp', slogan:'Innovate with Equity'},
  {name:'Ngozi Eze', party:'RPF - Resolute Peoples Front', color:'#4A5C6A', photo:'/candidates/president_candidate5.webp', slogan:'Resolute for People'}
];
export default function App(){
  const [office,setOffice]=useState('president');
  return (
    <div style={{minHeight:'100vh', background:'#F8F6F1'}}>
      <header style={{background:'white', padding:'16px 24px', borderBottom:'1px solid #EAE6DF', display:'flex', justifyContent:'space-between'}}>
        <b style={{fontFamily:'Playfair Display'}}>Ballot Trust 360 - All Nigerian Edition</b>
        <span style={{fontSize:12}}>Frontend Live on Vercel - Backend https://ballot-trust-360-backend.onrender.com</span>
      </header>
      <main style={{maxWidth:1200, margin:'0 auto', padding:24}}>
        <h1 style={{fontFamily:'Playfair Display', fontSize:42, lineHeight:0.95}}>All Nigerian candidates, secure accreditation, every vote counts.</h1>
        <p style={{color:'#4A5C6A', maxWidth:600}}>Built for Hackaholics 7.0 with fictional parties FUA CPC HGM IEP RPF. No real politicians, no foreigner, no tribal bias. Click to vote triggers automatic accreditation like BVAS.</p>
        <div style={{display:'flex', gap:8, margin:'20px 0', flexWrap:'wrap'}}>
          {OFFICES.map(o=><button key={o.id} onClick={()=>setOffice(o.id)} style={{padding:'10px 16px', borderRadius:10, border:'1px solid #EAE6DF', background:o.id===office?'#102542':'white', color:o.id===office?'white':'#4A5C6A', fontWeight:600}}>{o.label}</button>)}
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:16}}>
          {CANDS.map((c,i)=><div key={i} style={{background:'white', border:'1px solid #EAE6DF', borderRadius:16, overflow:'hidden'}}>
            <div style={{height:6, background:c.color}}></div>
            <div style={{padding:16}}>
              <img src={c.photo.replace('president', office)} alt={c.name} style={{width:80, height:80, borderRadius:12, objectFit:'cover'}} onError={(e)=>e.target.src='/candidates/candidate1.webp'} />
              <div style={{background:c.color, color:'white', fontSize:10, padding:'4px 8px', borderRadius:999, display:'inline-block', marginTop:8, fontWeight:700}}>{c.party}</div>
              <h3 style={{fontFamily:'Playfair Display', margin:'8px 0 4px'}}>{c.name}</h3>
              <div style={{fontSize:12, color:'#C5A572', fontWeight:600}}>{c.slogan}</div>
              <div style={{fontSize:12, color:'#4A5C6A', margin:'8px 0 12px'}}>Focused on transparent governance, youth employment and sustainable development for the {office} office.</div>
              <button style={{width:'100%', background:'#102542', color:'white', padding:10, borderRadius:8, border:0, fontWeight:600}}>Vote - Auto Accredits</button>
            </div>
          </div>)}
        </div>
        <div style={{marginTop:24, background:'white', border:'1px solid #EAE6DF', borderRadius:12, padding:16, fontSize:13}}>
          <b>Live Links for README:</b><br/>
          Frontend: https://ballot-trust-360.vercel.app<br/>
          Backend: https://ballot-trust-360-backend.onrender.com/api/health<br/>
          Loom: https://www.loom.com/share/5b01b76fb7d14fbb82bba3234f3332ec<br/>
          All Nigerian Edition - No Foreigner
        </div>
      </main>
    </div>
  );
}
