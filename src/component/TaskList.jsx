import React from 'react';
import '../style/style.css';
import { Table } from 'react-bootstrap';
var dateFormat = require('dateformat');

class TaskList extends React.Component {

    constructor() {
        super();
        this.state = {
            currentQuestion: '',
            questionsList: [],
            showButton: true
        }
    }

    componentWillMount() {
        var check = JSON.parse(sessionStorage.getItem('questions'));
        this.setState({
            questionsList: check
        })
    }

    handleChange(e) {
        this.setState({
            currentQuestion: e.target.value
        })
    }

    addToArray(e) {
        if (e.keyCode == 13) {
            if (this.state.currentQuestion == '') {
                return;
            }
            var check = JSON.parse(sessionStorage.getItem('questions'));
            this.setState({
                questionsList: check
            }, () => {
                var temp = this.state.questionsList;

                if (temp == null) {
                    temp = [];
                }
                temp.push({ question: this.state.currentQuestion, createdDate: dateFormat(new Date(), "dd/mm/yyyy hh:MM:ss TT") });
                this.setState({
                    questionsList: temp
                }, () => {
                    sessionStorage.setItem('questions', JSON.stringify(this.state.questionsList))
                    this.setState({
                        currentQuestion: ''
                    })
                })
            })
        }
    }

    handleDeleteTask(e, index) {
        var temp = this.state.questionsList;
        temp.splice(index, 1);
        this.setState({
            questionsList: temp
        }, () => {
            sessionStorage.setItem('questions', JSON.stringify(this.state.questionsList));
        })
    }

    handleMarkAsDoneClick(e, index) {
        var temp = this.state.questionsList;
        temp[index].marked = true;
        this.setState({
            questionsList: temp
        }, () => {
            sessionStorage.setItem('questions', JSON.stringify(this.state.questionsList))
        })
    }

    addShowProperty(e, index) {
        var temp = this.state.questionsList;
        temp[index].showButton = true;
        this.setState({
            questionsList: temp
        })
    }

    removeShowProperty(e, index) {
        var temp = this.state.questionsList;
        delete temp[index].showButton
        this.setState({
            questionsList: temp
        })
    }

    render() {
        return (
            <div className='container'>

                <div>
                    <h1 className='heading'>My Tasks</h1>
                    {!this.state.questionsList &&
                        <p className='noTaskTag'>You do not have any tasks. Create your first task now!</p>
                    }
                </div>

                {this.state.questionsList &&
                    <div className='tableDiv'>
                        <Table>
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Description</th>
                                    <th >Timestamp</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.questionsList && this.state.questionsList.map((item, index) => (
                                    <tr key={index} onMouseEnter={(e) => this.addShowProperty(e, index)} onMouseLeave={(e) => this.removeShowProperty(e, index)}>
                                        <td className={item.marked ? 'linethroughclass' : 'srNo'}>{index + 1}</td>
                                        <td className={item.marked ? 'linethroughclass' : 'questionClass'}>{item.question}</td>
                                        <td className={item.marked ? 'linethroughclass' : 'dateClass'}>{item.createdDate}</td>

                                        <td className='buttonClass'>
                                            {(!item.marked) && (item.showButton) &&
                                                <button className='buttonStyle btnPrimary' onClick={(e) => this.handleMarkAsDoneClick(e, index)}>Mark as Done</button>
                                            }
                                            {item.showButton &&
                                                <button className='buttonStyle btnDelete' onClick={(e) => this.handleDeleteTask(e, index)}>Delete</button>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                }

                <div className='taskInputDiv'>
                    <input placeholder='Your new task (hit ENTER to save)' onKeyDown={(e) => this.addToArray(e)} onChange={(e) => this.handleChange(e)} className='taskInputBox' type='text' value={this.state.currentQuestion} name='question' />
                </div>

                <div className='notesDiv'>
                    <p className='notesHeading'>
                        <strong>Notes:</strong>
                    </p>
                    <ul>
                        <li>This is a single page app: All the interactions happen locally</li>
                        <li>Tasks are stored only in this browser session. You will lose the tasks if you refresh this window</li>
                        <li>Tasks will remain safe if you navigate to "About Vue.js" page and come back here</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TaskList;