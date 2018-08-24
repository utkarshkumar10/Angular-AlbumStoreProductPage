import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _httpClient: HttpClient) { }

  getAlbum(id: number) {
    return this._httpClient.get(this._albumUrl);
  }

}
