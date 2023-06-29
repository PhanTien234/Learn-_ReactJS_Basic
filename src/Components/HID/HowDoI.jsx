import React from "react";
import "./HowDoI.css"
import Image from "../../Base/Image";
import QuesAndAns from "./QuesAndAns";
import ViewMore from "../Necessary/ViewMore";
export default class Announcement extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            selectedIndex:-1,
            searchString:"",
            isDisplayAll: false,
            questions:[
                {
                    question:"What is app blocking?",
                    answer:"App blocking refers to the process of restricting or preventing access to certain applications on a device, typically done to manage screen time or increase productivity."
                },
                {
                    question:"Why would someone want to use app blocking",
                    answer:"People may use app blocking to limit distractions, manage time spent on specific apps, maintain focus during work or study, or promote a healthier balance between digital usage and offline activities."
                },
                {
                    question:"How can app blocking be implemented?",
                    answer:"App blocking can be implemented through various methods, such as using built-in device settings, parental control apps, or third-party software that allows users to set restrictions on app usage."
                },
                {
                    question:"Can app blocking be customized for different users?",
                    answer:"Yes, app blocking can usually be customized to meet individual needs. It often allows users to select specific apps to block or set time limits for app usage, ensuring flexibility and personalization."
                },
                {
                    question:"Is it possible to schedule app blocking?",
                    answer:"Yes, many app blocking tools or features allow users to schedule specific time periods when certain apps should be blocked automatically. This can be useful for creating consistent routines or enforcing device-free times."
                },
                {
                    question:"Can app blocking be bypassed or overridden?",
                    answer:"While app blocking can be effective, determined users may find ways to bypass or override the restrictions. However, sophisticated app blocking solutions aim to make it difficult for users to circumvent the blocks, providing robust protection."
                },
                {
                    question:"Are there any risks or considerations when using app blocking?",
                    answer:"It's important to consider the potential impact on user privacy, especially if app blocking requires granting permissions to monitor or control app usage. Additionally, app blocking should be used responsibly, taking into account individual needs and preferences to maintain a healthy digital lifestyle."
                },
                
            ]
        
        }
        // this.state = {
        //     quickLinks: Data.quicklinks
        // }
    }
    QuestionClickHandler(num){
        this.setState((state)=>{
            return {selectedIndex:state.selectedIndex===num?-1:num}
        })
    }

    SearchChangeHandler(event){
        this.setState({searchString:event.target.value})
    }

    ViewMoreClickHandler(){
        this.setState((prevState)=>({
            isDisplayAll:!prevState.isDisplayAll
        }))
    }
    
    render() {
        return (
            <div className="FAQ-container">
                <h2 className="title">How Do I</h2>
                <div className="search-box">
                    <img src={Image.search} alt="" />
                    <input type="text" value={this.state.searchString} onChange={(e)=>this.SearchChangeHandler(e)} placeholder="Find Questions"/>
                </div>
                <div className = "questions">
                    {
                        this.state.questions.slice(0,this.state.isDisplayAll||this.state.searchString!=""?this.state.questions.length:4).map((question,index)=>{
                        if(this.state.searchString!=""){
                            return (                               
                                    question.question.includes(this.state.searchString)&&
                                        <div onClick={()=>this.QuestionClickHandler(index)}>
                                            <QuesAndAns question={question.question} answer={question.answer} selectedIndex= {this.state.selectedIndex} index={index}/>
                                        </div>
                                )
                            
                        }
                        return <div onClick={()=>this.QuestionClickHandler(index)}>
                            <QuesAndAns question={question.question} answer={question.answer} selectedIndex= {this.state.selectedIndex} index={index}></QuesAndAns>
                        </div>
                    })}
                    
                </div>
                {
                    this.state.questions.length>4&&
                    <div onClick={()=>{this.ViewMoreClickHandler()}}>
                        <ViewMore isDisplayAll={this.state.isDisplayAll}/>
                    </div>
                }
                
            </div>                          
        )
    }
}
