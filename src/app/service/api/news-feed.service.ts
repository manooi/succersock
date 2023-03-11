import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { NewsFeed } from 'src/app/model/news-feed';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http: HttpClient) { }

  getNewsFeed(limit:number = 10): Observable<NewsFeed[]> {
    const params = new HttpParams().set("limit", limit);
    return this.http.get<NewsFeed[]>(environment.API_URL.NEWS_FEED, {params : params});
  }
}
