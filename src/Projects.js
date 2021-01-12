import { Component } from 'react' 
import './Projects.css'
import TicTac from './tictac.png'
import GameShare from './GameShare.png'

class Main extends Component {
    render() {
        return(
            <div className="ProjectBox">
                <h1>
                    Recent Projects
                </h1>

                <div className="project-images"> 
                    <div className="image-box">
                        <a href='https://github.com/samus94/TicTacSpecial' target='_blank' >
                            <img src={TicTac} className="project-image" ></img>
                            <p>Tic-Tac SPecial</p>
                        </a>
                    </div>

                    <div className="image-box">   
                        <a href='https://github.com/samus94/Project-Two' target='_blank'>
                            <img src={GameShare} className="project-image" ></img>
                            <p>Gameshare</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main