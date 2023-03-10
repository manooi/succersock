import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { NewsFeed } from 'src/app/model/news-feed';
import { NewsFeedService } from 'src/app/service/api/news-feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: NewsFeed[] = [];

  constructor(private newsFeedService: NewsFeedService, private spinner: NgxSpinnerService,) {

  }

  ngOnInit(): void {
    this.spinner.show();
    this.newsFeedService.getNewsFeed().subscribe(
      (data) => {
        this.news = data.map((d)=> ({...d, content: d.content.trim()}));
        this.spinner.hide();
      },
      (err) => {
        console.log("err", err);
        this.spinner.hide();
      },
    )
  }

}
