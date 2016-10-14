import React from "react";
import Navbar from "./component/Navbar";

function QuestionLoader(element, key) {
    this.load = function () {
        var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/" + key + "/gviz/tq?headers=1");
        query.send(function (response) {
            var driveData = response.getDataTable();
            var driveQuestions = [];
            for (var i = 0; i < driveData.getNumberOfRows(); i++) {
                driveQuestions.push({id: i + 1, label: driveData.getValue(i, 0)});
            }
            element.setState({
                questions: driveQuestions
            });
        });
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="question-list">
                    TODO
                </div>
            </div>
        )
    }
}

export default App;