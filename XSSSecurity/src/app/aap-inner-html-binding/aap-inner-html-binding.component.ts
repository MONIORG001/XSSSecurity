import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aap-inner-html-binding',
  templateUrl: './aap-inner-html-binding.component.html',
  styleUrls: ['./aap-inner-html-binding.component.css']
})
export class AapInnerHtmlBindingComponent implements OnInit {
  
htmlSnippet =`Teplate <script>alert("danger")'</script><b>syntax</b>`;
  constructor() { }

  ngOnInit(): void {
  }

}
