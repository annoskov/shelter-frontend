import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LinksService } from '../links.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface Link {
  path: string;
  id: number;
  isDeleted?: boolean;
}

@Component({
  selector: 'app-link-listing',
  templateUrl: './link-listing.component.html',
  styleUrls: ['./link-listing.component.scss']
})
export class LinkListingComponent implements OnInit {

  linkForm: FormGroup;
  linkList: Link[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder,
    private linksService: LinksService) { }

  ngOnInit() {
    this.createForm();
    this.getLinks();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  createForm() {
    this.linkForm = this.fb.group({
      link: [null, Validators.required]
    });
  }

  getLinks() {
    // this.linksService.getLinkList()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((a: any) => {
    //     console.log(a)
    //   });
  }

  addLink() {
    const newLinKPath: string = this.linkForm.controls['link'].value;
    if (newLinKPath) {
      const newLinK: Link = {
        path: newLinKPath,
        id: this.linkList.length + 1,
        isDeleted: false
      }
      this.linkList.push(newLinK);
      this.linkForm.reset();
    }
  }

  deleteLink(id: number) {
    this.linkList.forEach((link: Link) => {
      if (link.id === id) {
        link.isDeleted = true;
      }
    })
  }

}
