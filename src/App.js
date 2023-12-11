// import logo from './logo.svg';
import './front.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       - Solid Groove Records -
    //     </p>
    //   </header>
    // </div>
    <div className="content">
      <header>
        <img src="https://i1.sndcdn.com/avatars-000076582753-fqczb5-t500x500.jpg" id="avatar"></img>
        <h1>SOLID GROOVE RECORDS</h1>
        <ul>
          <li><a class="fa fa-2x fa-facebook" href="https://facebook.com/solidgrooverecords"><span class="description">Facebook</span></a></li>
          <li><a class="fa fa-2x fa-steam" href="https://www.beatport.com/label/solid-groove-records/36628"><span class="description">Beatport</span></a></li>
          <li><a class="fa fa-2x fa-soundcloud" href="https://soundcloud.com/solid-groove-records"><span class="description">Soundcloud</span></a></li>
          <li><a class="fa fa-2x fa-medium" href="https://www.junodownload.com/labels/Solid+Groove+Recordings"><span class="description">Junodownload</span></a></li>
          <li><a class="fa fa-2x fa-weibo" href="https://www.traxsource.com/label/16347/solid-groove-records"><span class="description">Traxxsource</span></a></li>
          <li><a class="fa fa-2x fa-envelope" href="mailto:demo@solidgrooverecords"><span class="description">Email</span></a></li>      
        </ul>
      </header>
    </div>
  );
}

export default App;
