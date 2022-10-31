import './App.css';
import profilePic from './asset/profile__img.png';
import icon from './asset/Icon.png';
import mobilemenu from './asset/sharebutton.png'
import slack from './asset/slack.png'
import github from  './asset/github.png'
import zurilogo from './asset/zurilogo.png'
import logo2 from './asset/I4G.png'

function App() {
  return (
    <div id='main'>
      <div><img src={mobilemenu} alt='' id='mobicon' /></div>
      <div ><img src={icon} alt='' id='menu'  /></div>
      <div id=''><img src={profilePic} alt='' id='profile' /></div>
      <p id='twitter' class='username'>@brown_itoro</p>
      <p id='slackid'>aitee</p>
      <div>
        <a href='https:twitter.com/brown_itoro'><button className='decobutton'>Twitter</button></a>
        <a href='https://training.zuri.team/'><button id='btn__zuri' class='decobutton'>Zuri Team</button></a>
        <a href='https://books.zuri.team'><button id='books' class='decobutton'>Zuri Books</button></a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=<aitee>'><button id='book__python' class='decobutton'>Python Books</button></a>
        <a href='https://background.zuri.team'><button id='pitch' class='decobutton'>Background check for coders</button></a>
        <a href='https://books.zuri.team/design-rules'><button id='book__design' class='decobutton'>Design Books</button></a>
      </div>
      <div>
      
        <img src={slack} alt='' id='slack'/>
        <img src={github} href='https://github.com/Itoro-Brown' alt='' id='github'/>
      </div>
      <div className='line'/>
      <div id='footer'>
        <img src={zurilogo} alt='' />
        <p id='footertext'>HNG Internship 9 Frontend Task</p>
        <img src={logo2} alt='' />
      </div>
    </div>
  );
}

export default App;
