import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { NewsFeed } from 'src/app/model/news-feed';
import { NewsFeedService } from 'src/app/service/api/news-feed.service';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: NewsFeed[] = [];
  limit: number = 10;

  constructor(
    private newsFeedService: NewsFeedService,
    private spinner: NgxSpinnerService,
    private scrollSeRvice: ScrollService
  ) {

  }

  ngOnInit(): void {
    this.fetch(this.limit);

    this.scrollSeRvice.onScrolled$.subscribe(
      (data) => {
        console.log("scrolled wa!");
        this.limit += 10;
        this.fetch(this.limit);
      }
    )
  }

  fetch(limit: number) {
    this.spinner.show();
    this.newsFeedService.getNewsFeed(limit).subscribe(
      (data) => {
        this.news = data.map((d) => ({ ...d, content: d.content.trim() }));
        this.spinner.hide();
      },
      (err) => {
        console.log("err", err);
        this.spinner.hide();
      },
    )
  }

}
