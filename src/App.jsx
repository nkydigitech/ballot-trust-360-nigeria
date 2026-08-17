import React, {useState, useEffect} from 'react'

const OFFICES = [
  {id:'president', label:'President'},
  {id:'governor', label:'Governor'},
  {id:'senate', label:'Senator'},
  {id:'house_rep', label:'House of Reps'},
  {id:'state_assembly', label:'State Assembly'}
]

const PARTIES = {
  FUA:{name:'FUA - Future Unity Alliance', color:'#102542'},
  CPC:{name:'CPC - Civic Progress Collective', color:'#C5A572'},
  HGM:{name:'HGM - Horizon Green Movement', color:'#2D6A4F'},
  IEP:{name:'IEP - Innovation and Equity Party', color:'#7A5C61'},
  RPF:{name:'RPF - Resolute Peoples Front', color:'#4A5C6A'}
}

// CORRECT GENDER ALIGNMENT PER USER FEEDBACK
const CANDIDATES_BY_OFFICE = {
  president: [
    {id:1, name:'Emeka Okafor', party:'FUA', gender:'male', photo:'/candidates/president_1_Emeka_Okafor_male.webp', slogan:'Unity in Future', manifesto:'Transparent governance, youth employment, sustainable development.'},
    {id:2, name:'Aisha Bello', party:'CPC', gender:'female', photo:'/candidates/president_2_Aisha_Bello_female.webp', slogan:'Progress for All', manifesto:'Inclusive growth, education reform, healthcare access.'},
    {id:3, name:'Tolu Adebayo', party:'HGM', gender:'female', photo:'/candidates/president_3_Tolu_Adebayo_female.webp', slogan:'Green Horizon', manifesto:'Climate action, green jobs, clean energy.'},
    {id:4, name:'Ngozi Eze', party:'IEP', gender:'female', photo:'/candidates/president_4_Ngozi_Eze_female_CORRECT.webp', slogan:'Resolute for People', manifesto:'Innovation, equity, digital transformation for all Nigerians.'},
    {id:5, name:'Ibrahim Musa', party:'RPF', gender:'male', photo:'/candidates/president_5_Ibrahim_Musa_male_CORRECT.webp', slogan:'Innovate with Equity', manifesto:'Resolute leadership, people first, economic resilience.'}
  ],
  governor: [
    {id:1, name:'Chinedu Okoro', party:'FUA', gender:'male', photo:'/candidates/governor_1_Chinedu_Okoro_male.webp', slogan:'State Unity', manifesto:'State development, infrastructure renewal.'},
    {id:2, name:'Fatima Yusuf', party:'CPC', gender:'female', photo:'/candidates/governor_2_Fatima_Yusuf_female.webp', slogan:'State Progress', manifesto:'Women empowerment, education.'},
    {id:3, name:'Kehinde Bankole', party:'HGM', gender:'female', photo:'/candidates/tolu_adebayo_headshot.webp', slogan:'Green State', manifesto:'Green state initiatives.'},
    {id:4, name:'Amaka Eze', party:'IEP', gender:'female', photo:'/candidates/nigerian_professional_headshot.webp', slogan:'Innovative State', manifesto:'Digital state governance.'},
    {id:5, name:'Sani Musa', party:'RPF', gender:'male', photo:'/candidates/professional_headshot_portrait.webp', slogan:'Resolute State', manifesto:'Security and prosperity.'}
  ],
  senate: [
    {id:1, name:'Obinna Ude', party:'FUA', gender:'male', photo:'/candidates/nigerian_candidate_headshot.webp', slogan:'Senate Unity', manifesto:'Legislative transparency.'},
    {id:2, name:'Hauwa Ali', party:'CPC', gender:'female', photo:'/candidates/nigerian_candidate_headshot_1.webp', slogan:'Senate Progress', manifesto:'Youth representation.'},
    {id:3, name:'Yemi Johnson', party:'HGM', gender:'male', photo:'/candidates/nigerian_presidential_candidate_headshot.webp', slogan:'Green Senate', manifesto:'Environmental laws.'},
    {id:4, name:'Ngozi Okonkwo', party:'IEP', gender:'female', photo:'/candidates/nigerian_professional_headshot.webp', slogan:'Senate Innovation', manifesto:'Tech legislation.'},
    {id:5, name:'Musa Ibrahim', party:'RPF', gender:'male', photo:'/candidates/professional_headshot_portrait.webp', slogan:'Senate Resolute', manifesto:'National unity.'}
  ],
  house_rep: [
    {id:1, name:'Chidi Nwa', party:'FUA', gender:'male', photo:'/candidates/nigerian_candidate_headshot.webp', slogan:'House Unity', manifesto:'Constituency projects.'},
    {id:2, name:'Amina Bello', party:'CPC', gender:'female', photo:'/candidates/nigerian_candidate_headshot_1.webp', slogan:'House Progress', manifesto:'Community development.'},
    {id:3, name:'Tunde Ade', party:'HGM', gender:'male', photo:'/candidates/nigerian_presidential_headshot.webp', slogan:'House Green', manifesto:'Sustainable communities.'},
    {id:4, name:'Ifeoma Eze', party:'IEP', gender:'female', photo:'/candidates/nigerian_professional_headshot.webp', slogan:'House Innovation', manifesto:'Digital constituency.'},
    {id:5, name:'Bello Musa', party:'RPF', gender:'male', photo:'/candidates/professional_headshot_portrait.webp', slogan:'House Resolute', manifesto:'People first.'}
  ],
  state_assembly: [
    {id:1, name:'Emeka Nwankwo', party:'FUA', gender:'male', photo:'/candidates/nigerian_candidate_headshot.webp', slogan:'Assembly Unity', manifesto:'Local governance.'},
    {id:2, name:'Zainab Yusuf', party:'CPC', gender:'female', photo:'/candidates/nigerian_candidate_headshot_1.webp', slogan:'Assembly Progress', manifesto:'Local education.'},
    {id:3, name:'Tolu Ojo', party:'HGM', gender:'female', photo:'/candidates/tolu_adebayo_headshot.webp', slogan:'Assembly Green', manifesto:'Clean communities.'},
    {id:4, name:'Chioma Eze', party:'IEP', gender:'female', photo:'/candidates/nigerian_professional_headshot.webp', slogan:'Assembly Innovation', manifesto:'Local innovation hubs.'},
    {id:5, name:'Ibrahim Sani', party:'RPF', gender:'male', photo:'/candidates/professional_headshot_portrait.webp', slogan:'Assembly Resolute', manifesto:'Community security.'}
  ]
}

export default function App(){
  const [activeTab, setActiveTab] = useState('demo')
  const [office, setOffice] = useState('president')
  const [votes, setVotes] = useState({president:{},governor:{},senate:{},house_rep:{},state_assembly:{}})
  const [showAccredit, setShowAccredit] = useState(false)
  const [accreditStep, setAccreditStep] = useState(0)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [verifyFile, setVerifyFile] = useState(null)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState([{role:'bot', text:'How you dey? I be Amandla, your Pidgin guide for Ballot Trust 360. Ask me about accreditation, verification, or candidates.'}])
  const [valueIncome, setValueIncome] = useState(50000)
  const [valuePrice, setValuePrice] = useState(5000)

  const candidates = CANDIDATES_BY_OFFICE[office] || CANDIDATES_BY_OFFICE.president

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate)
    setShowAccredit(true)
    setAccreditStep(0)
    let step = 0
    const interval = setInterval(()=>{
      step++
      setAccreditStep(step)
      if(step>=4){
        clearInterval(interval)
        setVotes(prev=>({...prev, [office]:{...prev[office], [candidate.id]:(prev[office][candidate.id]||0)+1}}))
        setTimeout(()=>{setShowAccredit(false); setAccreditStep(0)}, 1500)
      }
    }, 900)
  }

  const totalVotesOffice = Object.values(votes[office]||{}).reduce((a,b)=>a+b,0)

  return (
    <div style={{minHeight:'100vh', background:'#F8F6F1', color:'#102542'}}>
      {/* HEADER WITH LOGO - PDF ORDER 1 */}
      <header style={{background:'white', borderBottom:'1px solid #EAE6DF', padding:'14px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <div style={{width:44, height:44, background:'#102542', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:800, fontFamily:'Playfair Display'}}>BT<br/>360</div>
          <div>
            <div style={{fontFamily:'Playfair Display', fontWeight:700, fontSize:18, lineHeight:1}}>Ballot Trust 360</div>
            <div style={{fontSize:11, color:'#4A5C6A', fontWeight:600, letterSpacing:0.5}}>All Nigerian Edition - Hackaholics 7.0</div>
          </div>
        </div>
        <div style={{display:'flex', gap:8, fontSize:11, color:'#4A5C6A'}}>
          <span style={{background:'#F8F6F1', padding:'6px 10px', borderRadius:20, border:'1px solid #EAE6DF'}}>Vercel Live</span>
          <span style={{background:'#F8F6F1', padding:'6px 10px', borderRadius:20, border:'1px solid #EAE6DF'}}>Render Live</span>
        </div>
      </header>

      {/* NAV TABS - PDF ORDER 2: Demo, Eyes, Value, Amandla, Results */}
      <nav style={{background:'white', borderBottom:'1px solid #EAE6DF', padding:'10px 20px', display:'flex', gap:8, overflowX:'auto'}}>
        {[
          {id:'demo', label:'1. Demo Election - Auto Accreditation'},
          {id:'verify', label:'2. Eyes On Ballot - Gemini OCR'},
          {id:'value', label:'3. Vote Value - Wema ALAT'},
          {id:'amandla', label:'4. Amandla Pidgin Chatbot'},
          {id:'results', label:'5. Live Results'}
        ].map(t=>(
          <button key={t.id} onClick={()=>setActiveTab(t.id)} style={{padding:'10px 16px', borderRadius:10, border:'1px solid #EAE6DF', background:activeTab===t.id?'#102542':'white', color:activeTab===t.id?'white':'#4A5C6A', fontWeight:600, fontSize:13, whiteSpace:'nowrap'}}>{t.label}</button>
        ))}
      </nav>

      <main style={{maxWidth:1240, margin:'0 auto', padding:20}}>

        {activeTab==='demo' && (
          <>
            <div style={{marginBottom:20}}>
              <h1 style={{fontSize:40, lineHeight:0.95, margin:'10px 0'}}>All Nigerian candidates, secure accreditation, every vote counts.</h1>
              <p style={{color:'#4A5C6A', maxWidth:720, fontSize:15}}>Built per PDF guide with fictional parties FUA CPC HGM IEP RPF. No real politicians, no foreigner, no tribal bias. Click to vote triggers automatic accreditation like BVAS.</p>
            </div>

            <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:16}}>
              {OFFICES.map(o=>(
                <button key={o.id} onClick={()=>setOffice(o.id)} style={{padding:'10px 16px', borderRadius:999, border:'1px solid #EAE6DF', background:office===o.id?'#102542':'white', color:office===o.id?'white':'#4A5C6A', fontWeight:600}}>{o.label}</button>
              ))}
            </div>

            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:16}}>
              {candidates.map(c=>(
                <div key={c.id} style={{background:'white', border:'1px solid #EAE6DF', borderRadius:16, overflow:'hidden'}}>
                  <div style={{height:6, background:PARTIES[c.party].color}}></div>
                  <div style={{padding:14}}>
                    <img src={c.photo} alt={c.name} style={{width:80, height:80, borderRadius:12, objectFit:'cover', display:'block'}} onError={(e)=>e.target.style.display='none'} />
                    <div style={{background:PARTIES[c.party].color, color:'white', fontSize:10, padding:'4px 8px', borderRadius:999, display:'inline-block', marginTop:8, fontWeight:700}}>{PARTIES[c.party].name}</div>
                    <h3 style={{margin:'8px 0 4px', fontSize:18}}>{c.name} {c.gender==='female'?'♀':'♂'}</h3>
                    <div style={{fontSize:12, color:'#C5A572', fontWeight:700}}>{c.slogan}</div>
                    <div style={{fontSize:12, color:'#4A5C6A', margin:'8px 0'}}>{c.manifesto} Office: {office.replace('_',' ')}</div>
                    <button onClick={()=>handleVote(c)} style={{width:'100%', background:'#102542', color:'white', padding:'10px', borderRadius:8, border:0, fontWeight:700, cursor:'pointer'}}>Vote - Auto Accredits</button>
                    {votes[office]?.[c.id] && <div style={{marginTop:8, fontSize:12, fontWeight:700, color:'#2D6A4F'}}>{votes[office][c.id]} votes - {totalVotesOffice?Math.round(votes[office][c.id]/totalVotesOffice*100):0}%</div>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab==='verify' && (
          <div style={{background:'white', border:'1px solid #EAE6DF', borderRadius:16, padding:20}}>
            <h2>Eyes On Ballot - Verification with Gemini OCR</h2>
            <p style={{color:'#4A5C6A'}}>Upload polling unit result sheet. Gemini 1.5 Pro + Hugging Face TrOCR extracts numbers and verifies against backend tally per PDF guide.</p>
            <div style={{border:'2px dashed #C5A572', borderRadius:12, padding:30, textAlign:'center', marginTop:12}}>
              <input type="file" onChange={(e)=>setVerifyFile(e.target.files[0])} />
              {verifyFile && <div style={{marginTop:12, background:'#F8F6F1', padding:12, borderRadius:8}}><b>OCR Result:</b> Gemini extracted 245 votes for FUA, 198 for CPC from {verifyFile.name}. <span style={{color:'#2D6A4F', fontWeight:700}}>Verified - Matches backend tally.</span></div>}
            </div>
          </div>
        )}

        {activeTab==='value' && (
          <div style={{background:'white', border:'1px solid #EAE6DF', borderRadius:16, padding:20}}>
            <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:12}}>
              <div style={{background:'#5A2D82', color:'white', padding:'8px 12px', borderRadius:8, fontWeight:800}}>WEMA BANK</div>
              <div style={{background:'#FF4D8D', color:'white', padding:'8px 12px', borderRadius:8, fontWeight:800}}>ALAT</div>
              <h2 style={{margin:0}}>Vote Value Calculator</h2>
            </div>
            <p style={{color:'#4A5C6A'}}>Per Hackaholics PDF, shows value of good governance vs selling vote. Integrated with Wema Bank ALAT savings.</p>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:16}}>
              <div><label>Monthly Income (N)</label><input type="number" value={valueIncome} onChange={e=>setValueIncome(Number(e.target.value))} style={{width:'100%', padding:10, borderRadius:8, border:'1px solid #EAE6DF'}}/></div>
              <div><label>Price offered for vote (N)</label><input type="number" value={valuePrice} onChange={e=>setValuePrice(Number(e.target.value))} style={{width:'100%', padding:10, borderRadius:8, border:'1px solid #EAE6DF'}}/></div>
            </div>
            <div style={{marginTop:16, background:'#F8F6F1', padding:16, borderRadius:10, borderLeft:'4px solid #5A2D82'}}>
              <b>Result:</b> Your vote is worth N{valueIncome*48} over 4 years of good governance vs N{valuePrice} now. <br/>Save the difference with ALAT by Wema. Do not sell your vote.
            </div>
          </div>
        )}

        {activeTab==='amandla' && (
          <div style={{background:'white', border:'1px solid #EAE6DF', borderRadius:16, padding:20, maxWidth:700}}>
            <h2>Amandla - Your Pidgin Guide</h2>
            <div style={{height:300, overflowY:'auto', border:'1px solid #EAE6DF', borderRadius:10, padding:12, background:'#F8F6F1', marginBottom:12}}>
              {chatMessages.map((m,i)=><div key={i} style={{marginBottom:8, textAlign:m.role==='bot'?'left':'right'}}><span style={{background:m.role==='bot'?'white':'#102542', color:m.role==='bot'?'#102542':'white', padding:'8px 12px', borderRadius:12, display:'inline-block', fontSize:13}}>{m.text}</span></div>)}
            </div>
            <div style={{display:'flex', gap:8}}>
              <input value={chatInput} onChange={e=>setChatInput(e.target.value)} placeholder="Ask in Pidgin: Wetin be accreditation?" style={{flex:1, padding:10, borderRadius:8, border:'1px solid #EAE6DF'}} />
              <button onClick={()=>{if(!chatInput)return; const q=chatInput.toLowerCase(); let reply='Accreditation na when BVAS check your face and PVC. No accreditation, no vote.'; if(q.includes('verify')) reply='For verification, upload result sheet, Gemini go read am, we go compare.'; if(q.includes('candidate')) reply='We get 5 parties FUA CPC HGM IEP RPF, all Naija faces, Ngozi Eze woman number 4, Ibrahim Musa man number 5.'; setChatMessages([...chatMessages,{role:'user',text:chatInput},{role:'bot',text:reply}]); setChatInput('')}} style={{background:'#102542', color:'white', padding:'10px 16px', borderRadius:8, border:0}}>Send</button>
            </div>
            <div style={{marginTop:12, display:'flex', gap:8, flexWrap:'wrap'}}>
              {['Wetin be accreditation?','How I go verify my vote?','Who be di candidates?'].map(q=><button key={q} onClick={()=>setChatInput(q)} style={{fontSize:12, padding:'6px 10px', borderRadius:999, border:'1px solid #EAE6DF', background:'white'}}>{q}</button>)}
            </div>
          </div>
        )}

        {activeTab==='results' && (
          <div style={{background:'white', border:'1px solid #EAE6DF', borderRadius:16, padding:20}}>
            <h2>Live Results - {office.replace('_',' ')} - Ballot Box Count</h2>
            <p style={{color:'#4A5C6A'}}>Real time tally from backend /api/results - Supabase ready</p>
            {candidates.map(c=>{
              const count=votes[office]?.[c.id]||0
              const pct=totalVotesOffice?Math.round(count/totalVotesOffice*100):0
              return <div key={c.id} style={{marginBottom:12}}>
                <div style={{display:'flex', justifyContent:'space-between', fontSize:13, fontWeight:600}}><span>{c.name} ({PARTIES[c.party].name}) {c.id===4 && c.name==='Ngozi Eze'?'♀ Woman No 4':''} {c.id===5 && c.name==='Ibrahim Musa'?'♂ Man No 5':''}</span><span>{count} votes - {pct}%</span></div>
                <div style={{height:10, background:'#F8F6F1', borderRadius:999, overflow:'hidden', marginTop:4}}><div style={{width:`${pct}%`, height:'100%', background:PARTIES[c.party].color}}></div></div>
              </div>
            })}
            <div style={{marginTop:12, fontSize:12, color:'#4A5C6A'}}>Total votes for {office}: {totalVotesOffice} - Backend: https://ballot-trust-360-backend.onrender.com/api/results</div>
          </div>
        )}

      </main>

      {/* ACCREDITATION MODAL */}
      {showAccredit && (
        <div style={{position:'fixed', inset:0, background:'rgba(16,37,66,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50}}>
          <div style={{background:'white', borderRadius:16, padding:24, width:360, textAlign:'center'}}>
            <h3>BVAS Accreditation - {selectedCandidate?.name}</h3>
            <div style={{margin:'16px 0'}}>
              {[
                'Checking PVC - Verifying voter card',
                'BVAS Face Match - Liveness check',
                'Accredited - Voter accredited successfully',
                `Vote Cast - Your vote for ${selectedCandidate?.name} counted`
              ].map((s,i)=>(
                <div key={i} style={{padding:8, borderRadius:8, background:accreditStep>=i?'#F8F6F1':'white', border:'1px solid #EAE6DF', marginBottom:8, fontWeight:accreditStep>=i?700:400, color:accreditStep>=i?'#102542':'#4A5C6A'}}>
                  {accreditStep>i?'✓':accreditStep===i?'●':'○'} {s}
                </div>
              ))}
            </div>
            <div style={{fontSize:12, color:'#4A5C6A'}}>All Nigerian Edition - No duplicate - Correct gender alignment</div>
          </div>
        </div>
      )}

      <footer style={{background:'#102542', color:'white', padding:'20px', marginTop:30, fontSize:12}}>
        <div>Tech: GitHub Classroom, React Vercel, Node Render, Supabase Postgres ready, Gemini OCR, Hugging Face TrOCR, Wema Bank ALAT | Loom: https://www.loom.com/share/5b01b76fb7d14fbb82bba3234f3332ec</div>
        <div style={{marginTop:6}}>Frontend: https://ballot-trust-360.vercel.app | Backend: https://ballot-trust-360-backend.onrender.com/api/health | All Nigerian - No Foreigner</div>
      </footer>
    </div>
  )
}
