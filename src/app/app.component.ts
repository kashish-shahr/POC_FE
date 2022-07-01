import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { editorData } from './editor';
import { EditorService } from './editor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{ 
constructor(private _editor:EditorService){

}
editorData_:editorData;
  editorForm:FormGroup
editorText=''
  ngOnInit(): void {
    this.editorForm=new FormGroup({
      'editor':new FormControl(null),
    });
    this._editor.getAllEditorData().subscribe((data:editorData[])=>{
      console.log(data);
      this.editorData_=data[0]
    })
    
  }

  changedEditor(event:EditorChangeContent | EditorChangeSelection){
    console.log('Editor Got Changed:',event)
    this.editorText=event['editor']['root']['innerHTML']
    console.log(this.editorText)
  }
  editorModule={
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video']
    ]
  }
}


