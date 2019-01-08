import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule } from '@angular/material';
import { MeetingViewComponent } from '../meeting-view/meeting-view.component';


var q = new Date()+"UTC";
// var m = q.getMonth()+1;
// var d = q.getDay();
// var y = q.getFullYear();

var date = new Date();
console.log(q)
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  
//   host:string;
// title:string;
// date=new Date();
  MeeetingList = [
    { 
      'host': 'Kunal',
      'title': 'ABC Sprint1 Demo',
      'date': '12/12/2018'
    },
    {
      'host': 'Kalpesh',
      'title': 'ABC Sprint2 Demo',
      'date': '12/22/2018' 
  },
  {
    'host': 'Rahul',
    'title': 'ABC Sprint3 Demo',
     'date': '12/28/2018'
  },
  {
    'host': 'Kunal',
    'title': 'ABC Sprint1 Demo1',
    'date': '12/31/2018'
  },
  { 
    'host': 'Soni',
    'title': 'ABC Sprint1 Demo2',
    'date': '1/12/2019' 
  },
  {
    'host': 'Kalpesh',
    'title': 'ABC Sprint2 Scrum',
    'date': '1/22/2019' 
},
{
  'host': 'Kunal',
  'title': 'ABC Sprint2 Demo1',
  'date': '2/1/2019'
},
{
  'host': 'Soni',
  'title': 'ABC Sprint2 Demo2',
  'date': '2/12/2019'
},
{
  'host': 'Kunal',
  'title': 'ABC Sprint2 Demo1',
  'date': '2/22/2019' 
},
{
  'host': 'Soni',
  'title': 'ABC Sprint2 Demo2',
  'date': '2/31/2019' 
},
]
  displayedColumns: string[] = ['host', 'title', 'date','edit','delete'];
  dataSource=[];

  upcoming = [];

  completed = [];

  
  Currentdate = new Date()+"UTC";
  meetingDate = new Date();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(date);
     
    this.dataSource=this.MeeetingList;
    

  }

  tabChange(event) {
    console.log(event.index)


    for(var i=0;i<this.MeeetingList.length;i++){
      
      // this.meetingDate = new Date(this.MeeetingList[i].date);
    //  console.log(this.meetingDate)
    if(new Date(this.MeeetingList[i].date)> new Date() ){
          // console.log(new Date(this.MeeetingList[i].date))

           this.upcoming.push(this.MeeetingList[i]);
           console.log(this.upcoming)
            this.dataSource=this.upcoming;
            console.log(this.dataSource)
    }
    else if(new Date(this.MeeetingList[i].date) < new Date() )
    {
         // console.log(this.meetingDate)
          this.completed.push(this.MeeetingList[i]);
          console.log(this.completed)
         this.dataSource=this.completed;
         console.log(this.dataSource)
    }
    else{
      this.dataSource=this.MeeetingList;
    }
  }

  }
 
  createMeeting():void {
    const dialogRef = this.dialog.open(MeetingViewComponent, {
      width: '600px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       
    });
  }


  
  
}
