import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UrlsProviderService {
  getJsonDbUrl(): string {
    return 'http://localhost:3000';
  }

  getBeUrl(): string {
    return 'http://localhost:8000/api';
  }
}
