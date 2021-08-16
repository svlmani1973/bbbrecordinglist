function sortTable(x) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("listoftable");
    sortid=x;
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[sortid];
        y = rows[i + 1].getElementsByTagName("TD")[sortid];
            //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  function copyFunction(recordinglink) {
    var copyText = recordinglink;
  
    /* Select the text field */
        
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText);
  }
  function display(xHR)
  {
      var myarray=new Array(3);
      recordid=xHR.getElementsByTagName('recordID');
      noofRecordings = xHR.getElementsByTagName('recording');
      recordingLink = xHR.getElementsByTagName('url');
      meetingName=xHR.getElementsByTagName('name');
      recordingDate=xHR.getElementsByTagName('startTime');
      endDate=xHR.getElementsByTagName('endTime');
      recordingsize=xHR.getElementsByTagName('length');
      participants=xHR.getElementsByTagName('participants');

     

      for (i=0;i<noofRecordings.length;i++)
      {
     var myDate = new Date(parseInt((recordingDate[i].childNodes[0].nodeValue)));
     var loc='.text'
     var recordingdata="<tr>"+
          "<td>"+myDate.toLocaleDateString()+"</td>"+
          "<td>"+"<a href = "+(recordingLink[i].childNodes[0].nodeValue)+" target="+" \"_blank\""+"rel=next"+">"
              +(meetingName[i].childNodes[0].nodeValue)+"</a>"+"</td>"+
          "<td>"+(recordingsize[i].childNodes[0].nodeValue)+"</td>"+
          "<td>"+(participants[i].childNodes[0].nodeValue)+"</td>"+
          "<td><button onclick= >Copy</button></td>"+
          "<td >"+"<a href = "+vcurl+deleteurl+(recordid[i].childNodes[0].nodeValue)+"&checksum="+hex_sha1("deleteRecordingsrecordID="+recordid[i].childNodes[0].nodeValue+vcsalt)+" target="+" \"_blank\""+"rel=next"+">"
          +"Delete"+"</a>"+"</td>"+
          "</tr>";
   $('#listoftable').append(recordingdata);
  
        }
  }