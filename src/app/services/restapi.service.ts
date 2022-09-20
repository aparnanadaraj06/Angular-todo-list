import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable() 
export class restapiService{
    url ='https://demo.minder.care/interview/task';

    // create an instance of http client
    constructor(private HttpClient: HttpClient){}


    getTasks():Observable<any>{
            console.log('yes data called')
            return this.HttpClient.get(this.url)
    }


}