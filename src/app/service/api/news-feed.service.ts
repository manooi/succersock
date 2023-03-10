import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsFeed } from 'src/app/model/news-feed';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http: HttpClient) { }

  getNewsFeed(): Observable<NewsFeed[]> {
    return this.http.get<NewsFeed[]>(environment.API_URL.NEWS_FEED);
  }
}
