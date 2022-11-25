import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  info ={
    name: "Ousmane BANDIA",
    mail: "bs@uadb.edu.sn",
    code: 1309276,
    tel: 776675871
  }
  classe = [
    {message:"Licence 1"},
    {message:"Licence 2"},
    {message:"Licence 3"}
  ];
  niveau = {message:""};
  constructor() { }

  ngOnInit(): void {
  }

  onAddNiveau(){
    this.classe.push(this.niveau);
    this.niveau={message: ""};
  }

}
