import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studentcrud',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './studentcrud.component.html',
  styleUrl: './studentcrud.component.scss'
})
export class StudentcrudComponent {
  studentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  student_name: string = "";
  course_name: string = "";
  fee: string = "";
  currentStudentID = "";
  constructor(private http: HttpClient ) 
  {
    this.getAllStudent();
  }
  ngOnInit(): void {
  }
  getAllStudent()
  { 
    this.http.get("http://localhost:9002/api/student/")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.studentArray = resultData.data;
    });
  }
  
  register()
  {
   // this.isLogin = false; 
   // alert("hi");
    let bodyData = {
      "stname" : this.student_name,
      "course" : this.course_name,
      "fee" : this.fee,
    };
    this.http.post("http://localhost:9002/api/student/add",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        this.getAllStudent();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
    });
  }
  setUpdate(data: any) 
  {
   this.student_name = data.stname;
   this.course_name = data.course;
   this.fee = data.fee;
  
   this.currentStudentID = data.id;
 
  }
  UpdateRecords()
  {
    let bodyData = 
    {
      "stname" : this.student_name,
      "course" : this.course_name,
      "fee" : this.fee
    };
    
    this.http.put("http://localhost:9002/api/student/update"+ "/"+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updated")
        this.getAllStudent();
      
    });
  }
 
  save()
  {
    if(this.currentStudentID == '')
    {
      this.register();
    }
    else
    {
      this.UpdateRecords();
    } 
  }
  setDelete(data: any)
  {
    this.http.delete("http://localhost:9002/api/student/delete"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deleted")
        this.getAllStudent();
    });
  }
}
