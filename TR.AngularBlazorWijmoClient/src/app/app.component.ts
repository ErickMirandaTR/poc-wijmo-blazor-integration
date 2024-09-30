import { Component, OnDestroy, OnInit } from '@angular/core';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as wjcCore from '@grapecity/wijmo';
declare global {
  interface Window {
    wjcGrid: any;
    wjcCore: any;
  }
}

const WIJMO_LICENSE_KEY = 'Thomson Reuters*,169966291453339#B07eYICRiwiI34zZ784MadjVZVlbzcHM8ZTYV96ZZR5ZuFXN5ZFdC56RzEmRwR7VldnaXdmS84UM6h5YM5GSwRzaYljTjdXe4QHULh4U42idrNTT4QzbQNmWJNXRix4USNGWx2CbYpVb8InU4cUWnlDcHxkYDNleJB7RQ9UWxNENSdWcKF6YZlzKrJWVPRjW7NlMZBVRalVcJNlR5wkd0V6UrJFead4V5gVSwNEUxg4NDlFcNtyczwEc8pmZVVlYnVUVtZDZoJWM4V4R0RlVSpnNORXd8FHRvUVNKF7b8N4TnhjdrUjMGJHdFlGcIRTa7NjdyZ6TthGRGx4NntGWkNkarclUul6U7x6bhJHNTt6doZ5ZMV7Y6cnZ4V4QyZ4QYV7cEJVS7RUZyRnZGx6YF3kTO34UGRGMSVla8U5SzhWW9gmbo3iT9MEVLlWbjp6Z9JEUIpnMZN5b7V4cupUczpmI0IyUiwiI7IUQGVDRBdjI0ICSiwyM5gTNzUjN9gTM0IicfJye#4Xfd5nIJBjMSJiOiMkIsIibvl6cuVGd8VEIgQXZlh6U8VGbGBybtpWaXJiOi8kI1xSfiUTSOFlI0IyQiwiIu3Waz9WZ4hXRgAicldXZpZFdy3GclJFIv5mapdlI0IiTisHL3JyS7gDSiojIDJCLi86bpNnblRHeFBCI73mUpRHb55EIv5mapdlI0IiTisHL3JCNGZDRiojIDJCLi86bpNnblRHeFBCIQFETPBCIv5mapdlI0IiTisHL3JyMDBjQiojIDJCLiUmcvNEIv5mapdlI0IiTisHL3JSV8cTQiojIDJCLi86bpNnblRHeFBCI4JXYoNEbhl6YuFmbpZEIv5mapdlI0IiTis7W0ICZyBlIsIyM5EzM8ADIyAjMxIjMwIjI0ICdyNkIsIiKzJXZ4VXZSBibvNXbvhGViojIh94QiwiI9MzMzUDNxkjM6YTO9YTMiojIklkIs4XXbpjInxmZiwiIyYnMyAjMiojIyVmdiwSZzxWYmpjIyNHZisnOiwbbMJ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showMarquee = false;
  ngOnInit(): void {
    wjcCore.setLicenseKey(WIJMO_LICENSE_KEY);
    window.wjcGrid = wjcGrid;
    window.wjcCore = wjcCore;
  }

  ngOnDestroy(): void {
    window.wjcGrid = null;
    window.wjcCore = null;
  }
  
  title = 'angular-blazor-wijmo-client';
}
