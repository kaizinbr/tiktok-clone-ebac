import './App.css';
import Video from './Pages/Video';

function App() {
    return (
        <div className="App">
            <div className="video-container">
                <Video 
                    likes={123}
                    messages={456}
                    shares={789}
                    name={'fromis_9'}
                    desc={'description bla bla bla'}
                    music={'#Menow - Fromis_9'}
                    url="./video4.mp4"
                />
                <Video 
                    likes={782}
                    messages={333}
                    shares={444}
                    name={'gatito'}
                    desc={'de bla bla blasc'}
                    music={'music name'}
                    url="./video2.mp4"
                />
                <Video 
                    likes={876}
                    messages={543}
                    shares={900}
                    name={'flyanaboss'}
                    desc={'de bla bla blasc'}
                    music={'music name2'}
                    url="./video3.mp4"
                />
                <Video 
                    likes={321}
                    messages={987}
                    shares={100}
                    name={'user3'}
                    desc={'de bla '}
                    music={'music name3'}
                    url="./video2.mp4"
                />
            </div>
        </div>
    );
}

export default App;
