(() => {

    var div = document.createElement("div");
    div.id='container'
    document.body.appendChild(div);

    var heading = document.createElement('h1')
    heading.id = 'heading'
    heading.innerHTML="First Assignment"
    div.appendChild(heading);
    
    var line = document.createElement('hr')
    line.id = 'line-break'
    div.appendChild(line);
    
    var t = document.createElement("table");
    t.id = 'table'

    var table_head = document.createElement("thead")
    var table_body = document.createElement("tbody")
    
    const arr = ["Name", "Age", "DOB", "Email", "Company"];

    const test_node_1={"Name":"Tanish Goel", "Age":"20", "DOB":"11 August 2001", "Email":"xyz@gmail.com", "Company":"Gemini Solutions Pvt. Ltd."}
    const test_node_2={"Name":"Tanish Goel", "Age":"20", "DOB":"11 August 2001", "Email":"xyzfdsfsg@gmail.com", "Company":"Gemini Solutions "}
    const test_node_3={"Name":"Tanish Goel", "Age":"20", "DOB":"11 August 2001", "Email":"xyssz@gmail.com", "Company":"Google"}
    const test_node_4={"Name":"Tanish Goel", "Age":"20", "DOB":"11 August 2001", "Email":"xyzgfdgd@gmail.com", "Company":"Amazon"}
    const test_node_5={"Name":"Tanish Goel", "Age":"20", "DOB":"11 August 2001", "Email":"xyfhgfxhz@gmail.com", "Company":"Accenture"}

    const test_node = [test_node_1,test_node_2,test_node_3,test_node_4,test_node_5];

    for (var i = 0; i < 5; i++) {

        var head = document.createElement("th");
        var head_text= document.createTextNode(arr[i]);
        head.appendChild(head_text)
        table_head.appendChild(head);

        var row = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            var cell = document.createElement('td');
            var celltext= document.createTextNode(test_node[i][arr[j]]);
            cell.appendChild(celltext)
            row.appendChild(cell);
        }
        table_body.appendChild(row);
    }
    t.appendChild(table_head);
    t.appendChild(table_body);

    t.setAttribute("border","1");
    t.setAttribute("cellpadding","10")
    t.setAttribute("cellspacing","0")

    div.appendChild(t);


  })()