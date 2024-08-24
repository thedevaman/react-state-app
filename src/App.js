import {useState} from 'react'
const App = ()=>{
 const [showImage, setShowImage]= useState(true)
 const [bgDiv,setBgDiv]=useState('green')
 const [input ,setInput] =useState('')
 const [fontSize, setFontSize] = useState(10)
 const [color, setColor] = useState('green')
  return(
    <div style={{
      minHeight: '100vh',
      background: '#ddd'
    }}>
      <div style={{
        background: 'white',
        padding: '48px',
        width: '50%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}> 
        <h1 style={{
          padding: 0,
          marginBottom: 4
        }}>The DevAman</h1>
        <p style={{padding:0, margin: 0, color:'gray'}}>State Management React Application</p>

        </div>
        <div>
        <h1>Show and Hide App</h1>
        {showImage && <img src ='./images/nature.jpg' width='100%' alt='nature'/>}
        <button onClick={()=>setShowImage(!showImage)}
          style={{
            background:'skyblue',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 4,
            border: 'none',
            marginTop: 8
          }}
          >
          {showImage?'Hide':'Show'}
        </button>
        </div>

        <div>
        <h1>Background Toggle Div</h1>
        <div style={{
          width: 300,
          height: 300,
          background: bgDiv,
          borderRadius: 16
        }}></div>
        <button onClick={()=>setBgDiv(bgDiv==='red'?'green':'red')}
          style={{
            background:'#673ab7',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 4,
            border: 'none',
            marginTop: 8
          }}
          >
          {bgDiv==='red'?'Turn To Green':'Turn to Red'}
        </button>
        </div>

        <div>
        <h1>Live Input Preview</h1>
        <input placeholder='Type Your Text Here' style={{
          border: '1px solid #ccc',
          padding : 8,
          width : 300
        }}
        onChange={(e)=>setInput(e.target.value)}
        />
        <h1>{input}</h1>
        
        </div>

        <div>
          <h2>Font Increaser</h2>
          <p style={{
            fontSize: fontSize
          }}>The DevAman <br /></p>
          <p>Font Size = {fontSize}</p>
          <input type="range" min="5" max="100" step='1' onChange={(e)=>setFontSize(Number(e.target.value))}></input>
        </div>

        <div>
          <h1>Color Value Sample</h1>
          <input placeholder='Enter Color Name' 
          value={color} 
          onChange={(e)=>setColor(e.target.value)} />
          <div style={{
            width:150,
            height:150,
            background: color,
            marginTop: 16
          }}/>
        </div>

      </div>

    </div>
  )
}

export default App